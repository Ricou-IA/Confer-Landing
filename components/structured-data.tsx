export function StructuredData() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Confer",
      description:
        "Partenaire opérationnel des PME. Détecter. Évaluer. Corriger. Audit, structuration des process et accompagnement des dirigeants.",
      url: "https://www.confer-sas.fr",
      logo: "https://www.confer-sas.fr/logo-watermark.svg",
      sameAs: ["https://www.linkedin.com/company/111069364/"],
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
      },
      serviceType: [
        "Conseil en gestion",
        "Audit opérationnel",
        "Accompagnement PME",
        "Optimisation des process",
        "Restructuration d'entreprise",
      ],
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      slogan: "On ne digitalise pas le chaos.",
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }
  