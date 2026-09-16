// Contenu des articles de la rubrique Ressources.
// Source de vérité partagée : la liste (/ressources) et les pages d'article
// (/ressources/[slug]) lisent toutes les deux ce fichier.
//
// Le corps est structuré en blocs (données, pas de JSX) pour rester propre et
// éviter les soucis d'échappement. Le gras s'écrit avec **...** dans les textes.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "steps"; ordered?: boolean; items: { title: string; text: string }[] };

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  excerpt: string;
  description: string; // meta description
  readingTime: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "pourquoi-process-avant-outils",
    title: "Pourquoi vos process doivent précéder vos outils",
    category: "Process",
    date: "2025-01-15",
    readingTime: "6 min",
    excerpt:
      "Trop d'entreprises investissent dans des logiciels avant d'avoir clarifié leurs méthodes de travail. Résultat : du chaos digitalisé.",
    description:
      "Pourquoi acheter un logiciel avant de clarifier ses process amplifie le désordre — et la bonne séquence pour outiller une PME : cartographier, simplifier, puis outiller.",
    body: [
      {
        type: "p",
        text: "La plupart des dirigeants qui nous appellent viennent d'investir dans un logiciel censé « remettre de l'ordre ». Quelques mois plus tard, l'équipe l'a contourné, les tableurs sont revenus, et le désordre est intact — désormais payé par abonnement. Le problème n'est presque jamais l'outil. C'est l'ordre dans lequel on s'y est pris.",
      },
      { type: "h2", text: "Le symptôme : le logiciel qui n'a rien changé" },
      {
        type: "p",
        text: "Vous reconnaissez la scène : un CRM adopté à moitié, un ERP dont on n'utilise que 10 %, un outil de gestion de projet où personne ne met à jour les tâches. On accuse l'outil, on en cherche un autre. Mais si trois logiciels d'affilée ont échoué au même endroit, le point commun n'est pas l'outil.",
      },
      {
        type: "p",
        text: "Un logiciel ne fait qu'une chose : il exécute plus vite une manière de travailler. Si cette manière n'est pas claire, il exécute le flou plus vite.",
      },
      { type: "h2", text: "Un outil n'invente pas l'ordre — il l'amplifie" },
      {
        type: "p",
        text: "**Un bon outil posé sur un mauvais process accélère le désordre.** Il ne le corrige pas. Là où deux personnes se renvoyaient un dossier sans savoir qui décide, l'outil leur enverra désormais des notifications à toutes les deux. Le blocage devient juste plus rapide — et mieux documenté.",
      },
      {
        type: "p",
        text: "C'est pour cela qu'on le répète chez Confer : on ne digitalise pas le chaos. Graver une zone floue dans un logiciel, c'est la figer — et la rendre plus difficile à changer, parce qu'« on a payé pour ça ».",
      },
      { type: "h2", text: "Ce qu'est vraiment un process (et ce qu'il n'est pas)" },
      {
        type: "p",
        text: "Un process n'est pas un diagramme rangé dans un classeur que personne ne rouvre. C'est **une décision répétable** : qui fait quoi, à partir de quelle information, pour produire quel résultat, et à qui il le transmet ensuite. Un vrai process répond à quatre questions simples :",
      },
      {
        type: "ul",
        items: [
          "**Le déclencheur** : qu'est-ce qui lance l'action ?",
          "**Le responsable** : qui décide — une seule personne, pas « l'équipe » ?",
          "**L'entrée et la sortie** : quelle information entre, quel livrable sort ?",
          "**Le passage de relais** : à qui, et comment sait-on que c'est fait ?",
        ],
      },
      {
        type: "p",
        text: "Tant que ces quatre réponses ne sont pas nettes, aucun logiciel ne les inventera à votre place.",
      },
      { type: "h2", text: "La bonne séquence : cartographier, simplifier, puis outiller" },
      {
        type: "steps",
        ordered: true,
        items: [
          {
            title: "Cartographier le réel",
            text: "Décrivez le process tel qu'il se passe vraiment — pas tel qu'il devrait. Suivez un dossier de bout en bout et notez chaque main qui le touche, chaque attente, chaque ressaisie.",
          },
          {
            title: "Simplifier avant tout",
            text: "Supprimez les étapes qui n'ajoutent rien, fusionnez les validations en double, tranchez les « ça dépend ». C'est là que se gagnent les vrais délais — pas dans le logiciel.",
          },
          {
            title: "Outiller ce qui reste",
            text: "Une fois le process clair et allégé, choisissez l'outil qui l'épouse. Le cahier des charges s'écrit tout seul : vous savez exactement ce que l'outil doit faire, parce que vous savez déjà comment vous travaillez.",
          },
        ],
      },
      { type: "h2", text: "Cinq signes que vous n'êtes pas prêt à outiller" },
      {
        type: "ul",
        items: [
          "Vous ne savez pas dire, en une phrase, qui décide à chaque étape.",
          "Deux personnes décrivent le même process différemment.",
          "La moitié des cas sont « des exceptions ».",
          "Vous cherchez un outil pour « forcer » l'équipe à travailler autrement.",
          "Personne n'a suivi un dossier réel de bout en bout depuis des mois.",
        ],
      },
      {
        type: "p",
        text: "Si trois de ces signes vous parlent, l'argent d'un nouvel abonnement serait mieux investi dans une demi-journée à clarifier le process. L'outil viendra après — et il tiendra.",
      },
    ],
  },
  {
    slug: "questions-audit-pme",
    title: "Les 10 questions qu'on pose lors d'un audit PME",
    category: "Méthode",
    date: "2025-01-08",
    readingTime: "7 min",
    excerpt:
      "Un aperçu de notre méthode de diagnostic : les questions inconfortables qui révèlent les vrais blocages.",
    description:
      "Les dix questions d'un audit opérationnel de PME : simples, rarement confortables, elles révèlent les vrais blocages que les tableaux de bord ne montrent pas.",
    body: [
      {
        type: "p",
        text: "Un audit ne sert à rien s'il ne pose que des questions confortables. Les vrais blocages d'une PME ne sont pas dans les chiffres : ils sont dans ce que tout le monde sait et que personne ne dit. Voici dix questions que nous posons en diagnostic. Elles paraissent simples ; elles sont rarement agréables.",
      },
      {
        type: "steps",
        ordered: true,
        items: [
          {
            title: "Si votre meilleur collaborateur partait demain, que perdriez-vous exactement ?",
            text: "La réponse révèle le savoir qui n'existe que dans une tête. C'est votre risque le plus cher et le moins assuré.",
          },
          {
            title: "Quelle tâche refaites-vous parce qu'elle a été mal faite la première fois ?",
            text: "La reprise est un coût invisible. Partout où l'on « repasse derrière », il y a un process à corriger à la source.",
          },
          {
            title: "Où l'information s'arrête-t-elle ?",
            text: "Cherchez l'endroit où un dossier attend — sur un bureau, dans une boîte mail, dans la tête de quelqu'un. Les délais vivent dans ces attentes, pas dans le travail lui-même.",
          },
          {
            title: "Quelle décision attend toujours la même personne ?",
            text: "Un goulot d'étranglement humain plafonne toute l'entreprise à la disponibilité d'un seul agenda — souvent celui du dirigeant.",
          },
          {
            title: "Qu'est-ce qui n'est écrit nulle part ?",
            text: "Les règles orales sont fragiles : elles changent selon l'humeur, se perdent au départ d'un salarié, et rendent la délégation impossible.",
          },
          {
            title: "Combien de temps entre la commande du client et le moment où vous êtes payé ?",
            text: "Ce délai de bout en bout mesure la santé réelle de l'exploitation — et la trésorerie, souvent mieux que n'importe quel tableau.",
          },
          {
            title: "Quel outil avez-vous acheté et n'utilisez pas ?",
            text: "Un logiciel abandonné n'est pas un échec technique : c'est le symptôme d'un process qui n'était pas prêt. On y revient toujours.",
          },
          {
            title: "Quelle règle suivez-vous sans savoir pourquoi ?",
            text: "« On a toujours fait comme ça » cache souvent une contrainte disparue depuis longtemps — et une simplification à portée de main.",
          },
          {
            title: "Qu'est-ce qui vous réveille la nuit ?",
            text: "Le dirigeant sait déjà où ça coince. La question sert à le dire à voix haute, pour qu'on puisse enfin s'y attaquer.",
          },
          {
            title: "Si vous deviez arrêter une activité, laquelle ne manquerait à personne ?",
            text: "Elle mobilise pourtant du temps et de l'énergie. L'identifier, c'est libérer des ressources pour ce qui compte vraiment.",
          },
        ],
      },
      {
        type: "p",
        text: "Aucune de ces questions ne se règle avec un logiciel. Toutes se règlent en regardant le travail réel en face — c'est précisément ce que fait un audit opérationnel.",
      },
    ],
  },
  {
    slug: "simplifier-avant-automatiser",
    title: "Simplifier avant d'automatiser : la règle d'or",
    category: "Organisation",
    date: "2024-12-20",
    readingTime: "5 min",
    excerpt:
      "Automatiser un process bancal, c'est multiplier les erreurs plus vite. Voici comment éviter ce piège.",
    description:
      "Automatiser un process bancal le reproduit plus vite et à plus grande échelle. La séquence qui marche : éliminer, simplifier, standardiser, puis automatiser.",
    body: [
      {
        type: "p",
        text: "L'automatisation est séduisante : elle promet de faire disparaître les tâches pénibles. Mais automatiser un process bancal ne le répare pas — il le reproduit, plus vite et à plus grande échelle. **Automatiser le gâchis, c'est obtenir du gâchis plus rapide.**",
      },
      { type: "h2", text: "L'erreur classique : automatiser pour éviter de décider" },
      {
        type: "p",
        text: "On automatise souvent pour ne pas trancher. Plutôt que de choisir entre deux façons de faire, on code les deux et on laisse la machine gérer les exceptions. Résultat : un système compliqué qui fige les hésitations d'hier, et que plus personne n'ose toucher.",
      },
      { type: "h2", text: "Les trois questions avant d'automatiser quoi que ce soit" },
      {
        type: "p",
        text: "Avant d'écrire la moindre règle automatique, passez chaque tâche à ce filtre :",
      },
      {
        type: "steps",
        ordered: true,
        items: [
          {
            title: "Est-elle nécessaire ?",
            text: "La meilleure automatisation, c'est la suppression. Si une étape n'ajoute rien, ne l'automatisez pas : retirez-la.",
          },
          {
            title: "Est-elle simplifiable ?",
            text: "Réduisez le nombre d'étapes, de validations et de cas particuliers avant de toucher au code. On automatise une ligne droite, pas un labyrinthe.",
          },
          {
            title: "Est-elle stable ?",
            text: "Automatiser un process qui change toutes les semaines, c'est refaire l'automatisation toutes les semaines. Attendez qu'il soit stabilisé.",
          },
        ],
      },
      { type: "h2", text: "La séquence qui marche" },
      {
        type: "p",
        text: "L'automatisation est la **dernière** étape, jamais la première. Dans l'ordre :",
      },
      {
        type: "steps",
        ordered: true,
        items: [
          {
            title: "Éliminer",
            text: "Retirez tout ce qui n'apporte de valeur ni au client ni à l'entreprise.",
          },
          {
            title: "Simplifier",
            text: "Allégez ce qui reste : moins d'étapes, moins d'intervenants, moins d'exceptions.",
          },
          {
            title: "Standardiser",
            text: "Fixez une seule bonne manière de faire, écrite et partagée. C'est elle qu'on automatisera.",
          },
          {
            title: "Automatiser",
            text: "Confiez à la machine un process propre, stable et documenté. Là, l'automatisation tient dans le temps.",
          },
        ],
      },
      { type: "h2", text: "Un exemple concret" },
      {
        type: "p",
        text: "Une entreprise voulait automatiser l'envoi de ses devis, jugés trop lents. En regardant de près, le délai ne venait pas de la rédaction, mais d'une double validation — le commercial, puis le gérant — pour des montants souvent dérisoires. **Nous avons supprimé la validation en dessous d'un seuil.** Le délai a fondu avant même qu'on parle d'automatisation. Automatiser la double validation aurait figé le problème ; la supprimer l'a réglé.",
      },
      {
        type: "p",
        text: "La règle d'or tient en une phrase : on n'automatise que ce qu'on a d'abord rendu simple. Le reste n'est que du chaos plus rapide.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
