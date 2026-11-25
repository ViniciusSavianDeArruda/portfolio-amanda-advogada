import type { CSSProperties } from 'react'
import { image } from '../assets/images'
import { profile } from '../data/profile'
import './hero.css'

const portrait = image('foto-amanda', 973, 1458)

const delay = (i: number) => ({ '--i': i }) as CSSProperties

function PortraitArch() {
  return (
    <figure className="hero-visual">
      <div className="portrait-arch">
        <div className="portrait-arch-clip">
          <img
            className="portrait-image photo"
            src={portrait.src}
            srcSet={portrait.srcSet}
            sizes="(min-width: 900px) 440px, 90vw"
            alt={profile.hero.portraitAlt}
            width={portrait.width}
            height={portrait.height}
            fetchPriority="high"
          />
        </div>
      </div>
    </figure>
  )
}

function Colophon() {
  const items = [profile.institution, profile.period, profile.city]
  return (
    <div className="wrap hero-colophon">
      <div className="edition" role="group" aria-label="Edição">
        <ul className="edition-list">
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--wine hero-item" style={delay(0)}>
            {profile.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-item" style={delay(1)}>
            Amanda <em>Quadros</em>
          </h1>
          <span className="rule rule--champagne hero-item" style={delay(2)} aria-hidden="true" />
          <p className="hero-role hero-item" style={delay(2)}>
            {profile.hero.role}
          </p>

          <div className="hero-intro hero-item" style={delay(3)}>
            <p className="editorial-title">
              O Direito e a <em>prática.</em>
            </p>
            <p className="lead intro-copy">{profile.hero.intro}</p>
          </div>

          <a className="arrow-link hero-item" style={delay(4)} href="#apresentacao">
            <span className="arrow-link-text">{profile.hero.cta}</span>
            <svg className="arrow-long" viewBox="0 0 24 12" fill="none" aria-hidden="true">
              <path d="M0 6h22.5M17.5 1l5 5-5 5" />
            </svg>
          </a>
        </div>

        <PortraitArch />
      </div>

      <Colophon />
    </section>
  )
}
