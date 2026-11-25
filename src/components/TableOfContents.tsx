import { useEffect, useRef, useState } from 'react'
import { useRafScroll } from '../hooks/useRafScroll'
import { clamp01 } from '../lib/motion'
import { tocItems } from '../data/sections'
import './toc.css'

type TableOfContentsProps = { activeId: string | null }

export function TableOfContents({ activeId }: TableOfContentsProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [onDark, setOnDark] = useState(false)

  // progresso de leitura: da seção 01 até o fim da página
  useRafScroll(() => {
    const nav = ref.current
    const start = document.getElementById('apresentacao')
    // abaixo de 1280px o sumário fica com display:none — nada a calcular
    if (!nav || !start || nav.offsetParent === null) return
    const total = document.documentElement.scrollHeight - window.innerHeight - start.offsetTop
    const progress = total > 0 ? clamp01((window.scrollY - start.offsetTop) / total) : 0
    nav.style.setProperty('--tp', progress.toFixed(4))
  })

  // visível só depois que o hero sai da tela; sobre o rodapé escuro troca de cor
  useEffect(() => {
    const hero = document.getElementById('inicio')
    const footer = document.getElementById('contato')
    if (!hero || !footer) return

    const heroObserver = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px' },
    )
    const footerObserver = new IntersectionObserver(
      ([entry]) => setOnDark(entry.isIntersecting),
      { rootMargin: '-50% 0px -50% 0px' },
    )
    heroObserver.observe(hero)
    footerObserver.observe(footer)

    return () => {
      heroObserver.disconnect()
      footerObserver.disconnect()
    }
  }, [])

  const className = ['toc', visible ? 'is-visible' : '', onDark ? 'is-on-dark' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <nav ref={ref} className={className} aria-label="Sumário">
      <ul className="toc-list">
        {tocItems.map(item => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={activeId === item.id ? 'true' : undefined}>
              <span className="toc-label">{item.label}</span>
              <span className="toc-num">{item.number}</span>
            </a>
          </li>
        ))}
      </ul>
      <span className="toc-track" aria-hidden="true">
        <span className="toc-fill" />
      </span>
    </nav>
  )
}
