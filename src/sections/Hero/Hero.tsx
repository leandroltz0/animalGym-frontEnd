import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MessageCircle, ArrowRight, ChevronDown } from 'lucide-react'
import { WHATSAPP_URL } from '@/constants'
import { SVGFilters } from '@/components/shared/SVGFilters'
import './hero.scss'

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
        <div className="hero__bg-img" />
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
            <MessageCircle size={16} />
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
