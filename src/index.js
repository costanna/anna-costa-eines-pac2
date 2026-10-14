// JS: sintaxi moderna transpilada per Parcel/SWC segons browserslist (inclou IE 11).
// El mapa Leaflet és la dependència externa visible de la PAC.
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const page = document.body?.dataset?.page ?? 'index';

const toggle = document.querySelector('.site-header__toggle');
const nav = document.querySelector('#navegacio');

toggle?.addEventListener('click', () => {
  const open = nav?.classList.toggle('is-open') ?? false;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.visually-hidden').textContent = open ? 'Tancar menú' : 'Obrir menú';
});

// Marca la pàgina activa per a accessibilitat (aria-current).
document.querySelectorAll('[data-nav]').forEach((link) => {
  if (link.getAttribute('data-nav') === page) {
    link.setAttribute('aria-current', 'page');
  }
});

// Any del footer.
const year = document.querySelector('#any');
if (year) year.textContent = String(new Date().getFullYear());

// Mapa d'origen dels plats (només a la portada).
const mapEl = document.querySelector('#mapa');
if (mapEl && typeof L !== 'undefined') {
  const map = L.map('mapa', { scrollWheelZoom: false }).setView([41.65, 1.6], 8);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Icona pròpia (divIcon) per evitar l'asset trencat de l'icona per defecte.
  const pin = L.divIcon({ className: 'map-pin', html: '<span aria-hidden="true">📍</span>', iconSize: [28, 28], iconAnchor: [14, 28] });

  const llocs = [
    { nom: 'Valls — bressol de la calçotada', coords: [41.2859, 1.2501], href: '/det2' },
    { nom: 'Barcelona — capital del pa amb tomàquet', coords: [41.3874, 2.1686], href: '/det1' },
  ];
  llocs.forEach(({ nom, coords, href }) => {
    L.marker(coords, { icon: pin }).addTo(map).bindPopup(`<strong>${nom}</strong><br><a href="${href}">Veure la fitxa</a>`);
  });
}

console.log(`Hola des de ${page}`);
