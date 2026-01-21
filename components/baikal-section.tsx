"use client";

import { Database } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function BaikalSection() {
  return (
    <section id="baikal" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Icône sobre */}
        <Reveal>
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
            <Database className="h-8 w-8 text-gray-600" strokeWidth={1.5} />
          </div>
        </Reveal>

        {/* Mantra */}
        <Reveal delay={100}>
          <p className="text-xl sm:text-2xl font-medium text-black mb-6">
            L'outil vient après. Jamais avant.
          </p>
        </Reveal>

        {/* Description sobre */}
        <Reveal delay={200}>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Quand vos process sont solides, notre technologie Baïkal peut prendre le relais.
            <br className="hidden sm:block" />
            Data lake, automatisation, IA. Mais seulement quand c'est le bon moment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
