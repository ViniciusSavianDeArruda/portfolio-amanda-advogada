import { useCallback, useEffect, useRef, useState } from 'react'

export type Token = { word: string; em: boolean }

/*
  Divide um título em linhas visuais. Enquanto `lines` é null, as palavras são
  renderizadas soltas (visual idêntico ao texto corrido) e medidas; depois da medição,
  cada linha vira um elemento. Refaz a medição ao redimensionar enquanto `frozen` for falso.
*/
export function useLineSplit(tokens: Token[], frozen: boolean) {
  const [lines, setLines] = useState<Token[][] | null>(null)
  const [fontsReady, setFontsReady] = useState(false)
  const probes = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    let cancelled = false
    const ready = document.fonts?.ready ?? Promise.resolve()
    ready.then(() => {
      if (!cancelled) setFontsReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!fontsReady || lines) return
    const frame = requestAnimationFrame(() => {
      const grouped: Token[][] = []
      let lastTop: number | null = null
      probes.current.slice(0, tokens.length).forEach((el, i) => {
        if (!el) return
        const top = el.offsetTop
        if (lastTop === null || Math.abs(top - lastTop) > 4) {
          grouped.push([])
          lastTop = top
        }
        grouped[grouped.length - 1].push(tokens[i])
      })
      if (grouped.length) setLines(grouped)
    })
    return () => cancelAnimationFrame(frame)
  }, [fontsReady, lines, tokens])

  useEffect(() => {
    if (frozen) return
    let timer: number
    const onResize = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => setLines(null), 150)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('resize', onResize)
    }
  }, [frozen])

  const setProbe = useCallback(
    (index: number) => (el: HTMLSpanElement | null) => {
      probes.current[index] = el
    },
    [],
  )

  return { lines, setProbe }
}
