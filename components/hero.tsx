"use client";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="mb-6">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium">
              PARTENAIRE OPERATIONNEL DES PME
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-8 leading-tight">
            Détecter. Evaluer. Corriger.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <div className="space-y-2 mb-10 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-black">
              On ne digitalise pas le chaos.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              On pose les bonnes questions. Vous trouvez les réponses.
            </p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto min-w-[220px]">
              <Link href="#methode">Découvrir notre methode</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-w-[220px]">
              <Link href="/contact">Soumettre un dossier</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
