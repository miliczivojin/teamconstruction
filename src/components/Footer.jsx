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
              <img src={logoImg} alt="TEAM CONSTRUCTION DOO" className="footer-logo-img" />
            </Link>
            <p className="footer-company-name">
              TEAM CONSTRUCTION DOO
            </p>
            <p>
              Građevinske usluge, izvođenje građevinskih radova po sistemu ključ
              u ruke i investicije u stambenu izgradnju u Nišu.
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
                <Link to="/projekti-u-izgradnji">Ponuda stanova u izgradnji</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section footer-contact">
            <h4>Kontakt</h4>
            <p>
              <strong>Adresa:</strong> Topolska 1
            </p>
            <p>
              <strong>Telefon:</strong>{' '}
              <a href="tel:0606958100">060 6958100</a>
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
          <p>© {new Date().getFullYear()} TEAM CONSTRUCTION DOO. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
