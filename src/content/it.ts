import type { HomeCopy } from "./types";

export const it: HomeCopy = {
  title: "Convertire HEIC in JPG, gratis e senza che le foto lascino il computer",
  description:
    "Convertire HEIC in JPG direttamente nel browser, con le foto dell'iPhone. Niente viene caricato, la data di scatto resta quella originale, non serve un account e non ci sono limiti.",
  h1: "Convertire HEIC in JPG",
  lede:
    "Le foto dell'iPhone arrivano in HEIC e metà del software in circolazione non le apre, quindi prima o poi tocca convertire HEIC in JPG. Trascinale qui e le riavrai in JPG. C'è chi scrive HEIC in JPEG: è lo stesso formato. La conversione avviene dentro questa scheda del browser: le foto non lasciano mai il tuo computer.",

  tagline: "Entra HEIC, esce JPG.",

  stage: {
    idle: "Aggiungi foto",
    idleHint: "Entra HEIC, esce JPG. Niente lascia il tuo browser.",
    converting: "{done} di {total} stampate",
    failed: "Non è uscito niente",
    wrongFiles: "Questi non sono file HEIC",
    countOne: "Una foto, stampata",
    countMany: "{count} foto, stampate",
    save: "Scarica {count} JPG in ZIP",
    saveOne: "Scarica il JPG",
    again: "Ricomincia",
    bookTitle: "Uno strumento gratuito di ",
    bookBody: "Vuoi sostenerci? Regalati un bellissimo album fotografico.",
  },

  footerLine: "Converte anche in {png} e {pdf}. {read} come funziona e perché niente lascia il tuo computer.",
  readLabel: "Leggi",
  aboutHeading: "Informazioni su questo strumento",
  backLabel: "Torna al convertitore",

  howHeading: "Come convertire HEIC in JPG",
  steps: [
    {
      name: "Scegli le foto",
      text: "Lascia i file HEIC in un punto qualsiasi della pagina, oppure clicca sulla pagina e selezionali.",
    },
    {
      name: "Una o molte",
      text: "Una foto o diverse centinaia, non c'è un limite.",
    },
    {
      name: "Guarda il muro riempirsi",
      text: "Ogni foto viene convertita dentro il tuo browser e appare nella galleria appena il suo JPEG esiste, mentre una barra di avanzamento conta fino a cento.",
    },
    {
      name: "Scarica",
      text: "Fai clic su una singola foto per salvarla, oppure prendi tutto il gruppo in un unico file ZIP.",
    },
  ],

  sections: [
    {
      id: "why",
      heading: "Perché le tue foto sono in HEIC",
      body: [
        "Da iOS 11 in poi l'iPhone salva le foto in HEIC invece che in JPG. Il formato conserva la stessa immagine in circa metà dello spazio, ed è per questo che Apple ci è passata e per questo che nel telefono ci stanno più foto di prima.",
        "I problemi cominciano quando la foto esce dal telefono. Le versioni più vecchie di Windows, parecchi moduli online, i centri stampa e una lunga coda di programmi ordinari si aspettano ancora un JPG e rifiutano il file senza tanti complimenti. Convertire non è una questione di qualità, è il resto del mondo che deve ancora mettersi in pari.",
      ],
    },
    {
      id: "local",
      heading: "Qui non viene caricato niente",
      body: [
        "Tutti gli altri convertitori nella prima pagina di Google mandano le tue foto a un server, le convertono lì e te le rispediscono. È un modo ragionevole di costruire un sito e un modo strano di trattare le vacanze di qualcuno.",
        "Questa pagina decodifica gli HEIC nel tuo browser con una build WebAssembly di libheif. Apri il pannello di rete del browser, converti una foto e non vedrai nessuna richiesta che la porta da qualche parte. Dopo non c'è niente da cancellare, perché non ne è mai esistita una copia.",
      ],
    },
    {
      id: "date",
      heading: "Le foto tengono la loro data",
      body: [
        "La maggior parte dei convertitori ti restituisce un JPG con la data del momento in cui l'hai convertito. Butta una cartella di foto così dentro una qualsiasi app e due settimane di viaggio si schiacciano in un solo pomeriggio.",
        "Questo legge dal file originale la data di scatto, la fotocamera, l'obiettivo e il luogo, e li riscrive dentro il JPG. Le foto si ordinano come sono state scattate.",
      ],
    },
  ],

  specHeading: "HEIC e JPG, uno accanto all'altro",
  specIntro:
    "Contengono entrambi una fotografia. Quasi tutto il resto è diverso, ed è per questo che uno dei due continua a essere rifiutato.",
  specColumns: { label: "", heic: "HEIC", jpg: "JPG" },
  specRows: [
    { label: "Nome per esteso", heic: "High Efficiency Image Container", jpg: "JPEG File Interchange Format" },
    { label: "Standard", heic: "ISO/IEC 23008-12 (HEIF)", jpg: "ISO/IEC 10918" },
    { label: "Compressione", heic: "HEVC (H.265)", jpg: "Trasformata discreta del coseno" },
    { label: "Tipo MIME", heic: "image/heic", jpg: "image/jpeg" },
    { label: "Estensione del file", heic: ".heic, .heif", jpg: ".jpg, .jpeg" },
    { label: "UTI Apple", heic: "public.heic", jpg: "public.jpeg" },
    { label: "Profondità di colore", heic: "Fino a 16 bit", jpg: "8 bit" },
    { label: "Dimensione tipica", heic: "Circa la metà di un JPG", jpg: "Il riferimento con cui tutti si confrontano" },
    { label: "Trasparenza", heic: "Sì", jpg: "No" },
    { label: "Più immagini in un solo file", heic: "Sì, comprese le Live Photos e le raffiche", jpg: "No" },
    { label: "Dati di profondità e di modifica", heic: "Sì", jpg: "No" },
    { label: "Si apre ovunque", heic: "No", jpg: "Sì, da una trentina d'anni" },
    { label: "Anno di uscita", heic: "2015, adottato da Apple nel 2017", jpg: "1992" },
  ],

  platformsHeading: "Se preferisci non usare un sito",
  platformsIntro:
    "Ogni sistema operativo sa farlo per conto suo. È più lento e non pensa alle conversioni in blocco, ma funziona senza connessione ed è una cosa che vale la pena sapere.",
  platforms: [
    {
      id: "iphone",
      name: "Su iPhone o iPad",
      intro: "Il telefono ti dà dei JPG se glielo chiedi, e può anche smettere del tutto di creare file HEIC.",
      steps: [
        "Per convertire una foto sola: aprila in Foto, tocca il pulsante di condivisione, scegli Copia foto e incollala in File o in Mail. Arriva come JPG.",
        "Per non creare più nuovi HEIC: apri Impostazioni, poi Fotocamera, poi Formati, e scegli Più compatibile.",
        "Per mandare dei JPG a un computer: apri Impostazioni, poi Foto, scorri fino a Trasferisci su Mac o PC e scegli Automatico.",
      ],
    },
    {
      id: "windows",
      name: "Su Windows",
      intro: "Windows 11 apre gli HEIC così com'è. Windows 10 di solito ha bisogno prima di un codec dal Microsoft Store.",
      steps: [
        "Se il file non si apre, installa le Estensioni immagini HEIF gratuite dal Microsoft Store.",
        "Fai clic con il tasto destro sulla foto, scegli Apri con, poi Foto.",
        "Fai clic sui tre puntini, scegli Salva con nome e imposta JPG come tipo di file.",
        "Windows non ha una conversione in blocco integrata, quindi per una cartella intera di foto usa il convertitore in cima a questa pagina.",
      ],
    },
    {
      id: "mac",
      name: "Su un Mac",
      intro: "Anteprima converte una foto singola o una cartella intera senza installare niente.",
      steps: [
        "Seleziona le foto nel Finder, fai clic con il tasto destro e scegli Azioni rapide, poi Converti immagine.",
        "Scegli JPEG, imposta una dimensione e fai clic su Converti in JPEG.",
        "Oppure apri una foto in Anteprima e usa Archivio, poi Esporta, e imposta il formato su JPEG.",
      ],
    },
    {
      id: "android",
      name: "Su Android",
      intro: "Android legge gli HEIC sulla maggior parte dei telefoni recenti, ma non te li converte.",
      steps: [
        "Apri questa pagina in Chrome, tocca Scegli le foto e seleziona i file.",
        "La conversione avviene sul telefono stesso, quindi funziona sotto rete dati o anche senza campo.",
        "I JPG finiscono nella cartella Download.",
      ],
    },
  ],

  faqHeading: "Domande frequenti",
  faqs: [
    {
      q: "Che cos'è un file HEIC?",
      a: "HEIC è il nome che Apple dà a una foto conservata nel contenitore HEIF definito dallo standard ISO/IEC 23008-12 e compressa con HEVC. Contiene la stessa immagine di un JPG in circa metà dello spazio, e può contenere anche cose che un JPG non regge, come la trasparenza, i dati di profondità, il colore a 16 bit e i vari fotogrammi di una Live Photo.",
    },
    {
      q: "Come si apre un file HEIC?",
      a: "Su un Mac o su un iPhone basta un doppio tocco e si apre. Su Windows 11 si apre nell'app Foto. Su Windows 10 installa le Estensioni immagini HEIF gratuite dal Microsoft Store. Se non hai niente di tutto questo, converti il file in JPG in cima a questa pagina e apri quello.",
    },
    {
      q: "È davvero gratis?",
      a: "Sì. Non c'è un account, non c'è una filigrana, non c'è un limite al numero di foto che converti e non c'è una versione a pagamento. Lo ha fatto foto foto, che stampa libri fotografici, e l'unica cosa che ti chiede è di guardare un libro fotografico alla fine.",
    },
    {
      q: "Le mie foto vengono caricate da qualche parte?",
      a: "No. La conversione avviene nel tuo browser con una build WebAssembly di libheif. Le tue foto non vengono mai spedite da nessuna parte, e puoi verificarlo tu stesso nel pannello di rete degli strumenti per sviluppatori del browser.",
    },
    {
      q: "Convertire fa perdere qualità?",
      a: "Un po', come succede con qualsiasi JPG. Codifichiamo a qualità 92, che su una fotografia è indistinguibile a occhio dall'originale. Il file HEIC sul tuo computer resta intatto, quindi l'originale ce l'hai sempre.",
    },
    {
      q: "Quante foto posso convertire in una volta?",
      a: "Tutte quelle che il tuo computer riesce a tenere. Non c'è un limite del server perché non c'è un server. Diverse centinaia di foto per volta è normale: la pagina ne converte più di una alla volta in sottofondo, così la scheda resta reattiva.",
    },
    {
      q: "Mantiene la data in cui è stata scattata la foto?",
      a: "Sì. La data di scatto, la fotocamera, l'obiettivo e la posizione GPS vengono copiati dall'HEIC dentro il JPG, quindi le foto continuano a ordinarsi per quando le hai scattate.",
    },
    {
      q: "Funziona su iPhone o iPad?",
      a: "Sì. Apri questa pagina in Safari, tocca Scegli le foto e prendile dalla libreria. I file convertiti finiscono nell'app File.",
    },
    {
      q: "Posso far smettere l'iPhone di creare file HEIC?",
      a: "Sì. Apri Impostazioni, poi Fotocamera, poi Formati, e scegli Più compatibile. Le foto nuove vengono salvate in JPG. Quelle che hai già scattato restano HEIC, ed è per quelle che serve questa pagina.",
    },
    {
      q: "Che fine fa una Live Photo?",
      a: "Una Live Photo è un HEIC che contiene diversi fotogrammi più un breve video. Il convertitore prende il fotogramma fermo, cioè la foto che vedi nella libreria. Il movimento non passa in un JPG, perché un JPG non lo può contenere.",
    },
    {
      q: "Perché il JPG convertito è più grande dell'HEIC?",
      a: "Perché HEVC comprime meglio di JPEG. La stessa immagine in JPG occupa di solito circa il doppio dello spazio. È lo scambio che accetti per avere un file che si apre ovunque.",
    },
    {
      q: "Posso convertire HEIC in PNG o in PDF?",
      a: "Sì. Su questo sito c'è un convertitore da HEIC a PNG e uno da HEIC a PDF, funzionano allo stesso modo e restano tutti e due sul tuo computer.",
    },
  ],

  siblingsHeading: "Altre cose che ti possono servire",
  siblings: [
    { label: "Da HEIC a PNG", page: "png" },
    { label: "Da HEIC a PDF", page: "pdf" },
  ],

  bookHeading: "Fatto da chi stampa libri fotografici",
  bookBody:
    "foto foto trasforma una cartella di foto in un libro stampato senza chiederti di impaginare niente. Questo convertitore esiste perché le foto arrivano sempre prima in HEIC.",
  bookCta: "Guarda cosa fa foto foto",

  footerNote:
    "La conversione avviene nel tuo browser. Nessuna foto che apri qui viene caricata, conservata o vista da qualcuno.",
};
