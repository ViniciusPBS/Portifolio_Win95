/* ================================================================
   SISTEMA DE CONFIGURAÇÕES (Config Panel) - INTERNACIONALIZAÇÃO & ACESSIBILIDADE
   ================================================================ */
const cfgState = {
  daltonismo: "normal",
  bgColor: "#008888",
  crtEffect: false,
  language: "pt",
  fontSize: "normal",
  volume: 80,
  muted: false,
  soundEffects: true,
  clockFormat: "24",
  clockSeconds: false,
};

// Dicionário Completo de Traduções (PT / EN / ES)
const i18n = {
  pt: {
    // Desktop
    appSobreMim: "Sobre mim",
    appProjetos: "Projetos",
    appConfig: "Config",
    appPaint: "Paint",
    appCampoMinado: "Campo Minado",
    appTetris: "Tetris",

    // Taskbar & Menu Iniciar
    startBtn: "Iniciar",
    startProjetos: "<u>P</u>rojetos (Explorer)",
    startSobreMim: "<u>S</u>obre Mim",
    startCalculadora: "<u>C</u>alculadora",
    startNotepad: "Bloco de <u>N</u>otas",
    startPaint: "<u>P</u>aint",
    startCampoMinado: "Campo <u>M</u>inado",
    startTetris: "<u>T</u>etris",
    startConfig: "Confi<u>g</u>urações",
    startShutdown: "<u>D</u>esligar...",

    // Títulos de Janelas
    myComputerTitle: "Meu Computador",
    explorerTitle: "Exploring - Projetos",
    configTitle: "Configurações do Sistema",
    propriedadesSistemaTitle: "Propriedades do Sistema — Sobre Mim",
    paintTitle: "Paint",
    minesweeperTitle: "Campo Minado",
    tetrisTitle: "Tetris 95",

    // Menus das Janelas
    menuFile: '<span class="lineUnLetter">A</span>rquivo',
    menuEdit: '<span class="lineUnLetter">E</span>ditar',
    menuView: '<span class="lineUnLetter">E</span>xibir',
    menuTools: '<span class="lineUnLetter">F</span>erramentas',
    menuHelp: '<span class="lineUnLetter">A</span>juda',
    menuImage: '<span class="lineUnLetter">I</span>magem',
    menuOptions: '<span class="lineUnLetter">O</span>pções',

    // Meu Computador
    myCompFloppy: "Disco flexível de 3½ (A:)",
    myCompDriveC: "Disco local (C:)",
    myCompDriveD: "CD-ROM (D:)",
    myCompControlPanel: "Painel de Controle",
    myCompPrinters: "Impressoras",
    myCompStatus: "5 objeto(s)",

    // Explorer
    allFolders: "Todas as Pastas",
    contentsOfProjetos: "Conteúdo de 'Projetos'",
    contentsOfTemplate: "Conteúdo de '{folder}'",
    explorerStatusLeft: "4 objeto(s)",
    folderEmpty: "Esta pasta está vazia.",

    // Nós da Árvore
    tree_desktop: "Área de Trabalho",
    tree_mycomputer: "Meu Computador",
    tree_floppyA: "Disco flexível de 3½ (A:)",
    tree_floppyB: "Disco flexível de 5¼ (B:)",
    tree_harddiskC: "Disco local (C:)",
    tree_documents: "Documentos",
    tree_projetos: "Projetos",
    tree_msoffice: "Msoffice",
    tree_windows: "Windows",
    tree_cdromD: "CD-ROM (D:)",
    tree_fonts: "Fontes",
    tree_controlPanel: "Painel de Controle",
    tree_printers: "Impressoras",
    tree_network: "Ambiente de Rede",
    tree_recycle: "Lixeira",

    // Janela de Configurações
    tabCfgDisplay: "Aparência / Cores",
    tabCfgGeral: "Geral & Idioma",
    tabCfgSom: "Som & Volume",
    tabCfgRelogio: "Relógio",
    cfgDaltonismoLegend: "Modo de Cores & Daltonismo (Acessibilidade)",
    cfgDaltonismoLabel: "Esquema de Cores / Visão:",
    optNormal: "Padrão do Windows 95",
    optProtanopia: "Protanopia (Déficit no vermelho)",
    optDeuteranopia: "Deuteranopia (Déficit no verde)",
    optTritanopia: "Tritanopia (Déficit no azul)",
    optAchromatopsia: "Acromatopsia (Escala de cinza)",
    optContrastBlack: "Alto Contraste #1 (Preto & Amarelo)",
    optContrastWhite: "Alto Contraste #2 (Branco & Preto)",
    cfgBgLegend: "Área de Trabalho (Plano de Fundo)",
    cfgCrtLabel: "Simular Monitor de Tubo CRT (Scanlines retrô)",
    cfgLangLegend: "Idioma do Sistema",
    langPt: "🇧🇷 Português (Brasil)",
    langEn: "🇺🇸 English (United States)",
    langEs: "🇪🇸 Español",
    cfgFontLegend: "Tamanho da Fonte da Interface",
    fontSmall: "Pequeno (11px)",
    fontNormal: "Normal (Padrão 13px)",
    fontLarge: "Grande (15px)",
    fontXLarge: "Extra Grande (17px)",
    cfgVolLegend: "Controle de Volume do Portfólio",
    cfgMuteLabel: "Sem áudio (Mudo)",
    cfgSoundFxLegend: "Efeitos Sonoros Retrô",
    cfgSoundFxLabel: "Sons ao clicar nos botões e janelas",
    btnTestSound: "🔊 Testar Som Retrô",
    cfgClockLegend: "Formato de Hora na Barra de Tarefas",
    clock24: "24 Horas (Ex: 14:35)",
    clock12: "12 Horas AM/PM (Ex: 02:35 PM)",
    cfgClockSecondsLabel: "Exibir segundos (Ex: 14:35:08)",
    btnOk: "OK",
    btnCancel: "Cancelar",
    btnApply: "Aplicar",

    // Janela Propriedades do Sistema
    tabSysGeral: "Geral",
    tabSysSobre: "Sobre Mim",
    tabSysSkills: "Habilidades",
    tabSysContato: "Contatos",
    sysRegisteredTo: "Registrado para:",
    sysRole: "Estudante & Desenvolvedor de Software",
    sysComputer: "Computador:",
    sysRam: "64.0 MB de Memória RAM",
    sysBioLegend: "Biografia",
    sysBioText1: "Olá! Meu nome é <b>Vinicius</b> e sou apaixonado por programação, design retrô e desenvolvimento de software.",
    sysBioText2: "Este projeto recria minuciosamente a experiência do <b>Windows 95</b> no navegador, unindo estética nostálgica com tecnologias modernas da web (HTML5, CSS3 avançado, Vanilla JavaScript, Canvas e Web Audio).",
    sysEducationLegend: "Formação & Objetivos",
    sysEduInst: "📍 <b>Instituição:</b> SESI / SENAI SP",
    sysEduFocus: "🎯 <b>Foco:</b> Desenvolvimento Full Stack, Arquitetura Front-end e Soluções Interativas.",
    sysSkillsLegend: "Linguagens & Tecnologias",
    sysDiffLegend: "Diferenciais",
    sysDiff1: "✔️ Atenção minuciosa aos detalhes visuais e de interação.",
    sysDiff2: "✔️ Foco em acessibilidade (modo daltonismo e alto contraste).",
    sysDiff3: "✔️ Código modular, limpo e performático sem dependências externas.",
    sysContactLegend: "Canais de Comunicação",
    sysContactIntro: "Entre em contato comigo ou confira outros repositórios:"
  },

  en: {
    // Desktop
    appSobreMim: "My Computer",
    appProjetos: "Projects",
    appConfig: "Settings",
    appPaint: "Paint",
    appCampoMinado: "Minesweeper",
    appTetris: "Tetris",

    // Taskbar & Menu Iniciar
    startBtn: "Start",
    startProjetos: "<u>P</u>rojects (Explorer)",
    startSobreMim: "About <u>M</u>e",
    startCalculadora: "<u>C</u>alculator",
    startNotepad: "<u>N</u>otepad",
    startPaint: "<u>P</u>aint",
    startCampoMinado: "<u>M</u>inesweeper",
    startTetris: "<u>T</u>etris",
    startConfig: "<u>S</u>ettings",
    startShutdown: "<u>S</u>hut Down...",

    // Títulos de Janelas
    myComputerTitle: "My Computer",
    explorerTitle: "Exploring - Projects",
    configTitle: "System Settings",
    propriedadesSistemaTitle: "System Properties — About Me",
    paintTitle: "Paint",
    minesweeperTitle: "Minesweeper",
    tetrisTitle: "Tetris 95",

    // Menus das Janelas
    menuFile: '<span class="lineUnLetter">F</span>ile',
    menuEdit: '<span class="lineUnLetter">E</span>dit',
    menuView: '<span class="lineUnLetter">V</span>iew',
    menuTools: '<span class="lineUnLetter">T</span>ools',
    menuHelp: '<span class="lineUnLetter">H</span>elp',
    menuImage: '<span class="lineUnLetter">I</span>mage',
    menuOptions: '<span class="lineUnLetter">O</span>ptions',

    // Meu Computador
    myCompFloppy: "3½ Floppy (A:)",
    myCompDriveC: "(C:)",
    myCompDriveD: "(D:)",
    myCompControlPanel: "Control Panel",
    myCompPrinters: "Printers",
    myCompStatus: "5 object(s)",

    // Explorer
    allFolders: "All Folders",
    contentsOfProjetos: "Contents of 'Projects'",
    contentsOfTemplate: "Contents of '{folder}'",
    explorerStatusLeft: "4 object(s)",
    folderEmpty: "This folder is empty.",

    // Nós da Árvore
    tree_desktop: "Desktop",
    tree_mycomputer: "My Computer",
    tree_floppyA: "3½ Floppy (A:)",
    tree_floppyB: "5¼ Floppy (B:)",
    tree_harddiskC: "My harddisk (C:)",
    tree_documents: "Documents",
    tree_projetos: "Projects",
    tree_msoffice: "Msoffice",
    tree_windows: "Windows",
    tree_cdromD: "CD-ROM (D:)",
    tree_fonts: "Fonts",
    tree_controlPanel: "Control Panel",
    tree_printers: "Printers",
    tree_network: "Network Neighborhood",
    tree_recycle: "Recycle Bin",

    // Janela de Configurações
    tabCfgDisplay: "Appearance / Colors",
    tabCfgGeral: "General & Language",
    tabCfgSom: "Sound & Volume",
    tabCfgRelogio: "Clock",
    cfgDaltonismoLegend: "Color Modes & Daltonism (Accessibility)",
    cfgDaltonismoLabel: "Color Scheme / Vision:",
    optNormal: "Windows 95 Standard",
    optProtanopia: "Protanopia (Red-blind)",
    optDeuteranopia: "Deuteranopia (Green-blind)",
    optTritanopia: "Tritanopia (Blue-blind)",
    optAchromatopsia: "Achromatopsia (Grayscale)",
    optContrastBlack: "High Contrast #1 (Black & Yellow)",
    optContrastWhite: "High Contrast #2 (White & Black)",
    cfgBgLegend: "Desktop (Wallpaper)",
    cfgCrtLabel: "Simulate CRT Monitor (Retro scanlines)",
    cfgLangLegend: "System Language",
    langPt: "🇧🇷 Portuguese (Brazil)",
    langEn: "🇺🇸 English (United States)",
    langEs: "🇪🇸 Spanish",
    cfgFontLegend: "Interface Font Size",
    fontSmall: "Small (11px)",
    fontNormal: "Normal (Standard 13px)",
    fontLarge: "Large (15px)",
    fontXLarge: "Extra Large (17px)",
    cfgVolLegend: "Portfolio Master Volume",
    cfgMuteLabel: "Mute Audio",
    cfgSoundFxLegend: "Retro Sound Effects",
    cfgSoundFxLabel: "Play sound when clicking buttons & windows",
    btnTestSound: "🔊 Test Retro Sound",
    cfgClockLegend: "Taskbar Clock Format",
    clock24: "24 Hours (e.g. 14:35)",
    clock12: "12 Hours AM/PM (e.g. 02:35 PM)",
    cfgClockSecondsLabel: "Show seconds (e.g. 14:35:08)",
    btnOk: "OK",
    btnCancel: "Cancel",
    btnApply: "Apply",

    // Janela Propriedades do Sistema
    tabSysGeral: "General",
    tabSysSobre: "About Me",
    tabSysSkills: "Skills",
    tabSysContato: "Contact",
    sysRegisteredTo: "Registered to:",
    sysRole: "Student & Software Developer",
    sysComputer: "Computer:",
    sysRam: "64.0 MB of RAM",
    sysBioLegend: "Biography",
    sysBioText1: "Hello! My name is <b>Vinicius</b> and I am passionate about programming, retro design, and software development.",
    sysBioText2: "This project thoroughly recreates the <b>Windows 95</b> experience in your browser, combining nostalgic aesthetics with modern web technologies (HTML5, advanced CSS3, Vanilla JavaScript, Canvas, and Web Audio).",
    sysEducationLegend: "Education & Goals",
    sysEduInst: "📍 <b>Institution:</b> SESI / SENAI SP",
    sysEduFocus: "🎯 <b>Focus:</b> Full Stack Development, Front-end Architecture, and Interactive Solutions.",
    sysSkillsLegend: "Languages & Technologies",
    sysDiffLegend: "Highlights",
    sysDiff1: "✔️ Meticulous attention to visual and interaction details.",
    sysDiff2: "✔️ High accessibility focus (color blind modes & high contrast).",
    sysDiff3: "✔️ Clean, modular, performant code without external dependencies.",
    sysContactLegend: "Communication Channels",
    sysContactIntro: "Get in touch or check out my other repositories:"
  },

  es: {
    // Desktop
    appSobreMim: "Sobre Mí",
    appProjetos: "Proyectos",
    appConfig: "Configuración",
    appPaint: "Paint",
    appCampoMinado: "Buscaminas",
    appTetris: "Tetris",

    // Taskbar & Menu Iniciar
    startBtn: "Inicio",
    startProjetos: "<u>P</u>royectos (Explorer)",
    startSobreMim: "Sobre <u>M</u>í",
    startCalculadora: "<u>C</u>alculadora",
    startNotepad: "Bloc de <u>N</u>otas",
    startPaint: "<u>P</u>aint",
    startCampoMinado: "<u>B</u>uscaminas",
    startTetris: "<u>T</u>etris",
    startConfig: "Confi<u>g</u>uración",
    startShutdown: "<u>A</u>pagar...",

    // Títulos de Janelas
    myComputerTitle: "Mi PC",
    explorerTitle: "Exploring - Proyectos",
    configTitle: "Configuración del Sistema",
    propriedadesSistemaTitle: "Propiedades del Sistema — Sobre Mí",
    paintTitle: "Paint",
    minesweeperTitle: "Buscaminas",
    tetrisTitle: "Tetris 95",

    // Menus das Janelas
    menuFile: '<span class="lineUnLetter">A</span>rchivo',
    menuEdit: '<span class="lineUnLetter">E</span>ditar',
    menuView: '<span class="lineUnLetter">V</span>er',
    menuTools: '<span class="lineUnLetter">H</span>erramientas',
    menuHelp: '<span class="lineUnLetter">A</span>yuda',
    menuImage: '<span class="lineUnLetter">I</span>magen',
    menuOptions: '<span class="lineUnLetter">O</span>pciones',

    // Meu Computador
    myCompFloppy: "Disco de 3½ (A:)",
    myCompDriveC: "Disco local (C:)",
    myCompDriveD: "CD-ROM (D:)",
    myCompControlPanel: "Panel de Control",
    myCompPrinters: "Impresoras",
    myCompStatus: "5 objeto(s)",

    // Explorer
    allFolders: "Todas las carpetas",
    contentsOfProjetos: "Contenido de 'Proyectos'",
    contentsOfTemplate: "Contenido de '{folder}'",
    explorerStatusLeft: "4 objeto(s)",
    folderEmpty: "Esta carpeta está vacía.",

    // Nós da Árvore
    tree_desktop: "Escritorio",
    tree_mycomputer: "Mi PC",
    tree_floppyA: "Disco de 3½ (A:)",
    tree_floppyB: "Disco de 5¼ (B:)",
    tree_harddiskC: "Disco local (C:)",
    tree_documents: "Documentos",
    tree_projetos: "Proyectos",
    tree_msoffice: "Msoffice",
    tree_windows: "Windows",
    tree_cdromD: "CD-ROM (D:)",
    tree_fonts: "Fuentes",
    tree_controlPanel: "Panel de Control",
    tree_printers: "Impresoras",
    tree_network: "Entorno de red",
    tree_recycle: "Papelera de reciclaje",

    // Janela de Configurações
    tabCfgDisplay: "Apariencia / Colores",
    tabCfgGeral: "General e Idioma",
    tabCfgSom: "Sonido y Volumen",
    tabCfgRelogio: "Reloj",
    cfgDaltonismoLegend: "Modo de Colores y Daltonismo (Accesibilidad)",
    cfgDaltonismoLabel: "Esquema de Colores / Visión:",
    optNormal: "Estándar de Windows 95",
    optProtanopia: "Protanopía (Déficit en rojo)",
    optDeuteranopia: "Deuteranopía (Déficit en verde)",
    optTritanopia: "Tritanopía (Déficit en azul)",
    optAchromatopsia: "Acromatopsia (Escala de grises)",
    optContrastBlack: "Alto Contraste #1 (Negro y Amarillo)",
    optContrastWhite: "Alto Contraste #2 (Blanco y Negro)",
    cfgBgLegend: "Escritorio (Fondo de pantalla)",
    cfgCrtLabel: "Simular Monitor CRT (Líneas de escaneo retro)",
    cfgLangLegend: "Idioma del Sistema",
    langPt: "🇧🇷 Portugués (Brasil)",
    langEn: "🇺🇸 Inglés (Estados Unidos)",
    langEs: "🇪🇸 Español",
    cfgFontLegend: "Tamaño de Fuente de la Interfaz",
    fontSmall: "Pequeño (11px)",
    fontNormal: "Normal (Estándar 13px)",
    fontLarge: "Grande (15px)",
    fontXLarge: "Extra Grande (17px)",
    cfgVolLegend: "Control de Volumen del Portafolio",
    cfgMuteLabel: "Silenciar audio (Mudo)",
    cfgSoundFxLegend: "Efectos de Sonido Retro",
    cfgSoundFxLabel: "Sonidos al hacer clic en botones y ventanas",
    btnTestSound: "🔊 Probar Sonido Retro",
    cfgClockLegend: "Formato de Hora en la Barra de Tareas",
    clock24: "24 Horas (Ej: 14:35)",
    clock12: "12 Horas AM/PM (Ej: 02:35 PM)",
    cfgClockSecondsLabel: "Mostrar segundos (Ej: 14:35:08)",
    btnOk: "Aceptar",
    btnCancel: "Cancelar",
    btnApply: "Aplicar",

    // Janela Propriedades do Sistema
    tabSysGeral: "General",
    tabSysSobre: "Sobre Mí",
    tabSysSkills: "Habilidades",
    tabSysContato: "Contactos",
    sysRegisteredTo: "Registrado a:",
    sysRole: "Estudiante y Desarrollador de Software",
    sysComputer: "Computadora:",
    sysRam: "64.0 MB de Memoria RAM",
    sysBioLegend: "Biografía",
    sysBioText1: "¡Hola! Mi nombre es <b>Vinicius</b> y me apasiona la programación, el diseño retro y el desarrollo de software.",
    sysBioText2: "Este proyecto recrea minuciosamente a experiencia de <b>Windows 95</b> en el navegador, uniendo estética nostálgica con tecnologías web modernas (HTML5, CSS3 avanzado, Vanilla JavaScript, Canvas y Web Audio).",
    sysEducationLegend: "Educación y Objetivos",
    sysEduInst: "📍 <b>Institución:</b> SESI / SENAI SP",
    sysEduFocus: "🎯 <b>Enfoque:</b> Desarrollo Full Stack, Arquitectura Front-end y Soluciones Interactivas.",
    sysSkillsLegend: "Lenguajes y Tecnologías",
    sysDiffLegend: "Diferenciales",
    sysDiff1: "✔️ Atención minuciosa a los detalles visuales y de interacción.",
    sysDiff2: "✔️ Enfoque en accesibilidad (modo daltonismo y alto contraste).",
    sysDiff3: "✔️ Código modular, limpio y de alto rendimiento sin dependencias externas.",
    sysContactLegend: "Canales de Comunicación",
    sysContactIntro: "Contáctame o echa un vistazo a mis otros repositorios:"
  }
};

