import { MotionConfig, motion } from 'motion/react'
import './App.css'
import { WorksSection } from './components/WorksSection'
import { ExperienceSection } from './components/ExperienceSection'
import { AcademicLifeGallery } from './components/AcademicLifeGallery'
import { SiteFooter } from './components/SiteFooter'
import { Reveal } from './components/Reveal'
import amandaPortrait from './assets/foto-amanda.jpeg'
import brandMark from './assets/brand-mark.png'

const ease = [0.22, 1, 0.36, 1] as const

const heroGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main>
        <div className="page-shell">
          <motion.header
            className="site-header"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <a className="brand" href="#inicio" aria-label="Amanda Quadros — início">
              <span className="brand-mark" aria-hidden="true">
                <img src={brandMark} alt="" />
              </span>
              <span className="brand-copy">
                <span className="brand-name">Amanda Quadros</span>
                <span className="brand-subtitle">Portfólio acadêmico</span>
              </span>
            </a>

            <nav className="site-nav" aria-label="Navegação principal">
              <a href="#inicio" aria-current="page">
                Início
              </a>
              <a href="#apresentacao">Apresentação</a>
              <a href="#percurso">Percurso</a>
              <a href="#experiencia">Experiência</a>
            </nav>
          </motion.header>

          <section className="hero" id="inicio" aria-labelledby="hero-title">
            <motion.div
              className="hero-copy"
              variants={heroGroup}
              initial="hidden"
              animate="show"
            >
              <motion.p className="eyebrow" variants={heroItem}>
                Portfólio acadêmico em Direito
              </motion.p>

              <motion.h1 id="hero-title" variants={heroItem}>
                Amanda <span>Quadros</span>
              </motion.h1>

              <motion.p className="hero-role" variants={heroItem}>
                Estudante de Direito
              </motion.p>

              <motion.div className="hero-intro" variants={heroItem}>
                <p className="editorial-title">
                  O <span className="title-highlight">Direito</span> e a{' '}
                  <span className="title-highlight-soft">prática.</span>
                </p>
                <p className="intro-copy">
                  Um espaço dedicado à apresentação de estudos, reflexões e
                  trabalhos acadêmicos na área do Direito.
                </p>
              </motion.div>

              <motion.a className="hero-cta" href="#apresentacao" variants={heroItem}>
                <span>Saiba mais</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="cta-arrow"
                >
                  <path d="M3.75 10h12.5m-5-5 5 5-5 5" />
                </svg>
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
            >
              <div className="visual-frame">
                <img
                  className="portrait-image"
                  src={amandaPortrait}
                  alt="Amanda Quadros"
                />
              </div>
            </motion.div>
          </section>

          <section
            className="presentation"
            id="apresentacao"
            aria-labelledby="presentation-title"
          >
            <Reveal className="presentation-heading">
              <p className="presentation-label">Apresentação</p>
              <h2 id="presentation-title">
                Um percurso acadêmico <span>em construção.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="presentation-copy">
                Sou Amanda Quadros, estudante de Direito na Universidade
                Franciscana. Acredito que o conhecimento jurídico é uma
                ferramenta de transformação, e que todo cidadão merece
                compreender os próprios direitos.
              </p>
            </Reveal>

            <Reveal>
              <dl className="presentation-strip">
                <div className="strip-item">
                  <dt>Instituição</dt>
                  <dd>Universidade Franciscana, UFN</dd>
                </div>
                <div className="strip-item">
                  <dt>Período</dt>
                  <dd>8º semestre</dd>
                </div>
                <div className="strip-item strip-item--areas">
                  <dt>Áreas de interesse</dt>
                  <dd>
                    <ul className="areas-list">
                      <li>Direito Cível</li>
                      <li>Direito Processual Civil</li>
                      <li>Direito Previdenciário (aposentadoria rural)</li>
                      <li>Direito Sucessório</li>
                      <li>Direito Trabalhista</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal>
              <blockquote className="presentation-quote">
                "Estudo Direito para ser a voz de quem não conhece os
                próprios direitos."
              </blockquote>
            </Reveal>

            <AcademicLifeGallery />
          </section>

          <WorksSection />
          <ExperienceSection />
          <SiteFooter />
        </div>
      </main>
    </MotionConfig>
  )
}

export default App
