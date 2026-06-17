import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MapPin, Clock, ExternalLink } from 'lucide-react'
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
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
            <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
