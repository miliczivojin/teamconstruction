import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project, to }) {
  const { image, title, location, description, comingSoon, sold } = project;
  const content = (
    <>
      <div className="project-card-image-wrap">
        <img
          src={image}
          alt={title}
          className="project-card-image"
          loading="lazy"
          decoding="async"
        />
        {comingSoon && (
          <span className="project-card-badge">U izgradnji</span>
        )}
        {sold && !comingSoon && (
          <span className="project-card-badge project-card-badge--sold">Prodato</span>
        )}
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        {location && (
          <p className="project-card-location">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {location}
          </p>
        )}
        {description && (
          <p className="project-card-description">{description}</p>
        )}
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="project-card-link">
        <article className="project-card">{content}</article>
      </Link>
    );
  }

  return <article className="project-card">{content}</article>;
}

export default ProjectCard;
