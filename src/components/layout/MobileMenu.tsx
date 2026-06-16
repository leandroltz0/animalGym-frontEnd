import { MessageCircle } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL, SOCIAL } from '@/constants'
import './navbar.scss'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeId: string
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function MobileMenu({ isOpen, onClose, activeId, onNavClick }: MobileMenuProps) {
  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
      <ul className="mobile-menu__links">
        {NAV_LINKS.map((link, index) => (
          <li key={link.href} style={{ transitionDelay: isOpen ? `${0.08 + index * 0.06}s` : '0s' }}>
            <a
              href={link.href}
              className={activeId === link.href.slice(1) ? 'active' : ''}
              onClick={(e) => {
                onNavClick(e, link.href)
                onClose()
              }}
            >
              <span className="mobile-menu__num">{String(index + 1).padStart(2, '0')}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mobile-menu__bottom">
        <div className="mobile-menu__social">
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.18a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.61z" />
            </svg>
          </a>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mobile-menu__cta">
          <MessageCircle size={16} />
          Escribinos por WhatsApp
        </a>
      </div>
    </div>
  )
}
