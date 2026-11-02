# Memòria PAC 2 — Recursos multimèdia (GastroCAT)

**Autora:** Anna Costa
**Web pública:** [eines-pac-2.netlify.app](https://eines-pac-2.netlify.app/)
**Repositori:** [github.com/costanna/anna-costa-eines-pac2](https://github.com/costanna/anna-costa-eines-pac2)

Punt de partida: el codi lliurat a la PAC 1 (5 pàgines, Leaflet, PostHTML,
postcss-nesting, IE 11). Tot el que segueix s'ha afegit a sobre, amb commits
separats.

## 1. Imatges responsive (M3)

Totes les imatges de contingut (11 JPG al repo) se serveixen amb `<picture>`:
`<source type="image/webp">` amb `srcset` de 3 amplades generades per Parcel
(`?as=webp&width=480/800/1280`, hero de 800 a 1920) i `<img>` JPEG de reserva
amb el mateix `srcset`. El `sizes` descriu l'amplada real de cada context (hero
`100vw`, targetes `33/50vw`, files `40vw`, galeria `230px`, destacada `720px`).
Resultat al `dist/`: 66 imatges (33 WebP i 33 JPEG) amb hash; el navegador tria
la més petita que serveix (ex.: a les targetes, un mòbil rep el WebP de 480 en
comptes del de 1280). `width`/`height` + `loading` + `decoding="async"` eviten
salts de maquetació. Regla `picture { display: contents }` perquè el contenidor
no alteri la graella, amb `picture source { display: none }` perquè el `<source>`
no ocupi cap cel·la.

## 2. Optimització amb Sharp (M3)

Parcel processa les imatges amb Sharp. Pes total de les 33 variants de cada
format segons la configuració a `sharp.config.json`:

| Configuració | WebP | JPEG | Variants on WebP > JPEG |
| --- | --- | --- | --- |
| `quality: 30` | 1.301 KB | 1.056 KB | 26 de 33 |
| `quality: 60` | 2.051 KB | 1.909 KB | 19 de 33 |
| `quality: 80` (igual que sense fitxer) | 3.035 KB | 3.173 KB | 13 de 33 |
| `quality: 95` | 6.846 KB | 6.335 KB | 26 de 33 |
| **JPEG 80 + WebP 70 (escollida)** | **2.322 KB** | **3.173 KB** | **1 de 33** |

Un sol valor no serveix per als dos formats: a la mateixa qualitat nominal, el
WebP sovint pesa més que el JPEG i aleshores servir-lo no aporta res. Amb valors
separats, el WebP baixa un 23,5 % respecte a la configuració per defecte i el
JPEG de reserva no canvia. Comparant l'hero a 1280 px amb zoom 2x, WebP 70 i
JPEG 80 no mostren diferències visibles. A `quality: 30` l'estalvi és més gran,
però no s'ha adoptat perquè es perd detall fi, visible amb zoom, i el WebP
continua pesant més que el JPEG.

## 3. Clipping (M3)

`clip-path: polygon()` a l'hero i als banners (tall diagonal inferior
responsive amb `clamp()`) i cintes amb retall a les targetes de la portada.
Sense suport de `clip-path`, les vores queden rectes: el contingut no en depèn.

## 4. Animació web accessible (M3)

`@keyframes heroZoom` (zoom 24 s de l'hero) i `puja` (aparició en fer scroll
via `IntersectionObserver`, llindar 0.15, una sola vegada), més transicions de
`transform`/`background-color` a botons i navegació. Tot viu dins de
`@media (prefers-reduced-motion: no-preference)`; el bloc `reduce` anul·la
qualsevol animació/transició i els `.reveal` queden visibles per defecte (el JS
tampoc observa en aquest cas). L'estat inicial ocult és `.js .reveal`, de manera
que sense JS tot el contingut és visible.

## 5. Eines del navegador

Comprovacions fetes amb les eines de desenvolupament de Chrome:

- **Inspector de graella:** a `/categoria`, el `<source>` apareixia com a
  element de graella i ocupava la primera columna; la imatge passava a la
  segona i el text baixava a sota. Es va resoldre amb la regla de l'apartat 1.
- **Estils computats:** l'opacitat de `.reveal` mostrava que, sense JS, les
  targetes quedaven ocultes. Es va resoldre amb el selector `.js .reveal`.
- **Disseny responsive:** les pàgines s'han revisat a 390, 800 i 1280 px.
- **Xarxa i `currentSrc`:** per veure quin fitxer tria el navegador a cada mida.
  Així es va detectar que el `sizes` de la galeria (`33vw`, 422 px) no
  corresponia a l'amplada real (229 px).

Cada correcció es va provar primer sobre una còpia del CSS del build.

## 6. Comprovacions

- `npm run build` net: variants WebP/JPEG generades, `<picture>` resolts.
- 5 pàgines a 1280 px, i portada i categoria a 390 px: cap imatge trencada,
  cap `.reveal` ocult i sense scroll horitzontal. `/categoria` també a 800 px i
  amb moviment reduït.
- Contrast i focus inalterats; `alt` descriptius mantinguts a cada `<img>`
  (el `<source>` no en necessita).
- Pes per variant: WebP de 480 → 13–50 KB; WebP de 1280 → 67–181 KB; JPEG de
  1280 → 110–219 KB. Els originals fan 173–669 KB.

## 7. Git i publicació

Repositori propi de la PAC 2 (branca `main`), amb `dist/` i `node_modules/`
fora del control de versions. Publicació a Netlify amb `netlify.toml` (build
`npm run build`, publish `dist`) i URLs netes amb rewrites 200: `/`, `/categoria`,
`/det1`, `/det2` i `/links`.
