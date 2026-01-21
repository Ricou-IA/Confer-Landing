import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

// Données temporaires (à remplacer par un CMS ou base de données)
const projets = [
  {
    slug: "restructuration-pme-industrielle",
    title: "Restructuration PME industrielle",
    status: "En cours",
    sector: "Industrie",
    description: "Audit des process de production et réorganisation des flux logistiques.",
  },
  {
    slug: "digitalisation-cabinet-comptable",
    title: "Digitalisation cabinet comptable",
    status: "Réalisé",
    sector: "Services",
    description: "Mise en place d'une architecture de données et automatisation des tâches répétitives.",
  },
  {
    slug: "optimisation-service-client",
    title: "Optimisation service client",
    status: "En cours",
    sector: "Commerce",
    description: "Refonte des process de traitement des demandes et formation des équipes.",
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
              Quelques exemples de missions en cours ou réalisées.
            </p>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet) => (
              <article
                key={projet.slug}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    {projet.sector}
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

                {/* Titre */}
                <h2 className="font-serif text-lg font-bold text-black mb-3">
                  {projet.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {projet.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
