# Respostes a les activitats — M1 i M2

> Les respostes de les activitats "fes-ho i observa" descriuen el que s'hi espera trobar. Convé que les comprovis tu mateixa al navegador, perquè la interfície de les DevTools canvia sovint.

---

## M1. Eines per a desenvolupadors del navegador

### Inspector — Activitat 1

**Què podem veure en el panell d'HTML?**
L'arbre del DOM tal com l'ha interpretat el navegador en aquell moment. No és el codi font original: inclou els canvis fets per JavaScript i les correccions d'HTML mal format.

**Què representa cada línia?**
Cada línia és un node: una etiqueta d'obertura amb els seus atributs, un node de text, un comentari o un pseudoelement (`::before`, `::after`).

**Què ens mostra la indentació?**
La jerarquia de pares i fills. Un node més indentat és descendent de l'element que té a sobre amb menys indentació.

**Per a què serveixen les fletxes?**
Serveixen per desplegar o plegar els nodes que tenen fills. Alt+clic desplega tot el subarbre de cop.

**Què mostra la barra inferior?**
La *breadcrumb bar*: la ruta d'ancestres des de `html` fins a l'element seleccionat. Clicant en un dels elements el selecciones.

**Menú contextual (clic dret)**
Hi ha, entre d'altres:
- Edit As HTML, Create New Node, Duplicate Node, Delete Node.
- Attributes (afegir o editar atributs).
- Change Pseudo-class (`:hover`, `:active`, `:focus`, `:focus-within`, `:focus-visible`, `:visited`, `:target`).
- Copy: Inner/Outer HTML, CSS Selector, CSS Path, XPath.
- Paste.
- Screenshot Node, Scroll Into View.
- Show DOM Properties, Use in Console.
- Expand All / Collapse.
- Show Accessibility Properties, Break on… (subtree/attribute modifications, node removal).

**Edit as HTML i estats**
Amb *Edit As HTML* modifiques el text d'un enllaç del menú i el canvi es veu a l'instant. Només afecta la còpia local de la pàgina: en recarregar, desapareix. Per forçar `:hover`, fes clic dret > Change Pseudo-class > `:hover`, o fes servir el botó `:hov` del panell de regles. L'enllaç es pinta amb l'estil de hover i les regles corresponents apareixen actives al panell Rules.

### Inspector — Activitat 2

**Rules vs Computed**
- **Rules** mostra les regles CSS que coincideixen amb l'element, ordenades per especificitat. Hi surten el selector, el fitxer i la línia d'origen, les declaracions ratllades (sobreescrites o no vàlides) i les heretades dels ancestres. Es pot editar: activar i desactivar declaracions, afegir-ne i obrir el selector de color.
- **Computed** mostra el **valor final** de cada propietat després de la cascada, l'herència i la resolució d'unitats (per exemple, `2em` passa a `32px`). Si despleges una propietat, veus quines regles hi han contribuït. També hi ha el diagrama del model de caixa. Serveix per saber el valor efectiu d'una propietat, no d'on ve cada declaració.

A la pestanya Layout, el diagrama del model de caixa permet editar directament `margin`, `border`, `padding` i les mides. La pestanya Fonts permet modificar la mida, el pes, la inclinació i els eixos de les fonts variables.

### Inspector — Activitat 3
Coses interessants per compartir al fòrum:
- Els indicadors d'**inactive CSS**: la propietat apareix en gris amb una icona (i) que explica per què no té efecte, per exemple `justify-content` en un element que no és flex.
- El panell **Changes**, que recull tots els canvis de CSS fets en viu i permet copiar-los.
- El **eyedropper**, i el comprovador de contrast en el selector de color.

### Inspector de Flexbox — Activitat 1

**Com identificar un contenidor flex?**
- En el panell HTML, apareix un distintiu `flex` al costat de l'etiqueta.
- En el panell Rules, apareix una icona al costat de `display: flex`. En clicar-la, el contenidor es ressalta a la pàgina.
- Apareix a la secció **Flexbox** de la vista Layout.

