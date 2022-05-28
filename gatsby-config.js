module.exports = {
  siteMetadata: {
    title: `Clément OZOR, étudiant développeur | ClémentOS`,
    siteUrl: `https://www.yourdomain.tld`
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
  pathPrefix: "/portfolio",
};
