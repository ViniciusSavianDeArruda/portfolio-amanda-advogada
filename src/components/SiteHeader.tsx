import { useCallback, useEffect, useRef, useState } from 'react'
import { Brand } from './Brand'
import { useHeaderCompact } from '../hooks/useHeaderCompact'
import { headerLinks } from '../data/sections'
import './header.css'

type SiteHeaderProps = { activeId: string | null }

export function SiteHeader({ activeId }: SiteHeaderProps) {
  const compact = useHeaderCompact()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false)
    if (restoreFocus) toggleRef.current?.focus({ preventScroll: true })
  }, [])

  // scroll lock + foco no primeiro link ao abrir
  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    if (open) {
      navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true })
    }
    return () => document.body.classList.remove('is-locked')
  }, [open])

  // Esc e trap de Tab
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close(true)
        return
      }
      if (event.key !== 'Tab') return
      const items: HTMLElement[] = []
      if (toggleRef.current) items.push(toggleRef.current)
      navRef.current?.querySelectorAll('a').forEach(link => items.push(link))
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, close])

  // fecha ao entrar na largura desktop
  useEffect(() => {
    const query = window.matchMedia('(min-width: 900px)')
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) close(false)
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [close])

  return (
    <header className={compact ? 'site-header is-scrolled' : 'site-header'}>
      <div className="header-inner">
        <Brand />

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => (open ? close(true) : setOpen(true))}
        >
          <span className="menu-toggle-bars" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>

        <nav
          ref={navRef}
          className={open ? 'site-nav is-open' : 'site-nav'}
          id="menu"
          aria-label="Navegação principal"
        >
          <ul>
            {headerLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  onClick={() => open && close(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
