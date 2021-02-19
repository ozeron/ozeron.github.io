module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        avatar: 'avatar.jpg'
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://alexlapchenko.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-favicon'
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Tech, productivity and life.`,
    author: `Alex Lapchenko`,
    description: `My site description...`,
    siteUrl: `https://alexlapchenko.com`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ethernalnow`,
      },
      {
        name: `github`,
        url: `https://github.com/ozeron`,
      },
    ],
  },
}
