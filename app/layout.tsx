import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://confer.fr"),
  title: {
    default: "Confer — Partenaire opérationnel des PME",
    template: "%s | Confer",
  },
  description:
    "Détecter. Évaluer. Corriger. Nous accompagnons les PME pour structurer leurs process et libérer leur potentiel de croissance.",
  keywords: [
    "conseil PME",
    "optimisation process",
    "accompagnement dirigeants",
    "transformation PME",
    "audit opérationnel",
    "consultant PME",
    "amélioration continue",
    "restructuration entreprise",
  ],
  authors: [{ name: "Confer" }],
  creator: "Confer",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://confer.fr",
    siteName: "Confer",
    title: "Confer — Partenaire opérationnel des PME",
    description:
      "On ne digitalise pas le chaos. On pose les bonnes questions. Vous trouvez les réponses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Confer - Détecter. Évaluer. Corriger.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Confer — Partenaire opérationnel des PME",
    description: "On ne digitalise pas le chaos.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
