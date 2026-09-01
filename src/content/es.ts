import type { HomeCopy } from "./types";

export const es: HomeCopy = {
  title: "Convertir HEIC a JPG gratis, sin que tus fotos salgan del ordenador",
  description:
    "Convertir HEIC a JPG en el navegador, directamente con las fotos del iPhone. No se sube nada, se conserva la fecha original de la foto y no hay cuenta ni límite de archivos.",
  h1: "Convertir HEIC a JPG",
  lede:
    "Convertir HEIC a JPG es una de esas cosas que acabas necesitando: el iPhone guarda las fotos en HEIC y buena parte del software que existe se niega a abrirlas. Suéltalas aquí y las recuperas en JPG. ¿Lo llamas HEIC a JPEG? Es lo mismo. La conversión ocurre dentro de esta pestaña del navegador, así que las fotos no salen de tu ordenador.",

  tagline: "Entra HEIC, sale JPG.",

  stage: {
    idle: "Añadir fotos",
    idleHint: "Entra HEIC, sale JPG. Nada sale de tu navegador.",
    converting: "{done} de {total} reveladas",
    failed: "No salió nada",
    wrongFiles: "Esos no son archivos HEIC",
    countOne: "Una foto, revelada",
    countMany: "{count} fotos, reveladas",
    save: "Descargar {count} JPG en ZIP",
    saveOne: "Descargar el JPG",
    again: "Empezar de nuevo",
    bookTitle: "Una herramienta gratuita de ",
    bookBody: "¿Quieres apoyarnos? Regálate un precioso álbum de fotos.",
  },

  footerLine: "También convierte a {png} y {pdf}. {read} cómo funciona y por qué nada sale de tu ordenador.",
  readLabel: "Lee",
  aboutHeading: "Sobre esta herramienta",
  backLabel: "Volver al conversor",

  howHeading: "Cómo convertir HEIC a JPG",
  steps: [
    {
      name: "Elige tus fotos",
      text: "Suelta los archivos HEIC en cualquier parte de la página, o haz clic en la página y elígelos.",
    },
    {
      name: "Una o muchas",
      text: "Una foto o varios cientos, no hay límite.",
    },
    {
      name: "Mira cómo se llena el muro",
      text: "Cada foto se convierte dentro de tu navegador y aparece en la galería en cuanto existe su JPEG, mientras una barra de progreso cuenta hasta cien.",
    },
    {
      name: "Descarga",
      text: "Pulsa una foto suelta para guardarla, o llévate el conjunto entero en un único archivo ZIP.",
    },
  ],

  sections: [
    {
      id: "why",
      heading: "Por qué tus fotos son HEIC",
      body: [
        "Desde iOS 11 el iPhone guarda las fotos en HEIC en lugar de en JPG. El formato guarda la misma imagen en aproximadamente la mitad de espacio, que es la razón por la que Apple cambió y la razón por la que en el móvil te caben más fotos que antes.",
        "El problema empieza cuando la foto sale del móvil. Las versiones antiguas de Windows, muchos formularios web, las tiendas de revelado y una larga cola de programas corrientes siguen esperando un JPG y rechazan el archivo sin más. Convertir no va de calidad, va de que el resto del mundo se ponga al día.",
      ],
    },
    {
      id: "local",
      heading: "Aquí no se sube nada",
      body: [
        "Los demás conversores de la primera página de Google mandan tus fotos a un servidor, las convierten allí y te las devuelven. Es una manera razonable de montar una web y una manera rara de tratar las vacaciones de alguien.",
        "Esta página descodifica el HEIC en tu navegador con una compilación de libheif en WebAssembly. Abre la pestaña de red del navegador, convierte una foto y no verás ninguna petición que se la lleve a ningún sitio. Después no hay nada que borrar, porque nunca hubo una copia.",
      ],
    },
    {
      id: "date",
      heading: "Tus fotos conservan su fecha",
      body: [
        "La mayoría de conversores te devuelven un JPG con la fecha del momento en que lo convertiste. Metes esa carpeta en cualquier app de fotos y un viaje de dos semanas se queda en una sola tarde.",
        "Este lee la fecha de captura, la cámara, el objetivo y el lugar del archivo original y los escribe en el JPG. Las fotos se ordenan como se hicieron.",
      ],
    },
  ],

  specHeading: "HEIC y JPG, uno al lado del otro",
  specIntro:
    "Los dos guardan una fotografía. Casi todo lo demás es distinto, y por eso a uno de los dos lo rechazan una y otra vez.",
  specColumns: { label: "", heic: "HEIC", jpg: "JPG" },
  specRows: [
    { label: "Nombre completo", heic: "High Efficiency Image Container", jpg: "JPEG File Interchange Format" },
    { label: "Norma", heic: "ISO/IEC 23008-12 (HEIF)", jpg: "ISO/IEC 10918" },
    { label: "Compresión", heic: "HEVC (H.265)", jpg: "Transformada de coseno discreta" },
    { label: "Tipo MIME", heic: "image/heic", jpg: "image/jpeg" },
    { label: "Extensión de archivo", heic: ".heic, .heif", jpg: ".jpg, .jpeg" },
    { label: "UTI de Apple", heic: "public.heic", jpg: "public.jpeg" },
    { label: "Profundidad de color", heic: "Hasta 16 bits", jpg: "8 bits" },
    { label: "Tamaño habitual", heic: "Más o menos la mitad que un JPG", jpg: "La referencia con la que se compara todo" },
    { label: "Transparencia", heic: "Sí", jpg: "No" },
    { label: "Varias imágenes en un archivo", heic: "Sí, incluidas las Live Photos y las ráfagas", jpg: "No" },
    { label: "Datos de profundidad y de edición", heic: "Sí", jpg: "No" },
    { label: "Se abre en todas partes", heic: "No", jpg: "Sí, desde hace unos treinta años" },
    { label: "Publicado", heic: "2015, adoptado por Apple en 2017", jpg: "1992" },
  ],

  platformsHeading: "Si prefieres no usar una web",
  platformsIntro:
    "Todos los sistemas operativos saben hacerlo por su cuenta. Es más lento y no lleva bien los lotes, pero funciona sin conexión y conviene saberlo.",
  platforms: [
    {
      id: "iphone",
      name: "En un iPhone o un iPad",
      intro: "El móvil te da JPG si se lo pides, y además puede dejar de crear archivos HEIC.",
      steps: [
        "Para convertir una foto suelta: ábrela en Fotos, pulsa el botón de compartir, elige Copiar foto y pégala en Archivos o en Mail. Llega convertida en JPG.",
        "Para que las fotos nuevas dejen de ser HEIC: entra en Ajustes, luego Cámara, luego Formatos, y elige Más compatible.",
        "Para mandar JPG a un ordenador: entra en Ajustes, luego Fotos, baja hasta Transferir a Mac o PC y elige Automático.",
      ],
    },
    {
      id: "windows",
      name: "En Windows",
      intro: "Windows 11 abre los HEIC de serie. Windows 10 casi siempre necesita antes un códec de la Microsoft Store.",
      steps: [
        "Instala las Extensiones de imagen HEIF, que son gratis, desde la Microsoft Store si el archivo no se abre.",
        "Haz clic con el botón derecho en la foto, elige Abrir con y luego Fotos.",
        "Pulsa los tres puntos, elige Guardar como y en Tipo selecciona JPG.",
        "Windows no trae conversión por lotes, así que para una carpeta entera de fotos usa el conversor del principio de esta página.",
      ],
    },
    {
      id: "mac",
      name: "En un Mac",
      intro: "El propio sistema convierte una foto o una carpeta entera sin instalar nada.",
      steps: [
        "Selecciona las fotos en el Finder, haz clic con el botón derecho y elige Acciones rápidas, luego Convertir imagen.",
        "En Formato elige JPEG, elige un tamaño y pulsa Convertir a JPEG.",
        "También puedes abrir una foto en Vista Previa y usar Archivo, luego Exportar, y poner el formato en JPEG.",
      ],
    },
    {
      id: "android",
      name: "En Android",
      intro: "Android lee los HEIC en la mayoría de móviles recientes, pero no te los convierte.",
      steps: [
        "Abre esta página en Chrome, pulsa Elegir fotos y selecciona los archivos.",
        "La conversión ocurre en el propio móvil, así que funciona con datos o sin cobertura ninguna.",
        "Los JPG se guardan en tu carpeta de Descargas.",
      ],
    },
  ],

  faqHeading: "Preguntas frecuentes",
  faqs: [
    {
      q: "¿Qué es un archivo HEIC?",
      a: "HEIC es el nombre que Apple le da a una foto guardada en el contenedor HEIF que define la norma ISO/IEC 23008-12, comprimida con HEVC. Guarda la misma imagen que un JPG en aproximadamente la mitad de tamaño, y además admite cosas que un JPG no admite, como la transparencia, los datos de profundidad, el color de 16 bits y los varios fotogramas de una Live Photo.",
    },
    {
      q: "¿Cómo abro un archivo HEIC?",
      a: "En un Mac se abre con doble clic y en un iPhone con solo tocarlo. En Windows 11 se abre en Fotos. En Windows 10 instala las Extensiones de imagen HEIF, que son gratis, desde la Microsoft Store. Si no tienes nada de eso, conviértelo a JPG al principio de esta página y abre el JPG.",
    },
    {
      q: "¿Es gratis de verdad?",
      a: "Sí. No hay cuenta, ni marca de agua, ni límite de fotos, ni versión de pago. Lo hace foto foto, una empresa de libros de fotos, y lo único que te pide es que al final le eches un vistazo a un libro.",
    },
    {
      q: "¿Se suben mis fotos a algún sitio?",
      a: "No. La conversión ocurre en tu navegador con una compilación de libheif en WebAssembly. Tus fotos no se envían a ninguna parte, y puedes comprobarlo tú mismo en la pestaña de red de las herramientas de desarrollo del navegador.",
    },
    {
      q: "¿Se pierde calidad al convertir?",
      a: "Un poco, igual que con cualquier JPG. Codificamos con calidad 92, que en fotografías es indistinguible del original a simple vista. El archivo HEIC de tu ordenador no se toca, así que el original lo conservas siempre.",
    },
    {
      q: "¿Cuántas fotos puedo convertir a la vez?",
      a: "Las que aguante tu ordenador. No hay límite de servidor porque no hay servidor. Varios cientos de fotos de una vez es lo normal, y la página convierte varias en paralelo en segundo plano para que la pestaña siga respondiendo.",
    },
    {
      q: "¿Conserva la fecha en que se hizo la foto?",
      a: "Sí. La fecha de captura, la cámara, el objetivo y la ubicación GPS se copian del HEIC al JPG, así que las fotos se siguen ordenando por cuándo las hiciste.",
    },
    {
      q: "¿Funciona en un iPhone o un iPad?",
      a: "Sí. Abre esta página en Safari, pulsa Elegir fotos y selecciónalas de tu fototeca. Los archivos convertidos se guardan en la app Archivos.",
    },
    {
      q: "¿Puedo evitar que el iPhone haga archivos HEIC?",
      a: "Sí. Entra en Ajustes, luego Cámara, luego Formatos, y elige Más compatible. Las fotos nuevas se guardan en JPG. Las que ya hiciste siguen siendo HEIC, que es justo para lo que sirve esta página.",
    },
    {
      q: "¿Qué pasa con una Live Photo?",
      a: "Una Live Photo es un HEIC con varios fotogramas y un vídeo corto. El conversor coge el fotograma fijo, que es la foto que ves en tu fototeca. El movimiento no pasa al JPG porque un JPG no puede guardarlo.",
    },
    {
      q: "¿Por qué mi JPG convertido pesa más que el HEIC?",
      a: "Porque HEVC comprime mejor que JPEG. La misma imagen suele necesitar el doble de espacio en JPG. Ese es el cambio que estás haciendo a favor de un archivo que se abre en todas partes.",
    },
    {
      q: "¿Puedo convertir HEIC a PNG o a PDF?",
      a: "Sí. En esta web hay un conversor de HEIC a PNG y otro de HEIC a PDF. Los dos funcionan igual y los dos se quedan en tu ordenador.",
    },
  ],

  siblingsHeading: "Otras cosas que quizá necesites",
  siblings: [
    { label: "HEIC a PNG", page: "png" },
    { label: "HEIC a PDF", page: "pdf" },
  ],

  bookHeading: "Lo hace una empresa de libros de fotos",
  bookBody:
    "foto foto convierte una carpeta de fotos en un libro impreso sin pedirte que maquetes nada. Este conversor existe porque las fotos siempre llegan primero en HEIC.",
  bookCta: "Mira lo que hace foto foto",

  footerNote:
    "La conversión ocurre en tu navegador. Ninguna foto que abras aquí se sube, se guarda ni la ve nadie.",
};
