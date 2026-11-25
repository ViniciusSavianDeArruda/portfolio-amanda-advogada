/*
  Resolve as fotos de src/assets pelo nome-base. Quando a foto é mais larga que 600px
  e existe a variante "<nome>-600.webp", ela entra no srcSet para telas menores.
*/
const modules = import.meta.glob<string>('./*.webp', {
  eager: true,
  import: 'default',
  query: '?url',
})

export type Img = {
  src: string
  srcSet?: string
  width: number
  height: number
}

const THUMB_WIDTH = 600

const find = (file: string) => modules[`./${file}`]

export function image(name: string, width: number, height: number): Img {
  const full = find(`${name}.webp`) ?? ''
  const thumb = width > THUMB_WIDTH ? find(`${name}-${THUMB_WIDTH}.webp`) : undefined
  return {
    src: full,
    srcSet: thumb && full ? `${thumb} ${THUMB_WIDTH}w, ${full} ${width}w` : undefined,
    width,
    height,
  }
}
