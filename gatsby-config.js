module.exports = {
  siteMetadata: {
    title: "Adrian Navarrete || Home",
    description:
      "Adrian Navarrete Portfolio Full Stack Software Developer",
    siteUrl: "https://www.adrian-navarrete.com",
    author: "adriannavarrete",
    twitter: ""
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adrian Navarrete`,
        short_name: `AdrianNavarrete`,
        start_url: `/`,
        background_color: `#337ab7`,
        theme_color: `#337ab7`,
        display: `fullscreen`, // This path is relative to the root of the site.
        icon: `src/static/logo/favicon.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-102315844-1",
        head: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};
