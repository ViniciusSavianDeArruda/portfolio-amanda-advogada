import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { ViewerContext, type ViewerRequest } from './viewerContext'
import { prefersReducedMotion } from '../lib/motion'
import './viewer.css'

type ViewerState = Omit<ViewerRequest, 'index'> & { index: number }

export function PhotoViewerProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ViewerState | null>(null)
  const [swapping, setSwapping] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const timer = useRef<number>(0)

  const open = useCallback((request: ViewerRequest) => {
    setState({ ...request, index: request.index ?? 0 })
  }, [])

  const value = useMemo(() => ({ open }), [open])

  // abre o <dialog> nativo quando há uma solicitação
  useEffect(() => {
    const dialog = dialogRef.current
    if (!state || !dialog) return
    if (!dialog.open) dialog.showModal()
    document.body.classList.add('is-locked')
    closeRef.current?.focus()
  }, [state])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const total = state?.photos.length ?? 0

  const move = (step: number) => {
    if (!state || total < 2) return
    const next = (state.index + step + total) % total
    window.clearTimeout(timer.current)
    if (prefersReducedMotion()) {
      setState({ ...state, index: next })
      return
    }
    setSwapping(true)
    timer.current = window.setTimeout(() => {
      setState(current => (current ? { ...current, index: next } : current))
      setSwapping(false)
    }, 160)
  }

  const handleClose = () => {
    document.body.classList.remove('is-locked')
    const trigger = state?.trigger
    setState(null)
    setSwapping(false)
    trigger?.focus({ preventScroll: true })
  }

  const photo = state?.photos[state.index]

  return (
    <ViewerContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        className="viewer"
        aria-labelledby={state?.title ? 'viewer-title' : undefined}
        aria-label={state?.title ? undefined : state?.label}
        onClose={handleClose}
        onClick={event => {
          if (event.target === dialogRef.current) dialogRef.current?.close()
        }}
        onKeyDown={event => {
          if (event.key === 'ArrowRight') {
            event.preventDefault()
            move(1)
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault()
            move(-1)
          }
        }}
      >
        {state && photo && (
          <div className="viewer-panel">
            <button
              ref={closeRef}
              className="viewer-close"
              type="button"
              aria-label="Fechar"
              onClick={() => dialogRef.current?.close()}
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="viewer-stage">
              <img
                className={swapping ? 'viewer-image is-swapping' : 'viewer-image'}
                src={photo.image.src}
                alt={photo.alt}
                width={photo.image.width}
                height={photo.image.height}
              />
            </div>

            <div className="viewer-side">
              {state.type && <p className="viewer-type">{state.type}</p>}
              {state.title && (
                <h2 className="viewer-title" id="viewer-title">
                  {state.title}
                </h2>
              )}
              {state.meta && <p className="viewer-meta">{state.meta}</p>}
              <p className="viewer-caption">{photo.alt}</p>

              {total > 1 && (
                <div className="viewer-bar">
                  <button
                    className="viewer-nav"
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Foto anterior"
                  >
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M12 4 6 10l6 6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <span className="viewer-counter" aria-live="polite">
                    {state.index + 1} de {total}
                  </span>
                  <button
                    className="viewer-nav"
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Próxima foto"
                  >
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M8 4l6 6-6 6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </ViewerContext.Provider>
  )
}
