import Image from "next/image";
import BookPreviewModal from "./BookPreviewModal";


export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="section-inner hero-inner">
        <div className="hero-text">
          <p className="section-label">Business Playbooks · Band I</p>
          <h1>Wie in 30 Tagen dein Business läuft und wann du lieber Angestellter wirst</h1>
          <p>
            Ein Prüfpfad in vier Stufen, zweiundzwanzig Kapiteln und dreizehn Arbeitsblättern. Für Gründer, deren Kompetenz da ist und deren Marktbeweis fehlt. Und für Unternehmer mit Umsatz, dessen Geschäft an ihnen hängt.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-accent" href="https://buy.stripe.com/7sY9AS5NCa2n6FOa6W6Zy02" target="_blank" rel="noopener noreferrer">
              Buch bestellen · 24 €
            </a>
            <a className="btn" href="https://lachhein-lierow.de/co-investment-check/">
              Co-Investment Check
            </a>
          </div>
        </div>
        <div className="hero-cover">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Image
              src="/cover.jpg"
              alt="no proof, no business – Cover"
              width={1200}
              height={1793}
              priority
            />
            <BookPreviewModal
              pageCount={20}
              previewBaseUrl="https://treditionstorage.blob.core.windows.net/assets/preview-147df87e-487a-41a4-a6e6-cd321ea6134a-"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
