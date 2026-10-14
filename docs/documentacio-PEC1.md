# PAC 1 — Eines HTML i CSS I (UOC)

**Autora:** Anna Costa
**Portal:** GastroCAT — Cuina catalana
**Web pública:** [anna-costa-eines.netlify.app](https://anna-costa-eines.netlify.app/)
**Repositori:** [github.com/costanna/anna-costa-eines](https://github.com/costanna/anna-costa-eines)

## 1. Procés de desenvolupament de la plantilla amb Parcel

S'ha creat la plantilla des de zero seguint el Mòdul 2, amb els mateixos
paquets i scripts: `parcel` (bundler), `posthtml-include` (includes HTML),
`rimraf` i `npm-run-all` (neteja i encadenament multiplataforma).
Estructura: `src/` (codi editable: 5 HTML, 1 JS, 1 CSS, 11 JPG, 2 parcials),
`docs/`, `dist/` (generat, ignorat) i arxius de configuració (`.posthtmlrc`,
`.postcssrc`, `.gitignore`, `netlify.toml`, `package.json` amb
`source: src/*.html`). Instal·lació reproduïble amb `npm install` gràcies a
`package-lock.json`.

## 2. Entorns de producció i desenvolupament

Dos scripts diferenciats: `npm run start` → neteja + servidor Parcel a
`localhost:1234` amb hot reload (sense minificar, ràpid); `npm run build` →
neteja + build de producció (minificat, hash als noms per cache-busting,
source maps, imatges optimitzades). La taula del terminal i `dist/` confirmen
la diferència: en producció l'HTML/CSS/JS perden espais i els assets porten
hash; en desenvolupament se serveixen des de memòria amb HMR.

## 3. Suport a navegadors antics

`browserslist: ["> 0.5%", "last 2 versions", "not dead", "IE 11"]` per cobrir
versions actives fa 10 anys (`npx browserslist` inclou `ie 11`). Efectes
comprovats al `dist/`: Lightning CSS afegeix `-ms-user-select`, expandeix
`inset`/`margin-inline` i compila `clamp()`; `postcss-nesting` aplana regles.
El JavaScript (`type="module"`) és millora progressiva: sense JS o a IE11 el
contingut es veu igual i el menú mòbil funciona (tècnica `no-js`/`js`); només
el mapa requereix JS modern.

## 4. Pre/postprocessadors

Dos, independents entre ells i dels que porta Parcel per defecte: **PostHTML**
(`posthtml-include`) per reutilitzar capçalera i peu amb `<include>` (els
parcials no es publiquen sols), i **PostCSS** (`postcss-nesting` a `.postcssrc`)
amb niuat real al CSS (navegació, targetes, galeria, hero). Al build les
regles surten aplanades (`.site-nav ul`, `.card img`). No s'afegeix
Autoprefixer: Lightning CSS ja prefixa.

## 5. Dependència externa

**Leaflet 1.9.4** (a `dependencies`): mapa interactiu a la portada amb l'origen
dels plats (Valls i Barcelona), popups amb enllaç a les fitxes i tessel·les
d'OpenStreetMap amb atribució. S'importa al JS amb el seu CSS i Parcel ho
empaqueta; la icona és un `divIcon` propi per evitar l'asset trencat per
defecte. Aporta l'element visible i la interactivitat que demana l'enunciat
(menú, mapa i pàgina activa també responen al DOM).

## 6. Semàntica i accessibilitat (WCAG 2.0 AA)

`lang="ca"`, títol i descripció per pàgina, un `h1` per pàgina, landmarks
(`header`/`nav`/`main`/`section`/`article`/`footer`), `figure` amb `figcaption`,
`dl` de metadades, `skip-link`, `aria-label`/`current`/`expanded`, pàgina activa amb
subratllat i negreta (no només color), `alt` descriptius (`alt=""` a les decoratives),
`focus-visible`, contrast AA, `prefers-reduced-motion`, `width`/`height` a les
imatges i `title` als iframes.

## 7. Creació i publicació a Git i GitHub

Repositori `costanna/anna-costa-eines`, branca `main`, amb historial net
d'entrega i `.gitignore` (`node_modules/`, `dist/`, `.parcel-cache/`): només es
versiona el que no es pot generar. Aquest és el repositori únic de
l'assignatura.

## 8. Publicació a internet

Netlify connectat al repo (`netlify.toml`: build `npm run build`, publish
`dist`): cada `push` a `main` redesplega (CD). URLs netes `/categoria`,
`/det1`, `/det2` i `/links` mitjançant rewrites 200. Web accessible sense
contrasenya (verificat amb 200 a les 5 pàgines).

## 9. Fonts

Continguts propis contrastats amb Receptes.cat, Turisme de Barcelona i
Crónica Global; fotografies de Wikimedia Commons i vídeos de YouTube (crèdits
complets a la pàgina `/links`).
