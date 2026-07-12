import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Banknote,
  Clock,
  FileText,
  Scale,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const SITE_URL = "https://www.pre-etat-date.ai";
const PUBLISHED = "2026-07-12";

export const metadata: Metadata = {
  title: "Étude de cas : Pre-etat-date.ai — automatiser le pré-état daté par l'IA",
  description:
    "Comment Confer a transformé un constat de marché — un pré-état daté facturé 380 € en moyenne et livré en 15 à 30 jours — en un produit : Pre-etat-date.ai, généré en moins de 5 minutes pour 24,99 €.",
  alternates: { canonical: "/projets/pre-etat-date" },
  openGraph: {
    type: "article",
    title: "Étude de cas : Pre-etat-date.ai — automatiser le pré-état daté par l'IA",
    description:
      "Du constat marché au produit : diviser par 20 le coût du pré-état daté en copropriété grâce à l'intelligence artificielle.",
    publishedTime: PUBLISHED,
  },
};

const KEY_FIGURES = [
  { icon: TrendingUp, value: "+50 %", label: "Charges de copropriété en 10 ans (vs +28 % d'inflation)" },
  { icon: Banknote, value: "380 €", label: "Coût moyen d'un pré-état daté chez le syndic (ARC, 2022)" },
  { icon: Clock, value: "15–30 j", label: "Délai habituel du syndic pour l'établir" },
  { icon: FileText, value: "24,99 €", label: "Prix avec Pre-etat-date.ai, en moins de 5 minutes" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Étude de cas : Pre-etat-date.ai — automatiser le pré-état daté par l'IA",
  description:
    "De l'enquête sur le coût du pré-état daté en copropriété à la conception d'un produit qui divise ce coût par 20 grâce à l'IA.",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    "@type": "Person",
    name: "Eric Pudebat",
    jobTitle: "Fondateur",
    worksFor: { "@type": "Organization", name: "Confer" },
  },
  publisher: {
    "@type": "Organization",
    name: "Confer",
    url: "https://confer.fr",
  },
  about: [
    "Pré-état daté",
    "Copropriété",
    "Loi ALUR",
    "Charges de copropriété",
    "Intelligence artificielle",
  ],
  mainEntityOfPage: "https://confer.fr/projets/pre-etat-date",
};

