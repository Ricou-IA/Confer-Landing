import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueProposition } from "@/components/value-proposition";
import { BaikalSection } from "@/components/baikal-section";
import { AboutFounder } from "@/components/about-founder";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueProposition />
      <BaikalSection />
      <AboutFounder />
      <ContactSection />
      <Footer />
    </main>
  );
}
