module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://gsmainclusivetechlab.github.io/interop-docs/',
  //cname: docs.interop.gsmainclusivetechlab.io,
  baseUrl: '',
  favicon: 'img/favicon.ico',
  organizationName: 'gsmainclusivetechlab', // Usually your GitHub org/user name.
  projectName: 'interop-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ITP - Interoperability Test Platform - Documentation',
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
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/doc1',
    //         },
    //         {
    //           label: 'Second Doc',
    //           to: 'docs/doc2',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: 'blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Set this value to '/'.
          // Please change this to your repo.
          editUrl:
            'https://github.com/gsmainclusivetechlab/interop-docs/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
