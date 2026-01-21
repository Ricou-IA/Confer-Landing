"use client";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export function ServiceEquity() {
  return (
    <section id="equity" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Surtitre */}
        <Reveal>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-medium">
            Service to Equity
          </span>
        </Reveal>

        {/* Accroche principale */}
        <Reveal delay={100}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-6 mb-8 leading-tight">
            On s'investit quand vos banques reculent.
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal delay={200}>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Votre entreprise a du potentiel mais pas de trésorerie ?
            <br />
            Nous échangeons notre temps contre du capital.
          </p>
        </Reveal>

        {/* CTA */}
        <Reveal delay={300}>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[220px] bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <Link href="/contact">Soumettre un dossier</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
