module.exports = {
  title: "GSMA Interoperability Test Platform Documentation",
  tagline: "",
  url: "https://docs.itp.gsmainclusivetechlab.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "gsmainclusivetechlab", // Usually your GitHub org/user name.
  projectName: "interop-docs", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["properties", "ini"],
    },
    navbar: {
      title: "ITP - Interoperability Test Platform - Documentation",
      // logo: {
      //   alt: 'ITP logo',
      //   src: 'img/logo.png',
      // },
      // links: [
      //   {
      //     to: 'docs/doc1',
      //     activeBasePath: 'docs',
      //     label: 'Docs',
      //     position: 'left',
      //   },
      //   {to: 'blog', label: 'Blog', position: 'left'},
      //   {
      //     href: 'https://github.com/facebook/docusaurus',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Inclsuive Tech Lab',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/doc1',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Interoperability Test Platform',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © 2020 GSMA . All rights reserved.`,
    },
    announcementBar: {
      id: 'archive_notice',
      content:
          'This project has been archived as of the 31st of March 2024. Please contact inclusivetechlab@gsma.com for more information.',
      backgroundColor: '#EBDDAD',
      textColor: '#000000',
      isCloseable: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Set this value to '/'.
          // homePageId: "home", // Set to existing document id.
          // Please change this to your repo.
          // editUrl:
          //   "https://github.com/gsmainclusivetechlab/interop-docs/blob/develop/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ]
};