function aplicarIdioma(lang) {
  cfgState.language = lang;
  const dict = i18n[lang] || i18n["pt"];

  // 1. Atualiza elementos com data-i18n usando chaves imutáveis (nunca depende de innerText prévio)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      if (typeof dict[key] === "string" && (dict[key].includes("<") || dict[key].includes("&"))) {
        el.innerHTML = dict[key];
      } else {
        el.innerText = dict[key];
      }
    }
  });

  // 2. Atualiza os nós da árvore do Windows Explorer
  document.querySelectorAll(".tree-row[data-folder-id]").forEach(row => {
    const fId = row.dataset.folderId;
    const label = row.querySelector(".tree-label");
    if (label && dict["tree_" + fId]) {
      label.innerText = dict["tree_" + fId];
    }
  });

  // 3. Atualiza o título do painel de conteúdo do Explorer
  const selectedTreeRow = document.querySelector(".tree-row.selected");
  const contentsTitle = document.getElementById("explorerContentsTitle");
  if (selectedTreeRow && contentsTitle) {
    const fId = selectedTreeRow.dataset.folderId;
    const fName = dict["tree_" + fId] || selectedTreeRow.querySelector(".tree-label")?.innerText || fId;
    const template = dict.contentsOfTemplate || "Contents of '{folder}'";
    contentsTitle.innerText = template.replace("{folder}", fName);
  }

  // 4. Atualiza os botões das janelas abertas na taskbar
  document.querySelectorAll(".app-task").forEach(taskBtn => {
    const taskId = taskBtn.dataset.task;
    const span = taskBtn.querySelector("span");
    if (span) {
      if (taskId === "sobreMim" && dict.myComputerTitle) span.innerText = dict.myComputerTitle;
      else if (taskId === "Projetos" && dict.explorerTitle) span.innerText = dict.explorerTitle;
      else if (taskId === "Config" && dict.configTitle) span.innerText = dict.configTitle;
      else if (taskId === "propriedadesSistema" && dict.propriedadesSistemaTitle) span.innerText = dict.propriedadesSistemaTitle;
      else if (taskId === "Paint" && dict.paintTitle) span.innerText = dict.paintTitle;
      else if (taskId === "campo-minado" && dict.minesweeperTitle) span.innerText = dict.minesweeperTitle;
      else if (taskId === "Tetris" && dict.tetrisTitle) span.innerText = dict.tetrisTitle;
    }
  });
}

