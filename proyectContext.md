# MÍTICO ANIMAL GYM — CONTEXTO DEL PROYECTO

## Visión general

Mítico Animal Gym es un gimnasio ubicado en Paso del Rey, Buenos Aires. La página web debe transmitir fuerza, comunidad, disciplina y profesionalismo.

El objetivo inicial es crear una **landing page premium**, pero la arquitectura debe permitir evolucionar hacia un **producto escalable**, incluyendo:

* Registro e inicio de sesión.
* Gestión de membresías.
* Tienda online.
* Integración con Mercado Pago.
* Panel administrativo.
* Gestión de pagos.
* Consumo de APIs.
* Posible expansión a aplicación web completa.

---

# Stack tecnológico

## Frontend

* React
* TypeScript
* Vite
* React Compiler

## Backend

* Spring Boot
* Spring Security
* JWT
* PostgreSQL

---

# Librerías del frontend

## UI

* shadcn/ui
* Tailwind CSS
* Lucide React

## Animaciones

* GSAP
* GSAP ScrollTrigger

## Manejo de estado

* Zustand

## Peticiones HTTP

* TanStack Query

## Formularios

* React Hook Form
* Zod

## Navegación

* React Router

---

# Filosofía de diseño

La web NO debe parecer una plantilla genérica de gimnasio.

Debe sentirse:

* Premium.
* Moderna.
* Potente.
* Artesanal.
* Cinematográfica.
* Oscura.
* Elegante.

Inspiraciones:

* Nike.
* Gymshark.
* Marcas fitness premium.
* Landing pages modernas con GSAP.

---

# Identidad visual

## Paleta principal

Negro profundo:

```css
#050505
```

Rojo institucional:

```css
#C1121F
```

Blanco roto:

```css
#F5F5F5
```

Gris oscuro:

```css
#1A1A1A
```

Gris secundario:

```css
#2D2D2D
```

---

# Tipografías

## Títulos

Bebas Neue.

Características:

* Condensada.
* Fuerte.
* Deportiva.

---

## Textos

Inter.

Características:

* Moderna.
* Muy legible.
* Profesional.

---

# Animaciones

Todas las animaciones deben realizarse con GSAP.

Las animaciones deben sentirse:

* Suaves.
* Premium.
* Elegantes.

Evitar:

* Rebotes exagerados.
* Animaciones infantiles.

---

# Navbar

Debe incluir:

* Inicio
* Servicios
* ¿Por qué elegirnos?
* Horarios
* Tienda
* Galería
* Contacto

Botón CTA:

```txt
ESCRIBINOS
```

Características:

* Sticky.
* Fondo oscuro.
* Blur sutil.
* Hover elegante.

---

# Hero

Debe ser la sección más impactante.

Inspiración:

Persona entrenando intensamente con una remera que diga "MÍTICO".

Características:

* Fotografía cinematográfica.
* Mucho contraste.
* Fondo oscuro.
* Tipografía Bebas Neue.

Debe transmitir:

```txt
Entrená diferente.
Convertite en tu mejor versión.
```

---

# Servicios

Diseño tipo "stacked cards".

Características:

* Cartas apiladas.
* Desplazadas hacia la derecha.
* Navegación mediante flechas.

Cada card debe contener:

* Imagen protagonista.
* Degradado negro.
* Nombre del servicio.
* Descripción breve.

Animaciones GSAP entre transiciones.

Servicios ejemplo:

* Musculación.
* Powerlifting.
* Entrenamiento funcional.
* Clases grupales.

---

# ¿Por qué elegirnos?

Inspiración:

Sección interactiva.

Estructura:

Texto izquierda.
↓

Imagen central.
↓

Navegación derecha.

Cuando cambia la opción:

* cambia el texto,
* cambia la imagen,
* cambia el indicador.

Animaciones GSAP.

---

# Horarios

Concepto:

"Encontrá tu momento."

No utilizar tablas aburridas.

Diseño:

Información clara.
↓

Imagen de una persona entrenando.

Transmitir flexibilidad.

---

# Tienda

Inspiración:

E-commerce fitness premium.

Elementos obligatorios:

## Hero interno

Slider.

Slide 1:

Remeras Animal Gym.

Slide 2:

Suplementos.

Slide 3:

Personas utilizando productos.

---

## Categorías circulares

Mostrar productos populares.

Ejemplos:

* Remeras.
* Whey.
* Creatina.
* Pre entrenos.
* Shakers.

---

## Productos destacados

Filtros:

* Todos.
* Remeras.
* Suplementos.
* Proteínas.
* Accesorios.

Cards con:

* Imagen.
* Nombre.
* Precio.
* Botón WhatsApp.

---

## Fondo

Oscuro.

Con textura premium.

Líneas diagonales rojas muy sutiles.

Inspirado en acero, grafito y concreto.

---

# Galería

Desktop:

Collage dinámico.

Evitar cuadrículas aburridas.

Mobile:

Scroll horizontal.

Categorías sugeridas:

* Equipamiento.
* Comunidad.
* Powerlifting.
* Clases.
* Personas utilizando productos.

---

# Entrenadores

Ubicación:

Dentro de Galería.

NO como sección independiente.

Inspiración:

Cards tipo "Meet our Expert Trainers".

Características:

* Scroll infinito horizontal.
* Movimiento continuo.
* Cards elegantes.

Contenido:

* Foto.
* Nombre.
* Especialidades.

Ejemplos:

* Powerlifting.
* Musculación.
* Cardio.
* Funcional.

---

# Contacto

Distribución:

40% información.
60% mapa.

NO utilizar una mega card contenedora.

Mapa protagonista.

Contenido:

* Dirección.
* WhatsApp.
* Horarios.
* CTA principal.

Tarjeta flotante sobre el mapa.

Glassmorphism oscuro.

---

# Footer

Debe ser uno de los elementos más memorables.

NO utilizar footer tradicional.

Características:

* Gran curva superior.
* Contenedor independiente.
* Bordes redondeados.
* Mucho espacio interno.

Contenido:

## Logo

MÍTICO ANIMAL GYM.

---

## Frase institucional

```txt
Entrená como una bestia.
Construí tu mejor versión.
```

---

## Navegación

* Inicio
* Servicios
* Horarios
* Tienda
* Galería
* Contacto

---

## Información

* Dirección.
* WhatsApp.
* Horarios.

---

## Redes

* Instagram.
* WhatsApp.
* TikTok.

---

# Responsive

La experiencia móvil es PRIORIDAD.

Desktop:

Experiencia premium.

Tablet:

Adaptación cuidadosa.

Mobile:

Todo debe sentirse nativo.

Evitar:

* Elementos diminutos.
* Scrolls incómodos.
* Interfaces sobrecargadas.

---

# Estructura recomendada del proyecto

```txt
src/
│
├── assets/
├── components/
│
├── sections/
│   ├── Hero/
│   ├── Services/
│   ├── WhyChooseUs/
│   ├── Schedule/
│   ├── Store/
│   ├── Gallery/
│   ├── Trainers/
│   ├── Contact/
│   └── Footer/
│
├── pages/
├── routes/
├── layouts/
├── hooks/
├── services/
├── store/
├── types/
├── utils/
├── lib/
├── animations/
└── constants/
```

---

# Objetivo final

Construir una experiencia digital premium para Mítico Animal Gym.

La página debe diferenciarse completamente de las típicas webs de gimnasios.

El usuario debe sentir:

```txt
"No es un gimnasio más.
Es una comunidad.
Quiero formar parte."
```
