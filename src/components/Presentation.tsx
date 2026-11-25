import { profile } from '../data/profile'
import { sectionNumber } from '../data/sections'
import { Reveal } from './Reveal'
import { SectionHeading, type TitleSegment } from './SectionHeading'
import './presentation.css'

const title: TitleSegment[] = [{ text: 'Um percurso acadêmico' }, { text: 'em construção.', em: true }]

export function Presentation() {
  return (
    <section
      className="section section--joined presentation"
      id="apresentacao"
      aria-labelledby="presentation-title"
    >
      <div className="wrap grid">
        <SectionHeading
          number={sectionNumber('apresentacao')}
          eyebrow="Apresentação"
          title={title}
          titleId="presentation-title"
        />

        <div className="presentation-body">
          <Reveal className="manifesto">
            <p className="lead presentation-copy">{profile.presentation.copy}</p>
            <blockquote className="pull-quote">{profile.presentation.quote}</blockquote>
          </Reveal>

          <Reveal as="dl" className="ficha" style={{ transitionDelay: '80ms' }}>
            <div className="fact fact--inst">
              <dt>Instituição</dt>
              <dd>{profile.institution}</dd>
            </div>
            <div className="fact fact--period">
              <dt>Período</dt>
              <dd>{profile.period}</dd>
            </div>
            <div className="fact fact--areas">
              <dt>Áreas de interesse</dt>
              <dd>
                <ul className="areas-list">
                  {profile.areas.map(area => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