function aplicarTamanhoFonte(size) {
  cfgState.fontSize = size;
  const sizes = { small: "11px", normal: "13px", large: "15px", xlarge: "17px" };
  document.documentElement.style.fontSize = sizes[size] || "13px";
  document.querySelectorAll(".janela, .subHeader, .pPointer, .win-tab-btn, fieldset, legend").forEach(el => {
    el.style.fontSize = sizes[size] || "";
  });
}

function aplicarDaltonismo(mode) {
  cfgState.daltonismo = mode;
  const classes = [
    "filter-protanopia", "filter-deuteranopia", "filter-tritanopia",
    "filter-achromatopsia", "filter-contrast-black", "filter-contrast-white"
  ];

  // Aplica o filtro estritamente no elemento HTML raiz (evita que a taskbar posicione no meio)
  document.documentElement.classList.remove(...classes);
  document.body.classList.remove(...classes);

  if (mode && mode !== "normal") {
    document.documentElement.classList.add("filter-" + mode);
  }

  // Atualiza preview no monitor dentro da janela de Configurações
  const preview = document.getElementById("cfgPreviewScreen");
  if (preview) {
    preview.style.filter = "";
    if (mode === "achromatopsia") preview.style.filter = "grayscale(1)";
    else if (mode === "protanopia") preview.style.filter = "url('#protanopia')";
    else if (mode === "deuteranopia") preview.style.filter = "url('#deuteranopia')";
    else if (mode === "tritanopia") preview.style.filter = "url('#tritanopia')";
    else if (mode === "contrast-black") preview.style.filter = "contrast(1.4) brightness(0.9)";
    else if (mode === "contrast-white") preview.style.filter = "contrast(1.8) brightness(1.1)";
  }
}

function aplicarCorFundo(color) {
  cfgState.bgColor = color;
  document.body.style.backgroundColor = color;
  const preview = document.getElementById("cfgPreviewScreen");
  if (preview) preview.style.backgroundColor = color;
}

function aplicarCRT(active) {
  cfgState.crtEffect = active;
  if (active) document.body.classList.add("crt-effect");
  else document.body.classList.remove("crt-effect");
}

function aplicarVolume(vol, muted) {
  cfgState.volume = vol;
  cfgState.muted = muted;
}

// === Relógio estendido (formato 12/24, segundos) ===
function formatarHora(date) {
  let horas = date.getHours();
  let minutos = date.getMinutes();
  let segundos = date.getSeconds();
  let sufixo = "";

  if (cfgState.clockFormat === "12") {
    sufixo = horas >= 12 ? " PM" : " AM";
    horas = horas % 12 || 12;
  }

  const pad = n => String(n).padStart(2, "0");

  let str = `${pad(horas)}:${pad(minutos)}`;
  if (cfgState.clockSeconds) str += `:${pad(segundos)}`;
  str += sufixo;
  return str;
}

function atualizarRelogioExtendido() {
  const horaEl = document.getElementById("hora");
  const minutoEl = document.getElementById("minuto");
  if (!horaEl || !minutoEl) return;

  const now = new Date();
  let horas = now.getHours();
  let minutos = now.getMinutes();
  let segundos = now.getSeconds();
  let sufixo = "";

  if (cfgState.clockFormat === "12") {
    sufixo = horas >= 12 ? " PM" : " AM";
    horas = horas % 12 || 12;
  }

  const pad = n => String(n).padStart(2, "0");

  if (cfgState.clockSeconds) {
    horaEl.innerText = `${pad(horas)}:${pad(minutos)}:${pad(segundos)}${sufixo}`;
    if (horaEl.nextSibling && horaEl.nextSibling.nodeType === 3) {
      horaEl.nextSibling.textContent = "";
    }
    minutoEl.innerText = "";
  } else {
    if (cfgState.clockFormat === "12") {
      horaEl.innerText = `${pad(horas)}:${pad(minutos)}${sufixo}`;
      if (horaEl.nextSibling && horaEl.nextSibling.nodeType === 3) {
        horaEl.nextSibling.textContent = "";
      }
      minutoEl.innerText = "";
    } else {
      horaEl.innerText = pad(horas);
      if (horaEl.nextSibling && horaEl.nextSibling.nodeType === 3) {
        horaEl.nextSibling.textContent = ":";
      }
      minutoEl.innerText = pad(minutos);
    }
  }
}

