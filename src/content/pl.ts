import type { HomeCopy } from "./types";

export const pl: HomeCopy = {
  title: "HEIC na JPG za darmo. Zdjęcia nie opuszczają komputera",
  description:
    "Zamień HEIC na JPG w przeglądarce, prosto ze zdjęć z iPhone'a. Nic nie jest wysyłane na serwer, oryginalna data wykonania zdjęcia zostaje zachowana, nie ma konta ani limitu plików.",
  h1: "HEIC na JPG",
  lede:
    "Przeciągnij zdjęcia tutaj i zamień HEIC na JPG. iPhone zapisuje je w formacie HEIC, którego połowa programów na świecie po prostu nie otwiera. Niektórzy piszą HEIC na JPEG, chodzi o to samo. Konwersja odbywa się wewnątrz tej karty przeglądarki, więc zdjęcia nie opuszczają twojego komputera.",

  tagline: "HEIC wchodzi, JPG wychodzi.",

  stage: {
    idle: "Dodaj zdjęcia",
    idleHint: "HEIC wchodzi, JPG wychodzi. Nic nie opuszcza twojej przeglądarki.",
    converting: "Wydrukowano {done} z {total}",
    failed: "Nic z tego nie wyszło",
    wrongFiles: "To nie są pliki HEIC",
    countOne: "Jedno zdjęcie, wydrukowane",
    countMany: "Wydrukowane zdjęcia: {count}",
    save: "Pobierz {count} JPG jako ZIP",
    saveOne: "Pobierz plik JPG",
    again: "Od nowa",
    bookTitle: "Darmowe narzędzie od ",
    bookBody: "Chcesz nas wesprzeć? Spraw sobie piękną fotoksiążkę.",
  },

  footerLine: "Konwertuje też do {png} i {pdf}. {read}, jak to działa i dlaczego nic nie opuszcza Twojego komputera.",
  readLabel: "Przeczytaj",
  aboutHeading: "O tym narzędziu",
  backLabel: "Wróć do konwertera",

  howHeading: "Jak zmienić HEIC na JPG",
  steps: [
    {
      name: "Wybierz zdjęcia",
      text: "Upuść pliki HEIC w dowolnym miejscu strony albo kliknij stronę i wskaż je.",
    },
    {
      name: "Jedno lub wiele",
      text: "Jedno zdjęcie albo kilkaset, nie ma limitu.",
    },
    {
      name: "Patrz, jak ściana się zapełnia",
      text: "Każde zdjęcie konwertuje się wewnątrz przeglądarki i pojawia się w galerii, gdy tylko powstaje jego JPEG, a pasek postępu liczy do stu.",
    },
    {
      name: "Pobierz",
      text: "Kliknij pojedyncze zdjęcie, żeby je zapisać, albo weź cały komplet w jednym pliku ZIP.",
    },
  ],

  sections: [
    {
      id: "why",
      heading: "Dlaczego zdjęcia są w formacie HEIC",
      body: [
        "Od iOS 11 iPhone zapisuje zdjęcia jako HEIC zamiast JPG. Ten format mieści to samo zdjęcie w mniej więcej połowie miejsca, dlatego Apple się na niego przesiadło i dlatego w telefonie mieści się teraz więcej zdjęć niż kiedyś.",
        "Kłopot zaczyna się wtedy, kiedy zdjęcie wychodzi z telefonu. Starsze wersje Windowsa, sporo formularzy internetowych, zakłady fotograficzne i długi ogon zwykłych programów wciąż oczekują pliku JPG i po prostu go odrzucają. Konwersja nie ma nic wspólnego z jakością, chodzi o to, żeby reszta świata nadążyła.",
        "W praktyce wygląda to tak: wysyłasz zdjęcie do urzędu albo na uczelnię i formularz odrzuca plik. Drukujesz odbitki w zakładzie fotograficznym i maszyna nie widzi połowy wakacji. Wrzucasz ogłoszenie i portal prosi o JPG. Za każdym razem rozwiązaniem jest to samo: zamień HEIC na JPG i po sprawie. Ta strona robi to hurtowo, bez instalowania czegokolwiek i bez wysyłania zdjęć na czyjś serwer.",
      ],
    },
    {
      id: "local",
      heading: "Nic stąd nie jest wysyłane",
      body: [
        "Każdy inny konwerter z pierwszej strony Google wysyła twoje zdjęcia na serwer, tam je przetwarza i odsyła z powrotem. To rozsądny sposób na zbudowanie strony i dziwny sposób na obchodzenie się z czyimiś wakacjami.",
        "Ta strona dekoduje HEIC w przeglądarce, korzystając z biblioteki libheif skompilowanej do WebAssembly. Otwórz kartę Sieć w narzędziach programistycznych przeglądarki, przekonwertuj zdjęcie i nie zobaczysz ani jednego żądania, które gdziekolwiek by je niosło. Nie ma potem czego kasować, bo żadna kopia nigdy nie powstała.",
      ],
    },
    {
      id: "date",
      heading: "Zdjęcia zachowują swoją datę",
      body: [
        "Większość konwerterów oddaje plik JPG ostemplowany chwilą samej konwersji. Wrzuć taki folder do dowolnej aplikacji ze zdjęciami, a dwutygodniowy wyjazd skurczy się do jednego popołudnia.",
        "Ten czyta z oryginalnego pliku datę wykonania zdjęcia, aparat, obiektyw i miejsce, i zapisuje to wszystko w pliku JPG. Zdjęcia układają się tak, jak były robione.",
      ],
    },
  ],

  specHeading: "HEIC i JPG obok siebie",
  specIntro:
    "Oba mieszczą jedno zdjęcie. Prawie wszystko poza tym mają inne, i dlatego jeden z nich bywa odrzucany.",
  specColumns: { label: "", heic: "HEIC", jpg: "JPG" },
  specRows: [
    { label: "Pełna nazwa", heic: "High Efficiency Image Container", jpg: "JPEG File Interchange Format" },
    { label: "Norma", heic: "ISO/IEC 23008-12 (HEIF)", jpg: "ISO/IEC 10918" },
    { label: "Kompresja", heic: "HEVC (H.265)", jpg: "Dyskretna transformata kosinusowa" },
    { label: "Typ MIME", heic: "image/heic", jpg: "image/jpeg" },
    { label: "Rozszerzenie pliku", heic: ".heic, .heif", jpg: ".jpg, .jpeg" },
    { label: "Apple UTI", heic: "public.heic", jpg: "public.jpeg" },
    { label: "Głębia koloru", heic: "Do 16 bitów", jpg: "8 bitów" },
    { label: "Typowy rozmiar", heic: "Około połowy pliku JPG", jpg: "Punkt odniesienia dla wszystkich" },
    { label: "Przezroczystość", heic: "Tak", jpg: "Nie" },
    { label: "Kilka obrazów w jednym pliku", heic: "Tak, w tym Live Photos i serie zdjęć", jpg: "Nie" },
    { label: "Dane o głębi i o edycji", heic: "Tak", jpg: "Nie" },
    { label: "Otwiera się wszędzie", heic: "Nie", jpg: "Tak, od jakichś trzydziestu lat" },
    { label: "Wydany", heic: "2015, przyjęty przez Apple w 2017", jpg: "1992" },
  ],

  platformsHeading: "Jeśli wolisz obejść się bez strony internetowej",
  platformsIntro:
    "Każdy system operacyjny potrafi to zrobić sam. Jest wolniej i gubi się przy całej paczce, ale działa bez internetu i warto o tym wiedzieć.",
  platforms: [
    {
      id: "iphone",
      name: "Na iPhonie lub iPadzie",
      intro: "Telefon odda pliki JPG, jeśli go o to poprosisz, i potrafi w ogóle przestać robić pliki HEIC.",
      steps: [
        "Żeby przekonwertować jedno zdjęcie: otwórz je w Zdjęciach, dotknij przycisku Udostępnij, wybierz Kopiuj zdjęcie, a potem wklej je w Plikach albo w Mailu. Trafi tam jako JPG.",
        "Żeby nowe zdjęcia przestały być HEIC: otwórz Ustawienia, potem Aparat, potem Formaty i wybierz Najbardziej zgodne.",
        "Żeby na komputer trafiały pliki JPG: otwórz Ustawienia, potem Zdjęcia, przewiń do Przesyłaj na Maca lub PC i wybierz Automatycznie.",
      ],
    },
    {
      id: "windows",
      name: "Na Windowsie",
      intro: "Windows 11 otwiera HEIC od razu. Windows 10 zwykle potrzebuje najpierw kodeka ze sklepu Microsoft Store.",
      steps: [
        "Jeśli plik się nie otwiera, zainstaluj darmowe Rozszerzenia obrazów HEIF ze sklepu Microsoft Store.",
        "Kliknij zdjęcie prawym przyciskiem myszy, wybierz Otwórz za pomocą, potem Zdjęcia.",
        "Kliknij trzy kropki, wybierz Zapisz jako i jako typ pliku wskaż JPG.",
        "Windows nie ma wbudowanej konwersji zbiorczej, więc do całego folderu zdjęć użyj konwertera na górze tej strony.",
      ],
    },
    {
      id: "mac",
      name: "Na Macu",
      intro: "Podgląd przekonwertuje jedno zdjęcie albo cały folder bez instalowania czegokolwiek.",
      steps: [
        "Zaznacz zdjęcia w Finderze, kliknij prawym przyciskiem myszy i wybierz Szybkie czynności, potem Konwertuj obraz.",
        "Wybierz JPEG, wskaż rozmiar i kliknij Konwertuj na JPEG.",
        "Albo otwórz zdjęcie w Podglądzie i wybierz Plik, potem Eksportuj, i ustaw format na JPEG.",
      ],
    },
    {
      id: "android",
      name: "Na Androidzie",
      intro: "Android odczytuje HEIC na większości nowszych telefonów, ale sam go nie konwertuje.",
      steps: [
        "Otwórz tę stronę w Chrome, dotknij Wybierz zdjęcia i wskaż pliki.",
        "Konwersja idzie na samym telefonie, więc działa na danych komórkowych i zupełnie bez zasięgu.",
        "Pliki JPG zapisują się w folderze Pobrane.",
      ],
    },
  ],

  faqHeading: "Częste pytania",
  faqs: [
    {
      q: "Co to jest plik HEIC?",
      a: "HEIC to nazwa, którą Apple daje zdjęciu zapisanemu w kontenerze HEIF opisanym normą ISO/IEC 23008-12 i skompresowanemu przez HEVC. Mieści ten sam obraz co JPG w mniej więcej połowie rozmiaru pliku, a do tego potrafi przechować rzeczy, których JPG nie uniesie: przezroczystość, dane o głębi, 16-bitowy kolor i kilka klatek Live Photo.",
    },
    {
      q: "Jak otworzyć plik HEIC?",
      a: "Na Macu i na iPhonie wystarczy kliknąć go dwa razy i się otwiera. W Windows 11 otwiera się w aplikacji Zdjęcia. W Windows 10 zainstaluj darmowe Rozszerzenia obrazów HEIF ze sklepu Microsoft Store. Jeśli nic z tego nie jest pod ręką, zamień plik na JPG na górze tej strony i otwórz JPG.",
    },
    {
      q: "Czy to naprawdę jest za darmo?",
      a: "Tak. Nie ma konta, nie ma znaku wodnego, nie ma limitu konwertowanych zdjęć i nie ma płatnej wersji. Robi to foto foto, firma od fotoksiążek, i prosi tylko o to, żeby na koniec rzucić okiem na fotoksiążkę.",
    },
    {
      q: "Czy moje zdjęcia są gdzieś wysyłane?",
      a: "Nie. Konwersja działa w twojej przeglądarce, na bibliotece libheif skompilowanej do WebAssembly. Twoje zdjęcia nigdzie nie trafiają, co możesz sprawdzić samodzielnie w karcie Sieć w narzędziach programistycznych przeglądarki.",
    },
    {
      q: "Czy konwersja pogarsza jakość?",
      a: "Trochę, tak samo jak każdy plik JPG. Zapisujemy z jakością 92, która dla zdjęć jest wzrokowo nie do odróżnienia od oryginału. Plik HEIC na twoim komputerze zostaje nietknięty, więc oryginał zawsze zostaje przy tobie.",
    },
    {
      q: "Ile zdjęć mogę przekonwertować naraz?",
      a: "Tyle, ile udźwignie twój komputer. Nie ma limitu serwera, bo nie ma serwera. Kilkaset zdjęć naraz to normalna sytuacja; strona konwertuje kilka jednocześnie w tle, żeby karta się nie zacinała.",
    },
    {
      q: "Czy zachowuje datę wykonania zdjęcia?",
      a: "Tak. Data wykonania zdjęcia, aparat, obiektyw i pozycja GPS są przepisywane z pliku HEIC do JPG, więc zdjęcia dalej układają się według momentu, w którym powstały.",
    },
    {
      q: "Czy działa na iPhonie lub iPadzie?",
      a: "Tak. Otwórz tę stronę w Safari, dotknij Wybierz zdjęcia i wskaż je w bibliotece. Przekonwertowane pliki zapisują się w aplikacji Pliki.",
    },
    {
      q: "Czy mogę sprawić, żeby iPhone przestał robić pliki HEIC?",
      a: "Tak. Otwórz Ustawienia, potem Aparat, potem Formaty i wybierz Najbardziej zgodne. Nowe zdjęcia zapisują się jako JPG. Zdjęcia już zrobione zostają w HEIC, i po to jest ta strona.",
    },
    {
      q: "Co się dzieje z Live Photo?",
      a: "Live Photo to plik HEIC z kilkoma klatkami i krótkim filmem. Konwerter bierze klatkę nieruchomą, czyli to zdjęcie, które widzisz w bibliotece. Ruch nie przechodzi do JPG, bo JPG nie potrafi go przechować.",
    },
    {
      q: "Dlaczego przekonwertowany JPG jest większy niż HEIC?",
      a: "Bo HEVC kompresuje lepiej niż JPEG. Ten sam obraz potrzebuje w JPG zwykle około dwa razy więcej miejsca. To jest cena, którą płacisz za plik otwierający się wszędzie.",
    },
    {
      q: "Czy mogę zamienić HEIC na PNG albo na PDF?",
      a: "Tak. Na tej stronie jest konwerter HEIC na PNG i konwerter HEIC na PDF, oba działają tak samo i oba zostają na twoim komputerze.",
    },
  ],

  siblingsHeading: "Inne rzeczy, które mogą się przydać",
  siblings: [
    { label: "HEIC na PNG", page: "png" },
    { label: "HEIC na PDF", page: "pdf" },
  ],

  bookHeading: "Zrobione przez firmę od fotoksiążek",
  bookBody:
    "foto foto zamienia folder ze zdjęciami w drukowaną książkę, nie każąc niczego układać. Ten konwerter istnieje, bo zdjęcia zawsze przychodzą najpierw jako HEIC.",
  bookCta: "Zobacz, co robi foto foto",

  footerNote:
    "Konwersja odbywa się w twojej przeglądarce. Żadne zdjęcie, które tu otworzysz, nie jest wysyłane, przechowywane ani przez nikogo oglądane.",
};
