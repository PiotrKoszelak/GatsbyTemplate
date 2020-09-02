module.exports = {
  siteMetadata: {
    title: 'gatsbytemplate',
    description: 'gatsbytemplate - starter for gatsby',
    author: 'koszelak.piotr@gmail.com',
    siteUrl: 'https://github.com/PiotrKoszelak/GatsbyTemplate',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
