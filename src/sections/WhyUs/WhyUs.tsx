import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Play } from 'lucide-react'
import { whyUsItems } from '@/data/whyUs'
import { SectionLabel, SectionTitle } from '@/components/shared'
import './whyUs.scss'

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!titleRef.current || !descRef.current) return

    const item = whyUsItems[activeIndex]

    gsap.to([titleRef.current, descRef.current], {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        if (titleRef.current) titleRef.current.textContent = item.title
        if (descRef.current) descRef.current.textContent = item.description
        gsap.fromTo(
          [titleRef.current, descRef.current],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.1 }
        )
      },
    })
  }, [activeIndex])

  return (
    <section className="why-us" id="porque">
      <div className="why-us__header">
        <SectionLabel>POR QUÉ ELEGIRNOS</SectionLabel>
        <SectionTitle>¿POR QUÉ ENTRENAR EN MÍTICO?</SectionTitle>
      </div>

      <div className="why-us__content">
        <div className="why-us__text">
          <h3 className="why-us__text-title" ref={titleRef}>
            {whyUsItems[0].title}
          </h3>
          <p className="why-us__text-desc" ref={descRef}>
            {whyUsItems[0].description}
          </p>
        </div>

        <div className="why-us__image-wrapper">
          {whyUsItems.map((item, idx) => (
            <div
              key={item.id}
              className={`why-us__image ${idx === activeIndex ? 'why-us__image--active' : ''}`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
          <div className="why-us__image-overlay" />
          <div className="why-us__image-play">
            <div className="why-us__image-play-circle">
              <Play size={24} fill="currentColor" />
            </div>
            <span className="why-us__image-play-text">VER VIDEO</span>
          </div>
        </div>

        <div className="why-us__nav">
          {whyUsItems.map((item, idx) => (
            <div
              key={item.id}
              className={`why-us__nav-item ${idx === activeIndex ? 'why-us__nav-item--active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="why-us__nav-indicator" />
              <span className="why-us__nav-item-text">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
