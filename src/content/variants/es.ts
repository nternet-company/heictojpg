import type { VariantCopy, VariantId } from "../variant-types";

export const es: Record<VariantId, VariantCopy> = {
  png: {
    title: "Convertir HEIC a PNG gratis, sin que tus fotos salgan del ordenador",
    description:
      "Convierte las fotos HEIC del iPhone a PNG en el navegador. No se sube nada, no hay cuenta ni límite de archivos y se conserva la transparencia.",
    h1: "Convertir HEIC a PNG",
    lede:
      "Convertir HEIC a PNG es lo que pides cuando necesitas cada píxel tal y como estaba, o cuando la imagen tiene que ir sobre un fondo transparente. La conversión ocurre dentro de esta pestaña del navegador, así que las fotos no salen de tu ordenador.",
    converterOverrides: {
      drop: "Suelta aquí tus fotos HEIC",
      done: "{count} PNG listos",
      downloadAll: "Descargar todo en un ZIP",
    },
    whyHeading: "Cuándo conviene un PNG",
    why: [
      "Un PNG guarda la imagen sin tirar nada por el camino, así que aguanta que la edites y la vuelvas a guardar una y otra vez sin que se ablande. El JPG pierde un poco cada vez.",
      "El PNG además conserva la transparencia, que un JPG no puede guardar de ninguna manera. Si la foto tiene el fondo recortado, el PNG es el único de los dos que lo mantiene.",
      "Lo que cuesta es tamaño. Una fotografía guardada en PNG suele pesar varias veces más que la misma fotografía en JPG, y por eso el JPG sigue siendo lo sensato para las fotos de vacaciones y el PNG es para logotipos, capturas de pantalla y cualquier cosa con bordes duros.",
    ],
    faqHeading: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿El PNG tiene más calidad que el JPG?",
        a: "En una fotografía la diferencia no se ve y el PNG pesa varias veces más. El PNG gana cuando la imagen tiene colores planos, bordes nítidos o transparencia, o cuando la vas a editar y volver a guardar muchas veces.",
      },
      {
        q: "¿El PNG conserva la fecha en que se hizo la foto?",
        a: "No, y ningún conversor puede hacerlo bien. El PNG no tiene un segmento EXIF como el que tiene el JPG, así que la fecha de captura no tiene dónde vivir. Si necesitas conservar la fecha, convierte a JPG.",
      },
      {
        q: "¿Conserva la transparencia?",
        a: "Sí. Si el HEIC lleva un canal alfa, el PNG lo conserva.",
      },
      {
        q: "¿Se suben mis fotos a algún sitio?",
        a: "No. La descodificación y la nueva codificación ocurren las dos en tu navegador, y puedes comprobarlo en la pestaña de red de las herramientas de desarrollo del navegador.",
      },
    ],
    backHeading: "¿Buscabas otro formato?",
    backLabel: "HEIC a JPG",
    otherLabel: "HEIC a PDF",
  },

  pdf: {
    title: "Convertir HEIC a PDF gratis, sin que tus fotos salgan del ordenador",
    description:
      "Convierte las fotos HEIC del iPhone en un único PDF en el navegador. No se sube nada, no hay cuenta y las páginas salen en el orden en que elegiste las fotos.",
    h1: "Convertir HEIC a PDF",
    lede:
      "Convertir HEIC a PDF aquí te deja una foto por página, en el orden en que las elegiste, en un único archivo que puedes mandar por correo o imprimir. El documento se monta entero dentro de esta pestaña del navegador, así que las fotos no salen de tu ordenador.",
    converterOverrides: {
      drop: "Suelta aquí tus fotos HEIC",
      done: "{count} páginas listas",
      downloadAll: "Descargar el PDF",
    },
    whyHeading: "Lo que te llevas",
    why: [
      "Cada foto es una página, del tamaño de la propia foto en lugar de forzada a un A4, así que no se recorta nada ni queda nada flotando en medio de un mar de blanco.",
      "Las páginas mantienen el orden que tenían los archivos, que en fotos recién sacadas del móvil es el orden en que las hiciste.",
      "Las imágenes dentro del PDF son JPEG con calidad 92, que es la razón por la que el archivo se queda lo bastante pequeño como para mandarlo por correo.",
    ],
    faqHeading: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Me llevo un solo PDF o uno por foto?",
        a: "Un solo PDF con todas dentro, una foto por página, en el orden en que las seleccionaste.",
      },
      {
        q: "¿Qué tamaño de página usa?",
        a: "Cada página mide exactamente lo que mide su foto, así que una foto vertical hace una página vertical y no se recorta nada. La impresora la ajusta luego al papel que uses.",
      },
      {
        q: "¿Hay un límite de fotos?",
        a: "Las que aguante tu ordenador. No hay límite de servidor porque no hay servidor. Los conjuntos muy grandes tardan más porque el trabajo lo hace tu propia máquina.",
      },
      {
        q: "¿Se suben mis fotos a algún sitio?",
        a: "No. Las fotos se descodifican y el PDF se monta en tu navegador, y puedes comprobarlo en la pestaña de red de las herramientas de desarrollo del navegador.",
      },
    ],
    backHeading: "¿Buscabas otro formato?",
    backLabel: "HEIC a JPG",
    otherLabel: "HEIC a PNG",
  },
};
