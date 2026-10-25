# AGENTS.md — Portfólio acadêmico de Amanda Quadros

## Objetivo e contexto do projeto

Este projeto é o portfólio acadêmico de Amanda Quadros, estudante de Direito. Desenvolva uma experiência editorial, sofisticada, clara e personalizada, com rigor de UI/UX e engenharia de software sênior. Não represente Amanda como advogada formada ou atribua a ela experiência profissional sem confirmação explícita.

Stack definida para o projeto: React, TypeScript, Vite, Tailwind CSS 3 e Motion for React. Antes de usar uma biblioteca ou mudar configuração, confira `package.json` e os arquivos de configuração. No estado atual observado, React, React DOM, TypeScript e Vite estão presentes; Tailwind CSS e Motion for React ainda não constam nas dependências. Não suponha que estejam instalados nem use APIs ou sintaxe incompatíveis com as versões configuradas. Preserve configurações existentes. Não instale ou atualize dependências a menos que a tarefa vigente solicite isso.

## Skills disponíveis

As seguintes skills estão instaladas em `.agents/skills/`:

- `ui-design`: aplicar quando a tarefa envolver hierarquia visual, layout responsivo, tipografia, acessibilidade, formulários, imagens ou experiência de interface.
- `react`: aplicar quando a tarefa envolver componentes, estado, hooks, composição ou desempenho React. O guia inclui recomendações específicas de versões e Next.js; use apenas as orientações compatíveis com React e Vite deste projeto, sem introduzir recursos de Next.js.
- `typescript`: aplicar ao criar ou revisar tipos, módulos, código assíncrono ou configuração TypeScript. Leia `tsconfig` antes de sugerir mudanças e preserve as opções existentes.
- `animate`: aplicar ao construir animações ou transições. Antes de animar, defina a finalidade e confirme que movimento melhora a experiência; escolha a implementação mais simples disponível e use Motion for React apenas quando apropriado e instalado.
- `improve-animations`: aplicar em auditorias gerais de movimento. Esta skill é de análise e planejamento: não modifica código-fonte nem instala, compila ou formata.
- `review-animations`: aplicar ao revisar mudanças de animação. Esta skill avalia apenas motion, não implementa correções nem substitui uma revisão geral.

Leia a skill relevante antes de executar a tarefa correspondente e consulte apenas as regras e referências pertinentes. Skills orientam o trabalho, mas não autorizam alterações fora do escopo pedido nem sobrepõem instruções explícitas da pessoa usuária.

## Fonte de verdade e conteúdo

- Não invente dados acadêmicos ou pessoais de Amanda. Isso inclui instituição de ensino, período/semestre, datas, notas, títulos, projetos, publicações, atividades, estágio, experiências, habilidades, interesses, endereço, contatos, redes sociais e depoimentos.
- Use somente informações fornecidas pela pessoa usuária ou confirmadas em materiais existentes do projeto. Se um dado necessário não estiver disponível, omita-o ou sinalize claramente que requer confirmação; nunca apresente texto fictício como fato.
- Não transforme conteúdo educacional ou informativo em aconselhamento jurídico individual, promessa de resultado ou afirmação de qualificação profissional.
- Escreva em português do Brasil por padrão, com tom claro, profissional, humano e acessível.

## Identidade visual

A paleta do projeto é fixa e deve ser aplicada de modo coerente:

| Papel | Cor |
| --- | --- |
| Marfim | `#FAF8F3` |
| Branco | `#FFFFFF` |
| Areia | `#E9E0D2` |
| Dourado champagne | `#C2A46D` |
| Grafite | `#34312D` |
| Cinza quente | `#77716A` |
| Bordas | `#E4DED4` |

- Vinho e bordô podem ser usados como acento profissional e comedido — por exemplo em destaques tipográficos, separadores ou elementos decorativos pontuais. Evite usar como cor de fundo dominante ou de forma saturada. Rosa não é adequado para o tom do projeto.
- Priorize fundos marfim e branco, texto grafite, texto secundário em cinza quente, bordas discretas e dourado champagne como acento comedido. Verifique contraste legível em texto e controles.
- Prefira uma composição editorial personalizada, tipografia elegante e espaços bem ritmados. Evite aparência genérica de template, excesso de cartões, ornamentos sem função ou clichês visuais jurídicos.
- Centralize cores em tokens CSS ou no tema Tailwind existente quando aplicável; evite valores duplicados e avulsos.

## UI, acessibilidade e movimento

- Projete mobile-first e considere também larguras intermediárias e telas amplas. Previna overflow horizontal, conteúdo truncado e controles difíceis de tocar.
- Use HTML semântico, hierarquia de títulos lógica, landmarks, rótulos claros, navegação por teclado e indicadores de foco visíveis.
- Mantenha contraste adequado e não use cor ou movimento como único meio de transmitir informação. Forneça texto alternativo útil para imagens informativas e `alt=""` para imagens decorativas.
- Anime apenas com propósito funcional, como feedback, indicação de estado ou continuidade espacial. Prefira CSS para transições simples e Motion for React para gestos, springs ou controle realmente necessário; não introduza uma biblioteca para um efeito simples.
- Respeite `prefers-reduced-motion` em toda animação. Reduza ou remova deslocamentos para quem prefere movimento reduzido e evite movimento contínuo, excessivo ou que prejudique leitura e interação.
- Use animações curtas, suaves, coerentes com o caráter acadêmico/editorial e que não bloqueiem conteúdo. Evite animar propriedades que causem recálculo de layout quando houver alternativa adequada.
- Implemente estados de hover apenas quando apropriado a dispositivos com ponteiro; preserve feedback equivalente em teclado e toque.
- Não crie links, chamadas, formulários, destinos ou dados de contato fictícios. Não use imagens de outra pessoa como se fossem Amanda sem aprovação explícita.

## Engenharia e manutenção

- Antes de editar qualquer arquivo, inspecione o arquivo alvo e as configurações relacionadas. Entenda a estrutura atual e o impacto da mudança.
- Preserve as configurações existentes de Vite, TypeScript, lint, CSS e dependências. Faça mudanças pequenas e limitadas ao escopo solicitado; não substitua configuração funcional sem necessidade justificada.
- Escreva componentes React reutilizáveis com responsabilidades claras. Tipar props e dados com TypeScript; evite `any`, efeitos desnecessários, abstrações prematuras e dependências sem necessidade.
- Se Tailwind CSS 3 estiver configurado, respeite sua configuração e sintaxe. Não introduza padrões de Tailwind v4 em um projeto v3.
- Respeite scripts e convenções existentes no `package.json`. Não faça alterações colaterais nem redesenhe interfaces quando o pedido for apenas de análise, documentação ou configuração.
- Ao concluir uma tarefa, informe o que mudou e quais verificações foram executadas; indique quando uma verificação não tiver sido feita.

## Critério de qualidade

Cada entrega deve respeitar os fatos confirmados, a identidade visual, acessibilidade, responsividade, consistência técnica e o escopo solicitado. Em caso de conflito, prevalecem as instruções explícitas mais recentes da pessoa usuária.
