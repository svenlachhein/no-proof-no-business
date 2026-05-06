import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – no proof, no business",
  robots: { index: false, follow: false },
};

export default function Impressum() {
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

          <h3>Verlagslabel</h3>
          <p>
            Business Playbooks
            <br />
            c/o Dr. Lachhein
            <br />
            Jägerstraße 48
            <br />
            10117 Berlin
            <br />
            Deutschland
          </p>

          <h3>Kontakt</h3>
          <p>
            E-Mail:{" "}
            <a href="mailto:lachhein@drlc.de">lachhein@drlc.de</a>
          </p>

          <h3>Druck und Distribution</h3>
          <p>
            tredition GmbH
            <br />
            Heinz-Beusen-Stieg 5
            <br />
            22926 Ahrensburg
            <br />
            Deutschland
          </p>

          <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
          <p>
            Dr. Sven Lachhein
            <br />
            Jägerstraße 48
            <br />
            10117 Berlin
          </p>

          <h3>Kontaktadresse nach EU-Produktsicherheitsverordnung</h3>
          <p>
            <a href="mailto:lachhein@drlc.de">lachhein@drlc.de</a>
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Das Werk, einschließlich seiner Teile, ist urheberrechtlich
            geschützt. Für die Inhalte ist der Verlag verantwortlich. Jede
            Verwertung ist ohne dessen Zustimmung unzulässig.
          </p>
        </div>
      </section>
    </>
  );
}
