import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  FileSearch,
  Layers,
  Mic,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const ARPET_URL = "https://www.arpet.ai";
const BAIKAL_URL = "https://withbaikal.io";
const CSTB_URL =
  "https://www.cstb.fr/recherche-expertise/incubateur-start-ups/start-up#PPW_1a997c3d-e06e-4d5a-b11d-dfda70096e5e";
const PUBLISHED = "2026-07-12";

export const metadata: Metadata = {
  title: "Étude de cas : ARPET — l'assistant IA des conducteurs de travaux BTP",
  description:
    "Comment Confer a conçu ARPET, l'assistant IA qui cherche les réponses dans les CCTP, CCAG, DTU et réglementations du BTP et automatise les comptes-rendus de chantier. Incubé au CSTB'Lab.",
  alternates: { canonical: "/projets/arpet" },
  openGraph: {
    type: "article",
    title: "Étude de cas : ARPET — l'assistant IA des conducteurs de travaux BTP",
    description:
      "Un assistant IA sourcé sur vos documents techniques et réglementaires, pour sécuriser la conformité et alléger l'administratif de chantier.",
    publishedTime: PUBLISHED,
  },
};

const FEATURES = [
  {
    icon: FileSearch,
    title: "Réponses sourcées",
    text: "Chaque réponse cite le document d'origine — CCTP, CCAG, DTU, marché. Pas d'hallucination : l'expert garde la main.",
  },
  {
    icon: Mic,
    title: "Comptes-rendus automatiques",
    text: "Les réunions de chantier sont enregistrées, puis décisions, actions et points de blocage sont extraits tout seuls.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité sécurisée",
    text: "Croise les spécifications techniques et réglementaires avec l'avancement, pour repérer les écarts avant qu'ils ne coûtent.",
  },
  {
    icon: Network,
    title: "Moteur BAIKAL",
    text: "Un RAG multi-tenant maison : la connaissance de chaque entreprise reste privée, cloisonnée et réutilisable.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Étude de cas : ARPET — l'assistant IA des conducteurs de travaux BTP",
  description:
    "Concevoir un assistant IA sourcé sur les documents techniques et réglementaires du BTP pour sécuriser la conformité et alléger l'administratif de chantier.",
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
    url: "https://www.confer-sas.fr",
  },
  about: [
    "BTP",
    "Conduite de travaux",
    "Intelligence artificielle",
    "RAG",
    "Conformité réglementaire",
  ],
  mainEntityOfPage: "https://www.confer-sas.fr/projets/arpet",
};

