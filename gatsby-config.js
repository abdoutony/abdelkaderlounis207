module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: `Abdelkader Lounis Portfolio`,
    description: `This is a portfolio website where i show my skills and what i can do.`,
    author: `Abdelkader Lounis`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-background-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "skills",
        path: "./content/skills",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: "./src/fonts/",
      },
      __key: "fonts",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abdelkader Lounis Portfolio`,
        short_name: `AbdelkaderLounis`,
        start_url: `/`,
        background_color: `#01012B`,
        theme_color: `#01012B`,
        display: `minimal-ui`,
        icon: "src/images/favicon/favicon-32x32.png",
      },
    },
  ],
}
