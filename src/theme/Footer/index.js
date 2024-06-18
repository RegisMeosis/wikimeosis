import React from 'react';

const Footer = () => {
  const footerData = {
    style: "light",
    links: [
      {
        title: "Docs",
        items: [
          {
            label: "Formation Jerico",
            to: "/docs/category/découvrir-jerico",
          },
        ],
      },
      {
        title: "Nos autres sites",
        items: [
          {
            label: "Meosis Recrutement",
            href: "https://www.meosis-recrutement.fr/",
          },
          {
            label: "MeoProd",
            href: "https://www.meoprod.fr/",
          },
          {
            label: "Meo&Co",
            href: "https://meoandco.fr/",
          },
        ],
      },
      {
        title: "Notre réseau",
        items: [
          {
            label: "Agence Web à Besançon",
            href: "https://www.meosis.fr/notre-societe/agence-web-besancon.html",
          },
          {
            label: "Agence Web à Bordeaux",
            href: "https://www.meosis.fr/notre-societe/agence-web-bordeaux.html",
          },
          {
            label: "Agence Web à Dijon",
            href: "https://www.meosis.fr/notre-societe/agence-web-a-dijon.html",
          },
          {
            label: "Agence Web à Lyon",
            href: "https://www.meosis.fr/notre-societe/agence-web-lyon.html",
          },
          {
            label: "Agence Web à Montpellier",
            href: "https://www.meosis.fr/notre-societe/agence-web-montpellier.html",
          },
          {
            label: "Agence Web à Nancy",
            href: "https://www.meosis.fr/notre-societe/agence-web-nancy.html",
          },
          {
            label: "Agence Web à Nantes",
            href: "https://www.meosis.fr/notre-societe/agence-web-a-nantes.html",
          },
          {
            label: "Agence Web à Poitiers",
            href: "https://www.meosis.fr/notre-societe/agence-web-a-poitiers.html",
          },
          {
            label: "Agence Web à Toulouse",
            href: "https://www.meosis.fr/notre-societe/agence-web-toulouse.html",
          },
          {
            label: "Agence Web Nationale",
            href: "https://www.meosis.fr/notre-societe/agence-web-nationale.html",
          },
        ],
      },
      {
        title: "Prestations",
        items: [
          {
            label: "Création de site internet",
            href: "https://www.meosis.fr/prestations/creation-site-internet.html",
          },
          {
            label: "Création de blog",
            href: "https://www.meosis.fr/prestations/creation-blog.html",
          },
          {
            label: "Outil Jerico",
            href: "https://www.meosis.fr/prestations/outil-jerico.html",
          },
          {
            label: "Référencement Google",
            href: "https://www.meosis.fr/prestations/referencement-google.html",
          },
          {
            label: "Création de logo",
            href: "https://www.meosis.fr/prestations/creation-logos.html",
          },
          {
            label: "Suivi Client",
            href: "https://www.meosis.fr/prestations/suivi-client.html",
          },
          {
            label: "Vidéos d’entreprise",
            href: "https://www.meoprod.fr/",
          },
        ],
      },
      {
        title: "Liens utiles",
        items: [
          {
            label: "FAQ",
            href: "https://www.meosis.fr/faq.html",
          },
          {
            label: "Avis Clients",
            href: "https://www.meosis.fr/avis.html",
          },
          {
            label: "Les Actualités",
            href: "https://www.meosis.fr/actualites.html",
          },
          {
            label: "Nous contacter",
            href: "https://www.meosis.fr/contact.html",
          },
          {
            label: "Mentions Légales & Politique de confidentialité",
            href: "/mentions-legales",
          },
        ],
      },
    ],
    copyright: `©Meosis ${new Date().getFullYear()} - 1 rue de Lugano 68180 Horbourg-Wihr.`,
    logo: {
      alt: "Meosis Logo",
      src: "img/logo-meosis.svg",
      href: "https://www.meosis.fr",
      width: 160,
      height: 51,
    },
  };

  return (
    <footer className="bg-gris2 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {footerData.links.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <a href={item.href || item.to} className="hover:text-gray-300">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a href={footerData.logo.href}>
            <img src={footerData.logo.src} alt={footerData.logo.alt} width={footerData.logo.width} height={footerData.logo.height} />
          </a>
        </div>

        <p className="text-center text-sm mt-6">{footerData.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
