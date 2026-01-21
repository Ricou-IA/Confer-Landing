"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-watermark.svg"
              alt="Confer Logo"
              width={32}
              height={32}
              className="h-8 w-8 lg:h-10 lg:w-10"
            />
            <span className="font-serif text-2xl lg:text-3xl font-bold text-black">
              Confer
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/ressources"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Ressources
            </Link>
            <Link
              href="/projets"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Projets
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Nous contacter</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/ressources"
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ressources
              </Link>
              <Link
                href="/projets"
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </Link>
              <Button asChild className="w-full mt-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