// Substitui o relógio padrão pelo estendido
clearInterval(window._relogioInterval);
window._relogioInterval = setInterval(atualizarRelogioExtendido, 1000);
atualizarRelogioExtendido();


// === Web Audio API: Sons Retrô Sintetizados ===
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function tocarSom(tipo) {
  if (!cfgState.soundEffects || cfgState.muted) return;
  try {
    const ctx = getAudioCtx();
    if (ctx.state === "suspended") ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const vol = cfgState.volume / 100;

    if (tipo === "click") {
      osc.type = "square";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(vol * 0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } else if (tipo === "open") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(vol * 0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.14);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.14);
    } else if (tipo === "close") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(660, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(vol * 0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.12);
    } else if (tipo === "select") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(vol * 0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
    } else if (tipo === "startup") {
      // Som de inicialização Win95
      const notas = [523, 659, 784, 1047];
      notas.forEach((freq, i) => {
        const o2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        o2.connect(g2); g2.connect(ctx.destination);
        o2.type = "sine";
        o2.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);
        g2.gain.setValueAtTime(vol * 0.2, ctx.currentTime + i * 0.12);
        g2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.12 + 0.1);
        o2.start(ctx.currentTime + i * 0.12);
        o2.stop(ctx.currentTime + i * 0.12 + 0.1);
      });
    }
  } catch (e) {
    // AudioContext pode aguardar primeira interação do usuário
  }
}

// Adiciona som aos botões do sistema
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("botoes") || e.target.classList.contains("win-btn")) {
    if (e.target.classList.contains("btn-close") || e.target.id === "btnCfgCancel" || e.target.id === "btnSysPropsOk") {
      tocarSom("close");
    } else {
      tocarSom("click");
    }
  }
});


// === Persistência via LocalStorage ===
function salvarConfiguracoes() {
  try {
    localStorage.setItem("win95_cfg", JSON.stringify(cfgState));
  } catch (e) {}
}

function carregarConfiguracoes() {
  try {
    const saved = localStorage.getItem("win95_cfg");
    if (saved) {
      const data = JSON.parse(saved);
      Object.assign(cfgState, data);
    }
  } catch (e) {}
}

function aplicarTodasConfigs() {
  aplicarIdioma(cfgState.language);
  aplicarTamanhoFonte(cfgState.fontSize);
  aplicarDaltonismo(cfgState.daltonismo);
  aplicarCorFundo(cfgState.bgColor);
  aplicarCRT(cfgState.crtEffect);
  atualizarRelogioExtendido();
}

function sincronizarControlesConfig() {
  // Select Daltonismo
  const sel = document.getElementById("cfgDaltonismo");
  if (sel) sel.value = cfgState.daltonismo;

  // Swatches de cor
  document.querySelectorAll(".color-swatch").forEach(sw => {
    sw.classList.remove("active");
    if (sw.dataset.color === cfgState.bgColor) sw.classList.add("active");
  });

  // CRT
  const crt = document.getElementById("cfgCrtToggle");
  if (crt) crt.checked = cfgState.crtEffect;

  // Idioma
  const radioLang = document.querySelector(`input[name='cfgLanguage'][value='${cfgState.language}']`);
  if (radioLang) radioLang.checked = true;

  // Tamanho de Fonte
  const radioFont = document.querySelector(`input[name='cfgFontSize'][value='${cfgState.fontSize}']`);
  if (radioFont) radioFont.checked = true;

  // Formato do Relógio
  const radioClock = document.querySelector(`input[name='cfgClockFormat'][value='${cfgState.clockFormat}']`);
  if (radioClock) radioClock.checked = true;

  // Segundos
  const clockSec = document.getElementById("cfgClockSeconds");
  if (clockSec) clockSec.checked = cfgState.clockSeconds;

  // Volume
  const volSlider = document.getElementById("cfgVolumeSlider");
  const volPercent = document.getElementById("cfgVolumePercent");
  if (volSlider) volSlider.value = cfgState.volume;
  if (volPercent) volPercent.innerText = cfgState.volume + "%";

  const muteToggle = document.getElementById("cfgMuteToggle");
  if (muteToggle) muteToggle.checked = cfgState.muted;

  const soundFx = document.getElementById("cfgSoundEffects");
  if (soundFx) soundFx.checked = cfgState.soundEffects;
}




/* ========================================================
   ÍCONES RETRO SVG (WINDOWS 95 STYLE)
   ======================================================== */
const ICONS = {
  explorer: `<svg viewBox="0 0 16 16" width="16" height="16"><path d="M1 3h5l2 2h7v9H1z" fill="#ffd700" stroke="#000" stroke-width="0.8"/><path d="M1 5h14v8H1z" fill="#ffe066"/><circle cx="10" cy="9" r="3.5" fill="none" stroke="#000" stroke-width="1.2"/><circle cx="10" cy="9" r="2.5" fill="#87ceeb" opacity="0.6"/><line x1="12.5" y1="11.5" x2="15" y2="14" stroke="#000" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  folder: `<svg viewBox="0 0 16 16" width="16" height="16"><path d="M1 3h5l2 2h7v9H1z" fill="#f8cf53" stroke="#806010" stroke-width="0.8"/><path d="M1 5h14v8H1z" fill="#ffdd75"/></svg>`,
  folderOpen: `<svg viewBox="0 0 16 16" width="16" height="16"><path d="M1 3h5l2 2h7v3H1z" fill="#f8cf53" stroke="#806010" stroke-width="0.8"/><path d="M1 6l2 8h12l-2-8z" fill="#ffe585" stroke="#806010" stroke-width="0.8"/></svg>`,
  desktop: `<svg viewBox="0 0 16 16" width="16" height="16"><rect x="1" y="1" width="14" height="10" rx="1" fill="#c0c0c0" stroke="#000" stroke-width="0.8"/><rect x="3" y="3" width="10" height="6" fill="#008080"/><path d="M5 11h6v2H5zM3 13h10v1H3z" fill="#808080"/></svg>`,
  computer: `<svg viewBox="0 0 16 16" width="16" height="16"><rect x="1" y="1" width="12" height="9" fill="#dfdfdf" stroke="#000" stroke-width="0.8"/><rect x="2.5" y="2" width="9" height="6.5" fill="#008080"/><rect x="4" y="10" width="6" height="2" fill="#808080"/><rect x="2" y="12" width="10" height="2" fill="#c0c0c0" stroke="#000" stroke-width="0.6"/><rect x="12" y="3" width="3" height="10" fill="#dfdfdf" stroke="#000" stroke-width="0.6"/><rect x="12.5" y="5" width="2" height="1" fill="#333"/></svg>`,
  floppy3: `<svg viewBox="0 0 16 16" width="16" height="16"><path d="M2 1h10l2 2v11H2z" fill="#2050a0" stroke="#000" stroke-width="0.8"/><rect x="4" y="1" width="7" height="5" fill="#c0c0c0"/><rect x="8" y="2" width="2" height="3" fill="#000"/><rect x="4" y="8" width="8" height="6" fill="#fff"/></svg>`,
  floppy5: `<svg viewBox="0 0 16 16" width="16" height="16"><rect x="1" y="1" width="14" height="14" rx="1" fill="#111" stroke="#444" stroke-width="0.8"/><circle cx="8" cy="8" r="3" fill="#444"/><circle cx="8" cy="8" r="1.5" fill="#111"/><rect x="3" y="1" width="4" height="3" fill="#fff"/></svg>`,
  harddrive: `<svg viewBox="0 0 16 16" width="16" height="16"><rect x="1" y="4" width="14" height="8" rx="1" fill="#c0c0c0" stroke="#000" stroke-width="0.8"/><rect x="2" y="5" width="12" height="3" fill="#808080"/><circle cx="12" cy="10" r="1" fill="#00ff00"/><rect x="3" y="9" width="6" height="1.5" fill="#000"/></svg>`,
  cdrom: `<svg viewBox="0 0 16 16" width="16" height="16"><circle cx="8" cy="8" r="7" fill="#dfdfdf" stroke="#808080" stroke-width="0.8"/><circle cx="8" cy="8" r="4.5" fill="none" stroke="#b0b0b0" stroke-width="1"/><circle cx="8" cy="8" r="2.5" fill="#ffffff" stroke="#808080" stroke-width="0.8"/><circle cx="8" cy="8" r="1" fill="#000"/></svg>`,
  network: `<svg viewBox="0 0 16 16" width="16" height="16"><rect x="1" y="1" width="7" height="6" fill="#c0c0c0" stroke="#000" stroke-width="0.7"/><rect x="8" y="5" width="7" height="6" fill="#c0c0c0" stroke="#000" stroke-width="0.7"/><path d="M4 7v4h4v-1h3v4" fill="none" stroke="#000" stroke-width="1"/></svg>`,
  recycle: `<svg viewBox="0 0 16 16" width="16" height="16"><rect x="3" y="1" width="10" height="2" fill="#808080"/><path d="M4 3l1 12h6l1-12z" fill="#c0c0c0" stroke="#000" stroke-width="0.8"/><path d="M6 5v8M8 5v8M10 5v8" stroke="#808080" stroke-width="0.8"/></svg>`,
  printer: `<svg viewBox="0 0 16 16" width="16" height="16"><rect x="4" y="1" width="8" height="4" fill="#fff" stroke="#808080" stroke-width="0.8"/><rect x="2" y="5" width="12" height="7" rx="1" fill="#c0c0c0" stroke="#000" stroke-width="0.8"/><rect x="4" y="9" width="8" height="5" fill="#fff" stroke="#808080" stroke-width="0.8"/><circle cx="12" cy="7" r="0.8" fill="#00ff00"/></svg>`,
  fonts: `<svg viewBox="0 0 16 16" width="16" height="16"><path d="M1 3h5l2 2h7v9H1z" fill="#f8cf53" stroke="#806010" stroke-width="0.8"/><text x="8" y="12" font-size="9" font-weight="bold" fill="#000080" font-family="serif">A</text></svg>`,
  calcLarge: `<svg viewBox="0 0 32 32" width="32" height="32"><rect x="4" y="2" width="24" height="28" rx="2" fill="#c0c0c0" stroke="#000" stroke-width="1.5"/><rect x="7" y="5" width="18" height="6" fill="#fff" stroke="#808080" stroke-width="1"/><text x="22" y="10" font-size="5" font-family="monospace" fill="#000" text-anchor="end">123.</text><rect x="7" y="13" width="4" height="3" fill="#fff" stroke="#000" stroke-width="0.7"/><rect x="13" y="13" width="4" height="3" fill="#fff" stroke="#000" stroke-width="0.7"/><rect x="19" y="13" width="6" height="3" fill="#ff4040" stroke="#000" stroke-width="0.7"/><rect x="7" y="18" width="4" height="3" fill="#fff" stroke="#000" stroke-width="0.7"/><rect x="13" y="18" width="4" height="3" fill="#fff" stroke="#000" stroke-width="0.7"/><rect x="19" y="18" width="6" height="3" fill="#3050ff" stroke="#000" stroke-width="0.7"/><rect x="7" y="23" width="4" height="3" fill="#fff" stroke="#000" stroke-width="0.7"/><rect x="13" y="23" width="4" height="3" fill="#fff" stroke="#000" stroke-width="0.7"/><rect x="19" y="23" width="6" height="3" fill="#3050ff" stroke="#000" stroke-width="0.7"/></svg>`,
  docLarge: `<svg viewBox="0 0 32 32" width="32" height="32"><path d="M6 2h14l6 6v22H6z" fill="#ffffff" stroke="#000000" stroke-width="1.5"/><path d="M20 2v6h6" fill="#c0c0c0" stroke="#000000" stroke-width="1.2"/><path d="M10 12h12M10 16h12M10 20h12M10 24h8" stroke="#000080" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  htmlLarge: `<svg viewBox="0 0 32 32" width="32" height="32"><path d="M6 2h14l6 6v22H6z" fill="#ffffff" stroke="#000" stroke-width="1.5"/><path d="M20 2v6h6" fill="#c0c0c0" stroke="#000" stroke-width="1.2"/><circle cx="16" cy="18" r="7" fill="#87ceeb" stroke="#000080" stroke-width="1"/><ellipse cx="16" cy="18" rx="3.5" ry="7" fill="none" stroke="#000080" stroke-width="0.8"/><line x1="9" y1="18" x2="23" y2="18" stroke="#000080" stroke-width="0.8"/></svg>`,
  appLarge: `<svg viewBox="0 0 32 32" width="32" height="32"><rect x="3" y="4" width="26" height="24" rx="2" fill="#c0c0c0" stroke="#000" stroke-width="1.5"/><rect x="5" y="6" width="22" height="5" fill="#000080"/><rect x="5" y="13" width="22" height="13" fill="#ffffff"/><circle cx="10" cy="19" r="2" fill="#ff0000"/><rect x="14" y="18" width="9" height="2" fill="#008000"/></svg>`
};


