import Link from "next/link";
import type { Metadata } from "next";
import ArbeitsblaetterForm from "@/components/ArbeitsblaetterForm";

export const metadata: Metadata = {
  title: "Arbeitsblätter – no proof, no business",
  description:
    "Die 13 Arbeitsblätter zum Buch. Per E-Mail anfordern.",
  robots: { index: true, follow: true },
};

export default function Arbeitsblaetter() {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-name">no proof, no business</span>
          <span className="nav-logo-role">Business Playbooks · Band I</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Zurück zur Übersicht</Link>
          </li>
        </ul>
      </nav>

      <section className="section">
        <div className="section-inner ab-inner">
          <span className="section-label">Arbeitsblätter zum Buch</span>
          <h1>Die 13 Arbeitsblätter zum Buch.</h1>

          <p>
            Eine PDF mit den 13 Arbeitsblättern aus No Proof, No Business. Trag
            deine E-Mail ein, bestätige den Link, dann ist sie unterwegs.
          </p>

          <p className="ab-hint">
            Die Blätter ergeben Sinn, wenn du das Buch gelesen hast. Die volle
            Methodik steht dort, nicht auf dem Blatt.
          </p>

          <ArbeitsblaetterForm />
        </div>
      </section>
    </>
  );
}
