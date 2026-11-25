import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'

/* Revela o elemento uma única vez ao entrar na viewport.
   Sem IntersectionObserver ou com movimento reduzido, nasce visível. */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const el = ref.current
    if (revealed || !el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setRevealed(true)
        observer.disconnect()
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [revealed, threshold])

  return [ref, revealed] as const
}
