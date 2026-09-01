import type { VariantCopy, VariantId } from "../variant-types";

export const fr: Record<VariantId, VariantCopy> = {
  png: {
    title: "Convertir HEIC en PNG, gratuit, rien n'est envoyé sur un serveur",
    description:
      "Convertissez les photos HEIC de votre iPhone en PNG dans votre navigateur. Rien n'est envoyé sur un serveur, la transparence est conservée, et il n'y a ni compte ni limite de fichiers.",
    h1: "Convertir HEIC en PNG",
    lede:
      "Convertir HEIC en PNG est le bon choix quand vous avez besoin de chaque pixel exactement tel qu'il était, ou quand l'image doit se poser sur un fond transparent. La conversion se fait à l'intérieur de cet onglet, donc les photos ne quittent jamais votre ordinateur.",
    converterOverrides: {
      drop: "Déposez vos photos HEIC ici",
      done: "{count} PNG prêts",
      downloadAll: "Tout télécharger en ZIP",
    },
    whyHeading: "Quand le PNG est le bon format",
    why: [
      "Le PNG enregistre l'image sans rien jeter, donc elle supporte d'être retouchée et réenregistrée autant de fois que vous voulez sans perdre de netteté. Le JPG, lui, perd un peu à chaque fois.",
      "Le PNG garde aussi la transparence, ce qu'un JPG ne sait pas porter du tout. Si l'image a un fond détouré, le PNG est le seul des deux à le conserver.",
      "Cela se paie en taille. Une photographie enregistrée en PNG pèse en général plusieurs fois plus lourd que la même photographie en JPG, et c'est pour cette raison que le JPG reste le choix raisonnable pour les photos de vacances, tandis que le PNG sert aux logos, aux captures d'écran et à tout ce qui a des bords nets.",
    ],
    faqHeading: "Questions fréquentes",
    faqs: [
      {
        q: "Le PNG est-il de meilleure qualité que le JPG ?",
        a: "Pour une photographie, la différence est invisible et le PNG pèse plusieurs fois plus lourd. Le PNG l'emporte quand l'image a des aplats de couleur, des bords nets ou de la transparence, ou quand elle va être retouchée et réenregistrée plusieurs fois.",
      },
      {
        q: "Le PNG garde-t-il la date de prise de vue ?",
        a: "Non, et aucun convertisseur ne sait le faire correctement. Le PNG n'a pas de segment EXIF comme en a le JPG, donc la date de prise de vue n'a nulle part où se loger. Si vous avez besoin de garder la date, convertissez plutôt en JPG.",
      },
      {
        q: "La transparence est-elle conservée ?",
        a: "Oui. Si le HEIC contient un canal alpha, le PNG le garde.",
      },
      {
        q: "Mes photos partent-elles quelque part ?",
        a: "Non. Le décodage et le réencodage ont lieu tous les deux dans votre navigateur, et vous pouvez le vérifier dans l'onglet réseau des outils de développement de votre navigateur.",
      },
    ],
    backHeading: "Vous cherchiez un autre format ?",
    backLabel: "HEIC en JPG",
    otherLabel: "HEIC en PDF",
  },

  pdf: {
    title: "Convertir HEIC en PDF, gratuit, rien n'est envoyé sur un serveur",
    description:
      "Réunissez les photos HEIC de votre iPhone dans un seul PDF, dans votre navigateur. Rien n'est envoyé sur un serveur, il n'y a pas de compte, et les pages sortent dans l'ordre où vous les avez choisies.",
    h1: "Convertir HEIC en PDF",
    lede:
      "Convertir HEIC en PDF vous donne une photo par page, dans l'ordre où vous les avez choisies, dans un seul fichier que vous pouvez envoyer par mail ou imprimer. Le document entier est assemblé à l'intérieur de cet onglet, donc les photos ne quittent jamais votre ordinateur.",
    converterOverrides: {
      drop: "Déposez vos photos HEIC ici",
      done: "{count} pages prêtes",
      downloadAll: "Télécharger le PDF",
    },
    whyHeading: "Ce que vous obtenez",
    why: [
      "Chaque photo devient une page, à la taille de la photo plutôt que forcée dans un A4, donc rien n'est recadré et rien ne flotte au milieu d'une page blanche.",
      "Les pages gardent l'ordre des fichiers, ce qui, pour des photos sorties directement d'un téléphone, revient à l'ordre dans lequel elles ont été prises.",
      "Les images à l'intérieur du PDF sont des JPEG en qualité 92, et c'est pour cette raison que le fichier reste assez léger pour être envoyé par mail.",
    ],
    faqHeading: "Questions fréquentes",
    faqs: [
      {
        q: "Est-ce que j'obtiens un seul PDF ou un par photo ?",
        a: "Un seul PDF qui les contient toutes, une photo par page, dans l'ordre où vous les avez sélectionnées.",
      },
      {
        q: "Quelle taille de page est utilisée ?",
        a: "Chaque page fait exactement la taille de sa photo, donc une photo en portrait donne une page en portrait et rien n'est recadré. Les imprimantes la mettent ensuite à l'échelle du papier que vous utilisez.",
      },
      {
        q: "Y a-t-il une limite au nombre de photos ?",
        a: "Autant que votre ordinateur peut en tenir. Il n'y a pas de limite de serveur puisqu'il n'y a pas de serveur. Les très grandes séries prennent plus de temps, parce que c'est votre machine qui fait le travail.",
      },
      {
        q: "Mes photos partent-elles quelque part ?",
        a: "Non. Les photos sont décodées et le PDF est assemblé dans votre navigateur, et vous pouvez le vérifier dans l'onglet réseau des outils de développement de votre navigateur.",
      },
    ],
    backHeading: "Vous cherchiez un autre format ?",
    backLabel: "HEIC en JPG",
    otherLabel: "HEIC en PNG",
  },
};
