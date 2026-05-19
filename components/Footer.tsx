import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <div className="footer-col">
          <span className="section-label">Newsletter</span>
          <h3>Der Newsletter zur Reihe.</h3>
          <p>
            Eine kurze Mail, wenn etwas Neues erscheint. Kein Marketing, keine Newsletter-Floskeln.
          </p>
          <NewsletterForm />
        </div>
        <div className="footer-col">
          <span className="section-label">Material</span>
          <ul className="footer-list">
            <li>
              <span className="footer-list-meta">Bonus</span>
              <a href="/arbeitsblaetter">25 Arbeitsblätter als PDF</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="section-label">Weitere Arbeiten</span>
          <ul className="footer-list">
            <li>
              <span className="footer-list-meta">Über die Autoren</span>
              <a href="https://lachhein-lierow.de">lachhein-lierow.de</a>
            </li>
            <li>
              <span className="footer-list-meta">Business Playbooks · Band II</span>
              <a href="https://fatal-capital.de">fatal-capital.de</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
