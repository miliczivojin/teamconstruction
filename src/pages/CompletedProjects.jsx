import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import SeoHead from '../components/SeoHead';
import { COMPLETED_PROJECTS } from '../data/projects';
import './Projects.css';

function CompletedProjects() {
  return (
    <>
      <SeoHead
        title="Gotovi projekti"
        description="Realizovani stambeni projekti TEAM CONSTRUCTION DOO u Nišu – Momčila, Dejana Dinića, Ivana Gorana Kovačića."
      />
      <HeroSection
        title="Gotovi projekti"
        subtitle="Realizovani projekti TEAM CONSTRUCTION DOO."
      />
      <main className="page-content projects-content">
        <div className="projects-inner">
          <div className="projects-grid">
            {COMPLETED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} to={`/projekat/${project.slug}`} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default CompletedProjects;
