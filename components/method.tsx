"use client";

import { Search, BarChart3, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function Method() {
  const steps = [
    {
      icon: Search,
      title: "Détecter",
      description: "Audit terrain, immersion dans vos équipes.",
      detail: "On pose les questions que personne n'ose poser.",
    },
    {
      icon: BarChart3,
      title: "Évaluer",
      description: "Priorisation des chantiers, feuille de route chiffrée.",
      detail: "Ce qui coûte le plus, on le traite en premier.",
    },
    {
      icon: Wrench,
      title: "Corriger",
      description: "Mise en œuvre concrète, à vos côtés.",
      detail: "Process, organisation, et outils si nécessaire.",
    },
  ];

  return (
    <section id="methode" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* En-tête */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium">
              Notre approche
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-4">
              Une méthode, trois étapes.
            </h2>
          </div>
        </Reveal>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={index} delay={index * 150}>
                <div className="group relative p-8 bg-white border border-gray-200 rounded-lg hover:border-black transition-all duration-300">
                  {/* Numéro en fond */}
                  <span className="absolute top-4 right-4 text-6xl font-serif font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {index + 1}
                  </span>

                  {/* Icône */}
                  <div className="relative z-10 mb-6">
                    <Icon className="h-10 w-10 text-black" strokeWidth={1.5} />
                  </div>

                  {/* Titre */}
                  <h3 className="relative z-10 font-serif text-2xl font-bold text-black mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-gray-700 mb-2">
                    {step.description}
                  </p>

                  {/* Détail */}
                  <p className="relative z-10 text-sm text-gray-500 italic">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
