module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        avatar: 'avatar.jpg'
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Tech, productivity and life.`,
    author: `Alex Lapchenko`,
    description: `My site description...`,
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
