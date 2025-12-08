"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <div className="mb-6">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-medium">
            PARTENAIRE OPÉRATIONNEL & TECHNOLOGIQUE
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-6 leading-tight">
          Transformez votre PME en actif technologique.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Nous auditons, digitalisons et valorisons les entreprises traditionnelles. 
          Expertise financière (DEC) et puissance technologique (IA).
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            <Link href="#contact">Proposer un dossier</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            <Link href="#expertise">Notre approche</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

