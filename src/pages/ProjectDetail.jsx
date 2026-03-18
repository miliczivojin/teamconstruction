import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import SeoHead from '../components/SeoHead';
import './ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const heroImages = project
    ? (project.exteriorImages && project.exteriorImages.length > 0
        ? project.exteriorImages
        : [project.image, ...(project.apartmentImages || [])].slice(0, 3))
    : [];
  const [heroIndex, setHeroIndex] = useState(0);

  if (!project) {
    return (
      <main className="page-content project-detail">
        <div className="project-detail-inner">
          <p>Projekat nije pronađen.</p>
          <Link to="/gotovi-projekti" className="project-detail-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Nazad</span>
          </Link>
        </div>
      </main>
    );
  }

  const metaDescription =
    [project.description, project.location].filter(Boolean).join(' ') ||
    `Stambeni projekat ${project.title} – TEAM Construction 018.`;

  return (
    <main className="page-content project-detail">
      <SeoHead title={project.title} description={metaDescription} />
      <div className="project-detail-inner">
        <div className="project-detail-top">
          <Link to={project.comingSoon ? '/projekti-u-izgradnji' : '/gotovi-projekti'} className="project-detail-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Nazad na projekte</span>
          </Link>
          {project.comingSoon && <span className="project-detail-badge">U izgradnji</span>}
          {project.sold && !project.comingSoon && <span className="project-detail-badge project-detail-badge--sold">Prodato</span>}
        </div>

        <header className="project-detail-header">
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-location">{project.location}</p>
          <p className="project-detail-description">{project.description}</p>
        </header>

        <section className="project-detail-section">
          <h2>Slike objekta</h2>
          <div className="project-detail-hero-wrap">
            <div className="project-detail-hero-row">
              {heroImages.map((img, idx) => (
                <div key={idx} className="project-detail-hero-item" data-active={idx === heroIndex}>
                  <img src={img} alt={`${project.title} – slika ${idx + 1}`} loading={idx === 0 ? 'eager' : 'lazy'} decoding="async" />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="project-detail-hero-arrow project-detail-hero-arrow--prev"
              onClick={() => setHeroIndex((i) => (i === 0 ? heroImages.length - 1 : i - 1))}
              aria-label="Prethodna slika"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="project-detail-hero-arrow project-detail-hero-arrow--next"
              onClick={() => setHeroIndex((i) => (i === heroImages.length - 1 ? 0 : i + 1))}
              aria-label="Sledeća slika"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </section>

        {project.pdf && (
          <section className="project-detail-section">
            <h2>Dokumentacija o izgradnji</h2>
            <div className="project-detail-pdf-card">
              <div className="project-detail-pdf-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 12v2h8v-2H8zm0 4v2h5v-2H8z" />
                </svg>
              </div>
              <div className="project-detail-pdf-content">
                <p>Pregledajte ili preuzmite PDF dokumentaciju projekta.</p>
                <div className="project-detail-pdf-actions">
                  <a
                    href={project.pdf}
                    download
                    className="project-detail-pdf-btn project-detail-pdf-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                    </svg>
                    Preuzmi PDF
                  </a>
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-detail-pdf-btn project-detail-pdf-btn--secondary"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                    Pregledaj dokumentaciju
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {project.apartmentImages && project.apartmentImages.length > 0 && (
          <section className="project-detail-section">
            <h2>Tipovi stanova</h2>
            <div className="project-detail-apartments">
              {project.apartmentImages.map((img, idx) => (
                <div key={idx} className="project-detail-apartment-item">
                  <img src={img} alt={`Tip stana ${idx + 1}`} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProjectDetail;