/* ========================================================
   LISTA DE PROJETOS (Arquivos do Windows Explorer)
   Adicione novos projetos aqui facilmente!
   ======================================================== */
const listaProjetos = [
  {
    id: "tetris",
    nome: "Tetris.exe",
    titulo: "Tetris 95",
    url: "tetris.html",
    icon: "./img/tetris.png",
    tamanho: "32 KB",
    tipo: "Aplicativo MS-DOS / Win32"
  },
  {
    id: "calculadora",
    nome: "Calculadora.exe",
    titulo: "Calculadora do Windows",
    url: "calculadora.html",
    iconType: "calc",
    tamanho: "48 KB",
    tipo: "Aplicativo Win32"
  },
  {
    id: "notepad",
    nome: "Leia-me.txt",
    titulo: "Bloco de Notas - Leia-me.txt",
    url: "notepad.html",
    iconType: "doc",
    tamanho: "3 KB",
    tipo: "Documento de Texto"
  },
  {
    id: "portfolio-info",
    nome: "SobreProjetos.htm",
    titulo: "Sobre os Projetos - Internet Explorer",
    url: "portfolio-info.html",
    iconType: "html",
    tamanho: "12 KB",
    tipo: "Documento HTML"
  }

];

const arquivosDocuments = [
  {
    id: "notepad",
    nome: "Leia-me.txt",
    titulo: "Bloco de Notas - Leia-me.txt",
    url: "notepad.html",
    iconType: "doc",
    tamanho: "3 KB",
    tipo: "Documento de Texto"
  },
  {
    id: "portfolio-info",
    nome: "SobreProjetos.htm",
    titulo: "Sobre os Projetos - Internet Explorer",
    url: "portfolio-info.html",
    iconType: "html",
    tamanho: "12 KB",
    tipo: "Documento HTML"
  }
];


/* ========================================================
   SISTEMA DE JANELAS E GERENCIAMENTO GLOBAL (DRAG & FOCUS)
   ======================================================== */
let zIndexAtual = 10;
let isDragging = false;
let activeDragJanela = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let offsetCascata = 0;

const taskbar = document.getElementById("apps-abertos");

// Ativar Janela e trazer para frente
function ativarJanela(janela) {
  if (!janela) return;
  document.querySelectorAll(".janela").forEach(j => j.classList.remove("ativa"));
  janela.classList.add("ativa");

  zIndexAtual++;
  janela.style.zIndex = zIndexAtual;

  atualizarTaskbar(janela.id);
}

// Atualizar estilo ativo na barra de tarefas
function atualizarTaskbar(idAtivo) {
  document.querySelectorAll(".app-task").forEach(btn => {
    btn.classList.remove("ativo");
    if (btn.dataset.task === idAtivo) {
      btn.classList.add("ativo");
    }
  });
}

// Adicionar botão na taskbar
function adicionarNaTaskbar(janela, titulo, iconCustom) {
  const id = janela.id;
  if (document.querySelector(`[data-task="${id}"]`)) {
    atualizarTaskbar(id);
    return;
  }

  const btn = document.createElement("div");
  btn.classList.add("app-task");
  btn.dataset.task = id;

  let iconMarkup = "";
  if (iconCustom) {
    iconMarkup = iconCustom;
  } else {
    const iconHeader = janela.querySelector("header img, header svg");
    if (iconHeader) iconMarkup = iconHeader.outerHTML;
  }

  btn.innerHTML = `${iconMarkup}<span>${titulo || id}</span>`;

  btn.addEventListener("click", () => {
    const isVisible = janela.style.display !== "none" && janela.style.display !== "";
    const isAtiva = janela.classList.contains("ativa");

    if (isVisible && isAtiva) {
      // Já está em foco -> minimiza
      janela.style.display = "none";
      janela.classList.remove("ativa");
      btn.classList.remove("ativo");
    } else {
      // Abre/Restaura e ativa
      janela.style.display = (janela.id === "Projetos" || janela.classList.contains("janela-projeto")) ? "flex" : "block";
      ativarJanela(janela);
    }
  });

  taskbar.appendChild(btn);
  atualizarTaskbar(id);
}

// Remover da taskbar
function removerDaTaskbar(id) {
  const btn = document.querySelector(`[data-task="${id}"]`);
  if (btn) btn.remove();
}

