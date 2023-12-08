/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require('./proxy'); 

// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Default Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//     author: `@gatsbyjs`,
//     siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
//   },
//   plugins: [
    
//     {
//       resolve: "gatsby-source-strapi",
//        options: {
//          apiURL: "http://127.0.0.1:1337",
//          //accessToken:"da4837945768265699d896d9dd155d69e12ef72b515dd0c1b6395b7cfe4ebe958ac7700c35c46ad1185c32913c0c7a5366b3a0fa346290fe96e825fe7856a6e9159c9e349657d3a530bd27082f552b6a318c0f344def542db360f53801ba4bd57cfa42deb71620a955771f55171d33ecf574c8d81a765eed0de5e12a0c204fa2", // Replace with your Strapi API URL
//          accessToken:"aafee04ac4070825403c802c442b423c4a5b1f19673af3ab8e00c8313e87b77dd0351016b97a860bb58177fcb5d0f904e8ec8b95523b91b1406d3cdc7a604405ad95559734e74cfdc6a80783c6faae0dd90af3b2f1d04fcf85d008253b63f5cb890ec18a4b5da08e56cbfa4a72f31baa02c589fd070a483c8658134f0700b2d3",
//          contentTypes: ['product' ], // Optional: Specify content types to fetch
//        },
//  }
// // ,
//  `gatsby-plugin-image`,

//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
// //     `gatsby-transformer-sharp`,
// //     `gatsby-plugin-sharp`,
// //     {
// //       resolve: `gatsby-plugin-manifest`,
// //       options: {
// //         name: `gatsby-starter-default`,
// //         short_name: `starter`,
// //         start_url: `/`,
// //         background_color: `#663399`,
// //         // This will impact how browsers show your PWA/website
// //         // https://css-tricks.com/meta-theme-color-and-trickery/
// //         // theme_color: `#663399`,
// //         display: `minimal-ui`,
// //         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
// //       },
// //     },
    
//   ],
// }

module.exports = {
  siteMetadata: {
    title: `Your Gatsby Site`,
    description: `A Gatsby site connected to Strapi.`,
    author: `Your Name`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://127.0.0.1:1337`, 
        accessToken: 'aafee04ac4070825403c802c442b423c4a5b1f19673af3ab8e00c8313e87b77dd0351016b97a860bb58177fcb5d0f904e8ec8b95523b91b1406d3cdc7a604405ad95559734e74cfdc6a80783c6faae0dd90af3b2f1d04fcf85d008253b63f5cb890ec18a4b5da08e56cbfa4a72f31baa02c589fd070a483c8658134f0700b2d3',
        // Replace with your Strapi API URL
        queryLimit: 1000, // Optional, increase if you have a large number of content entries
        collectionTypes: [
          // Define the content types you want to fetch from Strapi
          'product', // Adjust this to your content types in Strapi
          'blog',
          'review'
          // Add other content types as needed
        ],
       
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
    // Other Gatsby plugins
    // //  `gatsby-plugin-image`,

    // ...
  ],
};




