/*
  Fonte única das seções da página: alimenta o scroll-spy, o menu do topo,
  a navegação do rodapé, o sumário lateral e os números dos cabeçalhos.
*/
export type SectionId = 'inicio' | 'apresentacao' | 'experiencia' | 'percurso' | 'vida' | 'contato'

type Section = {
  id: SectionId
  label: string
  number?: string
  inHeader: boolean
  inFooter: boolean
}

export const sections: readonly Section[] = [
  { id: 'inicio', label: 'Início', inHeader: true, inFooter: true },
  { id: 'apresentacao', label: 'Apresentação', number: '01', inHeader: true, inFooter: true },
  { id: 'experiencia', label: 'Experiência', number: '02', inHeader: true, inFooter: true },
  { id: 'percurso', label: 'Percurso', number: '03', inHeader: true, inFooter: true },
  { id: 'vida', label: 'Vida acadêmica', number: '04', inHeader: false, inFooter: false },
  { id: 'contato', label: 'Contato', number: '05', inHeader: true, inFooter: false },
]

export const sectionIds = sections.map(section => section.id)

export const headerLinks = sections.filter(section => section.inHeader)
export const footerLinks = sections.filter(section => section.inFooter)
export const tocItems = sections.filter(section => section.number)

export const sectionNumber = (id: SectionId) =>
  sections.find(section => section.id === id)?.number ?? ''
