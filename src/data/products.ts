import type { Product, StoreCategory } from '@/types'

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
  },
  {
    id: 'creatina',
    name: 'CREATINA',
    subtitle: 'Top elegida',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=200&q=80',
    filterMap: 'creatinas',
  },
  {
    id: 'pre-entreno',
    name: 'PRE ENTRENOS',
    subtitle: 'Energía al máximo',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=200&q=80',
    filterMap: 'suplementos',
  },
  {
    id: 'shakers',
    name: 'SHAKERS',
    subtitle: 'Imprescindibles',
    image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=200&q=80',
    filterMap: 'accesorios',
  },
  {
    id: 'colageno',
    name: 'COLÁGENO',
    subtitle: 'Recuperación total',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80',
    filterMap: 'suplementos',
  },
  {
    id: 'accesorios',
    name: 'ACCESORIOS',
    subtitle: 'Para tu rutina',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=200&q=80',
    filterMap: 'accesorios',
  },
]

const shirtProduct: Product = {
  id: 1,
  name: 'Shirt Animal Gym',
  category: 'remeras',
  tag: '★ Nueva',
  image: '/photos/clothes/shirt-removebg-preview.avif',
  price: 15000,
  description: 'Shirt negra de Mítico Animal Gym con estampa oficial en la espalda. Cómoda para entrenar o usar todos los días.',
  images: ['/photos/clothes/shirt-removebg-preview.avif'],
  sizes: ['S', 'M', 'L', 'XL'],
  rating: 4.7,
  reviews: 32,
}

export const products: Product[] = [
  shirtProduct,
]

export const storeHeroSlides = [
  '/photos/clothes/c66d8dd2-0136-40d0-831d-87b33d589f4b.jpg',
]

export const productFilters = [
  'TODOS',
  'REMERAS',
  'SUPLEMENTOS',
  'PROTEÍNAS',
  'CREATINAS',
  'ACCESORIOS',
] as const
