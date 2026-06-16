import { useCallback, useEffect, useRef, useState } from 'react'

interface UseCarouselOptions {
  total: number
  autoplay?: boolean
  autoplayInterval?: number
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

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(index, total - 1)))
  }, [total])

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

  return {
    current,
    next,
    prev,
    goTo,
    startAutoplay,
    stopAutoplay,
    resetAutoplay,
  }
}
