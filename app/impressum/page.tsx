import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Landingpage no proof, no business.",
};

export default function ImpressumPage() {
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
          <h1>Impressum</h1>

          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            Dr. Lachhein Dr. Lierow GmbH
            <br />
            Jägerstraße 48
            <br />
            10117 Berlin
          </p>

          <h3>Vertreten durch</h3>
          <p>Geschäftsführer: Dr. Sven Lachhein</p>

          <h3>Kontakt</h3>
          <p>
            Telefon: +49 163 364 9003
            <br />
            WhatsApp: +49 163 364 9003
            <br />
            E-Mail: kontakt@lachhein-lierow.de
          </p>

          <h3>Registereintrag</h3>
          <p>
            Handelsregister: HRB 284000 B
            <br />
            Registergericht: Amtsgericht Charlottenburg
          </p>

          <h3>Steuernummer</h3>
          <p>162/107/08131</p>

          <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
          <p>
            Dr. Sven Lachhein
            <br />
            Jägerstraße 48
            <br />
            10117 Berlin
          </p>

          <h3>Haftungsausschluss</h3>
          <p>
            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
          </p>

          <h3>Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>
    </>
  );
}
