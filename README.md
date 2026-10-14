# Eines HTML i CSS I — PAC 2 (GastroCAT multimèdia)

Evolució del portal de cuina catalana de la PAC 1 amb tècniques multimèdia del
Mòdul 3: **imatges responsive**, **clipping** i **animació web accessible**.

## Novetats PAC 2

- **Imatges responsive**: cada `<img>` és ara un `<picture>` amb format WebP
  (`?as=webp`) i JPEG de reserva, `srcset` amb 3 amplades (480/800/1280,
  hero fins a 1920) i `sizes` segons el context. Parcel genera les variants al
  build. `decoding="async"` i `fetchpriority` mantinguts.
- **Clipping amb `clip-path`**: tall en diagonal a l'hero (`92svh`) i als
  banners (`42svh`), i etiquetes amb forma de cinta a les targetes. Sense
  suport, el navegador ignora el retall (degradació elegant).
- **Animació web**: zoom lent de l'hero (`heroZoom`), aparició de targetes i
  galeries amb `IntersectionObserver` (`.reveal` → `.is-visible`) i
  transicions a botons i navegació. Tot desactivat amb
  `prefers-reduced-motion` (bloc global `animation: none; transition: none`).

## Estructura i scripts

Igual que la PAC 1 (`npm run start` / `npm run build`), amb `source: src/*.html`
(5 pàgines), Leaflet, PostHTML i postcss-nesting. Més detall a
`docs/memoria-pac2.md`.
