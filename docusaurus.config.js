// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Meosis",
  tagline: "Une formation complète pour la modification de votre site web",
  favicon: "img/logo-meosis.svg", //logo dans l'onglet du site

  // Set the production url of your site here
  url: "https://wiki.meosis.fr",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Meosis", // Usually your GitHub org/user name.
  projectName: "WikiMeosis", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          admonitions: {
            keywords: ['jerico-alert', 'info-jerico', 'note-jerico', 'success-jerico', 'tips-jerico'],
            extendDefaults: true,
          },
          sidebarPath: "./sidebars.js",

          editUrl: "https://github.com/RegisMeosis/wikimeosis/blob/main",
        },
        blog: {
          showReadingTime: true,

          editUrl: "https://github.com/RegisMeosis/wikimeosis/blob/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        content:
          "Découvrez notre nouveau site, votre guide pour gérer, éditer et mettre à jour votre site internet grace à Jerico. 🚀💻",
        backgroundColor: "#8dc641",
        textColor: "#091E42",
        isCloseable: true,
      },

      colorMode: {
        defaultMode: "light",
      },

      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },

      //Algolia
      algolia: {
        appId: "6GGICLXK18",
        apiKey: "310f8890606817bc04e4eaffb29c72ac",
        indexName: "meosis",
        /*contextualSearch: true,*/
        placeholder: "Jerico Search",
      },

      image: "img/meosis-jerico-miniature.jpg",
      navbar: {
        logo: {
          alt: "Logo du site",
          src: "img/logo-meosis.svg",
        },
        items: [
          {
            to: "/docs/category/découvrir-jerico",
            label: "Formation Jerico",
            position: "left",
          }, //topbar
          {
            href: "https://www.meosis.fr/",
            label: "Meosis",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
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
        //logo footer
        logo: {
          alt: "Meosis Logo",
          src: "img/logo-meosis.svg",
          href: "https://www.meosis.fr",
          width: 160,
          height: 51,
        },
      },
      //blocs de code
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
