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
  // Cada grupo pode ter  start: "id-do-plugin"  para dicir co que empeza o seu carrusel (se non, o primeiro).
  // Grupo co que se abre a web (se non, abre o primeiro da lista):
  defaultGroup: "guitar",

  groups: [
    { id: "guitar", start: "dm-rockon", title: { gl: "Plugins VST3 para guitarra", es: "Plugins VST3 para guitarra", en: "VST3 plugins for guitar" },  brand: "Doctor Migraña", led: "#e0922f" },
    { id: "studio", title: { gl: "Plugins VST3 para estudio",  es: "Plugins VST3 para estudio",  en: "VST3 plugins for studio" },  brand: "Studio Fros",     led: "#3f9aa8" },
    { id: "apps",   title: { gl: "APPs para guitarristas",     es: "APPs para guitarristas",     en: "Apps for guitarists" },      brand: "Guitar Fros",     led: "#c8372d" },
  ],
};

/* ----------------------------------------------------------
   PLUGINS
   Para engadir un novo, copia un bloque { ... }, pégao no
   grupo que corresponda e cambia os datos.

   id          nome curto sen espazos (úsase para os ficheiros e a imaxe)
   group       "apps" | "guitar" | "studio"
   name        nome que se mostra (texto simple, ou { gl, es, en } se cambia co idioma)
   tag         subtítulo curto, nos 3 idiomas { gl, es, en } (se o deixas "" non se mostra)
   description texto explicativo, nos 3 idiomas { gl, es, en }
               (tamén vale un texto simple, igual para todos os idiomas)
   readme      OPCIONAL. Ligazón ao README do plugin en GitHub: o nome pasa a ser un enlace.
   appUrl      Só nas APPs (online): ligazón do botón "Acceder á APP" (en vez dos 3 botóns de descarga).
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
    tag: { gl: "Trebellos para guitarristas", es: "Herramientas para guitarristas", en: "Tools for guitarists" },
    description: { gl: "APP online que inclúe diferentes ferramentas: afinador, metrónomo, backingtracks, xerador de progresións de acordes, estudo de funcións harmónicas, escalas, arpexios, modos, acordes, tríadas e un identificador de acordes. Todo isto para varios instrumentos de corda: guitarra, baixo, ukelele, mandolina, banjo,...", es: "APP online que incluye distintas herramientas: afinador, metrónomo, backing tracks, generador de progresiones de acordes, estudio de funciones armónicas, escalas, arpegios, modos, acordes, tríadas y un identificador de acordes. Todo ello para varios instrumentos de cuerda: guitarra, bajo, ukelele, mandolina, banjo,...", en: "Online app with several tools: tuner, metronome, backing tracks, chord progression generator, study of harmonic functions, scales, arpeggios, modes, chords, triads and a chord identifier. All of it for several string instruments: guitar, bass, ukulele, mandolin, banjo, ..." },
    image: "assets/plugins/GuitarFros_2_0.png",
    appUrl: "",   // <- enlace para ACCEDER á APP online (se está baleiro, o botón sae como "Próximamente")
  },
  {
    id: "gp5-presets-creator", group: "apps",
    name: "GP-5 Preset Creator",
    wip: true,
    tag: { gl: "Creador de presets para o multiefectos Valeton GP-5", es: "Creador de presets para el multiefectos Valeton GP-5", en: "Preset creator for the Valeton GP-5 multi-effects unit" },
    description: { gl: "APP online que, a partir dun audio dunha guitarra pode darche os valores aproximados para configurar o teu multiefectos Valeton GP-5.", es: "APP online que, a partir de un audio de guitarra, puede darte los valores aproximados para configurar tu multiefectos Valeton GP-5.", en: "An online app that, from an audio recording of a guitar, can give you the approximate values to set up your Valeton GP-5 multi-effects unit." },
    image: "assets/plugins/GP5_Preset_Creator.png",
    appUrl: "",   // <- enlace para ACCEDER á APP online (se está baleiro, o botón sae como "Próximamente")
  },

  /* ===== Plugins VST3 para guitarra (Doctor Migrana) ===== */
  {
    id: "dm-noise-gate", group: "guitar",
    name: "Noise Gate",
    tag: { gl: "Porta de ruído", es: "Puerta de ruido", en: "Noise gate" },
    description: { gl: "Pedal de noise gate clásico inspirado nos pedais Boss NS-2.", es: "Pedal de noise gate clásico inspirado en los pedales Boss NS-2.", en: "A classic noise gate pedal inspired by the Boss NS-2 pedals." },
    image: "assets/plugins/NoiseGate_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/DoctorMigrana-NoiseGate/releases/download/v1.0.0/Doctor-Migrana-Noise-Gate-Linux.zip",
      mac:   "https://github.com/guitarfros/DoctorMigrana-NoiseGate/releases/download/v1.0.0/Doctor-Migrana-Noise-Gate-macOS.zip",
      win:   "https://github.com/guitarfros/DoctorMigrana-NoiseGate/releases/download/v1.0.0/Doctor-Migrana-Noise-Gate-Windows.zip",
    },
  },
  {
    id: "dm-rockon", group: "guitar",
    name: "RockOn 3-in-1",
    tag: { gl: "Tres efectos nun", es: "Tres efectos en uno", en: "Three effects in one" },
    description: { gl: "Pedal con booster, compresor e overdrive inspirados respectivamente nun Rangemaster, Dyna Comp e TubeScreamer. Todo o necesario para facer o Rock!", es: "Pedal con booster, compresor y overdrive inspirados respectivamente en un Rangemaster, un Dyna Comp y un TubeScreamer. ¡Todo lo necesario para hacer Rock!", en: "A pedal with a booster, compressor and overdrive inspired by a Rangemaster, a Dyna Comp and a TubeScreamer respectively. Everything you need to rock!" },
    image: "assets/plugins/RockOn_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/DoctorMigrana-RockON3-in-1/releases/download/v1.0.0/DoctorMigrana-RockON-3in1-VST3-Linux.zip",
      mac:   "https://github.com/guitarfros/DoctorMigrana-RockON3-in-1/releases/download/v1.0.0/DoctorMigrana-RockON-3in1-VST3-macOS.zip",
      win:   "https://github.com/guitarfros/DoctorMigrana-RockON3-in-1/releases/download/v1.0.0/DoctorMigrana-RockON-3in1-VST3-Windows.zip",
    },
  },
  {
    id: "dm-reverb", group: "guitar",
    name: "Spring Reverb",
    tag: { gl: "Reverb de resortes", es: "Reverb de muelles", en: "Spring reverb" },
    description: { gl: "Pedal de reverb de resortes inspirada na reverb que montaban os amplificadores Fender 6G15.", es: "Pedal de reverb de muelles inspirada en la reverb que montaban los amplificadores Fender 6G15.", en: "A spring reverb pedal inspired by the reverb built into Fender 6G15 amplifiers." },
    image: "assets/plugins/Reverb_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/DoctorMigrana-SpringReverb/releases/download/v1.0.0/Doctor-Migrana-Reverb-Linux-VST3.zip",
      mac:   "https://github.com/guitarfros/DoctorMigrana-SpringReverb/releases/download/v1.0.0/Doctor-Migrana-Reverb-macOS-VST3.zip",
      win:   "https://github.com/guitarfros/DoctorMigrana-SpringReverb/releases/download/v1.0.0/Doctor-Migrana-Reverb-Windows-VST3.zip",
    },
  },
  {
    id: "dm-tremolo", group: "guitar",
    name: { gl: "Trémolo", es: "Trémolo", en: "Tremolo" },
    readme: "https://github.com/guitarfros/DoctorMigrana-Tremolo/blob/main/README.md",
    tag: { gl: "Modulación Clásica", es: "Modulación clásica", en: "Classic modulation" },
    description: { gl: "Pedal de trémolo clásico inspirado nos trémolos que montaban os amplificadores Fender Deluxe 6G3.", es: "Pedal de trémolo clásico inspirado en los trémolos que montaban los amplificadores Fender Deluxe 6G3.", en: "A classic tremolo pedal inspired by the tremolo built into Fender Deluxe 6G3 amplifiers." },
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
    tag: "",
    description: { gl: "Pedal afinador de alta precisión (ata 1cts) e con control de Pitch para calibralo.", es: "Pedal afinador de alta precisión (hasta 1 cent) y con control de Pitch para calibrarlo.", en: "A high-precision tuner pedal (down to 1 cent) with a Pitch control to calibrate it." },
    image: "assets/plugins/Tuner_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/DoctorMigrana-Tuner/releases/download/v1.0.0/DoctorMigranaTuner-v1.0.0-Linux.zip",
      mac:   "https://github.com/guitarfros/DoctorMigrana-Tuner/releases/download/v1.0.0/DoctorMigranaTuner-v1.0.0-macOS.zip",
      win:   "https://github.com/guitarfros/DoctorMigrana-Tuner/releases/download/v1.0.0/DoctorMigranaTuner-v1.0.0-Windows.zip",
    },
  },

  /* ===== Plugins VST3 para estudio (StudioFros) ===== */
  {
    id: "sf-megaphone", group: "studio",
    name: "Megaphone",
    readme: "https://github.com/guitarfros/StudioFros-Megaphone/blob/main/README.md",
    tag: { gl: "Efecto de megáfono", es: "Efecto de megáfono", en: "Megaphone effect" },
    description: { gl: "Plugin en formato rack que emula varios tipos de megáfonos.", es: "Plugin en formato rack que emula varios tipos de megáfonos.", en: "A rack-format plugin that emulates several types of megaphones." },
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
    tag: { gl: "Efecto Filtro", es: "Efecto filtro", en: "Filter effect" },
    description: { gl: "Plugin en formato rack inspirado no son da intro da canción “Money for Nothing” co wha-wha a medio pisar.", es: "Plugin en formato rack inspirado en el sonido de la intro de la canción “Money for Nothing” con el wah-wah a medio pisar.", en: "A rack-format plugin inspired by the sound of the intro to “Money for Nothing”, with the wah-wah pedal half-pressed." },
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
    description: { gl: "Plugin en formato rack inspirado nos clásicos ecos de cinta que permite engadir ese carácter de eco analóxico ás nosas gravacións dixitais.", es: "Plugin en formato rack inspirado en los clásicos ecos de cinta que permite añadir ese carácter de eco analógico a nuestras grabaciones digitales.", en: "A rack-format plugin inspired by classic tape echoes that adds that analogue echo character to our digital recordings." },
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
    description: { gl: "Plugin en formato rack inspirado nas clásicas máquinas de cinta que permite engadir ese carácter analóxico ás nosas gravacións dixitais.", es: "Plugin en formato rack inspirado en las clásicas máquinas de cinta que permite añadir ese carácter analógico a nuestras grabaciones digitales.", en: "A rack-format plugin inspired by classic tape machines that adds that analogue character to our digital recordings." },
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
    description: { gl: "Plugin en formato rack inspirado nos clásicos reprodutores de vinilo que permite engadir ese carácter analóxico ás nosas gravacións dixitais.", es: "Plugin en formato rack inspirado en los clásicos reproductores de vinilo que permite añadir ese carácter analógico a nuestras grabaciones digitales.", en: "A rack-format plugin inspired by classic vinyl players that adds that analogue character to our digital recordings." },
    image: "assets/plugins/Vinyl_GitHub.png",
    downloads: {
      linux: "https://github.com/guitarfros/StudioFros-Vinyl/releases/download/v1.0.0/StudioFros-Vinyl-Linux.zip",
      mac:   "https://github.com/guitarfros/StudioFros-Vinyl/releases/download/v1.0.0/StudioFros-Vinyl-macOS.zip",
      win:   "https://github.com/guitarfros/StudioFros-Vinyl/releases/download/v1.0.0/StudioFros-Vinyl-Windows.zip",
    },
  },

];
