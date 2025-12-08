"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Database } from "lucide-react";

export function ValueProposition() {
  const cards = [
    {
      icon: Shield,
      title: "Sécuriser le LBO",
      description: "Audit flash et plan de rentabilité immédiat.",
    },
    {
      icon: TrendingUp,
      title: "Maximiser l'Exit",
      description: "Nettoyage des process pour augmenter la valorisation.",
    },
    {
      icon: Database,
      title: "Architecture Baïkal",
      description: "Déploiement de notre moteur de Data Lake propriétaire.",
    },
  ];

  return (
    <section id="expertise" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="font-serif text-xl lg:text-2xl">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

