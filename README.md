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
