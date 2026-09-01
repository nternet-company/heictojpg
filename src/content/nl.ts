import type { HomeCopy } from "./types";

export const nl: HomeCopy = {
  title: "HEIC naar JPG omzetten, gratis en zonder uploaden",
  description:
    "Zet iPhone-foto's van HEIC naar JPG om in je eigen browser. Er wordt niets geüpload, de originele opnamedatum blijft staan, en er is geen account of bestandslimiet.",
  h1: "HEIC naar JPG",
  lede:
    "Je iPhone bewaart foto's als HEIC en de helft van de software ter wereld opent zo'n bestand niet, dus moet je HEIC naar JPG omzetten. Sleep ze hierheen en je krijgt JPG's terug. Zeg je liever HEIC naar JPEG? Zelfde formaat, zelfde resultaat. Het omzetten gebeurt in dit browsertabblad, dus je foto's verlaten je computer niet.",

  tagline: "HEIC erin, JPG eruit.",

  stage: {
    idle: "Foto's toevoegen",
    idleHint: "HEIC erin, JPG eruit. Niets verlaat je browser.",
    converting: "{done} van {total} afgedrukt",
    failed: "Er kwam niets uit",
    wrongFiles: "Dit zijn geen HEIC-bestanden",
    countOne: "Eén foto, afgedrukt",
    countMany: "{count} foto's, afgedrukt",
    save: "Download {count} JPG's als ZIP",
    saveOne: "Download de JPG",
    again: "Opnieuw",
    bookTitle: "Een gratis tool van ",
    bookBody: "Wil je ons steunen? Koop jezelf een prachtig fotoboek.",
  },

  footerLine: "Zet ook om naar {png} en {pdf}. {read} hoe het werkt en waarom er niets van je computer af gaat.",
  readLabel: "Lees",
  aboutHeading: "Over deze tool",
  backLabel: "Terug naar de tool",

  howHeading: "Zo zet je HEIC om naar JPG",
  steps: [
    {
      name: "Kies je foto's",
      text: "Sleep de HEIC-bestanden ergens op de pagina, of klik op de pagina en kies ze.",
    },
    {
      name: "Eén of veel",
      text: "Eén foto of een paar honderd, er is geen limiet.",
    },
    {
      name: "Kijk hoe de muur volloopt",
      text: "Elke foto wordt omgezet binnen je browser en verschijnt in de galerij zodra de JPEG bestaat, terwijl een voortgangsbalk naar honderd telt.",
    },
    {
      name: "Downloaden",
      text: "Klik op een losse foto om die te bewaren, of neem de hele set mee als één ZIP-bestand.",
    },
  ],

  sections: [
    {
      id: "why",
      heading: "Waarom je foto's om te beginnen een HEIC-bestand zijn",
      body: [
        "Sinds iOS 11 bewaart een iPhone foto's als HEIC in plaats van JPG. Die structuur zet dezelfde foto in ongeveer de helft van de ruimte, en daarom stapte Apple over en passen er meer foto's op je telefoon dan vroeger.",
        "Het gedoe begint zodra de foto de telefoon verlaat. Oudere Windows-versies, veel webformulieren, drukkers en een lange staart aan gewone software verwachten nog altijd een JPG en weigeren het bestand gewoon. Omzetten gaat niet over kwaliteit, het gaat erover dat de rest van de wereld bijbeent.",
      ],
    },
    {
      id: "local",
      heading: "Hier wordt niets geüpload",
      body: [
        "Elke andere converter op de eerste pagina van Google stuurt je foto's naar een server, zet ze daar om en stuurt ze terug. Dat is een prima manier om een website te bouwen en een vreemde manier om met iemands vakantie om te gaan.",
        "Deze pagina decodeert HEIC in je browser met een WebAssembly-versie van libheif. Open het netwerktabblad van je browser, zet een foto om, en je ziet geen enkel verzoek dat hem ergens heen draagt. Er valt achteraf niets te verwijderen, want er is nooit een kopie geweest.",
      ],
    },
    {
      id: "date",
      heading: "Je foto's houden hun datum",
      body: [
        "De meeste converters geven een JPG terug met het moment van omzetten erin gestempeld. Zet zo'n map in een fotoapp en een reis van twee weken schrompelt tot één middag.",
        "Deze leest de opnamedatum, de camera, de lens en de locatie uit het originele bestand en schrijft ze in de JPG. De foto's staan op volgorde zoals je ze gemaakt hebt.",
      ],
    },
  ],

  specHeading: "HEIC en JPG naast elkaar",
  specIntro:
    "Allebei bevatten ze één foto. Bijna al het andere verschilt, en daarom wordt er steeds één van de twee geweigerd.",
  specColumns: { label: "", heic: "HEIC", jpg: "JPG" },
  specRows: [
    { label: "Voluit geschreven", heic: "High Efficiency Image Container", jpg: "JPEG File Interchange Format" },
    { label: "Standaard", heic: "ISO/IEC 23008-12 (HEIF)", jpg: "ISO/IEC 10918" },
    { label: "Compressie", heic: "HEVC (H.265)", jpg: "Discrete cosinustransformatie" },
    { label: "MIME-type", heic: "image/heic", jpg: "image/jpeg" },
    { label: "Bestandsextensie", heic: ".heic, .heif", jpg: ".jpg, .jpeg" },
    { label: "Apple UTI", heic: "public.heic", jpg: "public.jpeg" },
    { label: "Kleurdiepte", heic: "Tot 16 bit", jpg: "8 bit" },
    { label: "Gebruikelijke grootte", heic: "Ongeveer de helft van een JPG", jpg: "De maat waarmee iedereen vergelijkt" },
    { label: "Transparantie", heic: "Ja", jpg: "Nee" },
    { label: "Meerdere beelden in één bestand", heic: "Ja, ook Live Photos en burstreeksen", jpg: "Nee" },
    { label: "Diepte- en bewerkingsgegevens", heic: "Ja", jpg: "Nee" },
    { label: "Gaat overal open", heic: "Nee", jpg: "Ja, al ongeveer dertig jaar" },
    { label: "Uitgebracht", heic: "2015, door Apple ingevoerd in 2017", jpg: "1992" },
  ],

  platformsHeading: "Als je liever geen website gebruikt",
  platformsIntro:
    "Elk besturingssysteem kan dit ook zelf. Het is trager en het vergeet de hele stapel, maar het werkt zonder internet en het is goed om te weten.",
  platforms: [
    {
      id: "iphone",
      name: "Op een iPhone of iPad",
      intro: "De telefoon geeft JPG's als je erom vraagt, en hij kan ook helemaal stoppen met HEIC-bestanden maken.",
      steps: [
        "Eén foto omzetten: open hem in Foto's, tik op de deelknop, kies Kopieer foto en plak hem in Bestanden of in Mail. Hij komt aan als JPG.",
        "Nieuwe foto's geen HEIC meer laten worden: open Instellingen, dan Camera, dan Bestandsstructuren, en kies Meest compatibel.",
        "JPG's naar een computer sturen: open Instellingen, dan Foto's, ga naar Zet over naar Mac of pc, en kies Automatisch.",
      ],
    },
    {
      id: "windows",
      name: "Op Windows",
      intro: "Windows 11 opent HEIC uit zichzelf. Windows 10 heeft daar meestal eerst een codec uit de Microsoft Store voor nodig.",
      steps: [
        "Installeer de gratis Uitbreidingen voor HEIF-afbeeldingen uit de Microsoft Store als het bestand niet opengaat.",
        "Klik met de rechtermuisknop op de foto, kies Openen met, en dan Foto's.",
        "Klik op de drie puntjes, kies Opslaan als, en zet het bestandstype op JPG.",
        "Windows kan van zichzelf geen hele stapel in één keer omzetten, dus gebruik voor een map vol foto's de converter boven aan deze pagina.",
      ],
    },
    {
      id: "mac",
      name: "Op een Mac",
      intro: "Voorvertoning zet één foto of een hele map om zonder dat je iets installeert.",
      steps: [
        "Selecteer de foto's in Finder, klik met de rechtermuisknop, en kies Snelle taken, dan Converteer afbeelding.",
        "Kies JPEG, kies een grootte, en klik op Converteer naar JPEG.",
        "Of open een foto in Voorvertoning en gebruik Archief, dan Exporteer, en zet de structuur op JPEG.",
      ],
    },
    {
      id: "android",
      name: "Op Android",
      intro: "Android leest HEIC op de meeste recente telefoons, maar zet het niet voor je om.",
      steps: [
        "Open deze pagina in Chrome, tik op Kies foto's, en pak de bestanden.",
        "Het omzetten gebeurt op de telefoon zelf, dus het werkt op mobiele data of helemaal zonder bereik.",
        "De JPG's komen in je map Downloads terecht.",
      ],
    },
  ],

  faqHeading: "Veelgestelde vragen",
  faqs: [
    {
      q: "Wat is een HEIC-bestand?",
      a: "HEIC is de naam die Apple gebruikt voor een foto in de HEIF-container uit ISO/IEC 23008-12, gecomprimeerd met HEVC. Het bevat dezelfde afbeelding als een JPG in ongeveer de helft van de bestandsgrootte, en het kan ook dingen bevatten die een JPG niet kan, zoals transparantie, dieptegegevens, 16 bit kleur en de losse beeldjes van een Live Photo.",
    },
    {
      q: "Hoe open ik een HEIC-bestand?",
      a: "Op een Mac of een iPhone tik je er twee keer op en gaat hij open. Op Windows 11 gaat hij open in Foto's. Op Windows 10 installeer je de gratis Uitbreidingen voor HEIF-afbeeldingen uit de Microsoft Store. Is niets daarvan beschikbaar, zet het bestand dan boven aan deze pagina om naar JPG en open die.",
    },
    {
      q: "Is het echt gratis?",
      a: "Ja. Geen account, geen watermerk, geen limiet op het aantal foto's dat je omzet, en geen betaalde versie. Het is gemaakt door foto foto, een fotoboekbedrijf, en het enige dat het vraagt is dat je aan het eind even naar een fotoboek kijkt.",
    },
    {
      q: "Worden mijn foto's geüpload?",
      a: "Nee. Het omzetten gebeurt in je browser met een WebAssembly-versie van libheif. Je foto's worden nergens heen gestuurd, en dat kun je zelf nakijken in het netwerktabblad van de ontwikkelaarstools van je browser.",
    },
    {
      q: "Gaat er kwaliteit verloren bij het omzetten?",
      a: "Een beetje, zoals bij elke JPG. Wij coderen op kwaliteit 92, en dat is voor foto's niet van het origineel te onderscheiden. Het HEIC-bestand op je computer blijft ongemoeid, dus je houdt altijd het origineel.",
    },
    {
      q: "Hoeveel foto's kan ik in één keer omzetten?",
      a: "Zo veel als je computer aankan. Er is geen serverlimiet, want er is geen server. Een paar honderd foto's tegelijk is normaal, en de pagina zet er op de achtergrond meerdere naast elkaar om, zodat het tabblad blijft reageren.",
    },
    {
      q: "Blijft de datum van de opname behouden?",
      a: "Ja. De opnamedatum, de camera, de lens en de gps-locatie worden uit de HEIC in de JPG gekopieerd, dus de foto's staan nog steeds op volgorde van wanneer je ze maakte.",
    },
    {
      q: "Werkt het op een iPhone of iPad?",
      a: "Ja. Open deze pagina in Safari, tik op Kies foto's, en pak ze uit je bibliotheek. De omgezette bestanden komen in je app Bestanden terecht.",
    },
    {
      q: "Kan ik mijn iPhone laten stoppen met HEIC-bestanden maken?",
      a: "Ja. Open Instellingen, dan Camera, dan Bestandsstructuren, en kies Meest compatibel. Nieuwe foto's worden als JPG bewaard. De foto's die je al gemaakt hebt blijven HEIC, en daar is deze pagina voor.",
    },
    {
      q: "Wat gebeurt er met een Live Photo?",
      a: "Een Live Photo is een HEIC met meerdere beeldjes en een kort filmpje erin. De converter neemt het stilstaande beeldje, de foto die je in je bibliotheek ziet. De beweging gaat niet mee in een JPG, omdat een JPG die niet kan bevatten.",
    },
    {
      q: "Waarom is mijn omgezette JPG groter dan de HEIC?",
      a: "Omdat HEVC beter comprimeert dan JPEG. Dezelfde foto heeft als JPG meestal ongeveer twee keer zo veel ruimte nodig. Dat is de ruil die je maakt voor een bestand dat overal opengaat.",
    },
    {
      q: "Kan ik HEIC ook naar PNG of PDF omzetten?",
      a: "Ja. Op deze site staat een converter van HEIC naar PNG en een van HEIC naar PDF, allebei op dezelfde manier gebouwd en allebei blijven ze op je eigen computer.",
    },
  ],

  siblingsHeading: "Andere dingen die je nodig kunt hebben",
  siblings: [
    { label: "HEIC naar PNG", page: "png" },
    { label: "HEIC naar PDF", page: "pdf" },
  ],

  bookHeading: "Gemaakt door een fotoboekbedrijf",
  bookBody:
    "foto foto maakt van een map met foto's een gedrukt boek zonder dat je zelf iets hoeft op te maken. Deze converter bestaat omdat de foto's altijd eerst als HEIC binnenkomen.",
  bookCta: "Kijk wat foto foto maakt",

  footerNote:
    "Het omzetten gebeurt in je browser. Geen enkele foto die je hier opent wordt geüpload, bewaard of door iemand gezien.",
};
