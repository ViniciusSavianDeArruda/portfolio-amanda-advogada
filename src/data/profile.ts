type SocialAccount = { handle: string; url: string }

export const profile = {
  name: 'Amanda Quadros',
  institution: 'Universidade Franciscana, UFN',
  period: '8º semestre',
  city: 'Santa Maria, RS',
  email: 'amandareanteqs@gmail.com',
  hero: {
    eyebrow: 'Portfólio acadêmico em Direito',
    role: 'Estudante de Direito',
    portraitAlt: 'Amanda Quadros',
    intro:
      'Um espaço dedicado à apresentação de estudos, reflexões e trabalhos acadêmicos na área do Direito.',
    cta: 'Saiba mais',
  },
  presentation: {
    copy: 'Sou Amanda Quadros, estudante de Direito na Universidade Franciscana. Acredito que o conhecimento jurídico é uma ferramenta de transformação, e que todo cidadão merece compreender os próprios direitos.',
    quote: '"Estudo Direito para ser a voz de quem não conhece os próprios direitos."',
  },
  areas: [
    'Direito Cível',
    'Direito Processual Civil',
    'Direito Previdenciário (aposentadoria rural)',
    'Direito Sucessório',
    'Direito Trabalhista',
  ],
  instagram: [
    { handle: 'amandarenataqs', url: 'https://www.instagram.com/amandarenataqs/' },
    { handle: 'euamandaquadros', url: 'https://www.instagram.com/euamandaquadros/' },
  ] satisfies SocialAccount[],
  credit: {
    text: 'Feito por Vinícius Arruda',
    linkedinUrl: 'https://www.linkedin.com/in/arrudavinicius/',
    linkedinLabel: 'LinkedIn de Vinícius Arruda',
  },
} as const
