import type { Product, StoreCategory } from '@/types'

export const storeCategories: StoreCategory[] = [
  {
    id: 'remeras',
    name: 'REMERAS',
    subtitle: 'Más compradas',
    image: '/photos/clothes-photos/shirt-removebg-preview.png',
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

export const products: Product[] = [
  {
    id: 1,
    name: 'Remera Classic Animal Gym',
    category: 'remeras',
    tag: '★ Más comprada',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
    price: 25000,
    originalPrice: 32000,
    description: 'Remera de algodón premium con estampado Animal Gym. Corte regular, tela suave y transpirable.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 142,
  },
  {
    id: 2,
    name: 'Whey Protein Animal 2KG',
    category: 'proteinas',
    tag: '★ Más vendida',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&q=80',
    price: 65000,
    description: 'Proteína de suero de alta calidad, 24g por porción. Sabor chocolate intenso, baja en grasa.',
    images: [
      'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: 'Creatina Monohidrato 300g',
    category: 'creatinas',
    tag: '★ Top elegida',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    price: 35000,
    description: 'Creatina monohidrato pura micronizada. Mejora fuerza, potencia y rendimiento.',
    images: [
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 4,
    name: 'Pre Entreno Animal Power',
    category: 'suplementos',
    tag: '★ Energía al máximo',
    image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&q=80',
    price: 28000,
    description: 'Pre-entreno con cafeína, beta-alanina y citrulina. Energía sostenida sin picos.',
    images: [
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    ],
    rating: 4.4,
    reviews: 67,
  },
  {
    id: 5,
    name: 'Shirt Animal Gym',
    category: 'remeras',
    tag: '★ Nueva',
    image: '/photos/clothes-photos/shirt-removebg-preview.png',
    price: 15000,
    description: 'Shirt negra de Mítico Animal Gym con estampa oficial en la espalda. Cómoda para entrenar o usar todos los días.',
    images: [
      '/photos/clothes-photos/shirt-removebg-preview.png',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviews: 32,
  },
  {
    id: 6,
    name: 'Shaker Animal Gym 700ml',
    category: 'accesorios',
    tag: '★ Imprescindible',
    image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=400&q=80',
    price: 12000,
    description: 'Shaker de 700ml con mezclador de acero. Libre de BPA, a prueba de derrames.',
    images: [
      'https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=800&q=80',
    ],
    rating: 4.3,
    reviews: 54,
  },
]

export const storeHeroSlides = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
  'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80',
  '/photos/clothes-photos/shirt-removebg-preview.png',
]

export const productFilters = [
  'TODOS',
  'REMERAS',
  'SUPLEMENTOS',
  'PROTEÍNAS',
  'CREATINAS',
  'ACCESORIOS',
] as const
