import { Reveal } from './Reveal'

type Experience = {
  id: number
  role: string
  place: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    id: 3,
    role: 'Estagiária em advocacia do agronegócio e bancária',
    place: 'Elizandra Girardon Advocacia | Agronegócio e Bancário',
    period: 'Desde 2026',
    description:
      'Atuação em escritório especializado em Direito do Agronegócio e Direito Bancário, acompanhando as atividades e as demandas do escritório e a rotina da advocacia voltada a essas áreas.',
  },
  {
    id: 1,
    role: 'Estagiária na Procuradoria Jurídica',
    place: 'Prefeitura Municipal de São Martinho da Serra',
    period: '2025',
    description:
      'Atuação na Procuradoria Jurídica do município, acompanhando a rotina jurídica da administração pública.',
  },
  {
    id: 2,
    role: 'Estagiária voluntária no projeto Pro@cessos',
    place: 'PROCON de Santa Maria',
    period: '2023',
    description:
      'Estágio voluntário no PROCON de Santa Maria, sob coordenação da Prof.ª Aline Cassagrande, com contato direto com demandas de direito do consumidor.',
  },
]

export function ExperienceSection() {
  return (
    <section
      className="works-block works-block--alt"
      id="experiencia"
      aria-labelledby="experience-title"
    >
      <Reveal className="works-block-header works-block-header--spaced">
        <p className="works-label">Experiência profissional</p>
        <h2 id="experience-title" className="works-title">
          Prática <span>jurídica.</span>
        </h2>
      </Reveal>

      <ol className="timeline">
        {experiences.map((exp, index) => (
          <Reveal
            key={exp.id}
            as="li"
            className="timeline-item"
            delay={index * 0.09}
          >
            <span className="timeline-period">{exp.period}</span>
            <h3 className="timeline-role">{exp.role}</h3>
            <span className="timeline-place">{exp.place}</span>
            <p className="timeline-desc">{exp.description}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