// Configura movimentação, foco e botões de qualquer janela
function configurarJanela(janela) {
  if (!janela || janela.dataset.configurada === "true") return;
  janela.dataset.configurada = "true";

  const header = janela.querySelector("header");

  // Ativar ao clicar na janela
  janela.addEventListener("mousedown", () => {
    ativarJanela(janela);
  });

  // Iniciar arrasto
  if (header) {
    header.addEventListener("mousedown", (e) => {
      if (e.target.closest(".controlButton") || e.target.closest(".botoes")) {
        return; // não arrastar ao clicar nos botões de controle
      }

      isDragging = true;
      activeDragJanela = janela;
      ativarJanela(janela);

      dragOffsetX = e.clientX - janela.offsetLeft;
      dragOffsetY = e.clientY - janela.offsetTop;

      // Desabilita interação nos iframes durante o arrasto para o mouse não travar
      document.querySelectorAll("iframe").forEach(f => f.style.pointerEvents = "none");
    });
  }

  // Botões da janela (minimizar, maximizar, fechar)
  const botoes = janela.querySelectorAll(".botoes");
  const btnMin = botoes[0];
  const btnMax = botoes[1];
  const btnClose = botoes[botoes.length - 1];

  // Minimizar
  btnMin?.addEventListener("click", (e) => {
    e.stopPropagation();
    janela.style.display = "none";
    janela.classList.remove("ativa");
    atualizarTaskbar();
  });

  // Maximizar / Restaurar
  btnMax?.addEventListener("click", (e) => {
    e.stopPropagation();
    const maximizado = janela.dataset.maximizado === "true";

    if (!maximizado) {
      janela.dataset.oldTop = janela.style.top || (janela.offsetTop + "px");
      janela.dataset.oldLeft = janela.style.left || (janela.offsetLeft + "px");
      janela.dataset.oldWidth = janela.style.width || (janela.offsetWidth + "px");
      janela.dataset.oldHeight = janela.style.height || (janela.offsetHeight + "px");

      janela.style.top = "0";
      janela.style.left = "0";
      janela.style.width = "100%";
      janela.style.height = "calc(100% - 50px)";

      janela.dataset.maximizado = "true";
    } else {
      janela.style.top = janela.dataset.oldTop || "40px";
      janela.style.left = janela.dataset.oldLeft || "100px";
      janela.style.width = janela.dataset.oldWidth || "640px";
      janela.style.height = janela.dataset.oldHeight || "450px";

      janela.dataset.maximizado = "false";
    }
  });

  // Fechar
  btnClose?.addEventListener("click", (e) => {
    e.stopPropagation();
    janela.style.display = "none";
    janela.classList.remove("ativa");
    removerDaTaskbar(janela.id);

    // Se for janela de projeto com iframe, remove do DOM
    if (janela.classList.contains("janela-projeto")) {
      janela.remove();
    }
  });
}

// Listeners globais de arrasto
document.addEventListener("mousemove", (e) => {
  if (isDragging && activeDragJanela) {
    activeDragJanela.style.position = "absolute";
    activeDragJanela.style.left = (e.clientX - dragOffsetX) + "px";
    activeDragJanela.style.top = Math.max(0, e.clientY - dragOffsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    activeDragJanela = null;
    // Reabilita ponteiros em iframes
    document.querySelectorAll("iframe").forEach(f => f.style.pointerEvents = "auto");
  }
});

// Configura as janelas estáticas iniciais
document.querySelectorAll(".janela").forEach(j => configurarJanela(j));


/* ========================================================
   ABERTURA DE PROJETO EM NOVA JANELA COM IFRAME
   ======================================================== */
function getIconMarkup(projeto) {
  if (projeto.iconType === "calc") return ICONS.calcLarge;
  if (projeto.iconType === "doc") return ICONS.docLarge;
  if (projeto.iconType === "html") return ICONS.htmlLarge;
  if (projeto.icon && projeto.icon.startsWith("<svg")) return projeto.icon;
  if (projeto.icon) return `<img src="${projeto.icon}" alt="" class="file-icon-img">`;
  return ICONS.appLarge;
}

function abrirProjetoJanela(projeto) {
  const janelaId = "janela-proj-" + projeto.id;
  let janela = document.getElementById(janelaId);

  // Se a janela já existe, foca e exibe
  if (janela) {
    janela.style.display = "flex";
    ativarJanela(janela);
    adicionarNaTaskbar(janela, projeto.nome, getIconMarkup(projeto));
    return;
  }

  // Criação da nova janela no estilo Windows 95
  janela = document.createElement("div");
  janela.className = "janela janela-projeto ativa";
  janela.id = janelaId;

  // Efeito cascata para não abrir exatamente sobreposta
  const topPos = 60 + ((offsetCascata * 24) % 140);
  const leftPos = 120 + ((offsetCascata * 28) % 240);
  offsetCascata++;

  janela.style.top = topPos + "px";
  janela.style.left = leftPos + "px";
  janela.style.display = "flex";

  const iconMarkup = getIconMarkup(projeto);

  janela.innerHTML = `
    <header>
      <div class="IconJanela">${iconMarkup}</div>
      <span class="janela-titulo">${projeto.titulo || projeto.nome}</span>
      <div class="controlButton">
        <button class="botoes btn-min" title="Minimizar">_</button>
        <button class="botoes btn-max" title="Maximizar"><div class="maximizar"></div></button>
        <button class="botoes btn-close" title="Fechar">X</button>
      </div>
    </header>
    <div class="projeto-address-bar">
      <span class="address-label">Endereço:</span>
      <div class="address-input-box">
        <img src="./img/windows.png" class="address-icon" alt="">
        <span class="address-text">${projeto.url}</span>
      </div>
    </div>
    <div class="projeto-iframe-container">
      <iframe src="${projeto.url}" class="projeto-iframe" frameborder="0"></iframe>
    </div>
    <div class="projeto-statusbar">
      <div class="statusbar-panel statusbar-left">Concluído</div>
      <div class="statusbar-panel statusbar-right">Zona do Computador Local</div>
    </div>
  `;

  document.body.appendChild(janela);
  configurarJanela(janela);
  adicionarNaTaskbar(janela, projeto.nome, iconMarkup);
  ativarJanela(janela);
}


/* ========================================================
   INTERFACE DO WINDOWS EXPLORER (PROJETOS)
   ======================================================== */
const explorerTreeContainer = document.getElementById("explorerTree");
const explorerFilesList = document.getElementById("explorerFilesList");
const explorerContentsTitle = document.getElementById("explorerContentsTitle");
const explorerStatusText = document.getElementById("explorerStatusText");
const explorerStatusSize = document.getElementById("explorerStatusSize");

// Estrutura de Pastas idêntica à imagem enviada
const treeData = [
  {
    id: "desktop",
    name: "Desktop",
    icon: ICONS.desktop,
    expanded: true,
    children: [
      {
        id: "mycomputer",
        name: "My Computer",
        icon: ICONS.computer,
        expanded: true,
        children: [
          { id: "floppyA", name: "3½ Floppy (A:)", icon: ICONS.floppy3 },
          { id: "floppyB", name: "5¼ Floppy (B:)", icon: ICONS.floppy5 },
          {
            id: "harddiskC",
            name: "My harddisk (C:)",
            icon: ICONS.harddrive,
            expanded: true,
            children: [
              { id: "documents", name: "Documents", icon: ICONS.folder, iconOpen: ICONS.folderOpen },
              { id: "projetos", name: "Projetos", icon: ICONS.folder, iconOpen: ICONS.folderOpen, selected: true },
              { id: "msoffice", name: "Msoffice", icon: ICONS.folder, iconOpen: ICONS.folderOpen },
              { id: "windows", name: "Windows", icon: ICONS.folder, iconOpen: ICONS.folderOpen }
            ]
          },
          { id: "cdromD", name: "Compressed (D:)", icon: ICONS.cdrom },
          { id: "fonts", name: "Fonts", icon: ICONS.fonts },
          { id: "controlPanel", name: "Control Panel", icon: "./img/config.png" },
          { id: "printers", name: "Printers", icon: ICONS.printer }
        ]
      },
      { id: "network", name: "Network Neighborhood", icon: ICONS.network },
      { id: "recycle", name: "Recycle Bin", icon: ICONS.recycle }
    ]
  }
];

// Renderizar nó da árvore recursivamente
function renderTreeNode(node) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = node.expanded === true;
  const isSelected = node.selected === true;

  const nodeEl = document.createElement("div");
  nodeEl.className = "tree-node";
  nodeEl.dataset.folderId = node.id;

  const rowEl = document.createElement("div");
  rowEl.className = `tree-row ${isSelected ? "selected" : ""}`;
  rowEl.dataset.folderId = node.id;

  // Botão [+] / [-]
  const toggleEl = document.createElement("span");
  if (hasChildren) {
    toggleEl.className = "tree-toggle";
    toggleEl.innerText = isExpanded ? "-" : "+";
  } else {
    toggleEl.className = "tree-toggle empty";
  }

  // Ícone
  const iconEl = document.createElement("span");
  iconEl.className = "tree-node-icon";
  if (isSelected && node.iconOpen) {
    iconEl.innerHTML = node.iconOpen;
  } else if (typeof node.icon === "string" && node.icon.startsWith("<svg")) {
    iconEl.innerHTML = node.icon;
  } else if (node.icon) {
    iconEl.innerHTML = `<img src="${node.icon}" alt="">`;
  }

  // Nome da pasta
  const labelEl = document.createElement("span");
  labelEl.className = "tree-label";
  labelEl.innerText = node.name;

  rowEl.appendChild(toggleEl);
  rowEl.appendChild(iconEl);
  rowEl.appendChild(labelEl);
  nodeEl.appendChild(rowEl);

  // Filhos
  if (hasChildren) {
    const childrenEl = document.createElement("div");
    childrenEl.className = `tree-children ${isExpanded ? "" : "collapsed"}`;
    node.children.forEach(child => {
      childrenEl.appendChild(renderTreeNode(child));
    });
    nodeEl.appendChild(childrenEl);

    // Clique no toggle expande/recolhe
    toggleEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentlyCollapsed = childrenEl.classList.contains("collapsed");
      if (currentlyCollapsed) {
        childrenEl.classList.remove("collapsed");
        toggleEl.innerText = "-";
      } else {
        childrenEl.classList.add("collapsed");
        toggleEl.innerText = "+";
      }
    });
  }

  // Clique na linha seleciona a pasta
  rowEl.addEventListener("click", () => {
    selecionarPasta(node);
  });

  return nodeEl;
}

