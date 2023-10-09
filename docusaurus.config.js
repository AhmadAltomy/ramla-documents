const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Ramla solutions",
  tagline: "Design, Build, Deploy, Manage, Monitor, and Scale applications",
  favicon: "img/favicon.ico",
  url: "https://docs.ramla.solutions",
  baseUrl: "/",
  organizationName: "ramlasolutions", // Usually your GitHub org/user name.
  projectName: "documents", // Usually your repo name.
  onBrokenLinks: "throw",

  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "templates",
        path: "templates",
        routeBasePath: "templates",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "kun",
        path: "kun",
        routeBasePath: "kun",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "jell",
        path: "jell",
        routeBasePath: "jell",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "jira",
        path: "jira",
        routeBasePath: "jira",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ]
  ],
  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Ramla",
        logo: {
          alt: "Ramla Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "defaultSidebar",
            position: "left",
            label: "Documents",
          },
          {
            position: "left",
            label: "Team Schedule",
            to: "/schedule",
          },
          {
            position: "left",
            label: "Templates",
            to: "/templates",
          },
          {
            position: "left",
            label: "Jira",
            to: "/jira",
          },
          {
            position: "left",
            label: "Kun",
            to: "/kun",
          },
          {
            position: "left",
            label: "Jell",
            to: "/jell",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ramlasolutions",
            label: "GitHub",
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
                label: "Documents",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/ramlasolutions",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ramla.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: ["@docusaurus/theme-live-codeblock", "@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
};

module.exports = config;
