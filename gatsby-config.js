module.exports = {
  siteMetadata: {
    title: `Anti Social`,
    description: `a message to all of you.`,
    author: `Jurrian Lammerts`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anti social`,
        short_name: `anti-social`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`source sans pro\:300,400,400i,700`, `pt sans`],
        display: "swap",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
