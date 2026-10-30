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
Cada plugin ten no seu bloque de `plugins.js` un apartado `downloads` con tres enlaces (`linux`, `mac`, `win`).
Os que non teñan enlace móstranse desactivados como "Próximamente".

## Ligazón directa a un plugin
(A web sempre se abre en Plugins de guitarra; só se salta a outro plugin se a ligazón leva este final.)
`https://TU_USUARIO.github.io/TU_REPO/#studio/sf-tape-machine`

## Imaxes dos plugins
Van no cartafol `assets/plugins/`, en formato 4:3 (800x600). O nome de cada ficheiro vén indicado no campo `image`
de cada plugin en `plugins.js`. Se un ficheiro non existe, a web mostra unha chapa xerada no seu lugar.
Ollo: GitHub Pages distingue maiúsculas e minúsculas (`Reverb_GitHub.png` non é o mesmo que `reverb_github.png`).
