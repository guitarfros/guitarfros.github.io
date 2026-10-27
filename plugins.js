/* ==========================================================
   GUITARFROS · CATÁLOGO
   Este é o ÚNICO ficheiro que tes que tocar para engadir
   ou cambiar plugins/apps.
   ========================================================== */

const SITE = {
  // Aviso "EN CONSTRUCIÓN" na parte superior. Pon false cando a web estea lista.
  underConstruction: true,

  // Onde están os ficheiros descargables (GitHub Releases do teu repo).
  // Cambia TU_USUARIO/TU_REPO polos teus datos.
  // Por defecto cada botón apunta a:  releasesBase + id + "-linux.zip" | "-mac.zip" | "-win.zip"
  releasesBase: "https://github.com/TU_USUARIO/TU_REPO/releases/latest/download/",

  // Os tres grandes grupos (podes engadir un cuarto se algún día o precisas).
  groups: [
    { id: "apps",   title: { gl: "APPs para guitarristas",     es: "APPs para guitarristas",     en: "Apps for guitarists" },      brand: "GuitarFros",     led: "#c8372d" },
    { id: "guitar", title: { gl: "Plugins VST3 para guitarra", es: "Plugins VST3 para guitarra", en: "VST3 plugins for guitar" },  brand: "Doctor Migrana", led: "#e0922f" },
    { id: "studio", title: { gl: "Plugins VST3 para estudio",  es: "Plugins VST3 para estudio",  en: "VST3 plugins for studio" },  brand: "StudioFros",     led: "#3f9aa8" },
  ],
};

/* ----------------------------------------------------------
   PLUGINS
   Para engadir un novo, copia un bloque { ... }, pégao no
   grupo que corresponda e cambia os datos.

   id          nome curto sen espazos (úsase para os ficheiros e a imaxe)
   group       "apps" | "guitar" | "studio"
   name        nome que se mostra
   tag         subtítulo curto, nos 3 idiomas { gl, es, en }
   description texto explicativo, nos 3 idiomas { gl, es, en }
               (tamén vale un texto simple, igual para todos os idiomas)
   image       ruta da imaxe, ex.: "assets/plugins/tape-machine.png"
               (se a deixas baleira, busca assets/plugins/<id>.png|jpg|webp
               e, se non hai nada, xérase unha chapa plateada automática)
   downloads   OPCIONAL. Só se queres cambiar algún enlace:
               { linux: "https://...", mac: "https://...", win: "https://..." }
               Pon null nunha plataforma para mostrala como "Non dispoñible".
   ---------------------------------------------------------- */
