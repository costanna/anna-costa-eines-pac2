# Memòria PEC 1 — Justificació de decisions (GastroCAT)

Portal de gastronomia catalana amb 5 pàgines: portada (`/`), categoria
(`/categoria`), dues fitxes (`/det1`, `/det2`) i enllaços (`/links`).

## 1. Plantilla (estructura + config)

Estructura `src/` (únic editable), `docs/`, `dist/` (generat, ignorat),
`.posthtmlrc` (PostHTML), `.postcssrc` (PostCSS), `.gitignore`
(`node_modules/`, `dist/`, `.parcel-cache/`), `netlify.toml`.
`package.json: source = src/*.html` (5 punts d'entrada).
Scripts `clean/start/build/parcel:dev/parcel:build` encadenats amb `npm-run-all`.
Paquets de plantilla (mateixos que al M2): `parcel`, `posthtml-include`,
`rimraf`, `npm-run-all`.

## 2. Entorns dev vs prod

- `npm run start` → `clean` + `parcel` (servidor :1234, HMR, sense minificar).
- `npm run build` → `clean` + `parcel build` (minificat, hash per cache-busting,
  source maps, imatges optimitzades amb hash).
- `rimraf` fa la neteja multiplataforma; sense neteja, `dist/` acumula hashes orfes.

## 3. Navegadors antics (10 anys)

`browserslist: ["> 0.5%", "last 2 versions", "not dead", "IE 11"]`
(`npx browserslist` confirma `ie 11` a la llista). Efectes verificats al `dist/`:
Lightning CSS afegeix `-ms-user-select`, expandeix `inset`/`margin-inline`/
`padding-block` i compila `clamp()`; `postcss-nesting` aplana les regles niuades.
El JS (`type="module"`) és millora progressiva: a IE11 o sense JS, el contingut
es veu igual; el menú mòbil funciona sense JS (tecnica `no-js`/`js` a `<html>`)
i el mapa només apareix si Leaflet carrega (el titular i el text queden).

## 4. Pre/postprocessadors

- **PostHTML (`posthtml-include`, `.posthtmlrc` amb `root: ./src`)**: `<include>`
  injecta `header/footer`; els parcials no surten sols a `dist/`.
- **PostCSS (`postcss-nesting`, `.postcssrc`)**: plugin independent, instal·lat a
  part i usat de debò al `styles.css` (`.site-nav`, `.card`, `.gallery`,
  `.hero`, `.meta`, `.video` niuats). Al `dist/` les regles surten aplanades
  (ex.: `.site-nav ul`, `.card img`). No s'afegeix Autoprefixer: Lightning CSS
  ja prefixa.

## 5. Dependència externa visible

**Leaflet 1.9.4** (`dependencies`, no dev): mapa interactiu a la portada amb
l'origen dels plats (Valls, Barcelona) i popups amb enllaç a les fitxes.
S'importa al `index.js` (`import L from 'leaflet'` + el seu CSS) i Parcel ho
empaqueta (~150 KB de JS + CSS + icones). Icona pròpia amb `divIcon` (📍) per
evitar l'asset trencat de la icona per defecte. Tessel·les © OpenStreetMap.

## 6. Temàtica i estructura

Portal **GastroCAT** (cuina catalana): portada amb hero, destacats i mapa
(`/`); llistat de 4 receptes amb foto destacada cadascuna (`/categoria`, dues
amb fitxa); fitxes de pa amb tomàquet (`/det1`) i calçotada (`/det2`) amb imatge
destacada + 3 paràgrafs + galeria de 3 + vídeo YouTube; pàgina de fonts
(`/links`). URLs netes via rewrites 200 al `netlify.toml`. Sense frameworks
CSS/JS ni plantilles de tercers.

## 7. Responsive

Mobile-first a pantalla completa: hero `92svh`, banners `42svh`, graelles
1→2→3 columnes (700/1100px), fitxes en fila a desktop, galeria 1→3, vídeo 16:9
amb `padding-top` (compatible), mapa `min(60vh,480px)`, hamburguesa amb
`aria-expanded`.

## 8. Semàntica i accessibilitat (WCAG 2.0 AA)

`lang="ca"`, `title`+`description` per pàgina, un `h1` per pàgina, landmarks,
`skip-link`, `aria-label/current/expanded`, pàgina activa amb subratllat+negreta (no
només color), `alt` descriptius (decoratives `alt=""`), `figure/figcaption`,
`dl` de metadades, `focus-visible`,
`prefers-reduced-motion`, `width/height` anti-CLS, `role="application"`+etiqueta
al mapa.

## 9. Git i GitHub

Repo `costanna/anna-costa-eines` (branca `main`, historial net d'entrega).
`.gitignore` exclou `node_modules/`, `dist/`, `.parcel-cache/`. Només es
versiona el que no es pot generar (`src/`, `docs/`, config). Aquest és el
repositori únic de l'assignatura.

## 10. Publicació

`netlify.toml` (build `npm run build`, publish `dist` + rewrites). URL:
https://anna-costa-eines.netlify.app/. CD: cada `push` a `main` redesplega.
Verificat: 200 a `/`, `/categoria`, `/det1`, `/det2`, `/links`.

## 11. Comprovacions fetes

- `npm run build` net sense errors (avís experimental d'ESM de postcss-nesting).
- Includes resolts, nesting aplanat, prefixos `-ms-`/`-webkit-`, Leaflet
  empaquetat, imatges JPG amb hash, iframes amb `title`+`loading="lazy"`.
