# 🐺 Mítico Animal Gym — Frontend

Sitio web oficial del gimnasio **Mítico Animal Gym**, ubicado en Paso del Rey, Buenos Aires. Desarrollado con React + TypeScript + Vite y SCSS modular.

---

## 🚀 Stack tecnológico

| Herramienta | Versión | Uso |
|---|---|---|
| React | 19 | UI y estado del componente |
| TypeScript | 6 | Tipado estático |
| Vite | 8 | Bundler y dev server |
| SASS/SCSS | 1.x | Estilos modulares |
| GSAP | 3.x | Animaciones y transiciones |
| Lucide React | 1.x | Iconografía |

---

## 📁 Estructura del proyecto

```
src/
├── components/            # Componentes reutilizables
│   ├── layout/            # Navbar, MobileMenu, Footer
│   ├── shared/            # SectionLabel, SectionTitle, ProductModal, SVGFilters, SocialIcons
│   └── ui/                # Componentes UI genéricos (botones, inputs, etc.)
│
├── sections/              # Cada sección de la página (una carpeta = una sección)
│   ├── Hero/              # Pantalla principal con video/imagen de fondo
│   ├── Services/          # Carrusel de servicios del gym
│   ├── WhyUs/             # Por qué elegir Mítico Animal Gym
│   ├── Schedule/          # Horarios de atención con imagen lateral
│   ├── Store/             # Tienda online (remeras, suplementos, etc.)
│   ├── Gallery/           # Galería fotográfica collage
│   ├── Team/              # Presentación del equipo de entrenadores
│   └── Contact/           # Formulario de contacto y mapa
│
├── data/                  # Datos estáticos de la aplicación
│   ├── index.ts           # Barrel: re-exporta todos los datos
│   ├── services.ts        # Lista de servicios del gym
│   ├── products.ts        # Productos de la tienda + categorías + filtros
│   ├── gallery.ts         # Ítems de la galería fotográfica
│   ├── schedule.ts        # Bloques de horarios
│   ├── team.ts            # Miembros del equipo
│   └── whyUs.ts           # Tarjetas "por qué elegirnos"
│
├── hooks/                 # Custom hooks de React
│   ├── index.ts           # Barrel: re-exporta todos los hooks
│   ├── useCarousel.ts     # Lógica de carrusel con autoplay
│   ├── useMediaQuery.ts   # Detección de breakpoints responsive
│   ├── useScrollReveal.ts # Animaciones de entrada al hacer scroll
│   └── useScrollSpy.ts    # Detecta la sección activa en el scroll
│
├── constants/
│   └── index.ts           # Constantes globales: teléfono, URLs, redes, horarios, navbar
│
├── types/
│   └── index.ts           # Interfaces y tipos TypeScript de toda la app
│
├── styles/                # Sistema de diseño global en SCSS
│   ├── _variables.scss    # Colores, fuentes, radios, espaciados
│   ├── _mixins.scss       # Mixins reutilizables (respond-to, glassmorphism, etc.)
│   ├── _reset.scss        # Reset CSS base
│   ├── _global.scss       # Estilos globales del body y html
│   ├── _typography.scss   # Estilos base de texto
│   └── index.scss         # Entry point de estilos (importa todo lo anterior)
│
├── App.tsx                # Composición principal de la página
├── main.tsx               # Entry point de React
└── index.css              # CSS global mínimo (variables CSS y reset adicional)
```

---

## ⚡ Guía de inicio rápido

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd animalGym-frontEnd

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

---

## 📜 Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Build de producción (TypeScript check + Vite build)
npm run preview   # Previsualizar el build de producción localmente
npm run lint      # Linter con ESLint
```

---

## 🗂️ Convenciones del proyecto

### Nomenclatura de archivos
- **Componentes React**: `PascalCase.tsx` (ej: `Navbar.tsx`, `ProductModal.tsx`)
- **Estilos del componente**: `camelCase.scss` co-ubicados en la misma carpeta (ej: `navbar.scss`)
- **Datos y utilidades**: `camelCase.ts` (ej: `products.ts`, `useCarousel.ts`)
- **Estilos globales**: `_nombre.scss` con guion bajo (convención SCSS de partials)

### Estilos
- Cada componente/sección tiene su propio archivo `.scss` en la misma carpeta.
- Los estilos usan la metodología **BEM** (`block__element--modifier`).
- Las variables de diseño (colores, fuentes, breakpoints) están centralizadas en `styles/_variables.scss`.
- Los mixins de utilidad (responsive, glassmorphism, heading-font) están en `styles/_mixins.scss`.

### Imports
- El alias `@/` apunta a `src/` para evitar imports relativos largos.
  - ✅ `import { useCarousel } from '@/hooks'`
  - ❌ `import { useCarousel } from '../../../hooks/useCarousel'`

### Datos
- Todos los datos estáticos (servicios, productos, galería, etc.) viven en `src/data/`.
- Para agregar un nuevo producto o servicio, **solo se edita el archivo de datos correspondiente**, sin tocar los componentes.

---

## 🎨 Sistema de diseño

### Paleta de colores (definida en `_variables.scss`)
| Variable | Color | Uso |
|---|---|---|
| `$red` | `#E02020` | Color primario / acento |
| `$black` | `#080808` | Fondo principal |
| `$white` | `#FFFFFF` | Textos principales |
| `$dark-gray` | `#111111` | Fondos de cards |
| `$muted` | `rgba(white, 0.45)` | Textos secundarios |

### Breakpoints responsive
| Nombre | Ancho máximo | Dispositivo |
|---|---|---|
| `md` | 768px | Mobile |
| `lg` | 1024px | Tablet / Laptop pequeño |

---

## 🖼️ Assets

Los assets públicos se organizan en `public/photos/`:

```
public/
├── icons/                         # Logo e íconos de la app
├── photos/
│   ├── gallery/                   # Fotos del gimnasio para la galería (image1.avif … imageN.avif)
│   ├── trainers/
│   │   └── section-services/      # Fotos de cada servicio (powerlifting.avif, spinning.avif, etc.)
│   └── clothes/                   # Fotos de ropa de la tienda
└── videos/                        # Video de fondo del hero (mobile)
```

> **Formato preferido**: `.avif` para máxima compresión y calidad. Usar `.jpg` solo cuando el `.avif` no esté disponible.

---

## 📞 Datos de contacto del gimnasio

Editá el archivo `src/constants/index.ts` para actualizar cualquier dato de contacto, horarios o redes sociales sin necesidad de tocar los componentes.

```ts
// src/constants/index.ts
export const WHATSAPP_NUMBER = '5491131920565'
export const ADDRESS = '25 de Mayo 14'
export const CITY = 'Paso del Rey, Buenos Aires'
// ...etc
```

---

## 🤝 Contribuir

1. Crear una rama desde `main`: `git checkout -b feature/nombre-del-cambio`
2. Realizar los cambios siguiendo las convenciones del proyecto
3. Hacer commit con mensajes descriptivos en español o inglés
4. Abrir un Pull Request describiendo qué se cambió y por qué

---

*Desarrollado con 💪 para Mítico Animal Gym — Paso del Rey, Buenos Aires.*