const PLUGINS = [

  /* ===== APPs para guitarristas ===== */
  {
    id: "guitarfros", group: "apps",
    name: "GuitarFros",
    tag: { gl: "App para guitarristas", es: "App para guitarristas", en: "App for guitarists" },
    description: { gl: "A aplicación principal de GuitarFros: todo o que necesitas para practicar e tocar a guitarra nun só sitio. (Texto provisional: cámbiao polo teu.)", es: "La aplicación principal de GuitarFros: todo lo que necesitas para practicar y tocar la guitarra en un solo sitio. (Texto provisional: cámbialo por el tuyo.)", en: "The main GuitarFros app: everything you need to practise and play guitar in one place. (Placeholder text: replace it with your own.)" },
    image: "",
  },
  {
    id: "gp5-presets-creator", group: "apps",
    name: "GP5 Presets Creator",
    tag: { gl: "Creador de presets", es: "Creador de presets", en: "Presets creator" },
    description: { gl: "Crea presets a partir dos teus ficheiros Guitar Pro 5 (.gp5) sen sufrir co proceso. (Texto provisional.)", es: "Crea presets a partir de tus archivos Guitar Pro 5 (.gp5) sin sufrir con el proceso. (Texto provisional.)", en: "Create presets from your Guitar Pro 5 (.gp5) files without the hassle. (Placeholder text.)" },
    image: "",
  },

  /* ===== Plugins VST3 para guitarra (Doctor Migrana) ===== */
  {
    id: "dm-noise-gate", group: "guitar",
    name: "Noise Gate",
    tag: { gl: "Porta de ruído", es: "Puerta de ruido", en: "Noise gate" },
    description: { gl: "Corta o ruído e o zumbido entre notas para que a túa guitarra soe limpa, mesmo con moito gain. (Texto provisional.)", es: "Corta el ruido y el zumbido entre notas para que tu guitarra suene limpia, incluso con mucha ganancia. (Texto provisional.)", en: "Cuts noise and hum between notes so your guitar stays clean, even with heavy gain. (Placeholder text.)" },
    image: "",
  },
  {
    id: "dm-rockon", group: "guitar",
    name: "RockON 3-in-1",
    tag: { gl: "Tres efectos nun", es: "Tres efectos en uno", en: "Three effects in one" },
    description: { gl: "Tres efectos de guitarra combinados nun só plugin, listos para sacar o teu son rockeiro. (Texto provisional.)", es: "Tres efectos de guitarra combinados en un solo plugin, listos para sacar tu sonido más rockero. (Texto provisional.)", en: "Three guitar effects combined in a single plugin, ready to bring out your rock sound. (Placeholder text.)" },
    image: "",
  },
  {
    id: "dm-reverb", group: "guitar",
    name: "Reverb",
    tag: { gl: "Reverberación", es: "Reverberación", en: "Reverb" },
    description: { gl: "Unha reverb pensada para guitarra: desde un cuarto pequeno ata salas enormes. (Texto provisional.)", es: "Una reverb pensada para guitarra: desde una habitación pequeña hasta salas enormes. (Texto provisional.)", en: "A reverb made for guitar: from a small room to huge halls. (Placeholder text.)" },
    image: "",
  },
  {
    id: "dm-tremolo", group: "guitar",
    name: "Tremolo",
    tag: { gl: "Trémolo", es: "Trémolo", en: "Tremolo" },
    description: { gl: "O clásico efecto de ondulación de volume dos amplis antigos. (Texto provisional.)", es: "El clásico efecto de ondulación de volumen de los amplis antiguos. (Texto provisional.)", en: "The classic volume-wobble effect of vintage amps. (Placeholder text.)" },
    image: "",
  },
  {
    id: "dm-tuner", group: "guitar",
    name: "Tuner",
    tag: { gl: "Afinador", es: "Afinador", en: "Tuner" },
    description: { gl: "Afinador preciso dentro da túa DAW, para que sempre empeces a gravar afinado. (Texto provisional.)", es: "Afinador preciso dentro de tu DAW, para que siempre empieces a grabar afinado. (Texto provisional.)", en: "An accurate tuner inside your DAW, so you always start recording in tune. (Placeholder text.)" },
    image: "",
  },

  /* ===== Plugins VST3 para estudio (StudioFros) ===== */
  {
    id: "sf-megaphone", group: "studio",
    name: "Megaphone",
    tag: { gl: "Efecto megáfono", es: "Efecto megáfono", en: "Megaphone effect" },
    description: { gl: "Dálle ás túas pistas ese son estreito e esnaquizado de megáfono. (Texto provisional.)", es: "Dale a tus pistas ese sonido estrecho y rasgado de megáfono. (Texto provisional.)", en: "Give your tracks that narrow, gritty megaphone sound. (Placeholder text.)" },
    image: "",
  },
  {
    id: "sf-nothing-filter", group: "studio",
    name: "Nothing Filter",
    tag: { gl: "Filtro", es: "Filtro", en: "Filter" },
    description: { gl: "Un filtro con carácter propio para moldear o timbre das túas pistas. (Texto provisional.)", es: "Un filtro con carácter propio para moldear el timbre de tus pistas. (Texto provisional.)", en: "A filter with its own character to shape the tone of your tracks. (Placeholder text.)" },
    image: "",
  },
  {
    id: "sf-tape-delay", group: "studio",
    name: "Tape Delay",
    tag: { gl: "Eco de cinta", es: "Eco de cinta", en: "Tape echo" },
    description: { gl: "Eco de cinta cálido, con ese pequeno tremor que o fixo famoso. (Texto provisional.)", es: "Eco de cinta cálido, con ese pequeño temblor que lo hizo famoso. (Texto provisional.)", en: "Warm tape echo, with that little wobble that made it famous. (Placeholder text.)" },
    image: "",
  },
  {
    id: "sf-tape-machine", group: "studio",
    name: "Tape Machine",
    tag: { gl: "Máquina de cinta", es: "Máquina de cinta", en: "Tape machine" },
    description: { gl: "Emula a saturación e o corpo dunha gravadora de cinta analóxica. (Texto provisional.)", es: "Emula la saturación y el cuerpo de una grabadora de cinta analógica. (Texto provisional.)", en: "Emulates the saturation and body of an analogue tape recorder. (Placeholder text.)" },
    image: "",
  },
  {
    id: "sf-vinyl", group: "studio",
    name: "Vinyl",
    tag: { gl: "Efecto vinilo", es: "Efecto vinilo", en: "Vinyl effect" },
    description: { gl: "Estalidos, po e crepitar: o son dun disco de vinilo antigo. (Texto provisional.)", es: "Chasquidos, polvo y crepitar: el sonido de un disco de vinilo antiguo. (Texto provisional.)", en: "Pops, dust and crackle: the sound of an old vinyl record. (Placeholder text.)" },
    image: "",
  },

];
