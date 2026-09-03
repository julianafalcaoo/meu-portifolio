import { profile } from '../data/content';

const KEY_LABELS: Record<string, string> = {
  email: 'email',
  github: 'github',
  linkedin: 'linkedin',
  lattes: 'lattes',
};

function displayValue(url: string): string {
  return url.replace(/^mailto:/, '').replace(/^https?:\/\//, '');
}

export default function Contact() {
  const emailLink = profile.links.find((l) => l.kind === 'email');

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <p className="eyebrow">contato</p>
        <h2>Vamos conversar</h2>

        <div className="contact-list">
          {profile.links.map((link) => (
            <a
              key={link.kind}
              className="contact-row"
              href={link.url}
              target={link.kind === 'email' ? undefined : '_blank'}
              rel={link.kind === 'email' ? undefined : 'noopener'}
            >
              <span className="key">{KEY_LABELS[link.kind]}</span>
              <span className="val">{displayValue(link.url)}</span>
            </a>
          ))}
        </div>

        {emailLink && (
          <div className="contact-cta">
            <a
              className="btn btn-primary"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailLink?.url.replace('mailto:', '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar e-mail →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
