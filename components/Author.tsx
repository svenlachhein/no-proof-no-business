import Image from "next/image";

export default function Author() {
  return (
    <section id="autor" className="section">
      <div className="section-inner">
        <p className="section-label">7-figure VC burn · 8-figure B2B revenue</p>
        <h2>Dr. Sven Lachhein</h2>
        <div className="author-grid">
          <div className="author-photo">
            <Image src="/author.jpg" alt="Dr. Sven Lachhein" width={600} height={600} />
          </div>
          <div className="author-text">
            <p>Mein erstes Unternehmen hatte Venture Capital, zwanzig Mitarbeiter und eine siebenstellige Bewertung. Doppelseitige Artikel in VC-Magazinen, Everybody’s Darling. Es ging trotzdem pleite, weil das Geschäft darunter nicht solide war. Komplexität stieg schneller als Belastbarkeit. Mitarbeiter klauten das Produkt. Verträge platzten. Selbst den Fire-Sale für einen Euro habe ich noch im Notartermin verbockt. Am Ende: Insolvenz, Everybody’s Depp.</p>
            <p>Danach habe ich neu angefangen, kleiner, ohne Investoren, mit wenigen aber guten Kunden. Das Geschäft lief schnell, aber die alte Angst saß tief: Was genau macht ein Geschäft eigentlich belastbar? Aus der Antwort ist dieser Prüfpfad geworden, und aus dem Prüfpfad das Buch.</p>
            <p className="author-meta">Vielleicht steckt in Toni ein bisschen von mir.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
