const stages = [
  {
    num: "01",
    title: "Nachfrage",
    body: "Wer kauft, zu welchem Anlass, für welches Angebot, zu welchem Preis.",
  },
  {
    num: "02",
    title: "Leistung",
    body: "Was geliefert wird, von wem, in welcher Qualität, bis zu welcher Grenze.",
  },
  {
    num: "03",
    title: "Ertrag",
    body: "Was pro Auftrag reinkommt, was rausgeht, was bleibt, wann das Geld fließt.",
  },
  {
    num: "04",
    title: "Wachstum",
    body: "Welche Form das Unternehmen hat, was vervielfältigt wird, mit welchem Risiko.",
  },
];

export default function Structure() {
  return (
    <section id="aufbau" className="section">
      <div className="section-inner">
        <span className="section-label">Aufbau</span>
        <h2>Vier Stufen. In dieser Reihenfolge.</h2>
        <ul className="num-list">
          {stages.map((s) => (
            <li key={s.num} className="num-item">
              <div className="num-item-num">{s.num}</div>
              <div className="num-item-body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="numbers-bar">
          <span>4 Teile</span>
          <span>22 Kapitel</span>
          <span>13 Arbeitsblätter</span>
          <span>30 Tage</span>
        </div>
      </div>
    </section>
  );
}
