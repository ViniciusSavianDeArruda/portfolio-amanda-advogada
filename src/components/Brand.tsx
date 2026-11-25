import brandMark from '../assets/brand-mark.png'

type BrandProps = { light?: boolean }

export function Brand({ light = false }: BrandProps) {
  return (
    <a
      className={light ? 'brand brand--light' : 'brand'}
      href="#inicio"
      aria-label="Amanda Quadros — início"
    >
      <span className="brand-mark" aria-hidden="true">
        <img src={brandMark} alt="" width={555} height={600} />
      </span>
      <span className="brand-copy">
        <span className="brand-name">Amanda Quadros</span>
        <span className="brand-subtitle">Portfólio acadêmico</span>
      </span>
    </a>
  )
}
