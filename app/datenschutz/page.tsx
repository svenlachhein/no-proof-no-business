import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – no proof, no business",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-name">no proof, no business</span>
          <span className="nav-logo-role">Business Playbooks · Band I</span>
        </Link>
      </nav>

      <section className="section">
        <div className="section-inner legal-inner">
          <span className="section-label">Rechtliches</span>
          <h1>Datenschutz</h1>

          <h3>Verantwortlicher</h3>
          <p>
            Dr. Sven Lachhein
            <br />
            Jägerstraße 48, 10117 Berlin
            <br />
            E-Mail:{" "}
            <a href="mailto:lachhein@drlc.de">lachhein@drlc.de</a>
          </p>

          <h3>Hosting</h3>
          <p>
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, USA gehostet. Beim Aufruf der Seite verarbeitet der
            Hoster technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit
            sowie aufgerufene URL in Server-Logs. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. f DSGVO (berechtigtes Interesse am stabilen Betrieb der
            Seite).
          </p>

          <h3>Newsletter</h3>
          <p>
            Wenn du dich für den Newsletter einträgst, wird deine E-Mail-Adresse
            an Resend (Resend, Inc., 2261 Market Street #5039, San Francisco,
            CA 94114, USA) übertragen und dort gespeichert. Rechtsgrundlage ist
            deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Du kannst dich
            jederzeit über den Abmelde-Link in jeder E-Mail austragen.
          </p>

          <h3>Cookies</h3>
          <p>
            Diese Website setzt keine Cookies und nutzt kein Tracking.
          </p>

          <h3>Deine Rechte</h3>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und
            Widerspruch. Wende dich dafür an die oben genannte E-Mail-Adresse.
            Außerdem kannst du dich bei der zuständigen Aufsichtsbehörde
            beschweren.
          </p>

          <h3>Stand</h3>
          <p>Mai 2026.</p>
        </div>
      </section>
    </>
  );
}
