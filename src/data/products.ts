/**
 * products.ts
 *
 * Datos estáticos de la tienda:
 * - storeCategories: categorías visibles en la barra de filtros circular
 * - products:        lista de productos disponibles
 * - storeHeroSlides: imágenes del banner principal de la tienda
 * - productFilters:  filtros de la grilla de productos
 *
 * Para agregar un producto nuevo, creá un objeto siguiendo la interfaz `Product`
 * en `src/types/index.ts` y agregalo al array `products`.
 */

import type { Product, StoreCategory } from '@/types'

// ---------------------------------------------------------------------------
// Categorías del selector circular (barra de íconos debajo del hero)
// ---------------------------------------------------------------------------

export const storeCategories: StoreCategory[] = [
  {
    id: 'remeras',
    name: 'REMERAS',
    subtitle: 'Más compradas',
    image: '/photos/clothes/shirt-removebg-preview.avif',
    filterMap: 'remeras',
  },
  {
    id: 'whey',
    name: 'WHEY PROTEIN',
    subtitle: 'Más vendidas',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=200&q=80',
    filterMap: 'proteinas',
    comingSoon: true,
  },
  {
    id: 'creatina',
    name: 'CREATINA',
    subtitle: 'Top elegida',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=200&q=80',
    filterMap: 'creatinas',
    comingSoon: true,
  },
  {
    id: 'pre-entreno',
    name: 'PRE ENTRENOS',
    subtitle: 'Energía al máximo',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=200&q=80',
    filterMap: 'suplementos',
    comingSoon: true,
  },
  {
    id: 'shakers',
    name: 'SHAKERS',
    subtitle: 'Imprescindibles',
    image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=200&q=80',
    filterMap: 'accesorios',
    comingSoon: true,
  },
  {
    id: 'colageno',
    name: 'COLÁGENO',
    subtitle: 'Recuperación total',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80',
    filterMap: 'suplementos',
    comingSoon: true,
  },
  {
    id: 'accesorios',
    name: 'ACCESORIOS',
    subtitle: 'Para tu rutina',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=200&q=80',
    filterMap: 'accesorios',
    comingSoon: true,
  },
]

// ---------------------------------------------------------------------------
// Productos disponibles para la venta
// ---------------------------------------------------------------------------

const shirtAnimalGym: Product = {
  id: 1,
  name: 'Shirt Animal Gym',
  category: 'remeras',
  tag: '★ Nueva',
  image: '/photos/clothes/shirt-removebg-preview.avif',
  price: 15000,
  description:
    'Shirt negra de Mítico Animal Gym con estampa oficial en la espalda. Cómoda para entrenar o usar todos los días.',
  images: ['/photos/clothes/shirt-removebg-preview.avif'],
  sizes: ['S', 'M', 'L', 'XL'],
  rating: 4.7,
  reviews: 32,
}

export const products: Product[] = [
  shirtAnimalGym,
]

// ---------------------------------------------------------------------------
// Banner / hero de la tienda (slideshow)
// Agregar más rutas de imágenes para activar el slider automático.
// ---------------------------------------------------------------------------

export const storeHeroSlides = [
  '/photos/clothes/c66d8dd2-0136-40d0-831d-87b33d589f4b.jpg',
]

// ---------------------------------------------------------------------------
// Filtros de la grilla de productos
// Deben coincidir con el campo `category` de cada Product.
// ---------------------------------------------------------------------------

export const productFilters = [
  'TODOS',
  'REMERAS',
  'SUPLEMENTOS',
  'PROTEÍNAS',
  'CREATINAS',
  'ACCESORIOS',
] as const
