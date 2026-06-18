import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ExternalLink } from 'lucide-react'
import { galleryItems } from '@/data/gallery'
import { SectionLabel } from '@/components/shared'
import { useIsMobile } from '@/hooks/useMediaQuery'
import './gallery.scss'

export function Gallery() {
  const isMobile = useIsMobile()
  const sectionRef = useRef<HTMLDivElement>(null)
  const collageRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ctx = gsap.context(() => {
            gsap.fromTo(
              '.gallery__header',
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
            )

            if (collageRef.current) {
              const items = collageRef.current.querySelectorAll('.gallery__item')
              gsap.fromTo(
                items,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.6,
                  ease: 'power2.out',
                  stagger: 0.1,
                  delay: 0.3,
                }
              )
            }
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

  const scrollToSlide = (idx: number) => {
    if (!trackRef.current) return
    const items = trackRef.current.querySelectorAll('.gallery__carousel-item')
    if (!items[idx]) return

    const track = trackRef.current
    const item = items[idx]
    const trackRect = track.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()
    const scrollLeft = track.scrollLeft + (itemRect.left - trackRect.left) - (trackRect.width - itemRect.width) / 2

    track.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    setCurrentSlide(idx)
  }

  useEffect(() => {
    if (!trackRef.current || !isMobile) return

    const track = trackRef.current
    let timeout: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        const items = track.querySelectorAll('.gallery__carousel-item')
        const trackRect = track.getBoundingClientRect()
        const center = trackRect.left + trackRect.width / 2
        let closestIdx = 0
        let closestDistance = Infinity

        items.forEach((item, idx) => {
          const itemRect = item.getBoundingClientRect()
          const itemCenter = itemRect.left + itemRect.width / 2
          const distance = Math.abs(center - itemCenter)
          if (distance < closestDistance) {
            closestDistance = distance
            closestIdx = idx
          }
        })

        setCurrentSlide(closestIdx)
      }, 100)
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
    }
  }, [isMobile])

  return (
    <section className="gallery" id="galeria" ref={sectionRef}>
      <div className="gallery__inner">
        <div className="gallery__header">
          <SectionLabel>GALERÍA</SectionLabel>
          <h2 className="gallery__title">
            VIVÍ LA EXPERIENCIA <span className="accent">deportiva</span>
          </h2>
          <p className="gallery__subtitle">
            Conocé el lugar donde la disciplina, la comunidad y el progreso forman parte del día a día.
          </p>
          <a href="#" className="gallery__cta">
            VER MÁS FOTOS
            <ExternalLink size={14} />
          </a>
        </div>

        {!isMobile && (
          <div className="gallery__collage" ref={collageRef}>
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery__item">
                <img className="gallery__item-img" src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>
        )}
      </div>

      {isMobile && (
        <div className="gallery__carousel">
          <div className="gallery__carousel-track" ref={trackRef}>
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery__carousel-item">
                <img src={item.image} alt={item.alt} />
                <div className="gallery__carousel-item-overlay">
                  <span className="gallery__carousel-item-category">{item.category}</span>
                  <h3 className="gallery__carousel-item-title">{item.title}</h3>
                  <p className="gallery__carousel-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="gallery__carousel-dots">
            {galleryItems.map((_, idx) => (
              <div
                key={idx}
                className={`gallery__carousel-dot ${idx === currentSlide ? 'gallery__carousel-dot--active' : ''}`}
                onClick={() => scrollToSlide(idx)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
