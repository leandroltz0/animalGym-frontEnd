export interface Service {
  id: number
  name: string
  description: string
  image: string
}

export interface WhyUsItem {
  id: number
  title: string
  description: string
  image: string
}

export interface ScheduleBlock {
  id: number
  name: string
  time: string
  days: string
  tag: string
  barWidth: string
  icon: 'sun' | 'sunset' | 'moon' | 'star'
}

export interface Product {
  id: number
  name: string
  category: string
  tag: string
  image: string
}

export interface StoreCategory {
  id: string
  name: string
  subtitle: string
  image: string
  filterMap: string
}

export interface GalleryItem {
  id: number
  image: string
  alt: string
  category: string
  title: string
  description: string
}

export interface Trainer {
  id: number
  name: string
  specialties: string[]
  highlight: string
  role: string
  image: string
}

export type ProductFilter = 'todos' | 'remeras' | 'suplementos' | 'proteinas' | 'creatinas' | 'accesorios'