**Què es veu a la vista Layout?**
- El contenidor seleccionat.
- La llista dels seus elements flex.
- Un diagrama de l'eix principal.
- En seleccionar un element, com s'ha calculat la seva mida final: mida base, *flex-basis*, creixement o encongiment, i mínims i màxims (per exemple, "The item was set to grow").
- L'overlay mostra el contenidor, els elements i l'espai lliure.

### Inspector de Flexbox — Activitat 2
És útil sobretot quan un element no té la mida que esperes. L'inspector t'explica com `flex-grow`, `flex-shrink` i `flex-basis` han repartit l'espai. També va bé per entendre l'alineació i el *wrapping*, per depurar navegacions i targetes, i per veure l'espai sobrant.

### Inspector de Grid — Activitat 3

**Com identificar un contenidor grid?**
- Amb el distintiu `grid` al panell HTML.
- Amb la icona de graella al costat de `display: grid` al panell Rules.
- Amb la llista de graelles de la secció **Grid** de la vista Layout.

**Clic sobre el distintiu `grid`**
Activa o desactiva l'overlay de la graella sobre la pàgina. Mostra les línies, els *gaps* ratllats, els números de línia i, si n'hi ha, els noms d'àrees i de línies. Tot això és informació que al codi no es veu. És molt útil per veure on s'ha col·locat cada element i si s'han creat files o columnes implícites.

**Què es veu a la vista Layout?**
- Les caselles per mostrar el *grid overlay* de cada graella i per triar-ne el color.
- Opcions de visualització: *Display line numbers*, *Display area names* i *Extend lines infinitely*.
- Un minimapa interactiu de la graella. En passar el ratolí per sobre d'una cel·la, se'n ressalta la posició a la pàgina amb les seves mides.

### Inspector de Grid — Activitat 4
Sí que facilita la feina. Grid és bidimensional i té conceptes que no es veuen al codi: línies numerades (també negatives), àrees, pistes implícites i *auto-placement*. L'overlay fa visible aquesta estructura. Si modifiques `grid-template-columns`, `gap` o `grid-area` en viu, veus el resultat al moment.

### Editor d'estils — Activitat 1

1. A l'esquerra, l'editor llista totes les fulles d'estil de la pàgina. Selecciona l'element a l'inspector, mira el nom del fitxer i la línia al costat de la regla del panell Rules i clica-hi: s'obrirà directament a l'editor d'estils. Modifica la regla i el canvi s'aplica en viu.
2. **New** (+) crea una fulla d'estil buida associada a la pàgina. Hi pots escriure regles noves, per exemple `h1 { color: rebeccapurple; }`. **Import** permet carregar un `.css` del disc.
3. **Local o en línia.** Sobre una web publicada, els canvis viuen només en la memòria del navegador i es perden en recarregar. No pots modificar el servidor, només desar-ne una còpia amb *Save*. En un projecte local, amb *Save* sobreescrius el fitxer real del teu disc, de manera que l'editor d'estils funciona com un editor del projecte. Si fas servir el servidor de Parcel, la pàgina a més es refresca amb els canvis.

### Disseny responsive — Activitat 1

**Mode responsive o redimensionar la finestra**
- El mode responsive permet fixar mides exactes en píxels i fer servir perfils de dispositius reals, amb el seu DPR (densitat de píxels) i el seu *user agent*.
- Simula esdeveniments tàctils i rota la pantalla.
- Pot limitar la xarxa (*throttling*) i fer captures a la mida del viewport.
- Permet provar mides més petites o més grans del que permet la finestra, sense tocar-ne la mida real.

