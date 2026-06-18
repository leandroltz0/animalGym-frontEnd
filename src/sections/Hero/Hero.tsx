import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { WHATSAPP_URL } from '@/constants'
import { SVGFilters } from '@/components/shared/SVGFilters'
import './hero.scss'

const heroImage = '/photos/trainers-photos/galery-photos/animalgymimagen.jpeg'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.fromTo('.hero__eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2 })
        .fromTo('.hero__title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.25')
        .fromTo('.hero__title-red', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.35')
        .fromTo('.hero__subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('.hero__buttons', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.25')
        .fromTo('.hero__avatars-row', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToServices = () => {
    const target = document.getElementById('servicios')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero" id="hero" ref={heroRef}>
      <SVGFilters />

      <div className="hero__bg">
        <img className="hero__bg-img" src={heroImage} alt="Interior de Mítico Animal Gym" />
        <div className="hero__red-glow" />
        <div className="hero__red-glow-top" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">EL CAMBIO ES HOY</p>
        <h1 className="hero__title">DESPERTÁ TU<br />INSTINTO</h1>
        <h2 className="hero__title-red">SUPERA TUS LÍMITES</h2>
        <p className="hero__subtitle">
          Entrenamientos únicos para cada deporte.<br />
          Fuerza, disciplina y comunidad.
        </p>

        <div className="hero__buttons">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            QUIERO EMPEZAR AHORA
            <ArrowRight size={14} />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            ESCRIBINOS POR WHATSAPP
          </a>
        </div>

        <div className="hero__avatars-row">
          <div className="hero__avatars">
            <div className="hero__avatar"><div className="hero__avatar-inner hero__avatar-inner--1" /></div>
            <div className="hero__avatar"><div className="hero__avatar-inner hero__avatar-inner--2" /></div>
            <div className="hero__avatar"><div className="hero__avatar-inner hero__avatar-inner--3" /></div>
          </div>
          <span className="hero__avatars-text">+2 SEMANAS<br />DE PURA DISCIPLINA</span>
        </div>
      </div>

      <div className="hero__side-number">
        <span className="hero__side-number-text">01</span>
        <div className="hero__side-number-line" />
      </div>

      <div className="hero__bottom-right">
        ÚNETE A LA MANADA<br />Y TRANSFORMÁ TU VIDA.
      </div>

      <button className="hero__scroll-indicator" onClick={scrollToServices} aria-label="Ir a servicios">
        <ChevronDown size={16} />
      </button>
    </div>
  )
}
