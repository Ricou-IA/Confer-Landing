import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Banknote,
  Clock,
  FileSignature,
  Send,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const VOIRIE_URL = "https://www.autorisation-voirie.fr";
const PUBLISHED = "2026-07-12";

export const metadata: Metadata = {
  title:
    "Étude de cas : Autorisation-voirie — la demande d'occupation du domaine public en 2 min",
  description:
    "Comment Confer a conçu un micro-SaaS qui génère et envoie la demande d'occupation du domaine public (Cerfa 14023*01) à la mairie en moins de 2 minutes, pour 9,90 €.",
  alternates: { canonical: "/projets/autorisation-voirie" },
  openGraph: {
    type: "article",
    title:
      "Étude de cas : Autorisation-voirie — la demande d'occupation du domaine public en 2 min",
    description:
      "Un micro-SaaS pay-first qui remplit le Cerfa 14023*01, génère le plan de masse et l'implantation, et envoie le dossier à la mairie.",
    publishedTime: PUBLISHED,
  },
};

const KEY_FIGURES = [
  { icon: Banknote, value: "9,90 €", label: "Le dossier complet, tout compris" },
  { icon: Clock, value: "< 2 min", label: "De la description à l'envoi en mairie" },
  { icon: FileSignature, value: "Cerfa 14023*01", label: "Rempli et signé automatiquement" },
  { icon: Send, value: "Envoi direct", label: "Au service voirie, copie au demandeur" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Étude de cas : Autorisation-voirie — la demande d'occupation du domaine public en 2 min",
  description:
    "Concevoir un micro-SaaS qui automatise la demande d'occupation du domaine public (Cerfa 14023*01) pour les artisans du BTP.",
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
    "Occupation du domaine public",
    "Cerfa 14023*01",
    "Artisans BTP",
    "Démarches administratives",
    "Intelligence artificielle",
  ],
  mainEntityOfPage: "https://www.confer-sas.fr/projets/autorisation-voirie",
};

export default function AutorisationVoirieCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/projets"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les projets
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Étude de cas · Artisans · Micro-SaaS
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
                Réalisé
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              L'autorisation de voirie, réglée en deux minutes
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Poser une benne ou un échafaudage sur la voie publique exige une
              autorisation d'occupation du domaine public. Une démarche que les
              artisans redoutent — ou zappent. Nous l'avons ramenée à une
              description et un paiement, avec{" "}
              <a
                href={VOIRIE_URL}
                target="_blank"
                rel="noopener"
                className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
              >
                Autorisation-voirie
              </a>
              .
            </p>
          </header>

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

          <div className="space-y-10">
            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Le constat : une démarche obligatoire, mais dissuasive
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dès qu'un chantier déborde sur la voie publique — benne,
                  échafaudage, dépôt de matériaux — l'artisan doit demander une
                  autorisation d'occupation du domaine public à la mairie, via le{" "}
                  <strong>Cerfa 14023*01</strong>, accompagné d'un plan et de
                  justificatifs.
                </p>
                <p>
                  Le formulaire est aride, chaque mairie a ses habitudes, et le
                  plan de masse rebute. Résultat : beaucoup d'artisans reportent,
                  bricolent, ou s'en passent — et s'exposent alors à une
                  contravention et à un chantier stoppé. Une friction
                  administrative pure, sans valeur ajoutée pour eux.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Ce que nous avons construit
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Un tunnel <strong>anonyme et pay-first</strong> : l'artisan
                  décrit son besoin en langage naturel, une IA structure la
                  demande, l'entreprise est retrouvée automatiquement via sa base
                  SIRENE, puis le service génère tout le dossier.
                </p>
                <p>
                  Le pack livré est complet : le{" "}
                  <strong>Cerfa 14023*01 rempli et signé</strong>, un{" "}
                  <strong>plan de masse coté</strong> (Mapbox) et une{" "}
                  <strong>photo d'implantation</strong> (Street View), plus
                  l'attestation SIRENE. Le tout part par email au{" "}
                  <strong>service voirie compétent</strong>, avec copie au
                  demandeur — le tout pour <strong>9,90 €</strong>, en moins de
                  deux minutes.
                </p>
                <p className="text-gray-600">
                  Le produit repose sur le même socle technique que notre{" "}
                  <Link
                    href="/projets/pre-etat-date"
                    className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
                  >
                    étude de cas Pre-etat-date.ai
                  </Link>{" "}
                  : un savoir-faire de génération documentaire par IA que nous
                  réappliquons d'un secteur à l'autre.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-14 rounded-xl bg-gray-50 border border-gray-200 p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-black mb-2">
              Une démarche répétitive à automatiser ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Nous transformons les formulaires que tout le monde subit en
              services de deux minutes. Découvrez celui-ci en ligne.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={VOIRIE_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Voir autorisation-voirie.fr
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg border border-gray-300 text-black text-sm font-medium hover:border-black transition-colors"
              >
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
