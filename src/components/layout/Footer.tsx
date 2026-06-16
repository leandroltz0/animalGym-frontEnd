import { MessageCircle } from 'lucide-react'
import { NAV_LINKS, ADDRESS, PHONE_DISPLAY, SCHEDULE, SOCIAL, WHATSAPP_URL } from '@/constants'
import './footer.scss'

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer__body">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon" />
              <div className="footer__logo-text">
                <span className="footer__logo-name">MÍTICO</span>
                <span className="footer__logo-sub">ANIMAL GYM</span>
              </div>
            </div>
            <div className="footer__tagline">
              Entrená como una bestia.<br />
              Construí tu <span className="accent">mejor versión</span>.
            </div>
            <p className="footer__desc">
              Mítico Animal Gym es más que un gimnasio. Es una comunidad creada para personas que buscan superarse todos los días.
            </p>
          </div>

          <div className="footer__nav">
            <div className="footer__nav-title">EXPLORAR</div>
            <ul className="footer__nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__info">
            <div className="footer__info-title">INFORMACIÓN</div>
            <div className="footer__info-list">
              <div className="footer__info-item">
                <span className="footer__info-label">Dirección</span>
                <span className="footer__info-text">
                  {ADDRESS}
                  <br />
                  Paso del Rey, Buenos Aires
                </span>
              </div>
              <div className="footer__info-item">
                <span className="footer__info-label">WhatsApp</span>
                <span className="footer__info-text">{PHONE_DISPLAY}</span>
              </div>
              <div className="footer__info-item">
                <span className="footer__info-label">Horarios</span>
                <span className="footer__info-text">
                  {SCHEDULE.weekdays}
                  <br />
                  {SCHEDULE.saturday}
                </span>
              </div>
            </div>
            <div className="footer__socials">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social-link">
                <MessageCircle size={18} />
              </a>
              <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer__social-link">
                <svg viewBox="0 0 24 24" width={18} height={18}>
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.78V6.69h3.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">© 2026 Mítico Animal Gym. Todos los derechos reservados.</span>
          <span className="footer__bottom-tagline">Diseñado para quienes entrenan diferente.</span>
        </div>
      </div>
    </footer>
  )
}
