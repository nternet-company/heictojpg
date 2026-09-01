import type { HomeCopy } from "./types";

export const fr: HomeCopy = {
  title: "Convertir HEIC en JPG, gratuit, vos photos restent sur votre ordinateur",
  description:
    "Convertir HEIC en JPG dans votre navigateur, directement depuis les photos de votre iPhone. Rien n'est envoyé sur un serveur, la date de prise de vue est conservée, et il n'y a ni compte ni limite de fichiers.",
  h1: "Convertir HEIC en JPG",
  lede:
    "Convertir HEIC en JPG est la première chose à faire quand les photos sortent de l'iPhone. Depuis iOS 11 il les enregistre en HEIC, et la moitié des logiciels du monde refuse encore de les ouvrir. Déposez-les ici, vous récupérez des JPG. Certains parlent de HEIC en JPEG : c'est le même format. La conversion se fait à l'intérieur de cet onglet, donc les photos ne quittent jamais votre ordinateur.",

  tagline: "HEIC à l'entrée, JPG à la sortie.",

  stage: {
    idle: "Ajouter des photos",
    idleHint: "HEIC à l'entrée, JPG à la sortie. Rien ne quitte votre navigateur.",
    converting: "{done} sur {total} tirées",
    failed: "Rien n'est sorti",
    wrongFiles: "Ce ne sont pas des HEIC",
    countOne: "Une photo, tirée",
    countMany: "{count} photos, tirées",
    save: "Télécharger {count} JPG en ZIP",
    saveOne: "Télécharger le JPG",
    again: "Recommencer",
    bookTitle: "Un outil gratuit de ",
    bookBody: "Envie de nous soutenir ? Offrez-vous un beau livre photo.",
  },

  footerLine: "Convertit aussi en {png} et {pdf}. {read} comment cela fonctionne et pourquoi rien ne quitte votre ordinateur.",
  readLabel: "Lisez",
  aboutHeading: "À propos de cet outil",
  backLabel: "Retour au convertisseur",

  howHeading: "Comment convertir un HEIC en JPG",
  steps: [
    {
      name: "Choisissez vos photos",
      text: "Déposez les fichiers HEIC n'importe où sur la page, ou cliquez sur la page et choisissez-les.",
    },
    {
      name: "Une ou plusieurs",
      text: "Une photo ou plusieurs centaines, il n'y a pas de limite.",
    },
    {
      name: "Regardez le mur se remplir",
      text: "Chaque photo est convertie dans votre navigateur et apparaît dans la galerie dès que son JPEG existe, pendant qu'une barre de progression compte jusqu'à cent.",
    },
    {
      name: "Téléchargez",
      text: "Cliquez sur une photo pour l'enregistrer seule, ou prenez la série entière dans un seul fichier ZIP.",
    },
  ],

  sections: [
    {
      id: "why",
      heading: "Pourquoi vos photos sont en HEIC",
      body: [
        "Depuis iOS 11, l'iPhone enregistre ses photos en HEIC plutôt qu'en JPG. Le format range la même image dans environ deux fois moins de place, ce qui explique le choix d'Apple et le fait que votre téléphone tienne plus de photos qu'avant.",
        "Les ennuis commencent quand la photo quitte le téléphone. Les anciennes versions de Windows, beaucoup de formulaires en ligne, les laboratoires photo et une longue liste de logiciels ordinaires attendent toujours un JPG et refusent simplement le fichier. Convertir n'est pas une question de qualité, c'est le reste du monde qui n'a pas suivi.",
      ],
    },
    {
      id: "local",
      heading: "Rien ne part sur un serveur",
      body: [
        "Tous les autres convertisseurs HEIC to JPG de la première page de Google envoient vos photos sur un serveur, les convertissent là-bas et vous les renvoient. C'est une façon raisonnable de construire un site web et une drôle de façon de traiter les vacances de quelqu'un.",
        "Cette page décode le HEIC dans votre navigateur, avec une version WebAssembly de libheif. Ouvrez l'onglet réseau de votre navigateur, convertissez une photo, vous ne verrez aucune requête l'emporter où que ce soit. Il n'y a rien à supprimer ensuite, puisqu'il n'y a jamais eu de copie.",
      ],
    },
    {
      id: "date",
      heading: "Vos photos gardent leur date",
      body: [
        "La plupart des convertisseurs rendent un JPG daté du moment où vous l'avez converti. Déposez-en un dossier entier dans n'importe quelle application photo et deux semaines de voyage se rassemblent en un seul après-midi.",
        "Celui-ci lit la date de prise de vue, l'appareil, l'objectif et le lieu dans le fichier d'origine, et les réécrit dans le JPG. Les photos se rangent dans l'ordre où vous les avez prises.",
      ],
    },
  ],

  specHeading: "HEIC et JPG, côte à côte",
  specIntro:
    "Les deux contiennent une photographie. À peu près tout le reste les sépare, et c'est pour cette raison que l'un des deux se fait refuser partout.",
  specColumns: { label: "", heic: "HEIC", jpg: "JPG" },
  specRows: [
    { label: "Nom complet", heic: "High Efficiency Image Container", jpg: "JPEG File Interchange Format" },
    { label: "Norme", heic: "ISO/IEC 23008-12 (HEIF)", jpg: "ISO/IEC 10918" },
    { label: "Compression", heic: "HEVC (H.265)", jpg: "Transformée en cosinus discrète" },
    { label: "Type MIME", heic: "image/heic", jpg: "image/jpeg" },
    { label: "Extension de fichier", heic: ".heic, .heif", jpg: ".jpg, .jpeg" },
    { label: "UTI Apple", heic: "public.heic", jpg: "public.jpeg" },
    { label: "Profondeur de couleur", heic: "Jusqu'à 16 bits", jpg: "8 bits" },
    { label: "Taille habituelle", heic: "Environ la moitié d'un JPG", jpg: "La référence à laquelle tout le monde se compare" },
    { label: "Transparence", heic: "Oui", jpg: "Non" },
    { label: "Plusieurs images dans un même fichier", heic: "Oui, dont les Live Photos et les rafales", jpg: "Non" },
    { label: "Données de profondeur et de retouche", heic: "Oui", jpg: "Non" },
    { label: "S'ouvre partout", heic: "Non", jpg: "Oui, depuis une trentaine d'années" },
    { label: "Sortie", heic: "2015, adopté par Apple en 2017", jpg: "1992" },
  ],

  platformsHeading: "Si vous préférez vous passer d'un site web",
  platformsIntro:
    "Chaque système d'exploitation sait le faire tout seul. C'est plus lent et il n'aime pas les lots, mais cela fonctionne hors connexion et cela vaut la peine de le savoir.",
  platforms: [
    {
      id: "iphone",
      name: "Sur iPhone ou iPad",
      intro: "Le téléphone vous donne des JPG si vous le lui demandez, et il peut même arrêter complètement de fabriquer des HEIC.",
      steps: [
        "Pour convertir une photo : ouvrez-la dans Photos, touchez le bouton Partager, choisissez Copier la photo, puis collez-la dans Fichiers ou dans Mail. Elle arrive en JPG.",
        "Pour que les nouvelles photos ne soient plus en HEIC : ouvrez Réglages, puis Appareil photo, puis Formats, et choisissez Le plus compatible.",
        "Pour envoyer des JPG vers un ordinateur : ouvrez Réglages, puis Photos, descendez jusqu'à Transférer vers Mac ou PC, et choisissez Automatique.",
      ],
    },
    {
      id: "windows",
      name: "Sur Windows",
      intro: "Windows 11 ouvre les HEIC sans rien installer. Windows 10 réclame le plus souvent un codec du Microsoft Store d'abord.",
      steps: [
        "Installez les Extensions d'image HEIF, qui sont gratuites, depuis le Microsoft Store si le fichier refuse de s'ouvrir.",
        "Faites un clic droit sur la photo, choisissez Ouvrir avec, puis Photos.",
        "Cliquez sur les trois points, choisissez Enregistrer sous, et prenez JPG comme type de fichier.",
        "Windows ne sait pas convertir un lot entier, donc pour un dossier de photos utilisez le convertisseur en haut de cette page.",
      ],
    },
    {
      id: "mac",
      name: "Sur un Mac",
      intro: "Le Mac convertit une photo ou un dossier entier sans rien installer.",
      steps: [
        "Sélectionnez les photos dans le Finder, faites un clic droit, et choisissez Actions rapides, puis Convertir l'image.",
        "Choisissez JPEG, prenez une taille, et cliquez sur Convertir en JPEG.",
        "Ou ouvrez une photo dans Aperçu et passez par Fichier, puis Exporter, en réglant le format sur JPEG.",
      ],
    },
    {
      id: "android",
      name: "Sur Android",
      intro: "Android lit le HEIC sur la plupart des téléphones récents, mais ne le convertit pas pour vous.",
      steps: [
        "Ouvrez cette page dans Chrome, touchez Choisir des photos, et prenez les fichiers.",
        "La conversion se fait sur le téléphone lui-même, donc elle marche en données mobiles ou sans aucun réseau.",
        "Les JPG sont enregistrés dans votre dossier Téléchargements.",
      ],
    },
  ],

  faqHeading: "Questions fréquentes",
  faqs: [
    {
      q: "Qu'est-ce qu'un fichier HEIC ?",
      a: "HEIC est le nom qu'Apple donne à une photo rangée dans le conteneur HEIF défini par la norme ISO/IEC 23008-12 et compressée en HEVC. Il contient la même image qu'un JPG dans environ deux fois moins de place, et il sait aussi porter ce qu'un JPG ne peut pas, comme la transparence, les données de profondeur, la couleur sur 16 bits et les différentes images d'une Live Photo.",
    },
    {
      q: "Comment ouvrir un fichier HEIC ?",
      a: "Sur un Mac, double-cliquez dessus et il s'ouvre. Sur un iPhone, il s'ouvre tout seul. Sur Windows 11 il s'ouvre dans Photos. Sur Windows 10, installez les Extensions d'image HEIF, gratuites, depuis le Microsoft Store. Si rien de tout cela n'est possible, convertissez-le en JPG en haut de cette page et ouvrez le JPG.",
    },
    {
      q: "C'est vraiment gratuit ?",
      a: "Oui. Pas de compte, pas de filigrane, pas de limite au nombre de photos, pas de version payante. Cette page est faite par foto foto, qui fabrique des livres photo, et la seule chose qu'elle vous demande est de regarder un livre photo à la fin.",
    },
    {
      q: "Mes photos partent-elles quelque part ?",
      a: "Non. La conversion se fait dans votre navigateur, avec une version WebAssembly de libheif. Vos photos ne sont envoyées nulle part, et vous pouvez le vérifier vous-même dans l'onglet réseau des outils de développement de votre navigateur.",
    },
    {
      q: "Est-ce que la conversion abîme la qualité ?",
      a: "Un peu, comme n'importe quel JPG. Nous encodons en qualité 92, ce qui est indiscernable de l'original à l'oeil pour une photographie. Le fichier HEIC sur votre ordinateur n'est pas touché, vous gardez donc toujours l'original.",
    },
    {
      q: "Combien de photos puis-je convertir d'un coup ?",
      a: "Autant que votre ordinateur peut en tenir. Il n'y a pas de limite de serveur puisqu'il n'y a pas de serveur. Plusieurs centaines de photos à la fois est une quantité normale, et la page en convertit plusieurs en parallèle en arrière-plan pour que l'onglet reste réactif.",
    },
    {
      q: "La date de prise de vue est-elle conservée ?",
      a: "Oui. La date de prise de vue, l'appareil, l'objectif et la position GPS sont recopiés du HEIC vers le JPG, donc les photos se rangent toujours dans l'ordre où vous les avez prises.",
    },
    {
      q: "Est-ce que ça marche sur un iPhone ou un iPad ?",
      a: "Oui. Ouvrez cette page dans Safari, touchez Choisir des photos, et prenez-les dans votre photothèque. Les fichiers convertis sont enregistrés dans l'app Fichiers.",
    },
    {
      q: "Puis-je empêcher mon iPhone de fabriquer des HEIC ?",
      a: "Oui. Ouvrez Réglages, puis Appareil photo, puis Formats, et choisissez Le plus compatible. Les nouvelles photos sont enregistrées en JPG. Celles que vous avez déjà prises restent en HEIC, et c'est à cela que sert cette page.",
    },
    {
      q: "Que devient une Live Photo ?",
      a: "Une Live Photo est un HEIC qui contient plusieurs images et une courte vidéo. Le convertisseur prend l'image fixe, celle que vous voyez dans votre photothèque. Le mouvement ne passe pas dans le JPG, parce qu'un JPG ne sait pas le porter.",
    },
    {
      q: "Pourquoi mon JPG est-il plus lourd que le HEIC ?",
      a: "Parce que le HEVC compresse mieux que le JPEG. La même image demande en général environ deux fois plus de place en JPG. C'est ce que coûte un fichier qui s'ouvre partout.",
    },
    {
      q: "Puis-je convertir un HEIC en PNG ou en PDF ?",
      a: "Oui. Il y a un convertisseur HEIC en PNG et un convertisseur HEIC en PDF sur ce site, qui fonctionnent de la même façon et restent eux aussi sur votre ordinateur.",
    },
  ],

  siblingsHeading: "D'autres choses dont vous pourriez avoir besoin",
  siblings: [
    { label: "HEIC en PNG", page: "png" },
    { label: "HEIC en PDF", page: "pdf" },
  ],

  bookHeading: "Fait par une entreprise de livres photo",
  bookBody:
    "foto foto transforme un dossier de photos en livre imprimé sans vous demander de mettre quoi que ce soit en page. Ce convertisseur existe parce que les photos arrivent toujours en HEIC d'abord.",
  bookCta: "Voir ce que fait foto foto",

  footerNote:
    "La conversion a lieu dans votre navigateur. Aucune photo ouverte ici n'est envoyée, stockée ou vue par qui que ce soit.",
};