export default function PreEtatDateCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          {/* Fil d'Ariane */}
          <Link
            href="/projets"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les projets
          </Link>

          {/* En-tête */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Étude de cas · Immobilier · SaaS
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
                Réalisé
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Diviser par 20 le coût du pré-état daté, grâce à l'IA
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Un document obligatoire, un tarif non plafonné, un délai de
              plusieurs semaines : le pré-état daté en copropriété cochait toutes
              les cases d'un irritant à automatiser. Voici comment nous sommes
              passés du constat au produit —{" "}
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener"
                className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
              >
                Pre-etat-date.ai
              </a>
              .
            </p>
          </header>

          {/* Chiffres clés */}
          <div className="grid grid-cols-2 gap-4 mb-14">
            {KEY_FIGURES.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="border border-gray-200 rounded-lg p-5 bg-white"
              >
                <Icon className="h-5 w-5 text-gray-400 mb-3" strokeWidth={1.75} />
                <div className="font-serif text-2xl sm:text-3xl font-bold text-black">
                  {value}
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Corps de l'article */}
          <div className="space-y-10">
            {/* Le constat */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Le constat : un coût caché sur un marché déjà tendu
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Vendre un appartement en copropriété en France impose de
                  fournir un <strong>pré-état daté</strong> : un document
                  qui informe l'acquéreur de la situation financière, juridique
                  et technique de la copropriété. Cette obligation découle de
                  l'article L.721-2 du Code de la Construction et de l'Habitation,
                  créé par la <strong>loi ALUR (2014)</strong> et renforcé par la{" "}
                  <strong>loi ELAN (2018)</strong>.
                </p>
                <p>
                  En pratique, les vendeurs le commandent à leur syndic, qui le
                  facture <strong>entre 250 et 500 €</strong> — une moyenne
                  nationale de <strong>380 €</strong> selon l'
                  <strong>étude ARC 2022</strong> — pour un délai de{" "}
                  <strong>15 à 30 jours</strong>. Contrairement à l'état daté
                  (post-compromis), plafonné à 380 € depuis le décret du 21 février
                  2020, le pré-état daté n'est encadré par <em>aucun</em> plafond
                  légal.
                </p>
                <p>
                  Le tout dans un contexte où les{" "}
                  <strong>charges de copropriété ont bondi de +50 % en dix ans</strong>,
                  soit près de deux fois plus vite que l'inflation cumulée
                  (+28 %). Un coût de plus, découvert au pire moment, sur l'une des{" "}
                  <strong>~800 000 transactions immobilières</strong> réalisées
                  chaque année en France.
                </p>
              </div>
            </section>

            {/* Le besoin d'un produit */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Pourquoi ce constat appelait un produit
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Deux verrous se sont desserrés en même temps, ouvrant une
                  fenêtre nette pour automatiser ce document.
                </p>
                <p>
                  <strong>Un verrou juridique.</strong> Le{" "}
                  <strong>Conseil Supérieur du Notariat</strong> a confirmé que le
                  recours au syndic pour établir le pré-état daté{" "}
                  <strong>n'est pas obligatoire</strong> : le vendeur — ou un
                  service tiers — peut le produire. L'espace de liberté existait,
                  personne ne l'exploitait.
                </p>
                <p>
                  <strong>Un verrou technique.</strong> L'essentiel de la
                  difficulté du pré-état daté n'est pas juridique mais{" "}
                  <strong>comptable</strong> : extraire les charges, tantièmes,
                  provisions et fonds de travaux ALUR noyés dans des dizaines de
                  pages de PV d'assemblée générale et d'appels de fonds. C'est
                  exactement là où les modèles d'IA récents excellent — et où les
                  humains perdent le plus de temps.
                </p>
                <p>
                  Le calcul devenait évident : un document facturé{" "}
                  <strong>380 € et attendu plusieurs semaines</strong> pouvait
                  être généré <strong>en quelques minutes</strong>, à une fraction
                  du prix, sans jamais dépendre du syndic.
                </p>
              </div>
            </section>

            {/* Ce que nous avons construit */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Ce que nous avons construit
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <a
                    href={SITE_URL}
                    target="_blank"
                    rel="noopener"
                    className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
                  >
                    Pre-etat-date.ai
                  </a>{" "}
                  génère automatiquement le pré-état daté à partir des documents
                  de copropriété déposés par le vendeur. Un pipeline
                  d'intelligence artificielle (Gemini 2.5) extrait les données
                  financières, juridiques et techniques, recalcule les charges à
                  partir des tantièmes en <strong>vérification croisée</strong>,
                  et produit un document conforme au modèle du Conseil Supérieur du
                  Notariat.
                </p>
                <p>
                  Le résultat pour le vendeur :{" "}
                  <strong>24,99 € au lieu de ~380 €</strong> (jusqu'à 20 fois moins
                  cher), <strong>moins de 5 minutes au lieu de plusieurs semaines</strong>,
                  et une <strong>garantie satisfait ou remboursé</strong> si le
                  notaire refuse le document. Côté Confer, la mission a couvert la
                  conception produit, le calibrage de l'IA, le tunnel de paiement
                  et une architecture SEO complète (pré-rendu statique, données
                  structurées, guides thématiques).
                </p>
                <div className="border-l-2 border-gray-900 pl-5 py-1 my-6">
                  <p className="text-gray-800 italic">
                    « On demande aux vendeurs de payer plusieurs centaines d'euros
                    pour un document que l'IA produit en cinq minutes. Notre
                    mission, c'est de leur redonner ce pouvoir d'achat. »
                  </p>
                  <p className="text-sm text-gray-500 mt-2 not-italic">
                    — Eric Pudebat, fondateur (Confer)
                  </p>
                </div>
              </div>
            </section>

            {/* Impact */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                L'impact
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les premiers dossiers — vendeurs particuliers, agents
                  immobiliers et mandataires — ont majoritairement été traités en{" "}
                  <strong>moins de 300 secondes</strong>. À l'échelle du marché,
                  rendre l'essentiel de ce coût aux vendeurs sur une part
                  significative des 800 000 transactions annuelles représente un
                  potentiel de <strong>plusieurs dizaines de millions d'euros</strong>{" "}
                  de pouvoir d'achat restitué chaque année.
                </p>
              </div>
            </section>

            {/* Sources */}
            <section className="border-t border-gray-200 pt-8">
              <h2 className="font-serif text-lg font-bold text-black mb-3">
                Sources
              </h2>
              <ul className="text-sm text-gray-500 space-y-1.5 leading-relaxed">
                <li>
                  Tarifs syndic : étude ARC (Association des Responsables de
                  Copropriété), 2022 — moyenne 380 €, fourchette 150–600 €.
                </li>
                <li>
                  Données copropriétés : Registre National des Copropriétés
                  (RNIC), ANAH, 2024.
                </li>
                <li>
                  Cadre juridique : loi ALUR (2014), loi ELAN (2018), article
                  L.721-2 du CCH, décret du 21 février 2020, Conseil Supérieur du
                  Notariat.
                </li>
              </ul>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-xl bg-gray-50 border border-gray-200 p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-black mb-2">
              Un irritant à automatiser dans votre secteur ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Nous concevons des produits qui transforment un constat de marché en
              solution opérationnelle. Découvrez le résultat en ligne.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Découvrir Pre-etat-date.ai
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg border border-gray-300 text-black text-sm font-medium hover:border-black transition-colors"
              >
                <Scale className="h-4 w-4" strokeWidth={1.75} />
                Parler de votre projet
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
