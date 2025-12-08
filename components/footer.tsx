"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Confer. Tous droits réservés.
          </p>
          <Link
            href="#academique"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            Espace Académique
          </Link>
        </div>
      </div>
    </footer>
  );
}

