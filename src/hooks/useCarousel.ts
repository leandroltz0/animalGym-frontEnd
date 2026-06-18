/**
 * useCarousel.ts
 *
 * Hook genérico para manejar un carrusel de N items.
 * Soporta autoplay, loop y navegación manual.
 *
 * @example
 * const { current, next, prev, goTo } = useCarousel({ total: slides.length, autoplay: true })
 */

import { useCallback, useEffect, useRef, useState } from 'react'

interface UseCarouselOptions {
  /** Cantidad total de items en el carrusel */
  total: number
  /** Activa la rotación automática. Por defecto: false */
  autoplay?: boolean
  /** Intervalo entre slides en ms. Por defecto: 5000 */
  autoplayInterval?: number
  /** Si al llegar al último vuelve al primero. Por defecto: true */
  loop?: boolean
}

export function useCarousel({
  total,
  autoplay = false,
  autoplayInterval = 5000,
  loop = true,
}: UseCarouselOptions) {
  const [current, setCurrent] = useState(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent((prev) => {
      if (prev >= total - 1) return loop ? 0 : prev
      return prev + 1
    })
  }, [total, loop])

  const prev = useCallback(() => {
    setCurrent((prev) => {
      if (prev <= 0) return loop ? total - 1 : prev
      return prev - 1
    })
  }, [total, loop])

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, total - 1)))
    },
    [total],
  )

  const startAutoplay = useCallback(() => {
    if (!autoplay || autoplayRef.current) return
    autoplayRef.current = setInterval(next, autoplayInterval)
  }, [autoplay, autoplayInterval, next])

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  const resetAutoplay = useCallback(() => {
    stopAutoplay()
    startAutoplay()
  }, [stopAutoplay, startAutoplay])

  useEffect(() => {
    startAutoplay()
    return stopAutoplay
  }, [startAutoplay, stopAutoplay])

  return { current, next, prev, goTo, startAutoplay, stopAutoplay, resetAutoplay }
}
