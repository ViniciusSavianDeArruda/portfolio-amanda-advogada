import { useEffect, useRef } from 'react'

/* Executa o callback uma vez por frame durante scroll e resize (e uma vez na montagem). */
export function useRafScroll(callback: () => void) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    let ticking = false
    const run = () => {
      ticking = false
      callbackRef.current()
    }
    const onEvent = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(run)
    }

    window.addEventListener('scroll', onEvent, { passive: true })
    window.addEventListener('resize', onEvent)
    const first = requestAnimationFrame(run)

    return () => {
      window.removeEventListener('scroll', onEvent)
      window.removeEventListener('resize', onEvent)
      cancelAnimationFrame(first)
    }
  }, [])
}