export default function ArpetCaseStudy() {
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
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Étude de cas · BTP · IA / SaaS
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
                Réalisé
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              L'assistant IA qui lit vos CCTP à votre place
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Un conducteur de travaux passe une part démesurée de son temps à
              chercher une clause dans un CCTP, à recouper un DTU ou à rédiger un
              compte-rendu. Nous avons conçu{" "}
              <a
                href={ARPET_URL}
                target="_blank"
                rel="noopener"
                className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
              >
                ARPET
              </a>{" "}
              pour lui rendre ces heures — sans jamais lui retirer la décision.
            </p>
          </header>

          {/* Bandeau crédibilité CSTB */}
          <a
            href={CSTB_URL}
            target="_blank"
            rel="noopener"
            className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 mb-12 hover:border-gray-300 transition-colors"
          >
            <Award className="h-5 w-5 text-gray-700 flex-shrink-0" strokeWidth={1.75} />
            <span className="text-sm text-gray-700">
              <strong className="text-black">Incubé au CSTB&apos;Lab</strong> — l'incubateur
              du Centre Scientifique et Technique du Bâtiment.
            </span>
            <ArrowUpRight
              className="h-4 w-4 text-gray-400 ml-auto flex-shrink-0 group-hover:text-black transition-colors"
              strokeWidth={2}
            />
          </a>

          {/* Fonctionnalités clés */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="border border-gray-200 rounded-lg p-5 bg-white"
              >
                <Icon className="h-5 w-5 text-gray-400 mb-3" strokeWidth={1.75} />
                <h3 className="font-serif text-lg font-bold text-black mb-1">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-snug">{text}</p>
              </div>
            ))}
          </div>

          {/* Corps */}
          <div className="space-y-10">
            {/* Le constat */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Le constat : le savoir est là, mais introuvable
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Un chantier produit une montagne de documents : marché, CCTP,
                  CCAG, DTU, plans, procès-verbaux, comptes-rendus, avenants. La
                  bonne réponse à une question de terrain existe presque toujours
                  — mais elle est enfouie dans des centaines de pages, réparties
                  entre plusieurs classeurs et boîtes mail.
                </p>
                <p>
                  Résultat : le conducteur de travaux arbitre à la mémoire ou au
                  téléphone, les comptes-rendus se rédigent le soir, et les écarts
                  de conformité se découvrent trop tard — quand ils coûtent le plus
                  cher. La charge administrative grignote le temps qui devrait aller
                  au pilotage du chantier.
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
                  La génération d'IA récente sait enfin faire ce qui manquait :
                  lire un corpus technique volumineux et en extraire une réponse{" "}
                  <strong>sourcée</strong>, avec la citation exacte du document.
                  Dans un métier où une affirmation non vérifiable n'a aucune
                  valeur juridique, cette traçabilité change tout.
                </p>
                <p>
                  Encore fallait-il un moteur capable de garder la connaissance de
                  chaque entreprise <strong>cloisonnée et privée</strong>. C'est le
                  rôle de{" "}
                  <a
                    href={BAIKAL_URL}
                    target="_blank"
                    rel="noopener"
                    className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
                  >
                    Baikal
                  </a>
                  , notre moteur RAG multi-tenant, sur lequel ARPET est construit.
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
                    href={ARPET_URL}
                    target="_blank"
                    rel="noopener"
                    className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
                  >
                    ARPET
                  </a>{" "}
                  est un assistant conversationnel branché sur les documents de
                  l'entreprise et du chantier. On lui pose une question en langage
                  naturel — « quelle épaisseur d'isolant impose le CCTP au lot 3 ? »
                  — et il répond en citant la page exacte. Il enregistre les
                  réunions et en tire un compte-rendu structuré (décisions,
                  actions, points de blocage), et croise les spécifications
                  techniques avec l'avancement pour sécuriser la conformité.
                </p>
                <p>
                  La ligne directrice tient dans la promesse du produit :{" "}
                  <strong>il cherche les réponses, vous prenez les décisions</strong>.
                  L'IA fait le travail ingrat de fouille documentaire ; l'expertise
                  humaine reste au centre.
                </p>
                <div className="border-l-2 border-gray-900 pl-5 py-1 my-6">
                  <p className="text-gray-800 italic">
                    « La bonne réponse existe déjà dans les documents du chantier.
                    Notre travail, c'est de la rendre accessible en une phrase,
                    avec sa source. »
                  </p>
                  <p className="text-sm text-gray-500 mt-2 not-italic">
                    — Eric Pudebat, fondateur (Confer)
                  </p>
                </div>
              </div>
            </section>

            {/* Reconnaissance CSTB */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Une reconnaissance de la filière : le CSTB'Lab
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  ARPET est incubé au{" "}
                  <a
                    href={CSTB_URL}
                    target="_blank"
                    rel="noopener"
                    className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
                  >
                    CSTB&apos;Lab
                  </a>
                  , l'incubateur du Centre Scientifique et Technique du Bâtiment,
                  qui a accompagné plus de soixante start-ups de la construction.
                  Y être sélectionné, c'est bénéficier d'un accompagnement
                  scientifique et métier — et voir la pertinence du produit validée
                  par une institution de référence du bâtiment.
                </p>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-xl bg-gray-50 border border-gray-200 p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-black mb-2">
              Un métier noyé sous ses propres documents ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Nous transformons un savoir dispersé en assistant fiable et sourcé.
              Découvrez ARPET en ligne, ou parlons de votre cas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={ARPET_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Découvrir ARPET
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg border border-gray-300 text-black text-sm font-medium hover:border-black transition-colors"
              >
                <Layers className="h-4 w-4" strokeWidth={1.75} />
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
