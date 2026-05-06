import Image from "next/image";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="section-inner hero-inner">
        <div className="hero-text">
          <span className="section-label">Business Playbooks · Band I</span>
          <h1>
            Wie in 30 Tagen dein Business läuft und wann du lieber Angestellter
            wirst
          </h1>
          <p>
            Für Gründer mit einer Idee und ohne ersten Auftrag. Und für
            Unternehmer, deren Geschäft läuft, aber an ihnen hängt.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-accent">
              Buch kaufen
            </a>
            <a
              href="https://lachhein-lierow.de/co-investment-check/"
              className="btn"
            >
              Co-Investment Check
            </a>
          </div>
        </div>
        <div className="hero-cover">
          <Image
            src="/cover.jpg"
            alt="no proof, no business – Cover"
            width={1200}
            height={1793}
            priority
          />
        </div>
      </div>
    </section>
  );
}
