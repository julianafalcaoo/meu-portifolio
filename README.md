# Portfólio — Juliana Falcão

Portfólio pessoal construído com **React + TypeScript + Vite**.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview   # opcional, pra conferir o build localmente
```

O resultado fica na pasta `dist/`.

## Deploy

Qualquer um destes funciona bem com um projeto Vite:

- **Vercel**: importe o repositório no [vercel.com](https://vercel.com), ele detecta Vite automaticamente.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: rode `npm run build`, adicione `base: '/nome-do-repositorio/'` em `vite.config.ts` e publique o conteúdo de `dist/` na branch `gh-pages` (dá pra usar o pacote `gh-pages` pra automatizar isso).

## Estrutura

```
src/
  components/   -> Nav, Hero, Skills, Projects, Contact, Footer
  data/         -> content.ts (perfil, skills e projetos — edite aqui pra atualizar o conteúdo)
  hooks/        -> useScrollSpy, useRevealOnScroll
  index.css     -> paleta de cores, tipografia e animações
```

Pra atualizar textos, links, skills ou projetos, basta editar `src/data/content.ts` — os componentes já consomem esses dados automaticamente.
