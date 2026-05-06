import Image from "next/image";

export default function Author() {
  return (
    <section id="autor" className="section">
      <div className="section-inner">
        <span className="section-label">Autor</span>
        <h2>Dr. Sven Lachhein</h2>

        <div className="author-grid">
          <div className="author-photo">
            <Image
              src="/author.jpg"
              alt="Dr. Sven Lachhein"
              width={600}
              height={600}
            />
          </div>
          <div className="author-text">
            <div className="author-meta">
              7-figure VC burn
              <br />
              8-figure B2B revenue!
            </div>
            <p>
              Mein erstes echtes Unternehmen hatte Venture Capital, zu
              Höchstzeiten zwanzig Mitarbeiter und eine Millionenbewertung. Es
              ging trotzdem pleite, weil das Geschäft darunter nicht solide
              war.
            </p>
            <p>
              Die Frage, die ich damals übersprungen hatte: Funktioniert das
              eigentlich auch ohne mich, ohne Glück, ohne den einen Großkunden,
              der alles zusammenhält?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
