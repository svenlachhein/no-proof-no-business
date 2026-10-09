<?php
// Newsletter-Eintrag: speichert die E-Mail-Adresse in _data/newsletter.csv (Server, nicht im Repo).

function out($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(['error' => 'Methode nicht erlaubt.'], 405);

// Nur Aufrufe von der eigenen Seite zulassen
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $host = parse_url($origin, PHP_URL_HOST);
    if ($host !== ($_SERVER['HTTP_HOST'] ?? '')) out(['error' => 'Nicht erlaubt.'], 403);
}

$body = json_decode(file_get_contents('php://input'), true);
$email = is_array($body) ? strtolower(trim((string) ($body['email'] ?? ''))) : '';
if ($email === '') out(['error' => 'E-Mail fehlt.'], 400);
if (strlen($email) > 200 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    out(['error' => 'Die E-Mail-Adresse sieht nicht richtig aus.'], 400);
}

$dir = __DIR__ . '/_data';
if (!is_dir($dir)) mkdir($dir, 0750, true);
if (!is_file($dir . '/.htaccess')) file_put_contents($dir . '/.htaccess', "Require all denied\n");

// Begrenzung: 5 Eintraege pro IP und Stunde
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$rateFile = $dir . '/rate.json';
$rh = fopen($rateFile, 'c+');
if ($rh) {
    flock($rh, LOCK_EX);
    $rate = json_decode(stream_get_contents($rh), true);
    if (!is_array($rate)) $rate = [];
    $now = time();
    foreach ($rate as $k => $times) {
        $rate[$k] = array_values(array_filter($times, function ($t) use ($now) { return $t > $now - 3600; }));
        if (!$rate[$k]) unset($rate[$k]);
    }
    $key = hash('sha256', $ip);
    if (count($rate[$key] ?? []) >= 5) {
        flock($rh, LOCK_UN);
        fclose($rh);
        out(['error' => 'Zu viele Versuche. Bitte später noch einmal.'], 429);
    }
    $rate[$key][] = $now;
    ftruncate($rh, 0);
    rewind($rh);
    fwrite($rh, json_encode($rate));
    flock($rh, LOCK_UN);
    fclose($rh);
}

$csv = $dir . '/newsletter.csv';
if (is_file($csv) && filesize($csv) > 5 * 1024 * 1024) out(['error' => 'Etwas ging schief.'], 500);

$fh = fopen($csv, 'a+');
if (!$fh) {
    error_log('newsletter_store_error');
    out(['error' => 'Etwas ging schief.'], 500);
}
flock($fh, LOCK_EX);
rewind($fh);
$exists = false;
while (($row = fgetcsv($fh, 0, ",", "\"", "")) !== false) {
    if (isset($row[1]) && $row[1] === $email) { $exists = true; break; }
}
if (!$exists) {
    fseek($fh, 0, SEEK_END);
    fputcsv($fh, [date("c"), ltrim($email, "=+-@" . chr(9) . chr(13))], ",", "\"", "");
}
flock($fh, LOCK_UN);
fclose($fh);

out(['ok' => true]);