**Captures**
Amb la icona de la càmera fas una captura del viewport del dispositiu simulat. A més, amb *Take a screenshot* (també amb l'ordre `:screenshot --fullpage` de la consola) pots capturar la pàgina sencera, només la part visible o un node concret (clic dret > Screenshot Node).

**Throttling**
Simula connexions lentes (GPRS, 2G, 3G, 4G, DSL, Wi-Fi…). La pàgina triga més a carregar, i es veuen les imatges i els tipus de lletra apareixent de mica en mica. Serveix per avaluar el rendiment i l'experiència d'usuari en xarxes mòbils, detectar recursos massa pesats o que bloquegen la renderització, i provar els estats de càrrega.

### Disseny responsive — Activitat 2
Si el teu dispositiu no és a la llista, fes *Edit list…* > *Add custom device*. Cal introduir-hi el nom, l'amplada i l'alçada en **píxels CSS** (resolució física dividida pel DPR), el *device pixel ratio*, el *user agent* i si és tàctil. Les diferències amb el mòbil real acostumen a venir de la barra d'adreces del navegador, les tipografies del sistema, el motor de renderització (per exemple, Safari a iOS) i el rendiment real.

---

## M2. Un workflow modern de desenvolupament front-end

### Terminal — Activitat 1
Faig servir **PowerShell** a Windows 11. També hi ha disponible Git Bash. Ordres bàsiques:

| Acció | PowerShell | bash |
| --- | --- | --- |
| On soc | `pwd` | `pwd` |
| Llistar | `ls` / `Get-ChildItem` | `ls -la` |
| Canviar de directori | `cd carpeta`, `cd ..` | `cd carpeta`, `cd ..` |
| Crear carpeta | `mkdir nom` | `mkdir -p nom` |
| Crear fitxer | `New-Item fitxer.txt` | `touch fitxer.txt` |
| Copiar / moure | `cp`, `mv` | `cp`, `mv` |
| Esborrar | `rm fitxer`, `rm -r carpeta` | `rm`, `rm -r` |
| Veure contingut | `cat fitxer` | `cat`, `less` |

### Gestors de paquets — Activitat 1
`node -v` retorna `v24.18.1` i `npm -v` retorna `11.16.0`. És una versió superior a Node 20, així que no cal actualitzar.

### Gestors de paquets — Activitats 2 i 3 (idees clau)
- Un **paquet** és una carpeta amb un `package.json`. Un **mòdul** és qualsevol fitxer o carpeta que es pot carregar amb `require` o `import`.
- `npm install <paquet>` el descarrega a `node_modules/` i l'afegeix a `dependencies`. Amb `-D` o `--save-dev` l'afegeix a `devDependencies`, les eines que només calen per desenvolupar.
- `package-lock.json` fixa les versions exactes de tot l'arbre de dependències perquè totes les instal·lacions siguin idèntiques.
- `npm uninstall <paquet>` el desinstal·la, `npm outdated` mostra què es pot actualitzar i `npm update` actualitza dins del rang semver (`^` = mateixa versió major).

### Module bundlers — Activitat 1

**Per a què serveix `npx`?**
Executa l'executable d'un paquet. Si està instal·lat al projecte, fa servir el de `node_modules/.bin`. Si no, el descarrega temporalment. Amb `npx parcel src/index.html`, Parcel ha compilat el projecte i ha arrencat el servidor a `http://localhost:1234`, sense haver d'instal·lar res en global.

**Global o local?**
- En **global** (`npm i -g`) hi ha una sola versió per a tota la màquina, fora del projecte, i no queda registrada al `package.json`.
- En **local**, cada projecte declara la seva versió al `package.json` i al `package-lock.json`.

Es recomana local perquè el projecte és **reproduïble**: qualsevol persona o servidor, com Netlify, obté les mateixes versions amb `npm install`. A més, els projectes no entren en conflicte entre ells i no calen permisos d'administrador.

**Canvis al `package.json`**
- `devDependencies` amb `parcel`.
- `source: "src/index.html"`.
- Els `scripts` `start` i `build`.
- He esborrat el camp `main`, perquè Parcel l'interpretaria com a destí d'una llibreria.

**Scripts**
- `"start": "parcel"` arrenca el servidor de desenvolupament a partir del `source`.
- `"build": "parcel build"` genera la versió de producció a `dist/`.

### Module bundlers — Activitat 2

**`npm run build`**
- Al terminal, Parcel mostra les fases *Building…*, *Bundling…* i *Packaging & Optimizing…*, el temps total i una taula amb cada fitxer generat, la mida i el temps de processament.
- A la carpeta de treball apareixen `dist/` (el resultat) i `.parcel-cache/` (una memòria cau per accelerar els builds següents).
- A `dist/` hi ha la versió de producció: `index.html`, un `.css` i un `.js` amb un *hash* al nom (per exemple, `EINES.7e4dca01.css`), i els seus `.map`.

**Diferències entre `src/` i `dist/`**
- A `dist/`, l'HTML està minificat: sense espais sobrers, sense cometes innecessàries i sense `<head>` ni `</body>` redundants. Les rutes apunten als fitxers amb *hash*.
- El CSS i el JS també estan minificats.
- El *hash* al nom serveix per invalidar la memòria cau del navegador quan el contingut canvia (*cache busting*).
- Els `.map` (*source maps*) permeten que les DevTools mostrin el codi original.

La taula del terminal és, per tant, la llista d'aquests fitxers amb el pes final de cadascun.

**`npm run start`**
- Arrenca un servidor a `http://localhost:1234` i queda vigilant els fitxers. El procés no acaba fins que fas Ctrl+C.
- A diferència de `build`, no minifica ni optimitza, perquè busca rapidesa. Serveix els fitxers des de memòria i des de `dist/`, i injecta el codi de *hot reload*.
- Si canvies `Hello World` per `Hello UOC` i deses, la pàgina s'actualitza sola, sense recarregar.

**Benefici per als desenvolupadors**
El cicle editar-veure-corregir és instantani i es manté l'estat de la pàgina (HMR). Així no has de recarregar manualment ni recompilar a mà.

### Module bundlers — Activitat 3

**Segon `npm run build` sense neteja**
A `dist/` s'acumulen fitxers amb *hashes* nous al costat dels antics, que ja no fa servir ningú.

**`npm install --save-dev rimraf npm-run-all`**
S'afegeixen `rimraf` i `npm-run-all` a `devDependencies`.

**Scripts nous**
```json
"parcel:dev": "parcel",
"parcel:build": "parcel build",
"clean": "rimraf dist .parcel-cache",
"start": "npm-run-all clean parcel:dev",
"build": "npm-run-all clean parcel:build"
```

**Resultat**
Ara `dist/` només conté els fitxers del darrer build. Abans de cada build o servidor s'esborren `dist/` i `.parcel-cache/`.

**Avantatges**
- `dist/` sempre reflecteix exactament el codi actual i no hi pugen fitxers orfes al servidor.
- Hi ha menys pes.
- Es descarten problemes de memòria cau corrupta.

**Objectiu de cada ordre**
- `parcel:dev` i `parcel:build` són les ordres de Parcel "pures".
- `clean` esborra el resultat i la memòria cau.
- `start` i `build` compondran les dues coses: primer netegen, després executen Parcel.

**Paquets addicionals**
- **rimraf** és `rm -rf` multiplataforma, perquè `rm -rf` no existeix a PowerShell o CMD.
- **npm-run-all** executa diversos scripts de npm en seqüència, o en paral·lel amb `-p`, també de manera multiplataforma.

### Pre- i postprocessadors — Activitat 1 (JavaScript)

**Codi afegit per Parcel**
En els bundles amb més d'un mòdul, Parcel hi afegeix el seu *runtime* per resoldre els `import` i els `require` entre mòduls. En aquest projecte, com que només hi ha un fitxer sense imports, el resultat és mínim.

**Transformació del codi nou**
Amb el codi
```js
const name = 'world';
console.log(`Hello ${name}`);
```
el build genera:
```js
console.log("Hello world");
```

**Diferències respecte al codi anterior**
El transpilador i el minificador han fet *constant folding*: la constant `name` s'ha inlinat i la *template literal* s'ha convertit en una cadena normal.

> Nota: Parcel 2 ja no fa servir Babel per defecte, sinó **SWC**, un compilador escrit en Rust i molt més ràpid. Només utilitza Babel si el projecte té un `.babelrc`. El concepte és el mateix: transformar JS modern segons el `browserslist`.

### Pre- i postprocessadors — Activitat 2 (Browserslist)
Al `package.json`:
```json
"browserslist": "> 0.5%, last 2 versions, not dead"
```
En una frase: **els navegadors amb més del 0,5 % d'ús global i les dues darreres versions de cada navegador, excepte els que ja no tenen manteniment**.

Per veure la llista resultant, executa `npx browserslist`. Exemple de configuració personalitzada:
```json
"browserslist": ["defaults", "not op_mini all", "iOS >= 15"]
```
Si incloses navegadors més antics (per exemple, `"ie 11"`), el JS generat conté més transformacions i el CSS més prefixos.

### Pre- i postprocessadors — Activitat 3 (PostCSS / Autoprefixer)

Font (`src/styles.css`):
```css
body {
  height: 100vh;
  color: #1f1f1f;
  background: linear-gradient(to bottom, #bada55, #c0ffee);
}
```
Resultat (`dist/*.css`):
```css
body{color:#1f1f1f;background:linear-gradient(#bada55,#c0ffee);height:100vh;...}
```

**Quines diferències veus?**
- El codi està minificat, sense espais ni salts de línia.
- Les propietats s'han reordenat.
- `to bottom` ha desaparegut, perquè és el valor per defecte del gradient.
- No s'ha afegit cap prefix `-webkit-linear-gradient`, perquè tots els navegadors del `browserslist` suporten el gradient sense prefix.

**Què és responsabilitat de PostCSS i l'Autoprefixer?**
L'Autoprefixer només afegeix o treu prefixos. La minificació i l'optimització de valors les fa el minificador. A Parcel 2, totes dues coses les fa **Lightning CSS**, que substitueix l'Autoprefixer i cssnano per defecte.

**Una propietat que sí que es prefixa i una que no**
- `user-select: none` → `-webkit-user-select:none;user-select:none` (Safari encara necessita el prefix). Es veu al `h1` del projecte.
- `color`, `display: flex` o `linear-gradient` ja no necessiten prefix.

Altres exemples que en necessiten: `backdrop-filter`, `text-size-adjust` i `mask-image`.

### Pre- i postprocessadors — Activitat 4
Per afegir un plugin de PostCSS:
1. Instal·la'l com a dependència de desenvolupament, per exemple `npm i -D postcss-nesting`.
2. Crea un `.postcssrc` a l'arrel:
   ```json
   { "plugins": { "postcss-nesting": {} } }
   ```
3. No hi incloguis `autoprefixer` ni `postcss-preset-env`: Parcel ja ho fa amb Lightning CSS, i si els afegeixes el build és més lent. Parcel avisa si detecta plugins redundants.

### Pre- i postprocessadors — Activitat 5 (PostHTML)
S'ha fet `npm i -D posthtml-include` i s'ha creat el `.posthtmlrc`:
```json
{ "plugins": { "posthtml-include": { "root": "./src" } } }
```
A `src/index.html`:
```html
<include src="partials/header.html"></include>
```

**Resultat a `dist/`**
- `index.html` conté el codi de `partials/header.html` en el lloc de l'etiqueta `<include>`, que ha desaparegut.
- `header.html` **no** apareix a `dist/`. No és un punt d'entrada ni cap altre fitxer l'enllaça, només s'ha fet servir per construir `index.html` en temps de compilació.

### Publicació — Activitats 1–3
Aquests passos necessiten els teus comptes. Els has de fer tu:

1. **GitHub.** Crea un repositori buit, sense README, a <https://github.com/new>. Després, des de la carpeta del projecte (el repositori local ja està inicialitzat i té el primer commit):
   ```bash
   git remote add origin https://github.com/<usuari>/<repo>.git
   git push -u origin main
   ```
2. **Netlify.** Ves a *Add new site* > *Import an existing project* > GitHub > tria el repositori. Configura *Build command* `npm run build` i *Publish directory* `dist`. Obre la URL `*.netlify.app` generada.
3. **Continuous deployment.** Canvia un text, fes `git commit -am "Canvi"` i `git push`. Al panell *Deploys* de Netlify veuràs com es genera i es publica la versió nova.
