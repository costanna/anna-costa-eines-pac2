# Eines HTML i CSS I — PEC 1 (GastroCAT)

Portal de cuina catalana (**gastronomia**): portada (`/`), llistat de receptes
(`/categoria`), fitxes de pa amb tomàquet (`/det1`) i calçotada (`/det2`) i
pàgina de fonts (`/links`). Workflow **npm + Parcel + PostHTML + PostCSS**.

Web pública: https://anna-costa-eines.netlify.app/
Repositori: https://github.com/costanna/anna-costa-eines

## Requisits

- Node.js ≥ 20 i npm

## Instal·lació

```bash
npm install
```

## Scripts (entorns)

| Ordre | Què fa |
| --- | --- |
| `npm run start` | Neteja i arrenca dev a http://localhost:1234 amb hot reload. |
| `npm run build` | Neteja i genera producció minificada amb hash + source maps a `dist/`. |
| `npm run clean` | Esborra `dist/` i `.parcel-cache` (multiplataforma). |
| `npm run parcel:dev` / `parcel:build` | Ordres pures de Parcel sense netejar. |

## Estructura

```
.
├── src/
│   ├── index.html (/) · categoria.html (/categoria)
│   ├── det1.html (/det1) · det2.html (/det2) · links.html (/links)
│   ├── index.js (Leaflet + menú + pàgina activa)
│   ├── styles.css (responsive mobile-first, amb nesting)
│   ├── img/*.jpg (fotos reals allotjades al repo)
│   └── partials/header.html + footer.html (<include>)
├── docs/ (memòria + respostes M1/M2 + document d'entrega en PDF)
├── dist/ (generat, no es versiona)
├── .posthtmlrc · .postcssrc · .gitignore
├── netlify.toml (build + rewrites d'URL netes)
└── package.json (source: src/*.html, browserslist amb IE 11)
```

## Decisions (resum)

- **Parcel 2**: dev amb HMR; build amb hash, minificació i source maps.
- **Browserslist** amb `IE 11` (versions de fa 10 anys): Lightning CSS afegeix
  prefixos (`-ms-`) i `postcss-nesting` aplana regles; el JS és millora
  progressiva.
- **PostHTML + posthtml-include**: `header`/`footer` reutilitzats.
- **PostCSS + postcss-nesting**: nesting real al CSS (`nav`, `card`, `gallery`…).
- **Leaflet** (dependència externa visible): mapa interactiu a la portada.
- **Responsive**: mobile-first, 700/1100px, hero `92svh`, vídeo 16:9 compatible.
- **WCAG 2.0 AA**: landmarks, `skip-link`, `aria-*`, `alt`, `focus-visible`,
  contrast, pàgina activa no només amb color.
- **URLs netes** `/categoria`, `/det1`, `/det2`, `/links` via rewrites 200.

## Desplegament (Netlify)

- **Build command:** `npm run build` — **Publish directory:** `dist`
- CD amb cada push a `main`.
