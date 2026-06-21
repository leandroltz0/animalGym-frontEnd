/**
 * constants/index.ts
 *
 * Constantes globales del proyecto Animal Gym.
 * Centralizar aquí todos los datos de contacto, URLs y configuración
 * evita tener que buscarlos esparcidos por el código.
 *
 * ⚠️ Si necesitás cambiar el número de WhatsApp, la dirección o las redes
 * sociales, este es el ÚNICO archivo que hay que editar.
 */

// ---------------------------------------------------------------------------
// Contacto
// ---------------------------------------------------------------------------

export const WHATSAPP_NUMBER = '5491121589890'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const PHONE_DISPLAY = '+54 9 11 2158-9890'
export const ADDRESS = '25 de Mayo 14'
export const ADDRESS_FULL = '25 de Mayo 14, Paso del Rey, Buenos Aires'
export const CITY = 'Paso del Rey, Buenos Aires'

// ---------------------------------------------------------------------------
// Horarios de atención
// ---------------------------------------------------------------------------

export const SCHEDULE = {
  weekdays: 'Lun – Vie: 08:00 – 21:30',
  saturday: 'Sáb: 10:00 – 17:00',
}

// ---------------------------------------------------------------------------
// Redes sociales
// ---------------------------------------------------------------------------

export const SOCIAL = {
  instagram: 'https://www.instagram.com/mitico.animal.gym/',
  tiktok: 'https://tiktok.com/@miticoanimalgym',
  whatsapp: WHATSAPP_URL,
}

// ---------------------------------------------------------------------------
// Navegación principal
// El orden de este array determina el orden del menú en desktop y mobile.
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { label: 'Inicio',    href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Horarios',  href: '#horarios' },
  { label: 'Tienda',    href: '#tienda' },
  { label: 'Galería',   href: '#galeria' },
  { label: 'Contacto',  href: '#contacto' },
] as const

// ---------------------------------------------------------------------------
// Google Maps
// ---------------------------------------------------------------------------

export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168826894326!2d-58.8197!3d-34.6183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a838e8c82d3b1b%3A0x5c1b4c5d6e7f8a9!2s25+de+Mayo+14%2C+Paso+del+Rey%2C+Buenos+Aires!5e0!3m2!1ses-419!2sar!4v1718000000000!5m2!1ses-419!2sar'

export const MAP_DIRECTIONS_URL =
  'https://maps.google.com/?q=25+de+Mayo+14+Paso+del+Rey+Buenos+Aires'

// ---------------------------------------------------------------------------
// Assets
// ---------------------------------------------------------------------------

export const LOGO_URL = '/icons/icon.png'
