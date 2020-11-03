const sortCSSmq = require('sort-css-media-queries');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker')({
      sort: sortCSSmq.desktopFirst
    }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
