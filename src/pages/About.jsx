import HeroSection from '../components/HeroSection';
import SeoHead from '../components/SeoHead';
import logoImg from '../assets/logo.png';
import projekat1Slika1 from '../assets/projekat1/slika1.jpg';
import projekat2Slika1 from '../assets/projekat2/slika1.jpg';
import projekat3Slika1 from '../assets/projekat3/slika1.jpg';
import './About.css';

function About() {
  return (
    <>
      <SeoHead
        title="O nama"
        description="Upoznajte TEAM Construction 018 – građevinska kompanija iz Leskovca. Misija, vizija, delatnost i lokacija."
      />
      <HeroSection
        title="O nama"
        subtitle="Upoznajte TEAM Construction 018."
      />
      <main className="page-content about-content">
        {/* Intro + logo */}
        <section className="about-intro">
          <div className="about-intro-content">
            <div className="about-logo-wrap">
              <img src={logoImg} alt="TEAM Construction 018" className="about-logo" decoding="async" />
            </div>
            <div className="about-intro-text">
              <h2>TEAM CONSTRUCTION 018</h2>
              <p>
                Građevinska kompanija koja je od svog osnivanja 2019. godine
                posvećena kvalitetnoj izgradnji i pouzdanoj realizaciji projekata.
                Kroz rad na različitim građevinskim poslovima, firma je postepeno
                izgradila reputaciju pouzdanog partnera koji projekte realizuje
                odgovorno, precizno i u skladu sa visokim standardima struke.
              </p>
            </div>
          </div>
        </section>

        {/* Thematic images */}
        <section className="about-gallery" aria-hidden="true">
          <div className="about-gallery-inner">
            <img src={projekat1Slika1} alt="Projekat 1" className="about-gallery-img" loading="lazy" decoding="async" />
            <img src={projekat2Slika1} alt="Projekat 2" className="about-gallery-img" loading="lazy" decoding="async" />
            <img src={projekat3Slika1} alt="Projekat 3" className="about-gallery-img" loading="lazy" decoding="async" />
          </div>
        </section>

        {/* Misija & Vizija */}
        <section className="about-mission-vision">
          <div className="about-mv-grid">
            <div className="about-mv-card">
              <h2>Misija</h2>
              <p>
                Naša misija je da kroz kvalitetnu gradnju i pouzdanu realizaciju
                stvaramo sigurne, funkcionalne i dugotrajne objekte. Posvećeni
                smo profesionalnom završetku svakog projekta uz poštovanje rokova
                i standarda struke.
              </p>
            </div>
            <div className="about-mv-card">
              <h2>Vizija</h2>
              <p>
                Naša vizija je da postanemo prepoznatljivo i pouzdano ime u
                oblasti građevinarstva u Nišu i regionu, poznato po kvalitetnoj
                novogradnji, stabilnom poslovanju i poverenju koje gradimo sa
                partnerima, kupcima i zajednicom.
              </p>
            </div>
          </div>
        </section>

        {/* Vođstvo */}
        <section className="about-leadership">
          <h2>Vođstvo</h2>
          <div className="about-leadership-card">
            <div className="about-leadership-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                alt=""
                className="about-leadership-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-leadership-info">
              <h3>Ivan Stojanović</h3>
              <p className="about-leadership-role">Vlasnik i direktor</p>
              <p>
                Vodi kompaniju TEAM Construction 018 sa fokusom na građevinske
                usluge i investicije u stambenu izgradnju. Pod njegovim
                vođstvom firma ostvaruje stabilnost i bonitetnu ocenu A+.
              </p>
            </div>
          </div>
        </section>

        {/* Delatnost i kapaciteti */}
        <section className="about-services">
          <h2>Delatnost i kapaciteti</h2>
          <p className="about-services-intro">
            Pretežna delatnost kompanije je postavljanje podnih i zidnih obloga.
            Pored toga, firma investira u stambenu izgradnju.
          </p>
          <ul className="about-services-list">
            <li>
              <strong>Postavljanje podnih i zidnih obloga</strong> — Primarna
              delatnost kompanije. Profesionalno izvođenje radova.
            </li>
            <li>
              <strong>Investicije u stambenu izgradnju</strong> — Stambeni objekti
              spratnosti Po+P+4 na lokacijama: Dejana Dinića bb, Alaska br. 3,
              Ivana Gorana Kovačića 13 i Zetska ulica. Moderna novogradnja u
              Nišu, opština Pantelej.
            </li>
            <li>
              <strong>Pouzdanost</strong> — Bonitetna ocena A+ za 2025. godinu,
              visoka ekonomska stabilnost i nizak nivo poslovnog rizika.
            </li>
            <li>
              <strong>Kapaciteti</strong> — Kompanija zapošljava 9 radnika i
              kontinuirano ostvaruje milionske prihode.
            </li>
          </ul>
        </section>

        {/* Lokacija */}
        <section className="about-location">
          <h2>Gde nas možete naći</h2>
          <p>
            Sedište kompanije nalazi se na adresi{' '}
            <strong className="about-address-line">BB, 16206 Donje Brijanje, Leskovac, Srbija</strong>.
            Projekti stambene izgradnje realizuju se u Nišu, opština Pantelej.
          </p>
        </section>
      </main>
    </>
  );
}

export default About;
