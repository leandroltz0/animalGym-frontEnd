import { useEffect, useState } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)')
}

export function useIsTablet() {
  return useMediaQuery('(max-width: 1024px)')
}

export function useIsIPhone(): boolean {
  const [isIPhone, setIsIPhone] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent
    setIsIPhone(/iPhone/i.test(ua) && !/iPad/i.test(ua))
  }, [])

  return isIPhone
}
