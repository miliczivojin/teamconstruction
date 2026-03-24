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
        description="Građevinske usluge i moderna stambena izgradnja u Nišu. TEAM CONSTRUCTION DOO – gotovi projekti i objekti u izgradnji."
      />
      <HeroSection
        image={heroImage}
        title="TEAM CONSTRUCTION DOO"
        subtitle="Građevinske usluge i moderna stambena izgradnja u Nišu."
      />
      <StatisticsSection />
      <main className="page-content home-content">
        <div className="home-inner">
          <section className="home-intro">
            <p className="home-lead">
              TEAM CONSTRUCTION DOO je pouzdan partner u građevinskoj industriji
              sa 20 godina poslovanja. Kao kompanija specijalizovana za
              izvođenje građevinskih radova po sistemu ključ u ruke i realizaciju
              savremenih stambenih objekata, naš fokus je na kvalitetnoj
              izgradnji, pouzdanoj realizaciji projekata i dugoročnoj vrednosti
              za investitore i kupce.
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
              <span className="home-card-title">Ponuda stanova u izgradnji</span>
              <span className="home-card-desc">Šta je u pripremi</span>
            </Link>
          </nav>
        </div>
      </main>
    </>
  );
}

export default Home;
