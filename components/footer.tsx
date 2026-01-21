"use client";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Confer. Tous droits réservés.
          </p>

          {/* Lien optionnel */}
          <p className="text-sm text-gray-400">
            Partenaire opérationnel des PME
          </p>
        </div>
      </div>
    </footer>
  );
}
