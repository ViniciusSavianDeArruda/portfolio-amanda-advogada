export type ExperienceItem = {
  id: number
  role: string
  place: string
  period: string
  description: string
}

export const experiences: ExperienceItem[] = [
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
