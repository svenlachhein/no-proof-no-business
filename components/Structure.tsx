const stufen = [
  {
    num: "01",
    name: "Nachfrage",
    frage: "Hat jemand für dein Angebot bezahlt? Wer kauft, aus welchem Anlass, zu welchem Preis, über welchen Weg.",
    werkzeuge: "Startdiagnose, Beweis-Matrix, Angebotsblatt, Payment Ladder, Demand Brief.",
    entscheidung: "Freigeben, schärfen oder verwerfen.",
  },
  {
    num: "02",
    name: "Leistung",
    frage: "Kann das verkaufte Versprechen wiederholt erbracht werden, ohne dass alles an einer Person hängt?",
    werkzeuge: "Delivery Blueprint, Role Matrix, Exception Matrix, Operating Brief.",
    entscheidung: "Standardisieren, delegieren, automatisieren oder begrenzen.",
  },
  {
    num: "03",
    name: "Ertrag",
    frage: "Bleibt pro Einheit Geld übrig, ehrlich gerechnet, mit eingepreister Gründerzeit und realen Akquisekosten?",
    werkzeuge: "Einheitenblatt, Beitragsmatrix, Steuerungsblatt, Wirtschaftsprofil.",
    entscheidung: "Preis anheben, Paket umbauen, schwache Formen streichen oder Zahlungslogik ändern.",
  },
  {
    num: "04",
    name: "Wachstum",
    frage: "Was wird vervielfältigt, mit welchem Hebel, mit welchem Risiko?",
    werkzeuge: "Zielbildblatt, Wachstumshebelplan, Risikokarte, Skalierungsprofil.",
    entscheidung: "Fokussieren, organisch skalieren, selektiv finanzieren, kapitalgestützt wachsen oder Voraussetzungen erst schließen.",
  },
];

export default function Structure() {
  return (
    <section id="aufbau" className="section">
      <div className="section-inner">
        <p className="section-label">Aufbau</p>
        <h2>Vier Stufen. In dieser Reihenfolge.</h2>
        <ul className="num-list">
          {stufen.map((s) => (
            <li key={s.num} className="num-item">
              <div className="num-item-num">{s.num}</div>
              <div className="num-item-body">
                <h3>{s.name}</h3>
                <p>{s.frage}</p>
                <p><strong>Werkzeuge.</strong> {s.werkzeuge}</p>
                <p><strong>Entscheidung.</strong> {s.entscheidung}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="structure-meta">4 Teile · 22 Kapitel · 13 Arbeitsblätter · 30 Tage</p>
      </div>
    </section>
  );
}
