import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Method } from "@/components/method";
import { Accompagnement } from "@/components/accompagnement";
import { ServiceEquity } from "@/components/service-equity";
import { BaikalSection } from "@/components/baikal-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <Method />
      <Accompagnement />
      <ServiceEquity />
      <BaikalSection />
      <Footer />
    </main>
  );
}
