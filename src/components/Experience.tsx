import { useRef, useState } from 'react'
import { experiences } from '../data/experiences'
import { sectionNumber } from '../data/sections'
import { useRafScroll } from '../hooks/useRafScroll'
import { clamp01, prefersReducedMotion } from '../lib/motion'
import { Reveal } from './Reveal'
import { SectionHeading, type TitleSegment } from './SectionHeading'
import './experience.css'

const title: TitleSegment[] = [{ text: 'Prática' }, { text: 'jurídica.', em: true }]

/* a posição do marcador dentro do item (padding + meia linha do período) */
const MARKER_OFFSET = 44

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null)
  const [reduced] = useState(prefersReducedMotion)
  const [reached, setReached] = useState<boolean[]>(() => experiences.map(() => reduced))

  // o fio acompanha o scroll: 0 quando o topo cruza 75% da viewport, 1 quando o fim cruza 50%
  useRafScroll(() => {
    const list = listRef.current
    if (!list) return

    if (reduced) {
      list.style.setProperty('--p', '1')
      return
    }

    const items = Array.from(list.children) as HTMLElement[]
    const vh = window.innerHeight
    const rect = list.getBoundingClientRect()
    const progress = clamp01((vh * 0.75 - rect.top) / (vh * 0.25 + rect.height))
    list.style.setProperty('--p', progress.toFixed(4))

    const filled = progress * rect.height
    const next = items.map(item => filled >= item.offsetTop + MARKER_OFFSET)
    setReached(current =>
      current.length === next.length && current.every((value, i) => value === next[i])
        ? current
        : next,
    )
  })

  return (
    <section
      className="section experience"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <div className="wrap grid">
        <SectionHeading
          number={sectionNumber('experiencia')}
          eyebrow="Experiência profissional"
          title={title}
          titleId="experience-title"
        />

        <ol ref={listRef} className="timeline">
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.id}
              as="li"
              className={reached[index] ? 'timeline-item is-reached' : 'timeline-item'}
            >
              <span className="timeline-period">{experience.period}</span>
              <div className="timeline-body">
                <h3 className="timeline-role">{experience.role}</h3>
                <span className="timeline-place">{experience.place}</span>
                <p className="timeline-desc">{experience.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
