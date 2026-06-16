import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { trainers } from '@/data/team'
import { SectionLabel } from '@/components/shared'
import './team.scss'

export function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const autoIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const duplicated = [...trainers, ...trainers]

  const getCardWidth = useCallback(() => {
    if (!carouselRef.current) return 300
    const card = carouselRef.current.querySelector('.team__card') as HTMLElement
    if (!card) return 300
    const style = window.getComputedStyle(carouselRef.current)
    const gap = parseInt(style.gap) || 20
    return card.offsetWidth + gap
  }, [])

  const setPosition = useCallback((animate = true) => {
    if (!carouselRef.current) return
    const cardWidth = getCardWidth()
    carouselRef.current.style.transition = animate ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
    carouselRef.current.style.transform = `translateX(${-currentIndex * cardWidth}px)`
  }, [currentIndex, getCardWidth])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1
      if (next >= trainers.length) {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none'
            carouselRef.current.style.transform = 'translateX(0px)'
          }
          setCurrentIndex(0)
        }, 620)
      }
      return next
    })
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        const resetIdx = trainers.length - 1
        if (carouselRef.current) {
          const cardWidth = getCardWidth()
          carouselRef.current.style.transition = 'none'
          carouselRef.current.style.transform = `translateX(${-resetIdx * cardWidth}px)`
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
                carouselRef.current.style.transform = `translateX(${-(resetIdx - 1) * cardWidth}px)`
              }
              setCurrentIndex(resetIdx - 1)
            })
          })
        }
        return prev
      }
      return prev - 1
    })
  }, [getCardWidth])

  const startAuto = useCallback(() => {
    if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
    autoIntervalRef.current = setInterval(goNext, 3500)
  }, [goNext])

  const resetAuto = useCallback(() => {
    if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
    startAuto()
  }, [startAuto])

  useEffect(() => {
    startAuto()
    return () => {
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
    }
  }, [startAuto])

  useEffect(() => {
    const wrapper = carouselRef.current?.parentElement
    if (!wrapper) return

    const handleEnter = () => {
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
    }
    const handleLeave = () => startAuto()

    wrapper.addEventListener('mouseenter', handleEnter)
    wrapper.addEventListener('mouseleave', handleLeave)

    return () => {
      wrapper.removeEventListener('mouseenter', handleEnter)
      wrapper.removeEventListener('mouseleave', handleLeave)
    }
  }, [startAuto])

  useEffect(() => {
    const wrapper = carouselRef.current?.parentElement
    if (!wrapper) return

    let touchStartX = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current)
    }
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].clientX
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext()
        else goPrev()
      }
      startAuto()
    }

    wrapper.addEventListener('touchstart', handleTouchStart, { passive: true })
    wrapper.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      wrapper.removeEventListener('touchstart', handleTouchStart)
      wrapper.removeEventListener('touchend', handleTouchEnd)
    }
  }, [goNext, goPrev, startAuto])

  useEffect(() => {
    setPosition(true)
  }, [currentIndex, setPosition])

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ctx = gsap.context(() => {
            gsap.fromTo(
              '.team__header',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
            )
            gsap.fromTo(
              '.team__carousel-wrapper',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 }
            )
            gsap.fromTo(
              '.team__community',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.4 }
            )
          }, sectionRef)

          observer.unobserve(entry.target)
          return () => ctx.revert()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleResize = () => setPosition(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setPosition])

  return (
    <section className="team" id="equipo" ref={sectionRef}>
      <div className="team__line" />
      <div className="team__inner">
        <div className="team__header">
          <div className="team__header-text">
            <SectionLabel>EL EQUIPO ANIMAL</SectionLabel>
            <h2 className="team__title">CONOCÉ A TUS ENTRENADORES</h2>
            <p className="team__desc">
              Profesionales comprometidos con acompañarte en cada paso de tu transformación.
            </p>
          </div>
          <div className="team__nav">
            <button className="team__nav-btn team__nav-btn--prev" onClick={() => { goPrev(); resetAuto() }} aria-label="Anterior">
              <ChevronLeft size={18} />
            </button>
            <button className="team__nav-btn team__nav-btn--next" onClick={() => { goNext(); resetAuto() }} aria-label="Siguiente">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="team__carousel-wrapper">
          <div className="team__carousel" ref={carouselRef}>
            {duplicated.map((trainer, idx) => (
              <div key={`${trainer.id}-${idx}`} className="team__card">
                <img className="team__card-img" src={trainer.image} alt={trainer.name} />
                <div className="team__card-overlay" />
                <div className="team__card-body">
                  <div className="team__card-name">{trainer.name}</div>
                  <div className="team__card-tags">
                    {trainer.specialties.map((spec) => (
                      <span
                        key={spec}
                        className={`team__tag ${spec === trainer.highlight ? 'team__tag--highlight' : ''}`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="team__card-role">{trainer.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="team__community">
          <span className="team__community-text">
            SOMOS MÁS QUE UN GIMNASIO, SOMOS <span className="accent">COMUNIDAD</span>.
          </span>
        </div>
      </div>
    </section>
  )
}
