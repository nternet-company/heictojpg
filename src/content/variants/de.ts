import type { VariantCopy, VariantId } from "../variant-types";

export const de: Record<VariantId, VariantCopy> = {
  png: {
    title: "HEIC in PNG umwandeln, kostenlos und ohne Upload",
    description:
      "HEIC-Fotos vom iPhone im Browser in PNG umwandeln. Nichts wird hochgeladen, es gibt weder ein Konto noch ein Limit, und Transparenz bleibt erhalten.",
    h1: "HEIC in PNG umwandeln",
    lede:
      "HEIC in PNG umwandeln lohnt sich, wenn jedes Pixel genau so bleiben soll, wie es war, oder wenn das Bild auf einem transparenten Hintergrund liegen muss. Die Umwandlung läuft in diesem Browser-Tab, Ihre Fotos verlassen den Rechner also nie.",
    converterOverrides: {
      drop: "Ziehen Sie Ihre HEIC-Fotos hierher",
      done: "{count} PNGs fertig",
      downloadAll: "Alle als ZIP herunterladen",
    },
    whyHeading: "Wann PNG das richtige Format ist",
    why: [
      "PNG legt das Bild ab, ohne etwas wegzuwerfen. Es übersteht deshalb beliebig viele Runden aus Bearbeiten und erneutem Speichern, ohne weicher zu werden. Ein JPG verliert jedes Mal ein wenig.",
      "PNG hält außerdem Transparenz fest, die ein JPG überhaupt nicht aufnehmen kann. Wenn das Foto einen freigestellten Hintergrund hat, ist PNG von beiden das einzige Format, das ihn behält.",
      "Bezahlt wird das mit der Dateigröße. Eine Fotografie als PNG ist meistens ein Mehrfaches derselben Fotografie als JPG. Deshalb bleibt JPG die vernünftige Wahl für Urlaubsfotos, und PNG ist für Logos, Screenshots und alles mit harten Kanten da.",
    ],
    faqHeading: "Häufige Fragen",
    faqs: [
      {
        q: "Ist die Qualität von PNG besser als die von JPG?",
        a: "Bei einer Fotografie ist der Unterschied nicht zu sehen, und das PNG ist ein Mehrfaches so groß. PNG gewinnt bei flächigen Farben, scharfen Kanten und Transparenz, und immer dann, wenn ein Bild wieder und wieder bearbeitet und neu gespeichert wird.",
      },
      {
        q: "Bleibt im PNG das Aufnahmedatum erhalten?",
        a: "Nein, und kein Konverter kann das sauber lösen. PNG hat keinen EXIF-Bereich, wie ihn ein JPG hat, das Aufnahmedatum hat dort also keinen Platz. Wenn Sie das Datum brauchen, wandeln Sie stattdessen in JPG um.",
      },
      {
        q: "Bleibt Transparenz erhalten?",
        a: "Ja. Wenn die HEIC-Datei einen Alphakanal enthält, behält das PNG ihn.",
      },
      {
        q: "Werden meine Fotos hochgeladen?",
        a: "Nein. Das Dekodieren und das erneute Kodieren laufen beide in Ihrem Browser, und das können Sie im Netzwerk-Tab der Entwicklerwerkzeuge selbst nachprüfen.",
      },
      {
        q: "Ich habe nach heic to png gesucht, bin ich hier richtig?",
        a: "Ja. Heic to png ist die englische Schreibweise für dieselbe Umwandlung, und dieser Konverter macht genau das.",
      },
    ],
    backHeading: "Doch ein anderes Format gesucht?",
    backLabel: "HEIC in JPG umwandeln",
    otherLabel: "HEIC in PDF umwandeln",
  },

  pdf: {
    title: "HEIC in PDF umwandeln, kostenlos und ohne Upload",
    description:
      "HEIC-Fotos vom iPhone im Browser in ein einziges PDF umwandeln. Nichts wird hochgeladen, es gibt kein Konto, und die Seiten stehen in der Reihenfolge, in der Sie die Fotos ausgewählt haben.",
    h1: "HEIC in PDF umwandeln",
    lede:
      "Wenn Sie HEIC in PDF umwandeln, bekommen Sie ein Foto pro Seite, in der Reihenfolge, in der Sie die Dateien ausgewählt haben, als ein einziges PDF zum Verschicken oder Drucken. Das ganze Dokument entsteht in diesem Browser-Tab, Ihre Fotos verlassen den Rechner also nie.",
    converterOverrides: {
      drop: "Ziehen Sie Ihre HEIC-Fotos hierher",
      done: "{count} Seiten fertig",
      downloadAll: "Das PDF herunterladen",
    },
    whyHeading: "Was dabei herauskommt",
    why: [
      "Jedes Foto wird eine Seite, und die Seite hat die Maße des Fotos statt eines erzwungenen A4-Formats. So wird nichts beschnitten, und nichts schwimmt in einer weißen Fläche.",
      "Die Seiten behalten die Reihenfolge der Dateien. Bei Fotos direkt vom Telefon ist das die Reihenfolge, in der sie aufgenommen wurden.",
      "Die Bilder im PDF sind JPEGs mit Qualität 92. Deshalb bleibt die Datei klein genug, um sie per Mail zu verschicken.",
    ],
    faqHeading: "Häufige Fragen",
    faqs: [
      {
        q: "Bekomme ich ein PDF oder eines pro Foto?",
        a: "Ein PDF mit allen Fotos darin, ein Foto pro Seite, in der Reihenfolge, in der Sie sie ausgewählt haben.",
      },
      {
        q: "Welches Seitenformat wird verwendet?",
        a: "Jede Seite ist genau so groß wie ihr Foto. Ein hochformatiges Foto ergibt also eine hochformatige Seite, und beschnitten wird nichts. Beim Drucken passt der Drucker das Ganze auf das Papier an, das Sie einlegen.",
      },
      {
        q: "Gibt es ein Limit für die Zahl der Fotos?",
        a: "Nur das, was Ihr Rechner fasst. Es gibt kein Serverlimit, weil es keinen Server gibt. Sehr große Stapel dauern länger, weil Ihr eigener Rechner die Arbeit macht.",
      },
      {
        q: "Werden meine Fotos hochgeladen?",
        a: "Nein. Die Fotos werden in Ihrem Browser dekodiert, und dort wird auch das PDF zusammengesetzt. Nachprüfen können Sie das im Netzwerk-Tab der Entwicklerwerkzeuge Ihres Browsers.",
      },
      {
        q: "Ich habe nach heic to pdf gesucht, bin ich hier richtig?",
        a: "Ja. Heic to pdf ist die englische Schreibweise für dieselbe Umwandlung, und dieser Konverter macht genau das.",
      },
    ],
    backHeading: "Doch ein anderes Format gesucht?",
    backLabel: "HEIC in JPG umwandeln",
    otherLabel: "HEIC in PNG umwandeln",
  },
};
