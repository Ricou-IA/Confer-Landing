import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Nous contacter
            </h1>
            <p className="text-lg text-gray-600">
              Une question ? Un projet ? Un dossier à soumettre ?
            </p>
          </div>

          {/* Formulaire */}
          <form className="space-y-6">
            {/* Nom */}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                placeholder="votre@email.com"
              />
            </div>

            {/* Message */}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              />
            </div>

            {/* Bouton */}
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
