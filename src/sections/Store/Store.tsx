import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { storeCategories, products, storeHeroSlides, productFilters } from '@/data/products'
import { WHATSAPP_URL } from '@/constants'
import { SectionLabel } from '@/components/shared'
import { ProductModal } from '@/components/shared/ProductModal'
import type { Product } from '@/types'
import { useCarousel } from '@/hooks/useCarousel'
import './store.scss'

export function Store() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
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
              <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
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
          {products.map((product) => {
            const whatsappMessage = encodeURIComponent(
              `Hola! Me interesa el producto: ${product.name} ($${product.price.toLocaleString('es-AR')}). ¿Está disponible?`
            )
            const whatsappLink = `${WHATSAPP_URL}?text=${whatsappMessage}`

            return (
              <div
                key={product.id}
                className="store__product-card"
                data-category={product.category}
              >
                <div className="store__product-image-area" onClick={() => setSelectedProduct(product)}>
                  <img
                    className={`store__product-image ${product.image.includes('/photos/clothes-photos/') ? 'store__product-image--clothing' : ''}`}
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  {product.originalPrice && (
                    <span className="store__product-badge">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                  <button className="store__product-favorite" aria-label="Agregar a favoritos">
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>

                <div className="store__product-body" onClick={() => setSelectedProduct(product)}>
                  <h4 className="store__product-name">{product.name}</h4>

                  <p className={`store__product-description ${product.originalPrice ? 'store__product-description--short' : ''}`}>
                    {product.description}
                  </p>

                  <div className="store__product-bottom">
                    <span className="store__product-price-label">PRICE</span>
                    <div className="store__product-price-cta-row">
                      <div className="store__product-price-col">
                        <div className="store__product-price-row">
                          <span className="store__product-price">
                            ${product.price.toLocaleString('es-AR')}
                          </span>
                        </div>
                        {product.originalPrice && (
                          <span className="store__product-original-price">
                            ${product.originalPrice.toLocaleString('es-AR')}
                          </span>
                        )}
                      </div>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="store__product-cta"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        COMPRAR
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
