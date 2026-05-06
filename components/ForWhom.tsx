export default function ForWhom() {
  return (
    <section id="fuer-wen" className="section section-alt">
      <div className="section-inner">
        <span className="section-label">Für wen</span>
        <h2>Zwei Ausgangspunkte. Eine Reihenfolge.</h2>

        <div className="card-grid cols-2">
          <article className="card">
            <h3>Am Anfang</h3>
            <p>
              Du hast eine Idee, Kompetenz und keinen ersten zahlenden Kunden.
              Die Frage ist nicht, ob du gründen kannst. Die Frage ist, ob
              jemand dafür zahlt.
            </p>
            <div className="card-meta">Für dich relevant ab Teil I: Nachfrage</div>
          </article>

          <article className="card">
            <h3>Im laufenden Geschäft</h3>
            <p>
              Dein Geschäft funktioniert. Es hängt an dir, an einem Großkunden,
              an Glück. Die Frage ist nicht, wie du wächst, sondern ob das, was
              du heute hast, auch ohne dich funktioniert.
            </p>
            <div className="card-meta">Für dich relevant ab Teil II: Leistung</div>
          </article>
        </div>

        <p className="for-whom-exclude">
          Nicht für Leser, die ein Strategiemodell oder ein Motivationsbuch
          suchen.
        </p>
      </div>
    </section>
  );
}
