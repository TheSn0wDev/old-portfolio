module.exports = {
  pathPrefix: '/old-portfolio',
  siteMetadata: {
    title: `Clément OZOR, étudiant développeur | ClémentOS`,
    siteUrl: `https://sn00ww.github.io/old-portfolio/`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    "gatsby-plugin-sass", "gatsby-plugin-react-helmet"
  ],
};
