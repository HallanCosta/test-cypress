module.exports = {
  parser: false,
  plugins:
  {
    'postcss-preset-env': {
      browsers: [
        "chrome >= 40", "ie >= 8"
      ],
    },
    'cssnano': {},
  },
};