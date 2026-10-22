import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal, ease, overlayMotion, panelMotion } from './Reveal'
import jaiImage from '../assets/trabalho-jai.webp'
import gedeImage from '../assets/ativ-gede.webp'
import seminarioImage from '../assets/ativ-seminario.webp'
import extensaoImage from '../assets/ativ-extensao.webp'

type Category = 'trabalho' | 'atividade'

type Entry = {
  id: number
  category: Category
  type: string
  title: string
  place: string
  period: string
  description: string
  image: string
  imageAlt: string
  /* cada foto traz um texto sobreposto em faixa diferente; o recorte o mantém fora de quadro */
  focus: string
}

const entries: Entry[] = [
  {
    id: 1,
    category: 'atividade',
    type: 'Atividade extracurricular',
    title: 'Comissão organizadora do 18º Seminário "Teoria Jurídica: Cidadania e Globalização"',
    place: 'Universidade Franciscana',
    period: '2026',
    description:
      'Integrante da comissão organizadora do seminário, coordenado pela Prof.ª Raquel Buzatti Souto e pelo Prof. Hígor Lameira Gasparetto.',
    image: seminarioImage,
    imageAlt: 'Auditório preparado para o 18º Seminário de Teoria Jurídica',
    focus: 'center 60%',
  },
  {
    id: 2,
    category: 'atividade',
    type: 'Atividade extracurricular',
    title: 'Grupo de Estudos de Direito Eleitoral (GEDE)',
    place: 'Universidade Franciscana',
    period: '2025.2 e 2026.1',
    description:
      'Aprovada em dois semestres consecutivos, sob coordenação da Prof.ª Gislaine Ferreira Oliveira. No primeiro, análise de artigos científicos; no segundo, estudo da obra "Como as Democracias Morrem", de Levitsky e Ziblatt.',
    image: gedeImage,
    imageAlt: 'Leitura da obra "Como as Democracias Morrem" em tablet durante os estudos do GEDE',
    focus: 'center 88%',
  },
  {
    id: 3,
    category: 'trabalho',
    type: 'Resumo expandido',
    title: 'Inteligência Artificial, Deepfakes e Propaganda Eleitoral no Brasil',
    place: 'Direito Eleitoral',
    period: '2025',
    description:
      'Trabalho apresentado na 40ª Jornada Acadêmica Integrada (JAI) da UFSM, em coautoria com a Prof.ª Gislaine Ferreira Oliveira. A pesquisa nasceu das discussões do Grupo de Estudos de Direito Eleitoral e investiga os impactos do uso de inteligência artificial e de deepfakes na propaganda eleitoral brasileira.',
    image: jaiImage,
    imageAlt:
      'Amanda Quadros ao lado do pôster da pesquisa apresentada na 40ª Jornada Acadêmica Integrada da UFSM',
    focus: 'center 20%',
  },
  {
    id: 4,
    category: 'atividade',
    type: 'Atividade extracurricular',
    title: 'Ações extensionistas',
    place: 'Universidade Franciscana',
    period: 'Ao longo da graduação',
    description:
      'Participação em diferentes ações de extensão promovidas pela universidade, aproximando o estudo jurídico da comunidade.',
    image: extensaoImage,
    imageAlt: 'Sala de aula do curso de Direito durante atividade acadêmica',
    focus: 'center 18%',
  },
]

const filters: { id: Category | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'trabalho', label: 'Trabalhos acadêmicos' },
  { id: 'atividade', label: 'Atividades extracurriculares' },
]

type ModalProps = {
  entry: Entry
  onClose: () => void
}

function EntryModal({ entry, onClose }: ModalProps) {
  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      {...overlayMotion}
    >
      <motion.div
        className="modal-panel"
        onClick={e => e.stopPropagation()}
        {...panelMotion}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4l12 12M16 4L4 16" strokeWidth={1.5} strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-tag">{entry.type}</div>
        <h3 className="modal-title" id="modal-title">
          {entry.title}
        </h3>

        <div className="modal-meta">
          <span>{entry.place}</span>
          <span aria-hidden="true">·</span>
          <span>{entry.period}</span>
        </div>

        <img
          className="modal-image"
          src={entry.image}
          alt={entry.imageAlt}
          style={{ objectPosition: entry.focus }}
        />

        <p className="modal-description">{entry.description}</p>
      </motion.div>
    </motion.div>
  )
}

export function WorksSection() {
  const [activeEntry, setActiveEntry] = useState<Entry | null>(null)
  const [activeFilter, setActiveFilter] = useState<Category | 'todos'>('todos')

  const visible =
    activeFilter === 'todos'
      ? entries
      : entries.filter(entry => entry.category === activeFilter)

  return (
    <section className="works" id="percurso" aria-labelledby="works-title">
      <div className="works-block">
        <Reveal className="works-block-header">
          <p className="works-label">Percurso</p>
          <h2 id="works-title" className="works-title">
            Estudos e <span>vivências.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="works-filter" role="group" aria-label="Filtrar percurso">
            {filters.map(filter => (
              <button
                key={filter.id}
                className="works-tab"
                type="button"
                aria-pressed={filter.id === activeFilter}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="works-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((entry, index) => (
              <motion.li
                key={entry.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease, delay: index * 0.06 },
                }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.2, ease } }}
              >
                <button className="work-card" onClick={() => setActiveEntry(entry)}>
                  <img
                    className="work-card-image"
                    src={entry.image}
                    alt=""
                    style={{ objectPosition: entry.focus }}
                  />
                  <div className="work-card-body">
                    <span className="work-card-type">{entry.type}</span>
                    <h3 className="work-card-title">{entry.title}</h3>
                    <span className="work-card-meta">
                      {entry.place} · {entry.period}
                    </span>
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      <AnimatePresence>
        {activeEntry && (
          <EntryModal entry={activeEntry} onClose={() => setActiveEntry(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
