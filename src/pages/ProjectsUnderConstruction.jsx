import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import SeoHead from '../components/SeoHead';
import { PROJECTS_UNDER_CONSTRUCTION } from '../data/projects';
import './Projects.css';

function ProjectsUnderConstruction() {
  return (
    <>
      <SeoHead
        title="Projekti u izgradnji"
        description="Stambeni objekti TEAM Construction 018 u izgradnji – Alaska 3, Zetska bb. Moderna novogradnja u Nišu."
      />
      <HeroSection
        title="Projekti u izgradnji"
        subtitle="TEAM Construction 018 projekti u toku."
      />
      <main className="page-content projects-content projects-content--centered">
        <div className="projects-inner">
          <div className="projects-grid">
            {PROJECTS_UNDER_CONSTRUCTION.map((project) => (
              <ProjectCard key={project.id} project={project} to={`/projekat/${project.slug}`} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default ProjectsUnderConstruction;
