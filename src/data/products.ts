import type { Product, StoreCategory } from '@/types'

export const storeCategories: StoreCategory[] = [
  {
    id: 'remeras',
    name: 'REMERAS',
    subtitle: 'Más compradas',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80',
    filterMap: 'remeras',
  },
  {
    id: 'whey',
    name: 'WHEY PROTEIN',
    subtitle: 'Más vendidas',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2c9cf?w=200&q=80',
    filterMap: 'proteinas',
  },
  {
    id: 'creatina',
    name: 'CREATINA',
    subtitle: 'Top elegida',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c1b5d0c0c?w=200&q=80',
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

export const products: Product[] = [
  {
    id: 1,
    name: 'Remera Classic Animal Gym',
    category: 'remeras',
    tag: '★ Más comprada',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
  },
  {
    id: 2,
    name: 'Whey Protein Animal 2KG',
    category: 'proteinas',
    tag: '★ Más vendida',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2c9cf?w=400&q=80',
  },
  {
    id: 3,
    name: 'Creatina Monohidrato 300g',
    category: 'creatinas',
    tag: '★ Top elegida',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c1b5d0c0c?w=400&q=80',
  },
  {
    id: 4,
    name: 'Pre Entreno Animal Power',
    category: 'suplementos',
    tag: '★ Energía al máximo',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&q=80',
  },
  {
    id: 5,
    name: 'Pack 2 Remeras Animal Gym',
    category: 'remeras',
    tag: '★ En tendencia',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80',
  },
  {
    id: 6,
    name: 'Shaker Animal Gym',
    category: 'accesorios',
    tag: '★ Imprescindible',
    image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=400&q=80',
  },
]

export const storeHeroSlides = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
  'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80',
  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1200&q=80',
]

export const productFilters = [
  'TODOS',
  'REMERAS',
  'SUPLEMENTOS',
  'PROTEÍNAS',
  'CREATINAS',
  'ACCESORIOS',
] as const
