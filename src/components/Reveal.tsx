import { createElement, type CSSProperties, type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealTag = 'div' | 'p' | 'li' | 'ul' | 'dl' | 'article'

type RevealProps = {
  as?: RevealTag
  className: string
  style?: CSSProperties
  children: ReactNode
}

/* Bloco que entra uma única vez ao aparecer na tela (classes .reveal / .is-in). */
export function Reveal({ as = 'div', className, style, children }: RevealProps) {
  const [ref, revealed] = useReveal<HTMLElement>()
  return createElement(
    as,
    { ref, className: `${className} reveal${revealed ? ' is-in' : ''}`, style },
    children,
  )
}
