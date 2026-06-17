import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Sun, Sunset, Moon, Star, ArrowRight } from 'lucide-react'
import { scheduleBlocks } from '@/data/schedule'
import { WHATSAPP_URL } from '@/constants'
import { SectionLabel, SectionTitle } from '@/components/shared'
import './schedule.scss'

const iconMap = {
  sun: Sun,
  sunset: Sunset,
  moon: Moon,
  star: Star,
}

export function Schedule() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const blocksRef = useRef<(HTMLDivElement | null)[]>([])
  const ctaRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ctx = gsap.context(() => {
            gsap.to('.schedule__header', {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
            })

            gsap.to('.schedule__text-title', {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              delay: 0.2,
            })

            gsap.to('.schedule__text-desc', {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              delay: 0.3,
            })

            if (imageRef.current) {
              gsap.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.2,
              })
            }

            blocksRef.current.forEach((block, idx) => {
              if (block) {
                gsap.to(block, {
                  opacity: 1,
                  x: 0,
                  duration: 0.5,
                  ease: 'power2.out',
                  delay: 0.4 + idx * 0.15,
                })
              }
            })

            if (ctaRef.current) {
              gsap.to(ctaRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                delay: 1.1,
              })
            }
          }, sectionRef)

          observer.unobserve(entry.target)
          return () => ctx.revert()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="schedule" id="horarios" ref={sectionRef}>
      <div className="schedule__header">
        <SectionLabel>HORARIOS DE ATENCIÓN</SectionLabel>
        <SectionTitle>SIEMPRE HAY UN MOMENTO PARA VOS</SectionTitle>
      </div>

      <div className="schedule__content">
        <div className="schedule__text">
          <h3 className="schedule__text-title">
            TU MOMENTO ES <span>HOY</span>
          </h3>
          <p className="schedule__text-desc">
            Elegí el horario que mejor se adapte a tu rutina y empezá a construir tu mejor versión.
          </p>

          <div className="schedule__blocks">
            {scheduleBlocks.map((block, idx) => {
              const Icon = iconMap[block.icon]
              return (
                <div
                  key={block.id}
                  ref={(el) => { blocksRef.current[idx] = el }}
                  className="schedule__block"
                >
                  <div className="schedule__block-icon">
                    <div className="schedule__block-icon-ring">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="schedule__block-info">
                    <div className="schedule__block-name-row">
                      <span className="schedule__block-name">{block.name}</span>
                      <span className="schedule__block-days">{block.days}</span>
                    </div>
                    <span className="schedule__block-time">{block.time}</span>
                    <div className="schedule__block-bar">
                      <div
                        className="schedule__block-bar-fill"
                        style={{ width: block.barWidth }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="schedule__cta"
            ref={ctaRef}
          >
            QUIERO EMPEZAR
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="schedule__image-wrapper" ref={imageRef}>
          <div className="schedule__image" />
          <div className="schedule__image-overlay" />
          <div className="schedule__image-badge">
            <span className="schedule__image-badge-title">LUN – VIE</span>
            <span className="schedule__image-badge-subtitle">08:00 – 21:30 HS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
