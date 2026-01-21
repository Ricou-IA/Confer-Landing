"use client";

import { Zap, Route } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function Accompagnement() {
  const missions = [
    {
      icon: Zap,
      name: "Mission Commando",
      tagline: "Un problème identifié. Une intervention ciblée.",
      description: "On entre, on règle, on sort.",
    },
    {
      icon: Route,
      name: "Mission Marathon",
      tagline: "Un partenaire dans la durée.",
      description: "Compétence partagée, présence régulière, transformation progressive.",
    },
  ];

  return (
    <section id="accompagnement" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        {/* En-tête */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium">
              Nos formules
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-4">
              Deux façons de travailler ensemble.
            </h2>
          </div>
        </Reveal>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <Reveal key={index} delay={index * 150}>
                <div className="group p-8 lg:p-10 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                  {/* Icône */}
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-black rounded-full">
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Nom */}
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-black mb-3">
                    {mission.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-lg text-gray-700 mb-2">
                    {mission.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-500">
                    {mission.description}
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
