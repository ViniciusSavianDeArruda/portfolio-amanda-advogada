import { image, type Img } from '../assets/images'

export type LifePhoto = {
  image: Img
  alt: string
  focus: string
}

/* o recorte mantém fora de quadro os grafismos sobrepostos ao pé de algumas imagens */
export const lifePhotos: LifePhoto[] = [
  {
    image: image('vida-1', 1080, 1350),
    alt: 'Fachada da faculdade de Direito e anotações de aula no quadro',
    focus: 'center 0%',
  },
  {
    image: image('vida-2', 1080, 1350),
    alt: 'Materiais de estudo, biblioteca e campus da Universidade Franciscana',
    focus: 'center 10%',
  },
  {
    image: image('vida-3', 1080, 1350),
    alt: 'Amanda Quadros entre registros da rotina de estudos e do trajeto à faculdade',
    focus: 'center 50%',
  },
  {
    image: image('vida-4', 1080, 1350),
    alt: 'Campus da Universidade Franciscana e momentos de aula e palestras',
    focus: 'center 50%',
  },
]

export const lifeCaption =
  'Um pouco da vida acadêmica no dia a dia: muito estudo com resumos, os ônibus pegos correndo, os prints salvos "pra estudar depois" e a faculdade que já virou uma segunda casa. Cada foto aqui é um pedacinho da caminhada que não é fácil, mas só quem vive o propósito é porque aguentou o processo.'
