# GuitarFros · Web

Web estática (HTML + CSS + JS, sen instalar nada).

## Publicar en GitHub Pages
1. Sube todo o contido deste cartafol á raíz do teu repositorio.
2. En GitHub: **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
3. A web quedará en `https://TU_USUARIO.github.io/TU_REPO/`.

## Engadir un plugin novo
Abre `plugins.js`, copia un bloque `{ ... }` dentro de `PLUGINS` e cambia os datos
(`group` pode ser `apps`, `guitar` ou `studio`). Garda e xa aparece no carrusel.

Se queres unha imaxe propia, ponla en `assets/plugins/` e escribe a ruta en `image`.
Se deixas `image: ""`, xérase automaticamente unha chapa plateada co nome do plugin.

## Descargas
Sube os ficheiros a **Releases** do repositorio co nome `ID-linux.zip`, `ID-mac.zip` e `ID-win.zip`
(por exemplo `sf-tape-machine-win.zip`) e cambia `releasesBase` en `plugins.js` polo teu usuario/repo.
Se un plugin non ten versión para algún sistema, pon `downloads: { mac: null }`.

## Ligazón directa a un plugin
`https://TU_USUARIO.github.io/TU_REPO/#studio/sf-tape-machine`

## Imaxes dos plugins
Ponlle á imaxe o nome do `id` do plugin e déixaa en `assets/plugins/`
(por exemplo `assets/plugins/sf-tape-machine.png`). A web atópaa soa, sen tocar código.
Valen `.png`, `.jpg` e `.webp`; o ideal é formato 4:3 (ex.: 800x600).
