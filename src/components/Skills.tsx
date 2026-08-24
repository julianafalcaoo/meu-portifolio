import { skillCategories, type SkillCategory } from '../data/content';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function SkillCard({ category, skills }: SkillCategory) {
  const { ref, inView } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className={`skill-card${inView ? ' in' : ''}`}>
      <p className="cat">{category}</p>
      <div className="tags">
        {skills.map((skill) => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <p className="eyebrow">competências</p>
        <h2>O que eu uso no dia a dia</h2>
        <div className="skills-grid">
          {skillCategories.map((c) => (
            <SkillCard key={c.category} category={c.category} skills={c.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}
