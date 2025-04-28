// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HVFC Information Hub",
  tagline:
    "Find everything you need to enjoy, support, and be part of Hanworth Villa FC - whether you're a player, coach, volunteer, parent, or young player.",
  favicon: "img/favicon.ico",

  url: "https://info.hvfc.club",
  baseUrl: "/",

  organizationName: "HanworthVillaFC", // GitHub org/user name
  projectName: "hvfc-info-hub", // GitHub repo name
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/HanworthVillaFC/hvfc-info-hub/edit/main/",
        },
        blog: false, // Disable blog for now, you can enable later
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.svg", // Replace with your image
      navbar: {
        title: "HVFC Info Hub",
        logo: {
          alt: "Hanworth Villa FC Logo",
          src: "img/logo.svg", // Replace with your logo
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "manualSidebar", // Match your updated sidebar name
            position: "left",
            label: "Club Manual",
          },
          {
            href: "https://hanworthvilla.co.uk", // Main club site
            label: "Club Website",
            position: "right",
          },
          {
            href: "https://github.com/HanworthVillaFC/hvfc-info-hub",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Safeguarding",
                to: "/docs/safeguarding",
              },
              {
                label: "Health & Safety",
                to: "/docs/health-safety",
              },
              {
                label: "Contact Us",
                to: "/docs/people/contact-directory.md",
              },
            ],
          },
          {
            title: "Club",
            items: [
              {
                label: "Hanworth Villa FC Website",
                href: "https://hanworthvilla.co.uk",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hanworth Villa FC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
