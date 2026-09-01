import type { VariantCopy, VariantId } from "../variant-types";

export const it: Record<VariantId, VariantCopy> = {
  png: {
    title: "Convertire HEIC in PNG, gratis e senza che le foto lascino il computer",
    description:
      "Converti le foto HEIC dell'iPhone in PNG direttamente nel browser. Niente viene caricato, non serve un account, non ci sono limiti e la trasparenza resta.",
    h1: "Da HEIC a PNG",
    lede:
      "Si passa da HEIC a PNG quando servono i pixel esattamente com'erano, oppure quando l'immagine deve stare su uno sfondo trasparente. La conversione avviene dentro questa scheda del browser: le foto non lasciano mai il tuo computer.",
    converterOverrides: {
      drop: "Trascina qui le tue foto HEIC",
      done: "{count} PNG pronti",
      downloadAll: "Scarica tutto in un file ZIP",
    },
    whyHeading: "Quando conviene un PNG",
    why: [
      "Il PNG conserva l'immagine senza buttare via niente, quindi regge di essere modificata e salvata di nuovo un sacco di volte senza ammorbidirsi. Il JPG perde un po' ogni volta.",
      "Il PNG tiene anche la trasparenza, che un JPG non può contenere in nessun modo. Se la foto ha lo sfondo ritagliato, tra i due il PNG è l'unico che se lo tiene.",
      "Quello che costa è lo spazio. Una fotografia salvata in PNG di solito pesa diverse volte più della stessa fotografia in JPG, ed è per questo che il JPG resta la scelta sensata per le foto delle vacanze e il PNG serve per i loghi, le schermate e tutto quello che ha bordi netti.",
    ],
    faqHeading: "Domande frequenti",
    faqs: [
      {
        q: "Il PNG ha una qualità migliore del JPG?",
        a: "Su una fotografia la differenza non si vede e il PNG pesa diverse volte di più. Il PNG vince quando l'immagine ha colori piatti, bordi netti o trasparenza, oppure quando la modificherai e la risalverai parecchie volte.",
      },
      {
        q: "Il PNG mantiene la data in cui è stata scattata la foto?",
        a: "No, e nessun convertitore può farlo davvero. Il PNG non ha un segmento EXIF come ce l'ha il JPG, quindi la data di scatto non ha un posto dove stare. Se ti serve tenere la data, converti in JPG.",
      },
      {
        q: "Mantiene la trasparenza?",
        a: "Sì. Se l'HEIC contiene un canale alfa, il PNG se lo tiene.",
      },
      {
        q: "Le mie foto vengono caricate da qualche parte?",
        a: "No. La decodifica e la ricodifica avvengono tutte e due nel tuo browser, e puoi verificarlo nel pannello di rete degli strumenti per sviluppatori del browser.",
      },
    ],
    backHeading: "Ti serviva un altro formato?",
    backLabel: "Da HEIC a JPG",
    otherLabel: "Da HEIC a PDF",
  },

  pdf: {
    title: "Convertire HEIC in PDF, gratis e senza che le foto lascino il computer",
    description:
      "Trasforma le foto HEIC dell'iPhone in un unico PDF direttamente nel browser. Niente viene caricato, non serve un account e le pagine escono nell'ordine in cui hai scelto le foto.",
    h1: "Da HEIC a PDF",
    lede:
      "Da HEIC a PDF vuol dire una foto per pagina, nell'ordine in cui le hai scelte, in un unico file da mandare per email o da stampare. Il documento viene composto dentro questa scheda del browser: le foto non lasciano mai il tuo computer.",
    converterOverrides: {
      drop: "Trascina qui le tue foto HEIC",
      done: "{count} pagine pronte",
      downloadAll: "Scarica il PDF",
    },
    whyHeading: "Quello che ottieni",
    why: [
      "Ogni foto diventa una pagina grande quanto la foto stessa, invece di essere forzata dentro un A4, quindi non viene tagliato niente e niente galleggia in mezzo al bianco.",
      "Le pagine tengono l'ordine in cui erano i file, che per le foto appena uscite dal telefono è l'ordine in cui le hai scattate.",
      "Le immagini dentro il PDF sono dei JPEG a qualità 92, ed è per questo che il file resta abbastanza leggero da mandare per email.",
    ],
    faqHeading: "Domande frequenti",
    faqs: [
      {
        q: "Ottengo un solo PDF o uno per foto?",
        a: "Un solo PDF con tutte dentro, una foto per pagina, nell'ordine in cui le hai selezionate.",
      },
      {
        q: "Che dimensione hanno le pagine?",
        a: "Ogni pagina è esattamente grande quanto la sua foto, quindi una foto verticale fa una pagina verticale e non viene tagliato niente. In stampa viene poi adattata al foglio che usi.",
      },
      {
        q: "C'è un limite al numero di foto?",
        a: "Solo quello che il tuo computer riesce a tenere. Non c'è un limite del server perché non c'è un server. I gruppi molto grandi ci mettono di più perché il lavoro lo fa la tua macchina.",
      },
      {
        q: "Le mie foto vengono caricate da qualche parte?",
        a: "No. Le foto vengono decodificate e il PDF viene composto nel tuo browser, e puoi verificarlo nel pannello di rete degli strumenti per sviluppatori del browser.",
      },
    ],
    backHeading: "Ti serviva un altro formato?",
    backLabel: "Da HEIC a JPG",
    otherLabel: "Da HEIC a PNG",
  },
};
