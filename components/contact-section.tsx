"use client";

import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black">
          Prêt à transformer votre entreprise ?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
          Proposez-nous votre dossier pour un audit de reprise personnalisé.
        </p>
        <Button
          asChild
          size="lg"
          className="min-w-[200px]"
        >
          <a href="mailto:contact@confer.fr">Proposer un dossier</a>
        </Button>
      </div>
    </section>
  );
}

