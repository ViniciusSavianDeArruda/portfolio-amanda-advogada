import { profile } from '../data/profile'
import { footerLinks, sectionNumber } from '../data/sections'
import { Brand } from './Brand'
import { Reveal } from './Reveal'
import './footer.css'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" strokeWidth={1.5} />
      <path d="M7.4 10.4v6.2M7.4 7.6v.1" strokeWidth={1.5} strokeLinecap="round" />
      <path
        d="M11.4 16.6v-6.2m0 1.8a2.6 2.6 0 0 1 5.2 0v4.4"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contato" aria-labelledby="contact-title">
      <div className="wrap footer-wrap">
        <Reveal className="footer-head">
          <span className="sec-num sec-num--dark" aria-hidden="true">
            {sectionNumber('contato')}
          </span>
          <div className="footer-head-text">
            <span className="rule rule--champagne" aria-hidden="true" />
            <h2 id="contact-title" className="eyebrow eyebrow--champagne">
              Contato
            </h2>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="footer-city">{profile.city}</p>
          </div>
        </Reveal>

        <Reveal className="footer-top">
          <Brand light />

          <nav className="footer-nav" aria-label="Navegação do rodapé">
            {footerLinks.map(link => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            {profile.instagram.map(account => (
              <a
                key={account.handle}
                className="social-link"
                href={account.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram @${account.handle}`}
              >
                <InstagramIcon />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="footer-base">
          <p className="footer-rights">
            © {new Date().getFullYear()} Amanda Quadros. Todos os direitos reservados.
          </p>
          <p className="footer-credit">
            <span>{profile.credit.text}</span>
            <a
              className="social-link social-link--small"
              href={profile.credit.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={profile.credit.linkedinLabel}
            >
              <LinkedinIcon />
            </a>
          </p>
        </Reveal>
      </div>
    </footer>
  )
}
