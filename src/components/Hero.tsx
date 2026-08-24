import { profile } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-aurora" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="blob blob-c" />
        <span className="grain" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">[ software engineer ]</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="bio">{profile.bio}</p>

          <div className="cta-row">
            {profile.links.map((link) => (
              <a
                key={link.kind}
                href={link.url}
                target={link.kind === 'email' ? undefined : '_blank'}
                rel={link.kind === 'email' ? undefined : 'noopener'}
                className={`btn${link.kind === 'email' ? ' btn-primary' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-photo-wrap">
          <span className="hero-photo-halo" aria-hidden="true" />
          <div className="hero-photo-frame">
            <img
              className="hero-photo"
              src={profile.photoUrl}
              alt={profile.name}
              loading="eager"
            />
          </div>
        </div>
      </div>

      <a href="#skills" className="scroll-hint" aria-label="Rolar para skills">
        <span />
      </a>
    </section>
  );
}
