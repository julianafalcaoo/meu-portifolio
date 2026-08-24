import { useScrollSpy } from '../hooks/useScrollSpy';

const SECTIONS = [
  { id: 'home', label: 'Início' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projetos' },
  { id: 'contact', label: 'Contato' },
];

export default function Nav() {
  const activeId = useScrollSpy(SECTIONS.map((s) => s.id));

  return (
    <header className="nav">
      <nav className="nav-inner" aria-label="Navegação principal">
        <a href="#home" className="nav-brand">
          JF
        </a>
        <div className="nav-links">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link${activeId === s.id ? ' active' : ''}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
