/* ==========================================================
   GUITARFROS · CATÁLOGO
   Este é o ÚNICO ficheiro que tes que tocar para engadir
   ou cambiar plugins/apps.
   ========================================================== */

const SITE = {
  // Onde están os ficheiros descargables (GitHub Releases do teu repo).
  // Cambia TU_USUARIO/TU_REPO polos teus datos.
  // Por defecto cada botón apunta a:  releasesBase + id + "-linux.zip" | "-mac.zip" | "-win.zip"
  releasesBase: "https://github.com/TU_USUARIO/TU_REPO/releases/latest/download/",

  // Os tres grandes grupos (podes engadir un cuarto se algún día o precisas).
  groups: [
    { id: "apps",   title: "APPs para guitarristas",      brand: "GuitarFros",     led: "#c8372d" },
    { id: "guitar", title: "Plugins VST3 para guitarra",  brand: "Doctor Migrana", led: "#e0922f" },
    { id: "studio", title: "Plugins VST3 para estudio",   brand: "StudioFros",     led: "#3f9aa8" },
  ],
};

/* ----------------------------------------------------------
   PLUGINS
   Para engadir un novo, copia un bloque { ... }, pégao no
   grupo que corresponda e cambia os datos.

   id          nome curto sen espazos (úsase para os ficheiros)
   group       "apps" | "guitar" | "studio"
   name        nome que se mostra
   tag         subtítulo curto (ex.: "Reverb", "Afinador")
   description texto explicativo
   image       ruta da imaxe, ex.: "assets/plugins/tape-machine.png"
               (se a deixas baleira, xérase unha chapa plateada automática)
   downloads   OPCIONAL. Só se queres cambiar algún enlace:
               { linux: "https://...", mac: "https://...", win: "https://..." }
               Pon null nunha plataforma para mostrala como "Non dispoñible".
   ---------------------------------------------------------- */
const PLUGINS = [

  /* ===== APPs para guitarristas ===== */
  {
    id: "guitarfros", group: "apps",
    name: "GuitarFros", tag: "App para guitarristas",
    description: "A aplicación principal de GuitarFros: todo o que necesitas para practicar e tocar a guitarra nun só sitio. (Texto provisional: cámbiao polo teu.)",
    image: "",
  },
  {
    id: "gp5-presets-creator", group: "apps",
    name: "GP5 Presets Creator", tag: "Creador de presets",
    description: "Crea presets a partir dos teus ficheiros Guitar Pro 5 (.gp5) sen sufrir co proceso. (Texto provisional: cámbiao polo teu.)",
    image: "",
  },

  /* ===== Plugins VST3 para guitarra (Doctor Migrana) ===== */
  {
    id: "dm-noise-gate", group: "guitar",
    name: "Noise Gate", tag: "Puerta de ruído",
    description: "Corta o ruído e o zumbido entre notas para que a túa guitarra soe limpa, mesmo con moito gain. (Texto provisional.)",
    image: "",
  },
  {
    id: "dm-rockon", group: "guitar",
    name: "RockON 3-in-1", tag: "Tres efectos nun",
    description: "Tres efectos de guitarra combinados nun só plugin, listos para sacar o teu son rockeiro. (Texto provisional.)",
    image: "",
  },
  {
    id: "dm-reverb", group: "guitar",
    name: "Reverb", tag: "Reverberación",
    description: "Unha reverb pensada para guitarra: desde un cuarto pequeno ata salas enormes. (Texto provisional.)",
    image: "",
  },
  {
    id: "dm-tremolo", group: "guitar",
    name: "Tremolo", tag: "Trémolo",
    description: "O clásico efecto de ondulación de volume dos amplis antigos. (Texto provisional.)",
    image: "",
  },
  {
    id: "dm-tuner", group: "guitar",
    name: "Tuner", tag: "Afinador",
    description: "Afinador preciso dentro da túa DAW, para que sempre empeces a gravar afinado. (Texto provisional.)",
    image: "",
  },

  /* ===== Plugins VST3 para estudio (StudioFros) ===== */
  {
    id: "sf-megaphone", group: "studio",
    name: "Megaphone", tag: "Efecto megáfono",
    description: "Dálle ás túas pistas ese son estreito e esnaquizado de megáfono. (Texto provisional.)",
    image: "",
  },
  {
    id: "sf-nothing-filter", group: "studio",
    name: "Nothing Filter", tag: "Filtro",
    description: "Un filtro con carácter propio para moldear o timbre das túas pistas. (Texto provisional.)",
    image: "",
  },
  {
    id: "sf-tape-delay", group: "studio",
    name: "Tape Delay", tag: "Eco de cinta",
    description: "Eco de cinta cálido, con ese pequeno tremor que o fixo famoso. (Texto provisional.)",
    image: "",
  },
  {
    id: "sf-tape-machine", group: "studio",
    name: "Tape Machine", tag: "Máquina de cinta",
    description: "Emula a saturación e o corpo dunha gravadora de cinta analóxica. (Texto provisional.)",
    image: "",
  },
  {
    id: "sf-vinyl", group: "studio",
    name: "Vinyl", tag: "Efecto vinilo",
    description: "Estalidos, po e crepitar: o son dun disco de vinilo antigo. (Texto provisional.)",
    image: "",
  },

];
