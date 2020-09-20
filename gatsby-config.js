module.exports = {
  siteMetadata: {
    title: `Jolimail`,
    description: `Beautiful responsive emails, designed instantly. Design, copy, send.`,
    author: `@JeremieDrouet`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 'Patua One',
                variants: ['400'],
              },
              {
                family: 'Open Sans',
                variants: ['400'],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Responsive transactional emails`,
        short_name: `Jolimail`,
        start_url: `/`,
        background_color: `#4E84BF`,
        theme_color: `#4E84BF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
