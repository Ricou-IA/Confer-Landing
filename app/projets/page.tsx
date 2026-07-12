import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Coffee,
  Croissant,
  Droplets,
  FileText,
  Flame,
  HardHat,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Nos réalisations pour les PME et artisans : SaaS métier, sites vitrines, automatisation et pilotage. Pré-état daté, autorisation de voirie, Mayer Énergie, et plus.",
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets | Confer",
    description:
      "Produits et sites que nous avons conçus et livrés pour les PME et artisans.",
  },
};

type Projet = {
  slug: string;
  title: string;
  status: "Réalisé" | "En cours";
  sector: string;
  description: string;
  icon: LucideIcon;
  /** Site public en ligne — lien suivi (dofollow) vers la réalisation. */
  href?: string;
  hrefLabel?: string;
  /** Étude de cas interne détaillée. */
  caseStudy?: string;
};

const projets: Projet[] = [
  {
    slug: "pre-etat-date",
    title: "Pré-état daté automatisé",
    status: "Réalisé",
    sector: "Immobilier · SaaS",
    description:
      "SaaS qui génère le pré-état daté (loi Alur) pour la vente en copropriété à partir des documents du vendeur, grâce à l'analyse IA. Livraison par lien notaire.",
    icon: FileText,
    href: "https://www.pre-etat-date.ai",
    hrefLabel: "pre-etat-date.ai",
    caseStudy: "/projets/pre-etat-date",
  },
  {
    slug: "autorisation-voirie",
    title: "Demande d'occupation de voirie",
    status: "Réalisé",
    sector: "Artisans · Micro-SaaS",
    description:
      "Micro-SaaS mobile qui permet aux artisans de générer et d'envoyer leur demande d'occupation du domaine public (Cerfa) à la mairie en moins de deux minutes.",
    icon: HardHat,
    href: "https://www.autorisation-voirie.fr",
    hrefLabel: "autorisation-voirie.fr",
    caseStudy: "/projets/autorisation-voirie",
  },
  {
    slug: "mayer-energie",
    title: "Mayer Énergie — site & leads",
    status: "Réalisé",
    sector: "Énergie",
    description:
      "Site vitrine, génération de leads et espace client pour un installateur de chauffage et fournisseur de pellets. Automatisation des relances et de la reprise de contact.",
    icon: Flame,
    href: "https://www.mayer-energie.fr",
    hrefLabel: "mayer-energie.fr",
    caseStudy: "/projets/mayer-energie",
  },
  {
    slug: "arpet",
    title: "ARPET — assistant IA pour le BTP",
    status: "Réalisé",
    sector: "BTP · IA / SaaS",
    description:
      "Assistant IA pour conducteurs de travaux : il cherche les réponses dans vos CCTP, DTU et réglementations, et automatise les comptes-rendus de réunion. Incubé au CSTB'Lab.",
    icon: Bot,
    href: "https://www.arpet.ai",
    hrefLabel: "arpet.ai",
    caseStudy: "/projets/arpet",
  },
  {
    slug: "majordhome",
    title: "Majord'home — plateforme métier",
    status: "Réalisé",
    sector: "BTP · SaaS",
    description:
      "Plateforme SaaS pour les artisans du bâtiment (CVC) : CRM, planning, pipeline commercial, carte territoire et outil terrain sur tablette.",
    icon: Wrench,
  },
  {
    slug: "cosette-boulangerie",
    title: "Cockpit financier — Boulangerie",
    status: "Réalisé",
    sector: "Artisanat · Commerce",
    description:
      "Tableau de bord mensuel qui réconcilie les flux d'espèces et pilote les marges (coût matière, personnel) d'une boulangerie artisanale.",
    icon: Croissant,
  },
  {
    slug: "croco-lavage",
    title: "Croco Lavage — station de lavage",
    status: "Réalisé",
    sector: "Commerce local",
    description:
      "Site vitrine et contenu SEO pour une station de lavage auto en libre-service, ouverte 24h/24 près de Toulouse.",
    icon: Droplets,
  },
  {
    slug: "da-rivens",
    title: "DA Rivens — distribution automatique",
    status: "Réalisé",
    sector: "Distribution",
    description:
      "Site vitrine pour une entreprise familiale de distributeurs automatiques de boissons et confiseries en Occitanie.",
    icon: Coffee,
  },
];

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* En-tête */}
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium">
              Nos missions
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-4 mb-4">
              Projets
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un aperçu des produits, sites et outils que nous avons conçus et
              livrés pour des PME et des artisans.
            </p>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet) => {
              const Icon = projet.icon;
              return (
                <article
                  key={projet.slug}
                  className="group flex flex-col p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                >
                  {/* Icône + statut */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        projet.status === "En cours"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {projet.status}
                    </span>
                  </div>

                  {/* Secteur */}
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    {projet.sector}
                  </span>

                  {/* Titre */}
                  <h2 className="font-serif text-lg font-bold text-black mt-1 mb-3">
                    {projet.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {projet.description}
                  </p>

                  {/* Liens : étude de cas (interne) + site (dofollow) */}
                  {(projet.href || projet.caseStudy) && (
                    <div className="mt-5 flex flex-col gap-2">
                      {projet.caseStudy && (
                        <Link
                          href={projet.caseStudy}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-gray-600 transition-colors"
                        >
                          Lire l&apos;étude de cas
                          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                        </Link>
                      )}
                      {projet.href && (
                        <a
                          href={projet.href}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors"
                        >
                          {projet.hrefLabel ?? "Voir le site"}
                          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                        </a>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
