import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import SeoHead from '../components/SeoHead';
import heroImage from '../assets/projekat1/slika2.jpg';
import './Home.css';

function Home() {
  return (
    <>
      <SeoHead
        description="Građevinske usluge i moderna stambena izgradnja u Nišu. TEAM Construction 018 – gotovi projekti i objekti u izgradnji."
      />
      <HeroSection
        image={heroImage}
        title="TEAM Construction 018"
        subtitle="Građevinske usluge i moderna stambena izgradnja u Nišu."
      />
      <StatisticsSection />
      <main className="page-content home-content">
        <div className="home-inner">
          <section className="home-intro">
            <p className="home-lead">
              TEAM CONSTRUCTION 018 D.O.O. je pouzdan partner u građevinskoj
              industriji koji uspešno posluje od 2019. godine. Kao kompanija
              specijalizovana za postavljanje podnih i zidnih obloga, ali i
              realizaciju savremenih stambenih objekata, naš fokus je na
              kvalitetnoj izgradnji, pouzdanoj realizaciji projekata i
              dugoročnoj vrednosti za investitore i kupce.
            </p>
          </section>
          <nav className="home-cards">
            <Link to="/o-nama" className="home-card">
              <span className="home-card-title">O nama</span>
              <span className="home-card-desc">Profil, delatnost i tim</span>
            </Link>
            <Link to="/gotovi-projekti" className="home-card">
              <span className="home-card-title">Gotovi projekti</span>
              <span className="home-card-desc">Realizovani objekti</span>
            </Link>
            <Link to="/projekti-u-izgradnji" className="home-card">
              <span className="home-card-title">Projekti u izgradnji</span>
              <span className="home-card-desc">Šta je u pripremi</span>
            </Link>
          </nav>
        </div>
      </main>
    </>
  );
}

export default Home;
