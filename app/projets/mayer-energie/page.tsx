import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  LayoutDashboard,
  MapPin,
  Target,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const MAYER_URL = "https://www.mayer-energie.fr";
const PUBLISHED = "2026-07-12";

export const metadata: Metadata = {
  title: "Étude de cas : Mayer Énergie — un site taillé pour le SEO local",
  description:
    "Comment Confer a conçu pour Mayer Énergie, installateur RGE dans le Tarn, un site pensé pour le référencement local (28 communes) et la génération de leads : simulateurs d'aides, espace client et automatisation.",
  alternates: { canonical: "/projets/mayer-energie" },
  openGraph: {
    type: "article",
    title: "Étude de cas : Mayer Énergie — un site taillé pour le SEO local",
    description:
      "Site vitrine, référencement local par commune, simulateurs d'aides et automatisation des relances pour un installateur RGE.",
    publishedTime: PUBLISHED,
  },
};

const FEATURES = [
  {
    icon: MapPin,
    title: "Référencement local",
    text: "Une page par commune et par service — 28 villes du Tarn couvertes, avec les données DPE locales à l'appui.",
  },
  {
    icon: Target,
    title: "Génération de leads",
    text: "Simulateurs Prime Rénov' et éco-PTZ qui transforment une simple visite en demande qualifiée.",
  },
  {
    icon: LayoutDashboard,
    title: "Espace client",
    text: "Suivi des demandes et des contrats côté client, adossé à Supabase et à une authentification sécurisée.",
  },
  {
    icon: Workflow,
    title: "Automatisation",
    text: "Relances, inscriptions pellets et prises de rendez-vous d'entretien orchestrées par des workflows n8n.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Étude de cas : Mayer Énergie — un site taillé pour le SEO local",
  description:
    "Concevoir un site de génération de leads et de référencement local pour un installateur RGE dans le Tarn.",
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
    "Chauffage",
    "Énergies renouvelables",
    "RGE",
    "Référencement local",
    "Génération de leads",
  ],
  mainEntityOfPage: "https://www.confer-sas.fr/projets/mayer-energie",
};

export default function MayerCaseStudy() {
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
                Étude de cas · Énergie
              </span>
              <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-600">
                Réalisé
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              Un site fait pour être trouvé — et pour convertir
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Un installateur RGE ne se cherche pas en ligne comme un e-commerce :
              il se trouve <em>localement</em>, au moment où un foyer tape « pompe
              à chaleur » suivi du nom de sa commune. Nous avons construit le site
              de{" "}
              <a
                href={MAYER_URL}
                target="_blank"
                rel="noopener"
                className="text-black font-medium underline underline-offset-4 hover:text-gray-600"
              >
                Mayer Énergie
              </a>{" "}
              autour de cette intention.
            </p>
          </header>

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

          <div className="space-y-10">
            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Le constat : la demande est locale et saisonnière
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Mayer Énergie installe chauffage aux granulés, pompes à chaleur,
                  photovoltaïque et bornes de recharge depuis Gaillac, dans le
                  Tarn. Sa clientèle est un rayon de communes autour de son
                  atelier — et sa demande grimpe à chaque hausse du prix de
                  l'énergie ou nouvelle prime.
                </p>
                <p>
                  Or un site vitrine classique ne capte pas cette intention : il
                  parle de l'entreprise, pas des recherches réelles des habitants
                  (« installateur pompe à chaleur Albi », « prime pour changer sa
                  chaudière »). Sans pages pensées commune par commune et aide par
                  aide, les prospects partent chez le concurrent mieux référencé.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-black mb-4">
                Ce que nous avons construit
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Un site conçu comme un{" "}
                  <strong>outil d'acquisition</strong>, pas une plaquette. À la
                  base, une architecture de référencement local : une page pour
                  chaque croisement commune × service, nourrie des données DPE du
                  territoire (part de passoires thermiques, classe moyenne) pour
                  parler concrètement aux habitants de 28 villes du Tarn.
                </p>
                <p>
                  Par-dessus, la mécanique de conversion : des{" "}
                  <strong>simulateurs de Prime Rénov' et d'éco-PTZ</strong> qui
                  captent un lead qualifié en donnant une vraie information, un{" "}
                  <strong>espace client</strong> pour suivre demandes et contrats,
                  et des <strong>automatisations n8n</strong> qui relancent les
                  devis, gèrent les inscriptions aux offres pellets et planifient
                  les entretiens — sans intervention manuelle.
                </p>
                <p>
                  Le tout met en avant les certifications{" "}
                  <strong>RGE QualiBois</strong>, condition à la fois de confiance
                  et d'éligibilité aux aides.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-14 rounded-xl bg-gray-50 border border-gray-200 p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-black mb-2">
              Une activité locale à faire décoller en ligne ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Nous construisons des sites qui rankent là où vos clients cherchent
              et convertissent la visite en demande. Voyez le résultat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={MAYER_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Voir mayer-energie.fr
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
