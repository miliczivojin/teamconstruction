import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="TEAM Construction 018" className="footer-logo-img" />
            </Link>
            <p className="footer-company-name">
              TEAM CONSTRUCTION 018 D.O.O. DONJE BRIJANJE
            </p>
            <p>
              Građevinske usluge i postavljanje podnih i zidnih obloga. Investicije
              u stambenu izgradnju u Nišu.
            </p>
          </div>
          <div className="footer-section">
            <h4>Navigacija</h4>
            <ul className="footer-links">
              <li>
                <Link to="/o-nama">O nama</Link>
              </li>
              <li>
                <Link to="/gotovi-projekti">Gotovi projekti</Link>
              </li>
              <li>
                <Link to="/projekti-u-izgradnji">Projekti u izgradnji</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section footer-contact">
            <h4>Kontakt</h4>
            <p>
              <strong>Adresa:</strong> BB, 16206 Donje Brijanje, Leskovac, Srbija
            </p>
            <p>
              <strong>Telefon:</strong>{' '}
              <a href="tel:+38116782611">016/782-611</a>
            </p>
            <p>
              <strong>E-pošta:</strong>{' '}
              <a href="mailto:teamconstruction018@gmail.com">teamconstruction018@gmail.com</a>
            </p>
            <p>
              <strong>PIB:</strong> 111296847 &nbsp; <strong>MB:</strong> 21457442
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TEAM CONSTRUCTION 018 D.O.O. DONJE BRIJANJE. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
