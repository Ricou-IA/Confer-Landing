"use client";

import { Reveal } from "@/components/ui/reveal";

export function Philosophy() {
  const mantras = [
    "On ne répare pas ce qui ne devrait pas exister.",
    "Chaque process doit justifier son existence.",
    "On ne digitalise pas le chaos.",
    "L'outil vient après. Jamais avant.",
  ];

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium">
              Ce qu'on croit
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {mantras.map((mantra, index) => (
            <Reveal key={index} delay={index * 100} className="h-full">
              <div className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow h-full min-h-[120px]">
                <span className="text-3xl font-serif font-bold text-gray-300 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg sm:text-xl font-medium text-black leading-snug pt-1">
                  {mantra}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
