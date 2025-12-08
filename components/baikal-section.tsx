"use client";

import { Database, Workflow } from "lucide-react";

export function BaikalSection() {
  return (
    <section id="baikal" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Propulsé par Baïkal Engine
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Notre technologie propriétaire combine RAG (Retrieval-Augmented Generation) 
              et n8n pour sécuriser et optimiser vos données d'entreprise.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Baïkal Engine transforme vos processus métier en architecture de données 
              intelligente, garantissant une traçabilité totale et une valorisation maximale 
              de vos actifs informationnels.
            </p>
          </div>

          {/* Visual Cue */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gray-900 rounded-lg opacity-50"></div>
              <div className="relative bg-gray-800 rounded-lg p-8 border border-gray-700">
                <div className="flex flex-col items-center space-y-4">
                  <Database className="h-12 w-12 text-white mb-4" />
                  <div className="w-full space-y-2">
                    <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-700 rounded w-full"></div>
                    <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                  </div>
                  <Workflow className="h-8 w-8 text-white mt-4" />
                  <div className="w-full space-y-2 mt-4">
                    <div className="h-2 bg-gray-600 rounded w-full"></div>
                    <div className="h-2 bg-gray-600 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

