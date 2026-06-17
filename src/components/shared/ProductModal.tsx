import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import type { Product } from '@/types'
import { WHATSAPP_URL } from '@/constants'
import './productModal.scss'

const productReviews = [
  { name: 'Juan P.', rating: 5, text: 'Excelente producto, superó mis expectativas. Lo recomiendo 100%.' },
  { name: 'María G.', rating: 4, text: 'Muy buena calidad, llegó rápido. Solo le falta más variedad.' },
  { name: 'Carlos R.', rating: 5, text: 'Lo mejor que probé. Se nota la diferencia con otras marcas.' },
  { name: 'Ana L.', rating: 4, text: 'Calidad premium, el envase es muy práctico. Volvería a comprar.' },
  { name: 'Diego M.', rating: 5, text: 'Increíble relación precio-calidad. Ya es mi tercera compra.' },
  { name: 'Lucía F.', rating: 5, text: 'Producto de primera. El envío fue rápido y bien embalado.' },
]

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setSelectedImage(0)
      setSelectedSize(null)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  const formatPrice = (price: number) => {
    return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })
  }

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${product.name} (${formatPrice(product.price)}). ${selectedSize ? `Talle: ${selectedSize}.` : ''} ¿Está disponible?`
  )
  const whatsappLink = `${WHATSAPP_URL}?text=${whatsappMessage}`

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose} aria-label="Cerrar">
          <X size={20} />
        </button>

        <div className="product-modal__content">
          <div className="product-modal__gallery">
            <div className="product-modal__main-image">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
              />
            </div>
            {product.images.length > 1 && (
              <div className="product-modal__thumbnails">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`product-modal__thumb ${idx === selectedImage ? 'product-modal__thumb--active' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-modal__details">
            <span className="product-modal__tag">{product.tag}</span>
            <h2 className="product-modal__name">{product.name}</h2>

            <div className="product-modal__rating">
              <div className="product-modal__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    viewBox="0 0 20 20"
                    width={16}
                    height={16}
                    className={star <= Math.round(product.rating) ? 'product-modal__star--filled' : 'product-modal__star--empty'}
                  >
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.63l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>
              <span className="product-modal__rating-value">{product.rating}</span>
              <span className="product-modal__reviews-count">({product.reviews} opiniones)</span>
            </div>

            <div className="product-modal__price-row">
              <span className="product-modal__price">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="product-modal__original-price">{formatPrice(product.originalPrice)}</span>
              )}
              {product.originalPrice && (
                <span className="product-modal__discount">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            <p className="product-modal__description">{product.description}</p>

            {product.sizes && (
              <div className="product-modal__sizes">
                <span className="product-modal__sizes-label">TALLE</span>
                <div className="product-modal__sizes-list">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`product-modal__size ${selectedSize === size ? 'product-modal__size--active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="product-modal__cta"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              COMPRAR POR WHATSAPP
            </a>

            <div className="product-modal__info">
              <span>Envío a todo el país</span>
              <span>Stock disponible</span>
            </div>

            <div className="product-modal__reviews-section">
              <span className="product-modal__reviews-title">OPINIONES</span>
              <div className="product-modal__reviews-track">
                {[...productReviews, ...productReviews].map((review, idx) => (
                  <div key={idx} className="product-modal__review-card">
                    <div className="product-modal__review-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          viewBox="0 0 20 20"
                          width={12}
                          height={12}
                          className={star <= review.rating ? 'product-modal__review-star--filled' : 'product-modal__review-star--empty'}
                        >
                          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.63l5.34-.78L10 1z" />
                        </svg>
                      ))}
                    </div>
                    <p className="product-modal__review-text">"{review.text}"</p>
                    <span className="product-modal__review-name">{review.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}