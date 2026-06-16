import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '@/constants'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { SocialIcons } from '@/components/shared/SocialIcons'
import { MobileMenu } from './MobileMenu'
import './navbar.scss'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeId = useScrollSpy(['hero', 'servicios', 'horarios', 'tienda', 'galeria', 'contacto'])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="navbar__logo-icon" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">MÍTICO</span>
            <span className="navbar__logo-sub">ANIMAL GYM</span>
          </div>
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeId === link.href.slice(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__social">
          <SocialIcons />
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="navbar__cta">
          <MessageCircle size={14} />
          Escribinos
        </a>

        <button
          className={`navbar__hamburger ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeId={activeId}
        onNavClick={handleNavClick}
      />
    </>
  )
}
