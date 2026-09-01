import type { HomeCopy } from "./types";

export const de: HomeCopy = {
  title: "HEIC in JPG umwandeln, kostenlos und ohne Upload",
  description:
    "HEIC in JPG umwandeln, direkt im Browser, mit den Fotos vom iPhone. Nichts wird hochgeladen, das Aufnahmedatum bleibt erhalten, und es gibt weder ein Konto noch ein Limit.",
  h1: "HEIC in JPG umwandeln",
  lede:
    "Ihr iPhone speichert Fotos als HEIC, und die halbe Softwarewelt weigert sich, diese Dateien zu öffnen. Ziehen Sie sie hierher, um HEIC in JPG umzuwandeln. Ob man es HEIC in JPG umwandeln oder HEIC in JPEG umwandeln nennt: gemeint ist dasselbe. Die Umwandlung läuft in diesem Browser-Tab, Ihre Fotos verlassen den Rechner also nie.",

  tagline: "HEIC rein, JPG raus.",

  stage: {
    idle: "Fotos hinzufügen",
    idleHint: "HEIC rein, JPG raus. Nichts verlässt Ihren Browser.",
    converting: "{done} von {total} gedruckt",
    failed: "Es kam nichts heraus",
    wrongFiles: "Das sind keine HEIC-Dateien",
    countOne: "Ein Foto, gedruckt",
    countMany: "{count} Fotos, gedruckt",
    save: "{count} JPGs als ZIP herunterladen",
    saveOne: "Das JPG herunterladen",
    again: "Von vorn",
    bookTitle: "Ein kostenloses Tool von ",
    bookBody: "Möchten Sie uns unterstützen? Holen Sie sich ein schönes Fotobuch.",
  },

  footerLine: "Wandelt auch in {png} und {pdf} um. {read}, wie es funktioniert und warum nichts Ihren Rechner verlässt.",
  readLabel: "Lesen Sie",
  aboutHeading: "Über dieses Tool",
  backLabel: "Zurück zum Konverter",

  howHeading: "So wandeln Sie HEIC in JPG um",
  steps: [
    {
      name: "Fotos auswählen",
      text: "Ziehen Sie die HEIC-Dateien irgendwo auf die Seite, oder klicken Sie auf die Seite und wählen Sie sie aus.",
    },
    {
      name: "Eines oder viele",
      text: "Ein Foto oder mehrere Hundert, es gibt kein Limit.",
    },
    {
      name: "Zusehen, wie sich die Wand füllt",
      text: "Jedes Foto wird in Ihrem Browser umgewandelt und erscheint in der Galerie, sobald sein JPEG existiert, während ein Fortschrittsbalken bis hundert zählt.",
    },
    {
      name: "Herunterladen",
      text: "Klicken Sie ein einzelnes Foto an, um es zu sichern, oder nehmen Sie den ganzen Satz als eine ZIP-Datei.",
    },
  ],

  sections: [
    {
      id: "why",
      heading: "Warum Ihre Fotos überhaupt HEIC sind",
      body: [
        "Seit iOS 11 speichert ein iPhone Fotos als HEIC statt als JPG. Das Format legt dasselbe Bild in ungefähr der Hälfte des Speicherplatzes ab. Deshalb hat Apple gewechselt, und deshalb passen heute mehr Fotos auf Ihr Telefon als früher.",
        "Die Schwierigkeiten fangen an, sobald das Foto das Telefon verlässt. Ältere Windows-Versionen, viele Web-Formulare, Copyshops und eine lange Reihe ganz gewöhnlicher Programme erwarten nach wie vor ein JPG und nehmen die Datei einfach nicht an. Beim Umwandeln von HEIC zu JPG geht es nicht um Qualität, sondern darum, dass der Rest der Welt noch nicht nachgezogen hat.",
      ],
    },
    {
      id: "local",
      heading: "Hier wird nichts hochgeladen",
      body: [
        "Jeder andere Konverter auf der ersten Google-Seite schickt Ihre Fotos an einen Server, wandelt sie dort um und schickt sie zurück. Das ist eine vernünftige Art, eine Website zu bauen, und eine seltsame Art, mit dem Urlaub eines anderen Menschen umzugehen.",
        "Diese Seite dekodiert HEIC direkt im Browser, mit einem WebAssembly-Build von libheif. Öffnen Sie den Netzwerk-Tab Ihres Browsers und wandeln Sie ein Foto um. Sie werden keine Anfrage sehen, die es irgendwohin trägt. Es gibt hinterher nichts zu löschen, weil nie eine Kopie entstanden ist.",
      ],
    },
    {
      id: "date",
      heading: "Ihre Fotos behalten ihr Datum",
      body: [
        "Die meisten Konverter geben ein JPG zurück, das auf den Moment der Umwandlung datiert ist. Legen Sie einen Ordner voll davon in eine Fotos-App, und eine Reise von zwei Wochen schrumpft auf einen einzigen Nachmittag zusammen.",
        "Dieser hier liest Aufnahmedatum, Kamera, Objektiv und Ort aus der Originaldatei und schreibt sie in das JPG. Die Fotos sortieren sich so, wie sie aufgenommen wurden.",
      ],
    },
  ],

  specHeading: "HEIC und JPG nebeneinander",
  specIntro:
    "Beide enthalten eine Fotografie. Fast alles andere daran ist verschieden, und deshalb wird eines von beiden immer wieder abgelehnt.",
  specColumns: { label: "", heic: "HEIC", jpg: "JPG" },
  specRows: [
    { label: "Vollständiger Name", heic: "High Efficiency Image Container", jpg: "JPEG File Interchange Format" },
    { label: "Standard", heic: "ISO/IEC 23008-12 (HEIF)", jpg: "ISO/IEC 10918" },
    { label: "Kompression", heic: "HEVC (H.265)", jpg: "Diskrete Kosinustransformation" },
    { label: "MIME-Typ", heic: "image/heic", jpg: "image/jpeg" },
    { label: "Dateiendung", heic: ".heic, .heif", jpg: ".jpg, .jpeg" },
    { label: "Apple UTI", heic: "public.heic", jpg: "public.jpeg" },
    { label: "Farbtiefe", heic: "Bis zu 16 Bit", jpg: "8 Bit" },
    { label: "Typische Größe", heic: "Etwa halb so groß wie ein JPG", jpg: "Der Maßstab, mit dem alle vergleichen" },
    { label: "Transparenz", heic: "Ja", jpg: "Nein" },
    { label: "Mehrere Bilder in einer Datei", heic: "Ja, auch Live Photos und Serienbilder", jpg: "Nein" },
    { label: "Tiefen- und Bearbeitungsdaten", heic: "Ja", jpg: "Nein" },
    { label: "Öffnet sich überall", heic: "Nein", jpg: "Ja, seit rund dreißig Jahren" },
    { label: "Veröffentlicht", heic: "2015, von Apple 2017 übernommen", jpg: "1992" },
  ],

  platformsHeading: "Wenn Sie lieber keine Website benutzen",
  platformsIntro:
    "Jedes Betriebssystem kann das auch allein. Es dauert länger und es vergisst den Stapel, aber es funktioniert offline und es lohnt sich, das zu wissen.",
  platforms: [
    {
      id: "iphone",
      name: "Auf einem iPhone oder iPad",
      intro: "Das Telefon rückt JPGs heraus, wenn Sie es darum bitten, und es kann das Anlegen von HEIC-Dateien auch ganz einstellen.",
      steps: [
        "Für ein einzelnes Foto: Öffnen Sie es in Fotos, tippen Sie auf Teilen, wählen Sie Foto kopieren und fügen Sie es in Dateien oder Mail ein. Es kommt als JPG an.",
        "Damit neue Fotos kein HEIC mehr werden: Öffnen Sie Einstellungen, dann Kamera, dann Formate, und wählen Sie Maximale Kompatibilität.",
        "Damit JPGs auf dem Rechner ankommen: Öffnen Sie Einstellungen, dann Fotos, scrollen Sie zu Auf Mac oder PC übertragen und wählen Sie Automatisch.",
      ],
    },
    {
      id: "windows",
      name: "Unter Windows",
      intro: "Windows 11 öffnet HEIC-Dateien ohne Zutun. Windows 10 braucht dafür meist erst einen Codec aus dem Microsoft Store.",
      steps: [
        "Installieren Sie die kostenlosen HEIF-Bilderweiterungen aus dem Microsoft Store, wenn sich die Datei nicht öffnen lässt.",
        "Klicken Sie mit der rechten Maustaste auf das Foto, wählen Sie Öffnen mit, dann Fotos.",
        "Klicken Sie auf die drei Punkte, wählen Sie Speichern unter und stellen Sie als Dateityp JPG ein.",
        "Windows hat keine Stapelverarbeitung eingebaut. Für einen ganzen Ordner voller Fotos nehmen Sie den Konverter oben auf dieser Seite.",
      ],
    },
    {
      id: "mac",
      name: "Auf einem Mac",
      intro: "Die Vorschau wandelt ein einzelnes Foto oder einen ganzen Ordner um, ohne dass Sie etwas installieren.",
      steps: [
        "Markieren Sie die Fotos im Finder, klicken Sie mit der rechten Maustaste und wählen Sie Schnellaktionen, dann Bild konvertieren.",
        "Wählen Sie JPEG, stellen Sie eine Größe ein und klicken Sie auf In JPEG konvertieren.",
        "Oder öffnen Sie ein Foto in der Vorschau und gehen Sie auf Ablage, dann Exportieren, und stellen Sie als Format JPEG ein.",
      ],
    },
    {
      id: "android",
      name: "Unter Android",
      intro: "Android liest HEIC auf den meisten neueren Telefonen, wandelt es aber nicht für Sie um.",
      steps: [
        "Öffnen Sie diese Seite in Chrome, tippen Sie auf Fotos auswählen und wählen Sie die Dateien aus.",
        "Die Umwandlung läuft auf dem Telefon selbst, sie funktioniert also über mobile Daten und auch ganz ohne Empfang.",
        "Die JPGs landen in Ihrem Downloads-Ordner.",
      ],
    },
  ],

  faqHeading: "Häufige Fragen",
  faqs: [
    {
      q: "Was ist eine HEIC-Datei?",
      a: "HEIC ist Apples Name für ein Foto, das im Dateiformat HEIF nach ISO/IEC 23008-12 abgelegt und mit HEVC komprimiert ist. Es enthält dasselbe Bild wie ein JPG bei ungefähr der halben Dateigröße, und es kann außerdem Dinge aufnehmen, die ein JPG nicht kann: Transparenz, Tiefendaten, 16 Bit Farbtiefe und die mehreren Einzelbilder eines Live Photos.",
    },
    {
      q: "Wie öffne ich eine HEIC-Datei?",
      a: "Auf einem Mac oder einem iPhone tippen Sie zweimal darauf und sie geht auf. Unter Windows 11 öffnet sie sich in Fotos. Unter Windows 10 installieren Sie die kostenlosen HEIF-Bilderweiterungen aus dem Microsoft Store. Wenn nichts davon zur Verfügung steht, können Sie die HEIC-Datei oben auf dieser Seite in ein JPG umwandeln und stattdessen dieses öffnen.",
    },
    {
      q: "Ist das wirklich kostenlos?",
      a: "Ja. Es gibt kein Konto, kein Wasserzeichen, keine Obergrenze für die Zahl der Fotos und keine kostenpflichtige Stufe. Gemacht wird die Seite von foto foto, einer Firma für Fotobücher, und das Einzige, worum sie bittet, ist ein Blick auf ein Fotobuch am Ende.",
    },
    {
      q: "Werden meine Fotos hochgeladen?",
      a: "Nein. Die Umwandlung läuft in Ihrem Browser, mit einem WebAssembly-Build von libheif. Ihre Fotos werden nirgendwohin geschickt, und das können Sie im Netzwerk-Tab der Entwicklerwerkzeuge Ihres Browsers selbst nachprüfen.",
    },
    {
      q: "Geht beim Umwandeln Qualität verloren?",
      a: "Ein wenig, so wie bei jedem JPG. Wir kodieren mit Qualität 92, was bei Fotografien vom Original nicht zu unterscheiden ist. Die HEIC-Datei auf Ihrem Rechner bleibt unangetastet, das Original behalten Sie also immer.",
    },
    {
      q: "Wie viele Fotos kann ich auf einmal umwandeln?",
      a: "So viele, wie Ihr Rechner fasst. Es gibt kein Serverlimit, weil es keinen Server gibt. Mehrere Hundert Fotos auf einmal sind normal. Die Seite wandelt im Hintergrund mehrere gleichzeitig um, damit der Tab bedienbar bleibt.",
    },
    {
      q: "Bleibt das Aufnahmedatum erhalten?",
      a: "Ja. Aufnahmedatum, Kamera, Objektiv und GPS-Position werden aus der HEIC-Datei in das JPG übernommen, die Fotos sortieren sich also weiterhin nach dem Zeitpunkt der Aufnahme.",
    },
    {
      q: "Funktioniert das auf einem iPhone oder iPad?",
      a: "Ja. Öffnen Sie diese Seite in Safari, tippen Sie auf Fotos auswählen und wählen Sie sie aus Ihrer Mediathek. Die umgewandelten Dateien landen in der Dateien-App.",
    },
    {
      q: "Kann ich meinem iPhone das HEIC-Format abgewöhnen?",
      a: "Ja. Öffnen Sie Einstellungen, dann Kamera, dann Formate, und wählen Sie Maximale Kompatibilität. Neue Fotos werden als JPG gespeichert. Die Fotos, die Sie bereits aufgenommen haben, bleiben HEIC, und genau dafür ist diese Seite da.",
    },
    {
      q: "Was passiert mit einem Live Photo?",
      a: "Ein Live Photo ist eine HEIC-Datei mit mehreren Einzelbildern und einem kurzen Video. Der Konverter nimmt das Standbild, also das Foto, das Sie in Ihrer Mediathek sehen. Die Bewegung kommt nicht in das JPG hinüber, weil ein JPG sie nicht aufnehmen kann.",
    },
    {
      q: "Warum ist mein umgewandeltes JPG größer als die HEIC-Datei?",
      a: "Weil HEVC besser komprimiert als JPEG. Dasselbe Bild braucht als JPG meistens ungefähr den doppelten Platz. Das ist der Tausch, den Sie für eine Datei eingehen, die sich überall öffnen lässt.",
    },
    {
      q: "Kann ich HEIC stattdessen in PNG oder PDF umwandeln?",
      a: "Ja. Auf dieser Seite gibt es einen Konverter von HEIC zu PNG und einen von HEIC zu PDF. Beide arbeiten genauso, und beide bleiben auf Ihrem Rechner.",
    },
  ],

  siblingsHeading: "Anderes, das Sie brauchen könnten",
  siblings: [
    { label: "HEIC in PNG umwandeln", page: "png" },
    { label: "HEIC in PDF umwandeln", page: "pdf" },
  ],

  bookHeading: "Gemacht von einer Firma für Fotobücher",
  bookBody:
    "foto foto macht aus einem Ordner voller Fotos ein gedrucktes Buch, ohne Sie um ein Layout zu bitten. Diesen Konverter gibt es, weil die Fotos immer zuerst als HEIC ankommen.",
  bookCta: "Ansehen, was foto foto macht",

  footerNote:
    "Die Umwandlung passiert in Ihrem Browser. Kein Foto, das Sie hier öffnen, wird hochgeladen, gespeichert oder von jemandem gesehen.",
};
