# Memòria PAC 2 — Recursos multimèdia (GastroCAT)

Punt de partida: el codi lliurat a la PAC 1 (5 pàgines, Leaflet, PostHTML,
postcss-nesting, IE 11). Tot el que segueix s'ha afegit a sobre, amb commits
separats.

## 1. Imatges responsive (M3)

Totes les imatges de contingut (11 JPG al repo) se serveixen amb `<picture>`:
`<source type="image/webp">` amb `srcset` de 3 amplades generades per Parcel
(`?as=webp&width=480/800/1280`, hero fins a 1920) i `<img>` JPEG de reserva amb
el mateix `srcset`. El `sizes` descriu cada context (hero `100vw`, targetes
`33/50vw`, files `40vw`, galeria `33vw`, destacada `720px`). Resultat al
`dist/`: ~66 fitxers WebP+JPEG amb hash; el navegador tria el més petit que
serveix (ex.: un mòbil rep el WebP de 480 en comptes del JPG de 1280).
`width`/`height` + `loading` + `decoding="async"` eviten salts de maquetació.
Regla `picture { display: contents }` perquè el contenidor no alteri la graella.

## 2. Clipping (M3)

`clip-path: polygon()` a l'hero i als banners (tall diagonal inferior
responsive amb `clamp()`) i cintes amb retall a les targetes de la portada.
Sense suport de `clip-path`, les vores queden rectes: el contingut no en depèn.

## 3. Animació web accessible (M3)

`@keyframes heroZoom` (zoom 24 s de l'hero) i `puja` (aparició en fer scroll
via `IntersectionObserver`, llindar 0.15, una sola vegada), més transicions de
`transform`/`background-color` a botons i navegació. Tot viu dins de
`@media (prefers-reduced-motion: no-preference)`; el bloc `reduce` anul·la
qualsevol animació/transició i els `.reveal` queden visibles per defecte (el JS
tampoc observa en aquest cas). Sense JS, tot el contingut és visible.

## 4. Comprovacions

- `npm run build` net: variants WebP/JPEG generades, `<picture>` resolts.
- Contrast i focus inalterats; `alt` descriptius mantinguts a cada `<img>`
  (el `<source>` no en necessita).
- Pes: el WebP de 480 (~20-40 KB) substitueix el JPG de 1280 (~150-500 KB) a
  mòbil.
