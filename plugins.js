/* ==========================================================
   GUITARFROS · CATÁLOGO
   Este é o ÚNICO ficheiro que tes que tocar para engadir
   ou cambiar plugins/apps.
   ========================================================== */

const SITE = {
  // Aviso "EN CONSTRUCIÓN" na parte superior. Pon false cando a web estea lista.
  underConstruction: false,

  // OPCIONAL. Se todos os teus ficheiros están nun mesmo sitio podes poñer aquí a ruta base
  // (acabada en "/") e cada botón apuntará a: releasesBase + id + "-linux.zip" | "-mac.zip" | "-win.zip".
  // Normalmente non fai falta: pon os enlaces en "downloads" de cada plugin.
  // Os botóns sen enlace móstranse desactivados como "Próximamente".
  releasesBase: "",

  // Os tres grandes grupos (podes engadir un cuarto se algún día o precisas).
  // Orde dos botóns de grupo (de esquerda a dereita).
  // Grupo co que se abre a web (se non, abre o primeiro da lista):
  defaultGroup: "guitar",

  groups: [
    { id: "guitar", title: { gl: "Plugins VST3 para guitarra", es: "Plugins VST3 para guitarra", en: "VST3 plugins for guitar" },  brand: "Doctor Migrana", led: "#e0922f" },
    { id: "studio", title: { gl: "Plugins VST3 para estudio",  es: "Plugins VST3 para estudio",  en: "VST3 plugins for studio" },  brand: "StudioFros",     led: "#3f9aa8" },
    { id: "apps",   title: { gl: "APPs para guitarristas",     es: "APPs para guitarristas",     en: "Apps for guitarists" },      brand: "GuitarFros",     led: "#c8372d" },
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
   readme      OPCIONAL. Ligazón ao README do plugin en GitHub: o nome pasa a ser un enlace.
   wip         OPCIONAL. Pon  wip: true  para mostrar o selo "EN CONSTRUCIÓN" xunto ao nome.
   image       ruta da imaxe, ex.: "assets/plugins/tape-machine.png"
               (se a deixas baleira, busca assets/plugins/<id>.png|jpg|webp
               e, se non hai nada, xérase unha chapa plateada automática)
   downloads   OPCIONAL. Só se queres cambiar algún enlace:
               { linux: "https://...", mac: "https://...", win: "https://..." }
               Pon null (ou deixa o enlace sen poñer) para mostrala como "Próximamente".
   ---------------------------------------------------------- */
const PLUGINS = [

  /* ===== APPs para guitarristas ===== */
  {
    id: "guitarfros", group: "apps",
    name: "GuitarFros",
    wip: true,
    tag: { gl: "App para guitarristas", es: "App para guitarristas", en: "App for guitarists" },
    description: { gl: "A aplicación principal de GuitarFros: todo o que necesitas para practicar e tocar a guitarra nun só sitio. (Texto provisional: cámbiao polo teu.)", es: "La aplicación principal de GuitarFros: todo lo que necesitas para practicar y tocar la guitarra en un solo sitio. (Texto provisional: cámbialo por el tuyo.)", en: "The main GuitarFros app: everything you need to practise and play guitar in one place. (Placeholder text: replace it with your own.)" },
    image: "",
  },
  {
    id: "gp5-presets-creator", group: "apps",
    name: "GP5 Presets Creator",
    wip: true,
    tag: { gl: "Creador de presets", es: "Creador de presets", en: "Presets creator" },
    description: { gl: "Crea presets a partir dos teus ficheiros Guitar Pro 5 (.gp5) sen sufrir co proceso. (Texto provisional.)", es: "Crea presets a partir de tus archivos Guitar Pro 5 (.gp5) sin sufrir con el proceso. (Texto provisional.)", en: "Create presets from your Guitar Pro 5 (.gp5) files without the hassle. (Placeholder text.)" },
    image: "",
  },

  /* ===== Plugins VST3 para guitarra (Doctor Migrana) ===== */
  {
    id: "dm-noise-gate", group: "guitar",
    name: "Noise Gate",
    wip: true,
    tag: { gl: "Porta de ruído", es: "Puerta de ruido", en: "Noise gate" },
    description: { gl: "Corta o ruído e o zumbido entre notas para que a túa guitarra soe limpa, mesmo con moito gain. (Texto provisional.)", es: "Corta el ruido y el zumbido entre notas para que tu guitarra suene limpia, incluso con mucha ganancia. (Texto provisional.)", en: "Cuts noise and hum between notes so your guitar stays clean, even with heavy gain. (Placeholder text.)" },
    image: "assets/plugins/NoiseGate_GitHub.png",
  },
  {
    id: "dm-rockon", group: "guitar",
    name: "RockON 3-in-1",
    wip: true,
    tag: { gl: "Tres efectos nun", es: "Tres efectos en uno", en: "Three effects in one" },
    description: { gl: "Tres efectos de guitarra combinados nun só plugin, listos para sacar o teu son rockeiro. (Texto provisional.)", es: "Tres efectos de guitarra combinados en un solo plugin, listos para sacar tu sonido más rockero. (Texto provisional.)", en: "Three guitar effects combined in a single plugin, ready to bring out your rock sound. (Placeholder text.)" },
    image: "assets/plugins/RockOn_GitHub.png",
  },
  {
    id: "dm-reverb", group: "guitar",
    name: "Reverb",
    wip: true,
    tag: { gl: "Reverberación", es: "Reverberación", en: "Reverb" },
    description: { gl: "Unha reverb pensada para guitarra: desde un cuarto pequeno ata salas enormes. (Texto provisional.)", es: "Una reverb pensada para guitarra: desde una habitación pequeña hasta salas enormes. (Texto provisional.)", en: "A reverb made for guitar: from a small room to huge halls. (Placeholder text.)" },
    image: "assets/plugins/Reverb_GitHub.png",
  },
  {
    id: "dm-tremolo", group: "guitar",
    name: "Tremolo",
    readme: "https://github.com/guitarfros/DoctorMigrana-Tremolo/blob/main/README.md",
    tag: { gl: "Trémolo", es: "Trémolo", en: "Tremolo" },
    description: { gl: "O clásico efecto de ondulación de volume dos amplis antigos. (Texto provisional.)", es: "El clásico efecto de ondulación de volumen de los amplis antiguos. (Texto provisional.)", en: "The classic volume-wobble effect of vintage amps. (Placeholder text.)" },
    image: "assets/plugins/Tremolo_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/DoctorMigrana-Tremolo/releases/download/v0.1.0/Doctor-Migrana-Tremolo-Linux.zip",
      mac:   "https://github.com/guitarfros/DoctorMigrana-Tremolo/releases/download/v0.1.0/Doctor-Migrana-Tremolo-macOS.zip",
      win:   "https://github.com/guitarfros/DoctorMigrana-Tremolo/releases/download/v0.1.0/Doctor-Migrana-Tremolo-Windows.zip",
    },
  },
  {
    id: "dm-tuner", group: "guitar",
    name: "Tuner",
    wip: true,
    tag: { gl: "Afinador", es: "Afinador", en: "Tuner" },
    description: { gl: "Afinador preciso dentro da túa DAW, para que sempre empeces a gravar afinado. (Texto provisional.)", es: "Afinador preciso dentro de tu DAW, para que siempre empieces a grabar afinado. (Texto provisional.)", en: "An accurate tuner inside your DAW, so you always start recording in tune. (Placeholder text.)" },
    image: "assets/plugins/Tuner_GitHub.png",
  },

  /* ===== Plugins VST3 para estudio (StudioFros) ===== */
  {
    id: "sf-megaphone", group: "studio",
    name: "Megaphone",
    readme: "https://github.com/guitarfros/StudioFros-Megaphone/blob/main/README.md",
    tag: { gl: "Efecto megáfono", es: "Efecto megáfono", en: "Megaphone effect" },
    description: { gl: "Dálle ás túas pistas ese son estreito e esnaquizado de megáfono. (Texto provisional.)", es: "Dale a tus pistas ese sonido estrecho y rasgado de megáfono. (Texto provisional.)", en: "Give your tracks that narrow, gritty megaphone sound. (Placeholder text.)" },
    image: "assets/plugins/Megaphone_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/StudioFros-Megaphone/releases/download/v0.1.0/StudioFros-Megaphone-0.1.0-Linux.zip",
      mac:   "https://github.com/guitarfros/StudioFros-Megaphone/releases/download/v0.1.0/StudioFros-Megaphone-0.1.0-macOS.zip",
      win:   "https://github.com/guitarfros/StudioFros-Megaphone/releases/download/v0.1.0/StudioFros-Megaphone-0.1.0-Windows.zip",
    },
  },
  {
    id: "sf-nothing-filter", group: "studio",
    name: "Nothing Filter",
    readme: "https://github.com/guitarfros/StudioFros-NothingFilter/blob/main/README.md",
    tag: { gl: "Filtro", es: "Filtro", en: "Filter" },
    description: { gl: "Un filtro con carácter propio para moldear o timbre das túas pistas. (Texto provisional.)", es: "Un filtro con carácter propio para moldear el timbre de tus pistas. (Texto provisional.)", en: "A filter with its own character to shape the tone of your tracks. (Placeholder text.)" },
    image: "assets/plugins/NothingFilter_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/StudioFros-NothingFilter/releases/download/v0.1.0/StudioFros-NothingFilter-v0.1.0-Linux.zip",
      mac:   "https://github.com/guitarfros/StudioFros-NothingFilter/releases/download/v0.1.0/StudioFros-NothingFilter-v0.1.0-macOS.zip",
      win:   "https://github.com/guitarfros/StudioFros-NothingFilter/releases/download/v0.1.0/StudioFros-NothingFilter-v0.1.0-Windows.zip",
    },
  },
  {
    id: "sf-tape-delay", group: "studio",
    name: "Tape Delay",
    readme: "https://github.com/guitarfros/StudioFros-TapeDelay/blob/main/README.md",
    tag: { gl: "Eco de cinta", es: "Eco de cinta", en: "Tape echo" },
    description: { gl: "Eco de cinta cálido, con ese pequeno tremor que o fixo famoso. (Texto provisional.)", es: "Eco de cinta cálido, con ese pequeño temblor que lo hizo famoso. (Texto provisional.)", en: "Warm tape echo, with that little wobble that made it famous. (Placeholder text.)" },
    image: "assets/plugins/TapeDelay_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/StudioFros-TapeDelay/releases/download/v1.0.0/StudioFros-TapeDelay-linux.zip",
      mac:   "https://github.com/guitarfros/StudioFros-TapeDelay/releases/download/v1.0.0/StudioFros-TapeDelay-macos.zip",
      win:   "https://github.com/guitarfros/StudioFros-TapeDelay/releases/download/v1.0.0/StudioFros-TapeDelay-windows.zip",
    },
  },
  {
    id: "sf-tape-machine", group: "studio",
    name: "Tape Machine",
    readme: "https://github.com/guitarfros/StuidoFros-TapeMachine/blob/main/README.md",
    tag: { gl: "Máquina de cinta", es: "Máquina de cinta", en: "Tape machine" },
    description: { gl: "Emula a saturación e o corpo dunha gravadora de cinta analóxica. (Texto provisional.)", es: "Emula la saturación y el cuerpo de una grabadora de cinta analógica. (Texto provisional.)", en: "Emulates the saturation and body of an analogue tape recorder. (Placeholder text.)" },
    image: "assets/plugins/TapeMachine_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/StuidoFros-TapeMachine/releases/download/v0.1.0/StudioFros-TapeMachine-Linux-VST3.tar.gz",
      mac:   "https://github.com/guitarfros/StuidoFros-TapeMachine/releases/download/v0.1.0/StudioFros-TapeMachine-macOS-VST3.zip",
      win:   "https://github.com/guitarfros/StuidoFros-TapeMachine/releases/download/v0.1.0/StudioFros-TapeMachine-Windows-VST3.zip",
    },
  },
  {
    id: "sf-vinyl", group: "studio",
    name: "Vinyl",
    readme: "https://github.com/guitarfros/StudioFros-Vinyl/blob/main/README.md",
    tag: { gl: "Efecto vinilo", es: "Efecto vinilo", en: "Vinyl effect" },
    description: { gl: "Estalidos, po e crepitar: o son dun disco de vinilo antigo. (Texto provisional.)", es: "Chasquidos, polvo y crepitar: el sonido de un disco de vinilo antiguo. (Texto provisional.)", en: "Pops, dust and crackle: the sound of an old vinyl record. (Placeholder text.)" },
    image: "assets/plugins/Vinyl_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/StudioFros-Vinyl/releases/download/v1.0.0/StudioFros-Vinyl-Linux.zip",
      mac:   "https://github.com/guitarfros/StudioFros-Vinyl/releases/download/v1.0.0/StudioFros-Vinyl-macOS.zip",
      win:   "https://github.com/guitarfros/StudioFros-Vinyl/releases/download/v1.0.0/StudioFros-Vinyl-Windows.zip",
    },
  },

];
