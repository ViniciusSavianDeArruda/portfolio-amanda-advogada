import { image, type Img } from '../assets/images'

export type Category = 'trabalho' | 'atividade'

export type Photo = {
  image: Img
  alt: string
  focus: string
}

export type Entry = {
  id: number
  category: Category
  type: string
  title: string
  place: string
  period: string
  description: string
  photos: Photo[]
}

export const entries: Entry[] = [
  {
    id: 1,
    category: 'atividade',
    type: 'Atividade extracurricular',
    title: 'Comissão organizadora do 18º Seminário "Teoria Jurídica: Cidadania e Globalização"',
    place: 'Universidade Franciscana',
    period: '2026',
    description:
      'Integrante da comissão organizadora do seminário, coordenado pela Prof.ª Raquel Buzatti Souto e pelo Prof. Hígor Lameira Gasparetto.',
    photos: [
      {
        image: image('ativ-seminario', 1080, 1395),
        alt: 'Auditório preparado para o 18º Seminário de Teoria Jurídica',
        focus: 'center 60%',
      },
      {
        image: image('ativ-seminario-2', 1080, 1395),
        alt: 'Grupo de organizadoras reunidas em frente ao banner do 18º Seminário de Teoria Jurídica',
        focus: 'center 40%',
      },
    ],
  },
  {
    id: 2,
    category: 'atividade',
    type: 'Atividade extracurricular',
    title: 'Grupo de Estudos de Direito Eleitoral (GEDE)',
    place: 'Universidade Franciscana',
    period: '2025.2 e 2026.1',
    description:
      'Aprovada em dois semestres consecutivos, sob coordenação da Prof.ª Gislaine Ferreira Oliveira. No primeiro, análise de artigos científicos; no segundo, estudo da obra "Como as Democracias Morrem", de Levitsky e Ziblatt.',
    photos: [
      {
        image: image('ativ-gede-2', 1080, 1396),
        alt: 'Grupo de estudantes reunidos nos semestres 2025.2 e 2026.1 do GEDE',
        focus: 'center 30%',
      },
      {
        image: image('ativ-gede', 1080, 1396),
        alt: 'Leitura da obra "Como as Democracias Morrem" em tablet durante os estudos do GEDE',
        focus: 'center 88%',
      },
    ],
  },
  {
    id: 3,
    category: 'trabalho',
    type: 'Resumo expandido',
    title: 'Inteligência Artificial, Deepfakes e Propaganda Eleitoral no Brasil',
    place: 'Direito Eleitoral',
    period: '2025',
    description:
      'Trabalho apresentado na 40ª Jornada Acadêmica Integrada (JAI) da UFSM, em coautoria com a Prof.ª Gislaine Ferreira Oliveira. A pesquisa nasceu das discussões do Grupo de Estudos de Direito Eleitoral e investiga os impactos do uso de inteligência artificial e de deepfakes na propaganda eleitoral brasileira.',
    photos: [
      {
        image: image('trabalho-jai', 1080, 1395),
        alt: 'Amanda Quadros ao lado do pôster da pesquisa apresentada na 40ª Jornada Acadêmica Integrada da UFSM',
        focus: 'center 20%',
      },
    ],
  },
  {
    id: 4,
    category: 'atividade',
    type: 'Atividade extracurricular',
    title: 'Ações extensionistas',
    place: 'Universidade Franciscana',
    period: 'Ao longo da graduação',
    description:
      'Participação em diferentes ações de extensão promovidas pela universidade, aproximando o estudo jurídico da comunidade.',
    photos: [
      {
        image: image('ativ-extensao', 1080, 1395),
        alt: 'Sala de aula do curso de Direito durante atividade acadêmica',
        focus: 'center 18%',
      },
      {
        image: image('ativ-extensao-grupo', 1080, 1395),
        alt: 'Mosaico de fotos das ações extensionistas: visita à Casa Papa Francisco, oficinas e atividades com a comunidade',
        focus: 'center center',
      },
      {
        image: image('ativ-extensao-3', 280, 414),
        alt: 'Participantes durante uma oficina de ação extensionista',
        focus: 'center 70%',
      },
    ],
  },
]

/* "local · período", usado na lista, no artigo em destaque e no visualizador */
export const entryMeta = (entry: Entry) => `${entry.place} · ${entry.period}`

export const groupLabels: Record<Category, string> = {
  trabalho: 'Trabalhos acadêmicos',
  atividade: 'Atividades extracurriculares',
}
