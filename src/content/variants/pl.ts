import type { VariantCopy, VariantId } from "../variant-types";

export const pl: Record<VariantId, VariantCopy> = {
  png: {
    title: "HEIC na PNG za darmo. Zdjęcia nie opuszczają komputera",
    description:
      "Zamień HEIC na PNG w przeglądarce, prosto ze zdjęć z iPhone'a. Nic nie jest wysyłane na serwer, nie ma konta ani limitu plików, a przezroczystość zostaje zachowana.",
    h1: "HEIC na PNG",
    lede:
      "Przeciągnij zdjęcia tutaj i zamień HEIC na PNG. PNG bierze się wtedy, kiedy każdy piksel ma zostać dokładnie taki, jaki był, albo kiedy obraz ma leżeć na przezroczystym tle. Konwersja odbywa się wewnątrz tej karty przeglądarki, więc zdjęcia nie opuszczają twojego komputera.",
    converterOverrides: {
      drop: "Przeciągnij tutaj zdjęcia HEIC",
      done: "Gotowe pliki PNG: {count}",
      downloadAll: "Pobierz wszystko jako ZIP",
    },
    whyHeading: "Kiedy PNG jest właściwym wyborem",
    why: [
      "PNG zapisuje obraz, nie wyrzucając z niego niczego, więc znosi otwieranie, poprawianie i zapisywanie raz za razem, nie tracąc przy tym ostrości. JPG za każdym razem oddaje trochę jakości.",
      "PNG przechowuje też przezroczystość, której JPG nie uniesie w ogóle. Jeśli zdjęcie ma wycięte tło, z tych dwóch formatów tylko PNG je zachowa.",
      "Płaci się za to rozmiarem. Zdjęcie zapisane jako PNG jest zwykle kilka razy większe niż to samo zdjęcie w JPG, i dlatego JPG zostaje rozsądnym domyślnym wyborem dla zdjęć z wakacji, a PNG bierze się do logotypów, zrzutów ekranu i wszystkiego, co ma twarde krawędzie.",
    ],
    faqHeading: "Częste pytania",
    faqs: [
      {
        q: "Czy PNG ma lepszą jakość niż JPG?",
        a: "Przy zdjęciu różnica jest niewidoczna, a plik PNG jest kilka razy większy. PNG wygrywa wtedy, kiedy obraz ma płaskie kolory, ostre krawędzie albo przezroczystość, albo kiedy będzie wielokrotnie poprawiany i zapisywany od nowa.",
      },
      {
        q: "Czy PNG zachowuje datę wykonania zdjęcia?",
        a: "Nie, i żaden konwerter nie zrobi tego porządnie. PNG nie ma segmentu EXIF, który JPG ma, więc data wykonania zdjęcia nie ma się w nim gdzie zmieścić. Jeśli data ma zostać zachowana, zamień zdjęcia na JPG.",
      },
      {
        q: "Czy zachowuje przezroczystość?",
        a: "Tak. Jeśli plik HEIC ma kanał alfa, PNG go zachowuje.",
      },
      {
        q: "Czy moje zdjęcia są gdzieś wysyłane?",
        a: "Nie. Dekodowanie i ponowne zapisanie dzieją się w twojej przeglądarce, co możesz sprawdzić samodzielnie w karcie Sieć w narzędziach programistycznych przeglądarki.",
      },
    ],
    backHeading: "Potrzebujesz innego formatu?",
    backLabel: "HEIC na JPG",
    otherLabel: "HEIC na PDF",
  },

  pdf: {
    title: "HEIC na PDF za darmo. Zdjęcia nie opuszczają komputera",
    description:
      "Zamień HEIC na PDF w przeglądarce, prosto ze zdjęć z iPhone'a. Nic nie jest wysyłane na serwer, nie ma konta, a strony wychodzą w tej samej kolejności, w jakiej wybierasz zdjęcia.",
    h1: "HEIC na PDF",
    lede:
      "Przeciągnij zdjęcia tutaj i zamień HEIC na PDF. Jedno zdjęcie na stronę, w tej samej kolejności, w jakiej je wybierasz, w jednym pliku PDF, który wyślesz mailem albo wydrukujesz. Cały dokument powstaje wewnątrz tej karty przeglądarki, więc zdjęcia nie opuszczają twojego komputera.",
    converterOverrides: {
      drop: "Przeciągnij tutaj zdjęcia HEIC",
      done: "Gotowe strony: {count}",
      downloadAll: "Pobierz plik PDF",
    },
    whyHeading: "Co z tego wychodzi",
    why: [
      "Każde zdjęcie staje się jedną stroną, a strona ma rozmiar tego zdjęcia, zamiast być wciśnięta w A4. Nic nie zostaje przycięte i nic nie pływa pośrodku bieli.",
      "Strony zachowują kolejność, w jakiej były pliki, co przy zdjęciach prosto z telefonu oznacza kolejność, w jakiej powstawały.",
      "Obrazy w środku pliku PDF to pliki JPEG zapisane z jakością 92, i dlatego dokument zostaje na tyle mały, żeby dało się go wysłać mailem.",
    ],
    faqHeading: "Częste pytania",
    faqs: [
      {
        q: "Dostaję jeden plik PDF czy jeden na każde zdjęcie?",
        a: "Jeden plik PDF ze wszystkimi zdjęciami, po jednym zdjęciu na stronę, w tej samej kolejności, w jakiej je wybierasz.",
      },
      {
        q: "Jaki rozmiar mają strony?",
        a: "Każda strona ma dokładnie rozmiar swojego zdjęcia, więc zdjęcie pionowe daje stronę pionową i nic nie zostaje przycięte. Drukarka przeskaluje to do papieru, na którym drukujesz.",
      },
      {
        q: "Czy jest limit liczby zdjęć?",
        a: "Tylko tyle, ile udźwignie twój komputer. Nie ma limitu serwera, bo nie ma serwera. Bardzo duże komplety idą dłużej, bo pracuje przy nich twoja własna maszyna.",
      },
      {
        q: "Czy moje zdjęcia są gdzieś wysyłane?",
        a: "Nie. Zdjęcia są dekodowane, a plik PDF składany w twojej przeglądarce, co możesz sprawdzić samodzielnie w karcie Sieć w narzędziach programistycznych przeglądarki.",
      },
    ],
    backHeading: "Potrzebujesz innego formatu?",
    backLabel: "HEIC na JPG",
    otherLabel: "HEIC na PNG",
  },
};
