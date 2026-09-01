import type { VariantCopy, VariantId } from "../variant-types";

export const nl: Record<VariantId, VariantCopy> = {
  png: {
    title: "HEIC naar PNG omzetten, gratis en zonder uploaden",
    description:
      "Zet iPhone-foto's van HEIC naar PNG om in je eigen browser. Er wordt niets geüpload, er is geen account en geen bestandslimiet, en transparantie blijft behouden.",
    h1: "HEIC naar PNG",
    lede:
      "Je zet HEIC naar PNG om als elke pixel precies moet blijven zoals hij was, of als de afbeelding op een doorzichtige achtergrond moet staan. Het omzetten gebeurt in dit browsertabblad, dus je foto's verlaten je computer niet.",
    converterOverrides: {
      drop: "Sleep je HEIC-foto's hierheen",
      done: "{count} PNG's klaar",
      downloadAll: "Alles downloaden als ZIP",
    },
    whyHeading: "Wanneer PNG het juiste antwoord is",
    why: [
      "PNG bewaart de afbeelding zonder er iets uit weg te gooien, dus hij blijft scherp hoe vaak je hem ook bewerkt en opnieuw opslaat. Bij JPG gaat er elke keer een beetje verloren.",
      "PNG houdt ook transparantie vast, en dat kan een JPG helemaal niet. Heeft de foto een uitgeknipte achtergrond, dan is PNG van de twee de enige die hem bewaart.",
      "De prijs is de bestandsgrootte. Een foto als PNG is meestal een paar keer zo groot als dezelfde foto als JPG, en daarom blijft JPG de verstandige keuze voor vakantiefoto's en is PNG er voor logo's, schermafbeeldingen en alles met een harde rand.",
    ],
    faqHeading: "Veelgestelde vragen",
    faqs: [
      {
        q: "Is PNG van betere kwaliteit dan JPG?",
        a: "Bij een foto zie je het verschil niet en is de PNG een paar keer zo groot. PNG wint als een afbeelding vlakke kleuren, scherpe randen of transparantie heeft, of als hij steeds opnieuw bewerkt en opgeslagen wordt.",
      },
      {
        q: "Blijft de opnamedatum in de PNG staan?",
        a: "Nee, en geen enkele converter kan dat netjes doen. PNG heeft geen EXIF-segment zoals JPG dat heeft, dus de opnamedatum heeft er nergens plek. Heb je die datum nodig, zet de foto's dan om naar JPG.",
      },
      {
        q: "Blijft transparantie behouden?",
        a: "Ja. Zit er een alfakanaal in het HEIC-bestand, dan houdt de PNG het.",
      },
      {
        q: "Worden mijn foto's geüpload?",
        a: "Nee. Het decoderen en het opnieuw coderen gebeuren allebei in je browser, en dat kun je zelf nakijken in het netwerktabblad van de ontwikkelaarstools van je browser.",
      },
    ],
    backHeading: "Zocht je een ander bestandstype?",
    backLabel: "HEIC naar JPG",
    otherLabel: "HEIC naar PDF",
  },

  pdf: {
    title: "HEIC naar PDF omzetten, gratis en zonder uploaden",
    description:
      "Maak van iPhone-foto's in HEIC één PDF in je eigen browser. Er wordt niets geüpload, er is geen account, en de pagina's staan in de volgorde die je gekozen hebt.",
    h1: "HEIC naar PDF",
    lede:
      "Je zet HEIC naar PDF om als alle foto's in één bestand moeten zitten dat je kunt mailen of afdrukken. Elke foto krijgt een eigen pagina, in de volgorde die je gekozen hebt. Het hele document wordt in dit browsertabblad in elkaar gezet, dus je foto's verlaten je computer niet.",
    converterOverrides: {
      drop: "Sleep je HEIC-foto's hierheen",
      done: "{count} pagina's klaar",
      downloadAll: "De PDF downloaden",
    },
    whyHeading: "Wat je krijgt",
    why: [
      "Elke foto wordt één pagina, en die pagina heeft het formaat van de foto zelf in plaats van A4. Er wordt dus niets bijgesneden en er blijft geen zee van wit over.",
      "De pagina's houden de volgorde van de bestanden aan, en bij foto's rechtstreeks van een telefoon is dat de volgorde waarin je ze gemaakt hebt.",
      "De afbeeldingen in de PDF zijn JPEG's op kwaliteit 92, en daarom blijft het bestand klein genoeg om te mailen.",
    ],
    faqHeading: "Veelgestelde vragen",
    faqs: [
      {
        q: "Krijg ik één PDF of één per foto?",
        a: "Eén PDF met alle foto's erin, elke foto op een eigen pagina, in de volgorde die je gekozen hebt.",
      },
      {
        q: "Welk paginaformaat wordt er gebruikt?",
        a: "Elke pagina is precies zo groot als de foto die erop staat, dus een staande foto geeft een staande pagina en er wordt niets bijgesneden. Een printer schaalt het vanzelf naar het papier dat je gebruikt.",
      },
      {
        q: "Zit er een limiet op het aantal foto's?",
        a: "Alleen wat je computer aankan. Er is geen serverlimiet, want er is geen server. Een heel grote stapel duurt langer, omdat je eigen machine het werk doet.",
      },
      {
        q: "Worden mijn foto's geüpload?",
        a: "Nee. De foto's worden in je browser gedecodeerd en de PDF wordt daar in elkaar gezet, en dat kun je zelf nakijken in het netwerktabblad van de ontwikkelaarstools van je browser.",
      },
    ],
    backHeading: "Zocht je een ander bestandstype?",
    backLabel: "HEIC naar JPG",
    otherLabel: "HEIC naar PNG",
  },
};
