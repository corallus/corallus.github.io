const path = require('path')
let fsApi = require('netlify-cms-backend-fs/dist/fs/fs-express-api')

module.exports = {
  developMiddleware: fsApi,
  siteMetadata: {
    title: `Portfolio`,
    description: ``,
    author: `Vincent van Bergen`,
    github: `https://github.com/corallus`,
    linkedIn: `https://www.linkedin.com/in/vincent-van-bergen/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('./static/media'),
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('./src/content/education'),
        name: 'education',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve('./src/images'),
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        file: path.resolve('./src/style/theme.scss'),
        data: '@import "variables.scss";',
        includePaths: [
          path.resolve('./src/style'),
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/init.js`,
        manualInit: true,
        enableIdentityWidget: false,
        publicPath: 'admin',
        htmlTitle: 'Content Manager'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
