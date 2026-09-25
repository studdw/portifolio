# Portfólio — Lucas Kaftan Pasturuti
Portfólio pessoal em **Vite + React + Tailwind CSS**, com foco em TI, Dados e Automação.
Design minimalista em **branco e laranja**.

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Início — apresentação, stack, números e projetos em destaque |
| `/sobre` | Trajetória, formação e forma de trabalhar |
| `/projetos` | Lista de projetos (cada card abre a página de detalhe) |
| `/projetos/:slug` | **Página de detalhe**: problema, solução, processo, código, telas, resultados e stack |
| `/experiencia` | Timeline profissional e competências |

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório.
3. A Vercel detecta o preset **Vite** sozinha (build `npm run build`, output `dist`).
4. Deploy.

O `vercel.json` já traz o *rewrite* de SPA, então `/projetos/dashboard-budget` funciona ao recarregar.

## Onde editar o conteúdo

Tudo está em **`src/data/content.js`**. Cada projeto tem:

```js
{
  slug,        // url da página de detalhe
  title, year, role, summary, highlights, tags,
  problem,     // contexto e dor
  solution,    // como foi resolvido
  process,     // [{ title, text }] → timeline numerada
  results,     // [{ value, label }] → cards de resultado
  gallery,     // [{ src, caption }] → imagens com lightbox
  code,        // [{ label, language, description, snippet }] → blocos em abas
  stackDetail, // [{ name, use }]
}
```

Para adicionar um projeto novo, basta acrescentar um objeto nesse array — a rota,
o card e a página de detalhe são gerados automaticamente.

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx          Header fixo com indicador de rota ativa
│   ├── Footer.jsx
│   ├── ProjectCard.jsx     Card clicável → página de detalhe
│   ├── CodeBlock.jsx       Código em abas, com copiar e nº de linhas
│   ├── Gallery.jsx         Galeria com lightbox e fallback de imagem
│   ├── ResultStats.jsx     Cards de resultado
│   ├── Timeline.jsx        Etapas numeradas do processo
│   ├── SectionHeading.jsx
│   ├── Marquee.jsx
│   └── PageTransition.jsx
├── pages/                  Home, About, Projects, ProjectDetail, Experience, NotFound
├── hooks/                  useScrollToTop
├── data/                   content.js  ← todo o conteúdo
└── styles/                 index.css   ← Tailwind + utilitários
```

## Paleta

| Uso | Cor |
|---|---|
| Fundo | `#FFFFFF` |
| Acento | `#FF6B00` |
| Código (fundo) | `#121212` |
| Texto principal | `#121212` |
| Texto secundário | `#6B6B6B` |
| Bordas | `#E8E8E8` |
