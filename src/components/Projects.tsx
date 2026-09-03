import { projects, type Project } from '../data/content';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const GRADIENTS = ['grad-0', 'grad-1', 'grad-2'];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={`proj-card${inView ? ' in' : ''}`}>
      <div className={`proj-cover ${GRADIENTS[index % GRADIENTS.length]}`}>
        <span className="proj-index">0{index + 1}</span>
      </div>

      <div className="proj-body">
        <h3>{project.name}</h3>
        <p className="proj-tagline">{project.tagline}</p>
        <p className="desc">{project.description}</p>
      </div>

      <a
        className="proj-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub →
      </a>
    </div>
  );
}

export default function Projects() {
  const githubLink = 'https://github.com/julianafalcaoo';

  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <p className="eyebrow">portifólio</p>
        <h2>Projetos</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="projects-more">
          <a
            className="btn"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais no GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}