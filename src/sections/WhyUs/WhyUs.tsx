import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import { whyUsItems } from '@/data/whyUs'
import { SectionLabel, SectionTitle } from '@/components/shared'
import './whyUs.scss'

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(1)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (!navRef.current) return

    const items = navRef.current.querySelectorAll('.why-us__nav-item')
    items.forEach((item, idx) => {
      const position = idx - activeIndex
      gsap.to(item, {
        y: position * 84,
        scale: position === 0 ? 1 : 0.95,
        opacity: position === 0 ? 1 : 0.78,
        duration: 0.5,
        ease: 'power2.out',
      })
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
            {whyUsItems[1].title}
          </h3>
          <p className="why-us__text-desc" ref={descRef}>
            {whyUsItems[1].description}
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
        </div>

        <div className="why-us__nav" ref={navRef}>
          {whyUsItems.map((item, idx) => {
            const position = idx - activeIndex
            return (
              <div
                key={item.id}
                className={`why-us__nav-item ${
                  position === 0 ? 'why-us__nav-item--active' :
                  position < 0 ? 'why-us__nav-item--above' : 'why-us__nav-item--below'
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className="why-us__nav-item-text">{item.title}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
