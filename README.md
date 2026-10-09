# no-proof-no-business.de

Landingpage für das Buch "no proof, no business" von Sven Lachhein.
Business Playbooks · Band I.

## Stack

- Next.js (App Router), statischer Export (`output: 'export'`)
- React, TypeScript
- PHP für das Newsletter-Formular (`public/api/subscribe.php`)
- Hosting: one.com, Deploy per GitHub Action (SFTP)

## Lokal entwickeln

```bash
npm install
npm run dev     # Formular-API gibt es lokal nicht, sie läuft nur auf one.com
npm run build   # erzeugt out/
```

## Deploy

Jeder Push auf `main` baut die Seite und lädt `out/` per SFTP nach one.com.
Secrets (GitHub > Settings > Secrets and variables > Actions):
`FTP_SERVER` (ssh.<kennung>.service.one), `FTP_USERNAME`, `FTP_PASSWORD`,
`FTP_SERVER_DIR` (Webroot der Domain, z. B. `/webroots/1a2b3c4d`).

Den Webroot zeigt der Workflow-Lauf "nur auflisten" (Actions > Run workflow).

## Server-Dateien

- Newsletter-Adressen: `api/_data/newsletter.csv` auf dem Server (nicht im Repo, per .htaccess gesperrt)
- Arbeitsblätter-Formular: sendet an `https://www.lachhein-lierow.de/api/pdf-request`

## Inhalt

Inhalte stehen in den Komponenten unter `components/`. Änderungen direkt im Code, dann commit + push.

## Bilder

- `public/cover.jpg` — Buchcover
- `public/author.jpg` — Autorenfoto
