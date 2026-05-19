export default function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        <span className="nav-logo-name">no proof, no business</span>
        <span className="nav-logo-role">Business Playbooks · Band I</span>
      </a>
      <ul className="nav-links">
        <li><a href="#aufbau">Aufbau</a></li>
        <li><a href="#fuer-wen">Für wen</a></li>
        <li><a href="#autor">Autor</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
      <a className="btn nav-btn" href="https://buy.stripe.com/7sY9AS5NCa2n6FOa6W6Zy02" target="_blank" rel="noopener noreferrer">Buch kaufen</a>
    </nav>
  );
}
