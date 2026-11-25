import { useMemo, type CSSProperties, type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useLineSplit, type Token } from '../hooks/useLineSplit'

export type TitleSegment = { text: string; em?: boolean }

type SectionHeadingProps = {
  number: string
  eyebrow?: string
  title: TitleSegment[]
  titleId: string
  titleClassName?: string
}

function toTokens(segments: TitleSegment[]): Token[] {
  return segments.flatMap(segment =>
    segment.text
      .split(/\s+/)
      .filter(Boolean)
      .map(word => ({ word, em: Boolean(segment.em) })),
  )
}

/* agrupa palavras consecutivas com o mesmo estilo, preservando o <em> */
function renderWords(tokens: Token[]): ReactNode[] {
  const out: ReactNode[] = []
  let index = 0
  while (index < tokens.length) {
    const em = tokens[index].em
    const words: string[] = []
    while (index < tokens.length && tokens[index].em === em) {
      words.push(tokens[index].word)
      index += 1
    }
    const text = words.join(' ')
    if (out.length) out.push(' ')
    out.push(em ? <em key={index}>{text}</em> : text)
  }
  return out
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  titleId,
  titleClassName,
}: SectionHeadingProps) {
  const [ref, revealed] = useReveal<HTMLElement>(0.25)
  const tokens = useMemo(() => toTokens(title), [title])
  const { lines, setProbe } = useLineSplit(tokens, revealed)
  const headingClass = [titleClassName, lines ? 'is-split' : ''].filter(Boolean).join(' ')

  return (
    <header ref={ref} className={revealed ? 'sec-head is-revealed' : 'sec-head'}>
      <span className="sec-num" aria-hidden="true">
        {number}
      </span>
      <div className="sec-head-text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={titleId} className={headingClass || undefined}>
          {lines
            ? lines.map((line, index) => (
                <span key={index}>
                  <span className="line">
                    <span className="line-inner" style={{ '--l': index } as CSSProperties}>
                      {renderWords(line)}
                    </span>
                  </span>
                  {index < lines.length - 1 ? ' ' : null}
                </span>
              ))
            : tokens.map((token, index) => (
                <span key={index}>
                  <span
                    ref={setProbe(index)}
                    style={{ display: 'inline-block', fontStyle: token.em ? 'italic' : undefined }}
                  >
                    {token.word}
                  </span>
                  {index < tokens.length - 1 ? ' ' : null}
                </span>
              ))}
        </h2>
      </div>
    </header>
  )
}