// Inicializar Árvore do Explorer
function inicializarExplorerTree() {
  if (!explorerTreeContainer) return;
  explorerTreeContainer.innerHTML = "";
  treeData.forEach(rootNode => {
    explorerTreeContainer.appendChild(renderTreeNode(rootNode));
  });
}

// Selecionar pasta e atualizar painel direito
function selecionarPasta(folderNode) {
  document.querySelectorAll(".tree-row").forEach(r => r.classList.remove("selected"));
  const row = document.querySelector(`.tree-row[data-folder-id="${folderNode.id}"]`);
  if (row) row.classList.add("selected");

  if (explorerContentsTitle) {
    const dict = (typeof i18n !== "undefined" && typeof cfgState !== "undefined" && i18n[cfgState.language]) ? i18n[cfgState.language] : null;
    const fName = dict ? (dict["tree_" + folderNode.id] || folderNode.name) : folderNode.name;
    const template = dict ? (dict.contentsOfTemplate || "Contents of '{folder}'") : "Contents of '{folder}'";
    explorerContentsTitle.innerText = template.replace("{folder}", fName);
  }

  if (folderNode.id === "projetos") {
    renderizarArquivos(listaProjetos);
  } else if (folderNode.id === "documents") {
    renderizarArquivos(arquivosDocuments);
  } else {
    renderizarArquivos([]);
  }
}

// Renderizar itens no painel direito (estilo Large Icons)
function renderizarArquivos(lista) {
  if (!explorerFilesList) return;
  explorerFilesList.innerHTML = "";

  const dict = (typeof i18n !== "undefined" && typeof cfgState !== "undefined" && i18n[cfgState.language]) ? i18n[cfgState.language] : null;

  if (lista.length === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.style.gridColumn = "1 / -1";
    emptyMsg.style.padding = "20px";
    emptyMsg.style.color = "#666";
    emptyMsg.style.fontSize = "12px";
    emptyMsg.innerText = dict ? (dict.folderEmpty || "Esta pasta está vazia.") : "Esta pasta está vazia.";
    explorerFilesList.appendChild(emptyMsg);

    if (explorerStatusText) explorerStatusText.innerText = dict && dict.explorerStatusLeft ? "0 " + dict.explorerStatusLeft.replace(/^\d+\s*/, "") : "0 objeto(s)";
    if (explorerStatusSize) explorerStatusSize.innerText = "0 bytes";
    return;
  }

  lista.forEach(item => {
    const fileItem = document.createElement("div");
    fileItem.className = "file-item";
    fileItem.title = `${item.nome} (${item.tipo || "Projeto"}) - Clique para abrir em nova janela com iframe`;

    const iconMarkup = getIconMarkup(item);

    fileItem.innerHTML = `
      <div class="file-item-icon">
        ${iconMarkup}
      </div>
      <div class="file-item-label">${item.nome}</div>
    `;

    // Selecionar ao clicar
    fileItem.addEventListener("click", () => {
      document.querySelectorAll(".file-item").forEach(f => f.classList.remove("selected"));
      fileItem.classList.add("selected");

      if (explorerStatusText) {
        explorerStatusText.innerText = `1 objeto selecionado (${item.tamanho || "0 KB"})`;
      }

      // Abre o projeto em nova janela com iframe!
      abrirProjetoJanela(item);
    });

    // Clique duplo também abre
    fileItem.addEventListener("dblclick", () => {
      abrirProjetoJanela(item);
    });

    explorerFilesList.appendChild(fileItem);
  });

  if (explorerStatusText) {
    explorerStatusText.innerText = `${lista.length} objeto(s)`;
  }
  if (explorerStatusSize) {
    explorerStatusSize.innerText = "3.20 MB (Disco C:)";
  }
}

// Inicializa a árvore e os projetos na carga inicial
inicializarExplorerTree();
renderizarArquivos(listaProjetos);

/* ========================================================
   REDIMENSIONAMENTO DO SPLITTER NO EXPLORER
   ======================================================== */
const explorerSplitter = document.querySelector(".explorer-splitter");
const explorerTreeCol = document.querySelector(".explorer-tree-col");
if (explorerSplitter && explorerTreeCol) {
  let isResizing = false;
  let startX = 0;
  let startWidth = 0;

  explorerSplitter.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = explorerTreeCol.offsetWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    document.querySelectorAll("iframe").forEach(f => f.style.pointerEvents = "none");
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
    const newWidth = Math.max(120, Math.min(startWidth + (e.clientX - startX), 420));
    explorerTreeCol.style.width = newWidth + "px";
  });

  document.addEventListener("mouseup", () => {
    if (isResizing) {
      isResizing = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      document.querySelectorAll("iframe").forEach(f => f.style.pointerEvents = "auto");
    }
  });
}

/* ========================================================
   MENU INICIAR (START MENU)
   ======================================================== */
const btnStart = document.getElementById("btnStart");
const startMenu = document.getElementById("startMenu");

if (btnStart && startMenu) {
  btnStart.addEventListener("click", (e) => {
    e.stopPropagation();
    const aberto = startMenu.classList.toggle("aberto");
    btnStart.classList.toggle("pressed", aberto);
  });

  document.addEventListener("click", (e) => {
    if (!startMenu.contains(e.target) && !btnStart.contains(e.target)) {
      startMenu.classList.remove("aberto");
      btnStart.classList.remove("pressed");
    }
  });

  document.querySelectorAll(".start-item").forEach(item => {
    item.addEventListener("click", () => {
      startMenu.classList.remove("aberto");
      btnStart.classList.remove("pressed");

      const action = item.dataset.action;
      const nomesTaskbar = {
        sobreMim: "Meu Computador",
        Projetos: "Exploring - Projetos",
        Config: "Configurações",
        Paint: "Paint",
        "campo-minado": "Campo Minado",
        Tetris: "Tetris"
      };
      const isFlexIds = ["Projetos", "sobreMim", "Config", "propriedadesSistema"];

      if (action === "app") {
        abrirJanelaApp(item.dataset.target);
      } else if (action === "projeto") {
        const projId = item.dataset.proj;
        const proj = listaProjetos.find(p => p.id === projId);
        if (proj) abrirProjetoJanela(proj);
      } else if (action === "shutdown") {
        alert("Agora você pode desligar o seu computador com segurança.");
      }
    });
  });
}


/* ========================================================
   ABRIR APLICATIVOS PELOS ÍCONES DO DESKTOP E MENU INICIAR
   ======================================================== */
function abrirJanelaApp(id) {
  const janela = document.getElementById(id);
  if (!janela) return;

  const isFlexJanela = ["Projetos", "sobreMim", "Config", "propriedadesSistema"].includes(id)
    || janela.classList.contains("janela-projeto");

  janela.style.display = isFlexJanela ? "flex" : "block";
  ativarJanela(janela);

  const dict = (typeof i18n !== "undefined" && typeof cfgState !== "undefined" && i18n[cfgState.language]) ? i18n[cfgState.language] : {};
  const nomesTaskbar = {
    sobreMim: dict.myComputerTitle || "Meu Computador",
    Projetos: dict.explorerTitle || "Exploring - Projetos",
    Config: dict.configTitle || "Configurações",
    Paint: dict.paintTitle || "Paint",
    "campo-minado": dict.minesweeperTitle || "Campo Minado",
    Tetris: dict.tetrisTitle || "Tetris"
  };
  adicionarNaTaskbar(janela, nomesTaskbar[id] || id);
  tocarSom("open");
}

// Vincula clique tanto na imagem (.iconImg) quanto no texto (<p>) abaixo dela
document.querySelectorAll(".iconImg").forEach(icon => {
  const id = icon.dataset.app;
  const abrir = (e) => {
    e.stopPropagation();
    abrirJanelaApp(id);
  };

  icon.style.cursor = "pointer";
  icon.addEventListener("click", abrir);

  const label = icon.nextElementSibling;
  if (label && label.tagName === "P") {
    label.style.cursor = "pointer";
    label.addEventListener("click", abrir);
  }
});


/* ========================================================
   JOGO: CAMPO MINADO (Minesweeper)
   ======================================================== */
const game = document.getElementById("game");
const rows = 8;
const cols = 8;
const minesCount = 10;
let grid = [];

function createGrid() {
  if (!game) return;
  grid = [];
  game.innerHTML = "";

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = r;
      cell.dataset.col = c;

      game.appendChild(cell);

      row.push({
        element: cell,
        mine: false,
        revealed: false
      });

      cell.addEventListener("click", () => revealCell(r, c));
    }
    grid.push(row);
  }

  placeMines();
}

function placeMines() {
  let placed = 0;
  while (placed < minesCount) {
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * cols);

    if (!grid[r][c].mine) {
      grid[r][c].mine = true;
      placed++;
    }
  }
}

