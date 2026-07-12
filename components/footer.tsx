"use client";

import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Confer. Tous droits réservés.
          </p>

          {/* Réseaux + baseline */}
          <div className="flex items-center gap-5">
            <span className="text-sm text-gray-400">
              Partenaire opérationnel des PME
            </span>
            <a
              href="https://www.linkedin.com/company/111069364/"
              target="_blank"
              rel="noopener"
              aria-label="Confer sur LinkedIn"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
