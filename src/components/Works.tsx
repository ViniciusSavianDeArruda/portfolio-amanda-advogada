import { entries, entryMeta, groupLabels, type Entry } from '../data/entries'
import { sectionNumber } from '../data/sections'
import { Reveal } from './Reveal'
import { SectionHeading, type TitleSegment } from './SectionHeading'
import { useViewer } from './viewerContext'
import './works.css'

const title: TitleSegment[] = [{ text: 'Estudos e' }, { text: 'vivências.', em: true }]

function EntryPhotoButton({ entry, sizes }: { entry: Entry; sizes: string }) {
  const viewer = useViewer()
  const cover = entry.photos[0]

  return (
    <button
      className="entry-photo"
      type="button"
      aria-haspopup="dialog"
      aria-label={`Ampliar fotos: ${entry.title}`}
      onClick={event =>
        viewer.open({
          photos: entry.photos,
          type: entry.type,
          title: entry.title,
          meta: entryMeta(entry),
          trigger: event.currentTarget,
        })
      }
    >
      <img
        className="photo"
        src={cover.image.src}
        srcSet={cover.image.srcSet}
        sizes={sizes}
        alt=""
        width={cover.image.width}
        height={cover.image.height}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: cover.focus }}
      />
    </button>
  )
}

function FeaturedEntry({ entry }: { entry: Entry }) {
  return (
    <Reveal as="article" className="entry entry--featured">
      <header className="entry-head">
        <p className="entry-kicker">
          <span className="entry-type">{entry.type}</span>
          <span className="entry-meta">{entryMeta(entry)}</span>
        </p>
        <h3 className="entry-title">{entry.title}</h3>
      </header>
      <div className="entry-figure">
        <EntryPhotoButton entry={entry} sizes="(min-width: 900px) 40vw, 90vw" />
      </div>
      <div className="entry-body">
        <p className="entry-desc">{entry.description}</p>
      </div>
    </Reveal>
  )
}

function ListEntry({ entry }: { entry: Entry }) {
  return (
    <Reveal as="article" className="entry">
      <EntryPhotoButton entry={entry} sizes="(min-width: 1100px) 200px, (min-width: 600px) 160px, 90vw" />
      <div className="entry-body">
        <span className="entry-type">{entry.type}</span>
        <h3 className="entry-title">{entry.title}</h3>
        <p className="entry-meta">{entryMeta(entry)}</p>
        <p className="entry-desc">{entry.description}</p>
      </div>
    </Reveal>
  )
}

export function Works() {
  const works = entries.filter(entry => entry.category === 'trabalho')
  const activities = entries.filter(entry => entry.category === 'atividade')

  return (
    <section className="section percurso" id="percurso" aria-labelledby="works-title">
      <div className="wrap grid">
        <SectionHeading
          number={sectionNumber('percurso')}
          eyebrow="Percurso"
          title={title}
          titleId="works-title"
        />

        <div className="entries">
          <Reveal as="p" className="group-label">
            {groupLabels.trabalho}
          </Reveal>
          {works.map(entry => (
            <FeaturedEntry key={entry.id} entry={entry} />
          ))}

          <Reveal as="p" className="group-label">
            {groupLabels.atividade}
          </Reveal>
          <div className="entry-list">
            {activities.map(entry => (
              <ListEntry key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
