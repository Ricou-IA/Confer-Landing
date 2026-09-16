import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { articles, getArticle, type Block } from "../articles";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/ressources/${article.slug}` },
    openGraph: {
      type: "article",
      title: `${article.title} | Confer`,
      description: article.description,
      publishedTime: article.date,
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Rendu inline minimal : **texte** -> gras.
function renderInline(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-black">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-serif text-2xl font-bold text-black mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="text-gray-700 leading-relaxed mb-4">
          {renderInline(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700 leading-relaxed marker:text-gray-400">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="space-y-4 mb-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-serif text-lg font-bold text-black leading-snug">
                  {item.title}
                </p>
                <p className="text-gray-700 leading-relaxed mt-1">
                  {renderInline(item.text)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    articleSection: article.category,
    author: {
      "@type": "Organization",
      name: "Confer",
      url: "https://www.confer-sas.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Confer",
      url: "https://www.confer-sas.fr",
    },
    mainEntityOfPage: `https://www.confer-sas.fr/ressources/${article.slug}`,
  };

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
            href="/ressources"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Toutes les ressources
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-wide text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {article.category}
              </span>
              <span className="text-sm text-gray-400">
                {formatDate(article.date)} · {article.readingTime} de lecture
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              {article.title}
            </h1>
          </header>

          <div>
            {article.body.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-xl bg-gray-50 border border-gray-200 p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-black mb-2">
              Un process à clarifier dans votre PME ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              On détecte, on évalue, on corrige — avant d'outiller. Parlons de ce
              qui vous ralentit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Discuter de votre situation
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
