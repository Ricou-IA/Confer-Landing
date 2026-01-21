import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question ? Un projet ? Un dossier a soumettre ? Contactez Confer pour un accompagnement sur-mesure de votre PME.",
  openGraph: {
    title: "Contact | Confer",
    description: "Contactez-nous pour discuter de votre projet.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Nous contacter
            </h1>
            <p className="text-lg text-gray-600">
              Une question ? Un projet ? Un dossier a soumettre ?
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-black mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="relative z-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-black mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="relative z-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-black mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="relative z-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none bg-white"
                placeholder="Decrivez votre projet ou votre demande..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
