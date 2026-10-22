import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal, ease, overlayMotion, panelMotion } from './Reveal'
import vida1 from '../assets/vida-1.webp'
import vida2 from '../assets/vida-2.webp'
import vida3 from '../assets/vida-3.webp'
import vida4 from '../assets/vida-4.webp'

/* o recorte mantém fora de quadro os grafismos sobrepostos ao pé de algumas imagens */
const photos = [
  {
    src: vida1,
    alt: 'Fachada da faculdade de Direito e anotações de aula no quadro',
    focus: 'center 0%',
  },
  {
    src: vida2,
    alt: 'Materiais de estudo, biblioteca e campus da Universidade Franciscana',
    focus: 'center 10%',
  },
  {
    src: vida3,
    alt: 'Amanda Quadros entre registros da rotina de estudos e do trajeto à faculdade',
    focus: 'center 50%',
  },
  {
    src: vida4,
    alt: 'Campus da Universidade Franciscana e momentos de aula e palestras',
    focus: 'center 50%',
  },
]

const caption =
  'Um pouco da vida acadêmica no dia a dia: muito estudo com resumos, os ônibus pegos correndo, os prints salvos "pra estudar depois" e a faculdade que já virou uma segunda casa. Cada foto aqui é um pedacinho da caminhada que não é fácil, mas só quem vive o propósito é porque aguentou o processo.'

export function AcademicLifeGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = useCallback(() => setOpenIndex(null), [])

  const move = useCallback((step: number) => {
    setOpenIndex(current =>
      current === null ? current : (current + step + photos.length) % photos.length,
    )
  }, [])

  useEffect(() => {
    if (openIndex === null) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') move(1)
      if (event.key === 'ArrowLeft') move(-1)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, close, move])

  return (
    <div className="life">
      <Reveal className="life-intro">
        <p className="areas-label">Vida acadêmica</p>
        <p className="life-caption">{caption}</p>
      </Reveal>

      <ul className="life-grid">
        {photos.map((photo, index) => (
          <Reveal key={photo.src} as="li" delay={index * 0.07}>
            <button
              className="life-thumb"
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Ampliar foto ${index + 1} de ${photos.length}: ${photo.alt}`}
            >
              <img src={photo.src} alt="" style={{ objectPosition: photo.focus }} />
            </button>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="modal-overlay"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Galeria da vida acadêmica"
            {...overlayMotion}
          >
            <motion.div
              className="life-viewer"
              onClick={e => e.stopPropagation()}
              {...panelMotion}
            >
              <button className="modal-close" onClick={close} aria-label="Fechar">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" strokeWidth={1.5} strokeLinecap="round" />
                </svg>
              </button>

              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={openIndex}
                  className="life-viewer-image"
                  src={photos[openIndex].src}
                  alt={photos[openIndex].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease }}
                />
              </AnimatePresence>

              <div className="life-viewer-bar">
                <button
                  className="life-nav"
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Foto anterior"
                >
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M12 4 6 10l6 6" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                </button>

                <span className="life-counter">
                  {openIndex + 1} de {photos.length}
                </span>

                <button
                  className="life-nav"
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Próxima foto"
                >
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M8 4l6 6-6 6" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <p className="life-viewer-caption">{photos[openIndex].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
