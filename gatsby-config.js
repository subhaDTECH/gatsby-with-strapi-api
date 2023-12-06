/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('./proxy'); 

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-strapi",
       options: {
         apiURL: "http://127.0.0.1:1337",
         accessToken:"da4837945768265699d896d9dd155d69e12ef72b515dd0c1b6395b7cfe4ebe958ac7700c35c46ad1185c32913c0c7a5366b3a0fa346290fe96e825fe7856a6e9159c9e349657d3a530bd27082f552b6a318c0f344def542db360f53801ba4bd57cfa42deb71620a955771f55171d33ecf574c8d81a765eed0de5e12a0c204fa2", // Replace with your Strapi API URL
         contentTypes: ['products'], // Optional: Specify content types to fetch
       },
 },
 `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
  ],
}


