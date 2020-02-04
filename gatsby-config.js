module.exports = {
  siteMetadata: {
    title: `Sergey Pogorelov's blog`,
    name: `Pogorelovs`,
    siteUrl: `http://pogorelovs.com`,
    description: `Sergey Pogorelov's blog`,
    hero: {
      heading: `Welcome to my blog, here I write my thoughts and notes about the development.`,
      maxWidth: 640,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/sergeioff`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/sergeioff`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
        mailchimp: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sergey Pogorelov's blog`,
        short_name: `Pogorelovs`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    'gatsby-plugin-cname',
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: 'https://pogorelovs.us19.list-manage.com/subscribe/post?u=142dd8f8b60869d2d72caa67d&amp;id=06768ce50e',
      },
    },
  ],
};