function countMines(r, c) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let nr = r + i;
      let nc = c + j;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        if (grid[nr][nc].mine) count++;
      }
    }
  }
  return count;
}

function revealCell(r, c) {
  let cell = grid[r][c];
  if (cell.revealed) return;

  cell.revealed = true;
  cell.element.classList.add("revealed");

  if (cell.mine) {
    cell.element.textContent = "💣";
    cell.element.classList.add("mine");
    alert("💥 Game Over!");
    createGrid();
    return;
  }

  let count = countMines(r, c);
  if (count > 0) {
    cell.element.textContent = count;
  } else {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let nr = r + i;
        let nc = c + j;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          revealCell(nr, nc);
        }
      }
    }
  }
}

createGrid();


/* ================================================================
   MY COMPUTER (SOBRE MIM) - Interatividade dos ícones
   ================================================================ */
(function initMyComputer() {
  const myCompItems = document.querySelectorAll(".mycomp-item");
  const myCompStatus = document.getElementById("myCompStatus");

  const myCompLabels = {
    "floppyA": "1 objeto selecionado",
    "driveC": "Disco Local (C:) - Clique duplo para ver o perfil",
    "driveD": "Unidade de CD-ROM (D:)",
    "controlPanel": "Painel de Controle - Configurações do sistema",
    "printers": "Impressoras"
  };

  myCompItems.forEach(item => {
    // Seleção com clique simples
    item.addEventListener("click", () => {
      myCompItems.forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");
      const lbl = myCompLabels[item.dataset.id] || "1 objeto selecionado";
      if (myCompStatus) myCompStatus.innerText = lbl;
      tocarSom("select");
    });

    // Clique duplo → abre ação do item
    item.addEventListener("dblclick", () => {
      tocarSom("open");
      const id = item.dataset.id;
      if (id === "driveC") {
        // Abre a janela de Propriedades do Sistema / Sobre Mim
        const jSys = document.getElementById("propriedadesSistema");
        if (jSys) {
          jSys.style.display = "flex";
          ativarJanela(jSys);
          adicionarNaTaskbar(jSys, "Sobre Mim");
        }
      } else if (id === "controlPanel") {
        // Abre a janela de Config
        const jCfg = document.getElementById("Config");
        if (jCfg) {
          jCfg.style.display = "flex";
          ativarJanela(jCfg);
          adicionarNaTaskbar(jCfg, "Config");
        }
      } else {
        alert(`Unidade/item "${item.querySelector(".mycomp-label").innerText}" não está disponível nesta demonstração.`);
      }
    });
  });
})();


/* ================================================================
   ABAS WIN95 (reutilizável para qualquer .win-tabs)
   ================================================================ */
document.querySelectorAll(".win-tabs").forEach(tabContainer => {
  const buttons = tabContainer.querySelectorAll(".win-tab-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Desativa todos os tabs do mesmo container
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Encontra o win-tab-content irmão
      const content = tabContainer.nextElementSibling;
      if (!content || !content.classList.contains("win-tab-content")) return;

      const targetId = btn.dataset.tab;
      content.querySelectorAll(".win-tab-page").forEach(page => {
        page.classList.remove("active");
        if (page.id === targetId) page.classList.add("active");
      });
    });
  });
});


/* ================================================================
   BOTÕES OK DAS JANELAS DE DIÁLOGO
   ================================================================ */
const btnSysOk = document.getElementById("btnSysPropsOk");
if (btnSysOk) {
  btnSysOk.addEventListener("click", () => {
    const j = document.getElementById("propriedadesSistema");
    if (j) {
      j.style.display = "none";
      j.classList.remove("ativa");
      removerDaTaskbar(j.id);
    }
  });
}




/* ================================================================
   CONFIG: EVENTOS E WIRING DE TODOS OS CONTROLES
   ================================================================ */
(function initConfig() {
  const sel = document.getElementById("cfgDaltonismo");
  const swatches = document.querySelectorAll(".color-swatch");
  const crtToggle = document.getElementById("cfgCrtToggle");
  const volumeSlider = document.getElementById("cfgVolumeSlider");
  const volumePercent = document.getElementById("cfgVolumePercent");
  const muteToggle = document.getElementById("cfgMuteToggle");
  const soundEffects = document.getElementById("cfgSoundEffects");
  const btnTestSound = document.getElementById("btnTestSound");
  const clockSeconds = document.getElementById("cfgClockSeconds");

  // ---- Daltonismo: altera em tempo real ----
  if (sel) {
    sel.addEventListener("change", () => {
      aplicarDaltonismo(sel.value);
      tocarSom("select");
    });
  }

  // ---- Cor de fundo: altera em tempo real ----
  swatches.forEach(sw => {
    sw.addEventListener("click", () => {
      swatches.forEach(s => s.classList.remove("active"));
      sw.classList.add("active");
      aplicarCorFundo(sw.dataset.color);
      tocarSom("select");
    });
  });

  // ---- Efeito CRT ----
  if (crtToggle) {
    crtToggle.addEventListener("change", () => {
      aplicarCRT(crtToggle.checked);
      tocarSom("select");
    });
  }

  // ---- Idioma: atualiza a interface instantaneamente ao clicar na opção ----
  document.querySelectorAll("input[name='cfgLanguage']").forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        aplicarIdioma(radio.value);
        tocarSom("select");
      }
    });
  });

  // ---- Tamanho de Fonte: pré-visualiza em tempo real ----
  document.querySelectorAll("input[name='cfgFontSize']").forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        aplicarTamanhoFonte(radio.value);
        tocarSom("select");
      }
    });
  });

  // ---- Formato do Relógio ----
  document.querySelectorAll("input[name='cfgClockFormat']").forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        cfgState.clockFormat = radio.value;
        atualizarRelogioExtendido();
        tocarSom("select");
      }
    });
  });

  if (clockSeconds) {
    clockSeconds.addEventListener("change", () => {
      cfgState.clockSeconds = clockSeconds.checked;
      atualizarRelogioExtendido();
      tocarSom("select");
    });
  }

  // ---- Volume ----
  if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {
      const v = parseInt(volumeSlider.value);
      if (volumePercent) volumePercent.innerText = v + "%";
      cfgState.volume = v;
      if (v === 0) {
        cfgState.muted = true;
        if (muteToggle) muteToggle.checked = true;
      } else {
        cfgState.muted = false;
        if (muteToggle) muteToggle.checked = false;
      }
    });
  }

  if (muteToggle) {
    muteToggle.addEventListener("change", () => {
      cfgState.muted = muteToggle.checked;
      if (muteToggle.checked) {
        if (volumeSlider) volumeSlider.value = 0;
        if (volumePercent) volumePercent.innerText = "0%";
      } else {
        const v = cfgState.volume || 80;
        if (volumeSlider) volumeSlider.value = v;
        if (volumePercent) volumePercent.innerText = v + "%";
      }
    });
  }

  if (soundEffects) {
    soundEffects.addEventListener("change", () => {
      cfgState.soundEffects = soundEffects.checked;
    });
  }

  if (btnTestSound) {
    btnTestSound.addEventListener("click", () => {
      const prevFx = cfgState.soundEffects;
      const prevMute = cfgState.muted;
      cfgState.soundEffects = true;
      cfgState.muted = false;
      tocarSom("startup");
      cfgState.soundEffects = prevFx;
      cfgState.muted = prevMute;
    });
  }

  // ---- Botões da Caixa de Diálogo de Configurações ----
  const btnOk = document.getElementById("btnCfgOk");
  const btnCancel = document.getElementById("btnCfgCancel");
  const btnApply = document.getElementById("btnCfgApply");

  if (btnApply) {
    btnApply.addEventListener("click", () => {
      salvarConfiguracoes();
      tocarSom("click");
    });
  }

  if (btnOk) {
    btnOk.addEventListener("click", () => {
      salvarConfiguracoes();
      const jCfg = document.getElementById("Config");
      if (jCfg) {
        jCfg.style.display = "none";
        jCfg.classList.remove("ativa");
        removerDaTaskbar("Config");
      }
    });
  }

  if (btnCancel) {
    btnCancel.addEventListener("click", () => {
      // Restaura as configurações previamente salvas
      carregarConfiguracoes();
      aplicarTodasConfigs();
      sincronizarControlesConfig();
      const jCfg = document.getElementById("Config");
      if (jCfg) {
        jCfg.style.display = "none";
        jCfg.classList.remove("ativa");
        removerDaTaskbar("Config");
      }
    });
  }
})();


/* ================================================================
   INICIALIZAÇÃO GERAL DO SISTEMA
   ================================================================ */

// Configura janelas criadas no HTML
["sobreMim", "Config", "propriedadesSistema"].forEach(id => {
  const j = document.getElementById(id);
  if (j && j.dataset.configurada !== "true") configurarJanela(j);
});

// Carrega preferências salvas ou padrões
carregarConfiguracoes();
sincronizarControlesConfig();
aplicarTodasConfigs();

// Inicia relógio
atualizarRelogioExtendido();

// Som de boas-vindas do Windows 95 no primeiro clique do usuário
document.addEventListener("click", function startupSoundOnce() {
  tocarSom("startup");
}, { once: true });
