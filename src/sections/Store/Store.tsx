import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { storeCategories, products, storeHeroSlides, productFilters } from '@/data/products'
import { WHATSAPP_URL } from '@/constants'
import { SectionLabel } from '@/components/shared'
import { useCarousel } from '@/hooks/useCarousel'
import './store.scss'

export function Store() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const sectionRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  const { current: currentSlide, next: nextSlide, prev: prevSlide, goTo: goToSlide } = useCarousel({
    total: storeHeroSlides.length,
    autoplay: true,
    autoplayInterval: 5000,
  })

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    
    if (!productsRef.current) return

    const cards = productsRef.current.querySelectorAll('.store__product-card')
    cards.forEach((card) => {
      const category = card.getAttribute('data-category')
      if (filter === 'todos' || category === filter) {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
          display: 'block',
        })
      } else {
        gsap.to(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: 'power2.out',
          display: 'none',
        })
      }
    })
  }

  const handleCategoryClick = (filterMap: string) => {
    handleFilterClick(filterMap)
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ctx = gsap.context(() => {
            gsap.fromTo(
              '.store__hero-content',
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
            )
            gsap.fromTo(
              '.store__hero-carousel',
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 }
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

  return (
    <section className="store" id="tienda" ref={sectionRef}>
      <div className="store__hero">
        <div className="store__hero-inner">
          <div className="store__hero-overlay" />

          <div className="store__hero-content">
            <h2 className="store__hero-title">
              VESTÍ LA<br />
              MENTALIDAD<br />
              <span className="store__hero-title-red">ANIMAL</span>
            </h2>
            <p className="store__hero-desc">
              Remeras exclusivas para quienes entrenan diferente.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="store__hero-cta">
              CONSULTAR POR WHATSAPP
              <MessageCircle size={16} />
            </a>
          </div>

          <div className="store__hero-carousel">
            {storeHeroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`store__hero-slide ${idx === currentSlide ? 'store__hero-slide--active' : ''}`}
              >
                <div
                  className="store__hero-slide-img"
                  style={{ backgroundImage: `url(${slide})` }}
                />
              </div>
            ))}
          </div>

          <button className="store__hero-arrow store__hero-arrow--prev" onClick={prevSlide} aria-label="Anterior">
            <ChevronLeft size={18} />
          </button>
          <button className="store__hero-arrow store__hero-arrow--next" onClick={nextSlide} aria-label="Siguiente">
            <ChevronRight size={18} />
          </button>

          <div className="store__hero-dots">
            {storeHeroSlides.map((_, idx) => (
              <span
                key={idx}
                className={`store__hero-dot ${idx === currentSlide ? 'store__hero-dot--active' : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="store__categories">
        {storeCategories.map((cat) => (
          <div
            key={cat.id}
            className="store__category"
            onClick={() => handleCategoryClick(cat.filterMap)}
          >
            <div
              className="store__category-img"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <span className="store__category-name">{cat.name}</span>
            <span className="store__category-sub">{cat.subtitle}</span>
          </div>
        ))}
      </div>

      <div className="store__products">
        <div className="store__products-header">
          <div className="store__products-header-left">
            <div className="store__products-title-group">
              <SectionLabel>TIENDA ANIMAL</SectionLabel>
              <h3 className="store__products-title">
                PRODUCTOS<br />
                DESTACADOS
              </h3>
            </div>
            <div className="store__products-filters">
              {productFilters.map((filter) => {
                const filterValue = filter.toLowerCase().replace('í', 'i')
                return (
                  <button
                    key={filter}
                    className={`store__filter ${activeFilter === filterValue ? 'store__filter--active' : ''}`}
                    onClick={() => handleFilterClick(filterValue)}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>
          <a href="#" className="store__products-see-all">
            VER TODOS
            <ChevronRight size={16} />
          </a>
        </div>

        <div className="store__products-grid" ref={productsRef}>
          {products.map((product) => (
            <div
              key={product.id}
              className="store__product-card"
              data-category={product.category}
            >
              <div
                className="store__product-img"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="store__product-info">
                <h4 className="store__product-name">{product.name}</h4>
                <span className="store__product-tag">{product.tag}</span>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="store__product-cta">
                CONSULTAR
                <MessageCircle size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
