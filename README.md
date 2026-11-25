# Portfólio acadêmico — Amanda Quadros

Portfólio acadêmico de Amanda Quadros, estudante de Direito na Universidade Franciscana (UFN). Página única com direção editorial inspirada em periódicos jurídicos: apresentação, estágios, percurso acadêmico, vida acadêmica e contato.

## Stack

- React 19 + TypeScript
- Vite
- CSS próprio, sem framework: tokens em `src/styles/tokens.css`, base em `src/styles/base.css` e um arquivo por componente
- Animações em CSS + IntersectionObserver, sempre com alternativa para `prefers-reduced-motion`

## Scripts

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento
npm run lint      # ESLint
npm run build     # checagem de tipos + build de produção em dist/
npm run preview   # serve o build de produção localmente
```

## Estrutura

```
src/
  data/         conteúdo da página (perfil, estágios, percurso, vida acadêmica, seções)
  components/   seções e peças de interface, cada uma com seu CSS
  hooks/        revelação ao rolar, scroll-spy, progresso de rolagem, divisão de títulos
  lib/          utilitários (movimento reduzido, clamp)
  styles/       tokens, base e estilos compartilhados de seção
  assets/       fotos em WebP (com variantes -600 para telas menores) e a logo
public/         favicon, ícone para iPhone e imagem de compartilhamento (Open Graph)
```

## Conteúdo

Todo o texto da página fica em `src/data/`. Para atualizar uma informação (um estágio, uma atividade, um contato), edite o arquivo correspondente; os componentes não contêm texto de conteúdo.

As seções (menu do topo, rodapé, sumário lateral e números 01–05) vêm de uma única lista em `src/data/sections.ts`.

## Imagens

- Fotos em WebP, com largura máxima de 1080 px, e variante `<nome>-600.webp` para telas menores.
- Para adicionar uma foto, coloque `<nome>.webp` (e, se for mais larga que 600 px, `<nome>-600.webp`) em `src/assets/` e referencie com `image('<nome>', largura, altura)`.

## Publicação

Antes de publicar, troque o `og:image` em `index.html` por uma URL absoluta do domínio final, para a imagem de compartilhamento aparecer em redes sociais.

Diretrizes de conteúdo, identidade visual e acessibilidade do projeto: ver `AGENTS.md`.
