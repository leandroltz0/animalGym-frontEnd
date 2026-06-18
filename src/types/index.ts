/**
 * types/index.ts
 *
 * Interfaces y tipos TypeScript centralizados de la aplicación.
 * Todos los datos y props de componentes deben tiparse usando estas definiciones.
 */

// ---------------------------------------------------------------------------
// Sección: Servicios
// ---------------------------------------------------------------------------

export interface Service {
  id: number
  /** Nombre del servicio (ej: 'POWERLIFTING') */
  name: string
  description: string
  /** Ruta local o URL de la imagen representativa */
  image: string
}

// ---------------------------------------------------------------------------
// Sección: ¿Por qué elegirnos?
// ---------------------------------------------------------------------------

export interface WhyUsItem {
  id: number
  title: string
  description: string
  image: string
}

// ---------------------------------------------------------------------------
// Sección: Horarios
// ---------------------------------------------------------------------------

export interface ScheduleBlock {
  id: number
  /** Nombre del bloque (ej: 'MAÑANA', 'TARDE') */
  name: string
  /** Rango horario formateado (ej: '08:00 – 12:00') */
  time: string
  /** Días en los que aplica (ej: 'LUN – VIE') */
  days: string
  /** Ancho de la barra de ocupación, como porcentaje CSS (ej: '75%') */
  barWidth: string
  /** Ícono visual representativo del turno */
  icon: 'sun' | 'sunset' | 'moon' | 'star'
}

// ---------------------------------------------------------------------------
// Sección: Tienda
// ---------------------------------------------------------------------------

export interface Product {
  id: number
  name: string
  /** Debe coincidir con un valor en `productFilters` de products.ts */
  category: string
  /** Badge corto de marketing (ej: '★ Nueva', '-20%') */
  tag: string
  /** Imagen principal del producto */
  image: string
  price: number
  /** Precio original antes de descuento (opcional) */
  originalPrice?: number
  description: string
  /** Lista de imágenes para la galería del modal de detalle */
  images: string[]
  sizes?: string[]
  rating: number
  reviews: number
}

export interface StoreCategory {
  id: string
  name: string
  subtitle: string
  image: string
  /** Filtra los productos al hacer clic (debe coincidir con Product.category) */
  filterMap: string
  /** Si es true, la categoría se muestra como "Próximamente" y no es clickeable */
  comingSoon?: boolean
}

// ---------------------------------------------------------------------------
// Sección: Galería
// ---------------------------------------------------------------------------

export interface GalleryItem {
  id: number
  image: string
  alt: string
  category: string
  title: string
  description: string
}

// ---------------------------------------------------------------------------
// Sección: Equipo
// ---------------------------------------------------------------------------

export interface Trainer {
  id: number
  name: string
  specialties: string[]
  highlight: string
  role: string
  image: string
}

// ---------------------------------------------------------------------------
// Tipos de utilidad
// ---------------------------------------------------------------------------

export type ProductFilter =
  | 'todos'
  | 'remeras'
  | 'suplementos'
  | 'proteinas'
  | 'creatinas'
  | 'accesorios'
