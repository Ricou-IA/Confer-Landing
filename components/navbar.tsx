"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl lg:text-3xl font-bold text-black">
              Confer
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#expertise"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="#baikal"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Baïkal Technology
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="hidden sm:flex"
          >
            <Link href="#contact">Audit de reprise</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}

