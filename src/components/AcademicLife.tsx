import { lifeCaption, lifePhotos } from '../data/academicLife'
import { sectionNumber } from '../data/sections'
import { Reveal } from './Reveal'
import { SectionHeading, type TitleSegment } from './SectionHeading'
import { useViewer } from './viewerContext'
import './life.css'

const title: TitleSegment[] = [{ text: 'Vida acadêmica' }]

export function AcademicLife() {
  const viewer = useViewer()

  return (
    <section className="section life" id="vida" aria-labelledby="life-title">
      <div className="wrap grid">
        <SectionHeading
          number={sectionNumber('vida')}
          title={title}
          titleId="life-title"
          titleClassName="eyebrow-h2"
        />

        <Reveal as="p" className="life-caption lead">
          {lifeCaption}
        </Reveal>

        <Reveal as="ul" className="life-grid">
          {lifePhotos.map((photo, index) => (
            <li key={photo.image.src || photo.alt}>
              <button
                className="life-thumb"
                type="button"
                aria-haspopup="dialog"
                aria-label={`Ampliar foto ${index + 1} de ${lifePhotos.length}: ${photo.alt}`}
                onClick={event =>
                  viewer.open({
                    photos: lifePhotos,
                    index,
                    label: 'Galeria da vida acadêmica',
                    trigger: event.currentTarget,
                  })
                }
              >
                <img
                  className="photo"
                  src={photo.image.src}
                  srcSet={photo.image.srcSet}
                  sizes="(min-width: 900px) 22vw, 45vw"
                  alt=""
                  width={photo.image.width}
                  height={photo.image.height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: photo.focus }}
                />
              </button>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
