import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Réflexions sur l'organisation, les process et la transformation des PME. Articles et conseils pour dirigeants.",
  alternates: { canonical: "/ressources" },
  openGraph: {
    title: "Ressources | Confer",
    description: "Articles et conseils pour dirigeants de PME.",
  },
};

// Données temporaires (à remplacer par un CMS ou des fichiers MDX)
const articles = [
  {
    slug: "pourquoi-process-avant-outils",
    title: "Pourquoi vos process doivent précéder vos outils",
    excerpt: "Trop d'entreprises investissent dans des logiciels avant d'avoir clarifié leurs méthodes de travail. Résultat : du chaos digitalisé.",
    date: "2025-01-15",
    category: "Process",
  },
  {
    slug: "questions-audit-pme",
    title: "Les 10 questions qu'on pose lors d'un audit PME",
    excerpt: "Un aperçu de notre méthode de diagnostic : les questions inconfortables qui révèlent les vrais blocages.",
    date: "2025-01-08",
    category: "Méthode",
  },
  {
    slug: "simplifier-avant-automatiser",
    title: "Simplifier avant d'automatiser : la règle d'or",
    excerpt: "Automatiser un process bancal, c'est multiplier les erreurs plus vite. Voici comment éviter ce piège.",
    date: "2024-12-20",
    category: "Organisation",
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function RessourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* En-tête */}
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium">
              Blog
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-4 mb-4">
              Ressources
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Réflexions sur l'organisation, les process et la transformation des PME.
            </p>
          </div>

          {/* Liste des articles */}
          <div className="space-y-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group p-6 sm:p-8 border border-gray-200 rounded-lg hover:border-black transition-all duration-300"
              >
                <Link href={`/ressources/${article.slug}`} className="block">
                  {/* Catégorie + Date */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {formatDate(article.date)}
                    </span>
                  </div>

                  {/* Titre */}
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-black mb-3 group-hover:underline underline-offset-4">
                    {article.title}
                  </h2>

                  {/* Extrait */}
                  <p className="text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Lien */}
                  <span className="inline-block mt-4 text-sm font-medium text-black">
                    Lire l'article →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
