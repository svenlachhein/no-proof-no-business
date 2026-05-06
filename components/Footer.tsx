import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer id="kontakt" className="footer">
      <div className="section-inner footer-inner">
        <div className="footer-col">
          <span className="section-label">Newsletter</span>
          <h3>Der Newsletter zur Reihe.</h3>
          <p>
            Wenn ein neuer Band fertig ist, schicke ich eine Notiz. Sonst
            Stille.
          </p>
          <NewsletterForm />
        </div>

        <div className="footer-col">
          <span className="section-label">Weitere Arbeiten</span>
          <ul className="footer-list">
            <li>
              <span className="footer-list-meta">Case Study</span>
              <a href="https://der-millionen-pitch.de">der-millionen-pitch.de</a>
            </li>
            <li>
              <span className="footer-list-meta">Business Playbooks · Band II</span>
              <a href="https://fatal-capital.de">fatal-capital.de</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <span className="section-label">Rechtliches</span>
          <ul className="footer-list">
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Sven Lachhein · Business Playbooks</span>
      </div>
    </footer>
  );
}
