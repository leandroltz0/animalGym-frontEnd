import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { services } from '@/data/services'
import { SectionLabel, SectionTitle } from '@/components/shared'
import { useIsMobile } from '@/hooks/useMediaQuery'
import './services.scss'

const serviceImageFallback = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format'

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const stackRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const isFirstRender = useRef(true)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!stackRef.current) return

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
    const total = cards.length

    const updatePositions = (animate = false) => {
      cards.forEach((card, idx) => {
        if (isMobile) {
          // Modo mobile/tablet: desplazamiento horizontal (lógica original)
          const position = (idx - activeIndex + total) % total
          const isActive = position === 0
          const offset = position * 155
          const scale = isActive ? 1 : Math.max(0.85, 1 - position * 0.05)
          const zIndex = total - position

          if (animate) {
            gsap.to(card, {
              x: offset,
              y: isActive ? -32 : 0,
              scale,
              opacity: 1,
              zIndex,
              duration: 0.65,
              ease: 'power4.out',
            })
          } else {
            gsap.set(card, {
              x: offset,
              y: isActive ? -32 : 0,
              scale,
              opacity: 1,
              zIndex,
            })
          }
        } else {
          // Modo desktop: abanico fijo, solo cambia z-index/scale/opacity
          const x = idx * 220

          // Distancia física a la card activa
          const distance = Math.abs(idx - activeIndex)

          const isActive = distance === 0
          const isAdjacent = distance === 1

          const zIndex = total - distance
          const scale = isActive ? 1 : (isAdjacent ? 0.95 : 0.85)
          const opacity = 1

          if (animate) {
            gsap.to(card, {
              x,
              y: 0,
              scale,
              opacity,
              zIndex,
              duration: isActive ? 0.5 : 0.4,
              ease: isActive ? 'power3.out' : 'power2.inOut',
            })
          } else {
            gsap.set(card, {
              x,
              y: 0,
              scale,
              opacity,
              zIndex,
            })
          }
        }

        card.classList.toggle('service-card--active', isMobile ? (idx === activeIndex) : (idx === activeIndex))
      })
    }

    if (isFirstRender.current) {
      isFirstRender.current = false
      updatePositions(false)
    } else {
      updatePositions(true)
    }
  }, [activeIndex, isMobile])

  const goNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % services.length)
    setTimeout(() => setIsAnimating(false), isMobile ? 700 : 600)
  }

  const goPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
    setTimeout(() => setIsAnimating(false), isMobile ? 700 : 600)
  }

  useEffect(() => {
    const stack = stackRef.current
    if (!stack) return

    let touchStartX = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
    }
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext()
        else goPrev()
      }
    }

    stack.addEventListener('touchstart', handleTouchStart, { passive: true })
    stack.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      stack.removeEventListener('touchstart', handleTouchStart)
      stack.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <section className="services" id="servicios">
      <div className="services__header">
        <SectionLabel>ENTRENAMIENTOS</SectionLabel>
        <SectionTitle className="services__title">NUESTROS SERVICIOS</SectionTitle>
      </div>

      <div className="services__stack-wrapper">
        <button className="services__nav services__nav--prev" onClick={goPrev} aria-label="Servicio anterior">
          <ChevronLeft size={24} />
        </button>

        <div className="services__stack" ref={stackRef}>
          {services.map((service, idx) => (
            <div
              key={service.id}
              ref={(el) => { cardsRef.current[idx] = el }}
              className="service-card"
            >
              <img
                className="service-card__img"
                src={service.image}
                alt={service.name}
                loading="lazy"
                onError={(event) => {
                  const image = event.currentTarget
                  if (image.src !== serviceImageFallback) {
                    image.src = serviceImageFallback
                  }
                }}
              />
              <div className="service-card__overlay" />
              <div className="service-card__content">
                <div className="service-card__number">{idx + 1}</div>
                <h3 className="service-card__name">{service.name}</h3>
                <p className="service-card__desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="services__nav services__nav--next" onClick={goNext} aria-label="Siguiente servicio">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="services__counter">
        <span className="services__counter-current">{activeIndex + 1}</span>
        <span className="services__counter-sep">/</span>
        <span className="services__counter-total">{services.length}</span>
      </div>
    </section>
  )
}
