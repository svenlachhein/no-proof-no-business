import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <span className="nav-logo-name">no proof, no business</span>
        <span className="nav-logo-role">Business Playbooks · Band I</span>
      </Link>

      <ul className="nav-links">
        <li>
          <a href="#aufbau">Aufbau</a>
        </li>
        <li>
          <a href="#fuer-wen">Für wen</a>
        </li>
        <li>
          <a href="#autor">Autor</a>
        </li>
        <li>
          <a href="#kontakt">Kontakt</a>
        </li>
      </ul>

      <a href="#" className="btn nav-btn">
        Buch kaufen
      </a>
    </nav>
  );
}
