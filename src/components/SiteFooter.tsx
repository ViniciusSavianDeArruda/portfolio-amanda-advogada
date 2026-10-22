import { Reveal } from './Reveal'
import brandMark from '../assets/brand-mark.png'

const instagramAccounts = [
  { handle: 'amandarenataqs', url: 'https://www.instagram.com/amandarenataqs/' },
  { handle: 'euamandaquadros', url: 'https://www.instagram.com/euamandaquadros/' },
]

const email = 'amandareanteqs@gmail.com'
const city = 'Santa Maria, RS'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#apresentacao', label: 'Apresentação' },
  { href: '#percurso', label: 'Percurso' },
  { href: '#experiencia', label: 'Experiência' },
]

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
    <footer className="site-footer">
      <Reveal className="footer-inner">
        <div className="footer-top">
          <div className="footer-identity">
            <a className="brand" href="#inicio" aria-label="Amanda Quadros — início">
              <span className="brand-mark" aria-hidden="true">
                <img src={brandMark} alt="" />
              </span>
              <span className="brand-copy">
                <span className="brand-name">Amanda Quadros</span>
                <span className="brand-subtitle">Portfólio acadêmico</span>
              </span>
            </a>
            <p className="footer-city">
              {city}
              <span aria-hidden="true"> · </span>
              <a className="footer-email" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>

          <nav className="footer-nav" aria-label="Navegação do rodapé">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            {instagramAccounts.map(account => (
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
        </div>

        <div className="footer-base">
          <p className="footer-rights">
            © {new Date().getFullYear()} Amanda Quadros. Todos os direitos
            reservados.
          </p>

          <p className="footer-credit">
            <span>Feito por Vinícius Arruda</span>
            <a
              className="social-link social-link--small"
              href="https://www.linkedin.com/in/arrudavinicius/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Vinícius Arruda"
            >
              <LinkedinIcon />
            </a>
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
