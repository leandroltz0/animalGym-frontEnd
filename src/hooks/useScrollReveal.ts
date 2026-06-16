import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface UseScrollRevealOptions {
  threshold?: number
  animation?: gsap.TweenVars
  delay?: number
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.15, animation = {}, delay = 0 } = options
  const ref = useRef<T>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || isRevealed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay, ...animation }
          )
          setIsRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay, animation, isRevealed])

  return ref
}
