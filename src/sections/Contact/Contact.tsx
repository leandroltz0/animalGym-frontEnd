import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MapPin, MessageCircle, Clock, ExternalLink } from 'lucide-react'
import { SectionLabel } from '@/components/shared'
import { ADDRESS, PHONE_DISPLAY, SCHEDULE, WHATSAPP_URL, MAP_EMBED_URL, MAP_DIRECTIONS_URL } from '@/constants'
import './contact.scss'

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ctx = gsap.context(() => {
            gsap.fromTo(
              '.contact__label',
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            )
            gsap.fromTo(
              '.contact__title',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.1 }
            )
            gsap.fromTo(
              '.contact__desc',
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.2 }
            )
            gsap.fromTo(
              '.contact__info-block',
              { opacity: 0, y: 25 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.12, delay: 0.3 }
            )
            gsap.fromTo(
              '.contact__cta-btn',
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.7 }
            )
            gsap.fromTo(
              '.contact__right',
              { opacity: 0, x: 60, scale: 0.97 },
              { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power2.out', delay: 0.15 }
            )
          }, sectionRef)

          observer.unobserve(entry.target)
          return () => ctx.revert()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="contact" id="contacto" ref={sectionRef}>
      <div className="contact__grid">
        <div className="contact__left">
          <SectionLabel>CONTACTO</SectionLabel>
          <h2 className="contact__title">
            ¿LISTO PARA <span className="accent">EMPEZAR</span>?
          </h2>
          <p className="contact__desc">
            Estamos listos para ayudarte a dar el primer paso hacia tu mejor versión. Contactanos y comenzá hoy mismo.
          </p>

          <div className="contact__info-list">
            <div className="contact__info-block">
              <div className="contact__info-icon">
                <MapPin size={18} />
              </div>
              <div className="contact__info-content">
                <div className="contact__info-title">Dónde encontrarnos</div>
                <div className="contact__info-text">{ADDRESS}</div>
                <div className="contact__info-text contact__info-text--muted">Paso del Rey, Buenos Aires</div>
              </div>
            </div>

            <div className="contact__info-block">
              <div className="contact__info-icon">
                <MessageCircle size={18} />
              </div>
              <div className="contact__info-content">
                <div className="contact__info-title">Escribinos</div>
                <div className="contact__info-text">{PHONE_DISPLAY}</div>
                <div className="contact__info-sub">Respondemos lo antes posible.</div>
              </div>
            </div>

            <div className="contact__info-block">
              <div className="contact__info-icon">
                <Clock size={18} />
              </div>
              <div className="contact__info-content">
                <div className="contact__info-title">Horarios</div>
                <div className="contact__info-text">{SCHEDULE.weekdays}</div>
                <div className="contact__info-text contact__info-text--muted">{SCHEDULE.saturday}</div>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__cta-btn"
          >
            <MessageCircle size={18} />
            ESCRIBINOS POR WHATSAPP
          </a>
        </div>

        <div className="contact__right">
          <div className="contact__map-wrapper">
            <iframe
              src={MAP_EMBED_URL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Mítico Animal Gym"
            />
            <div className="contact__map-float">
              <div className="contact__float-logo" />
              <div className="contact__float-info">
                <div className="contact__float-name">MÍTICO ANIMAL GYM</div>
                <div className="contact__float-address">
                  {ADDRESS}
                  <br />
                  Paso del Rey
                </div>
              </div>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__float-btn"
              >
                CÓMO LLEGAR
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
