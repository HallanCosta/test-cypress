const path = require("path");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const getPublicPath = require('./publicPath');
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
require("babel-polyfill");

module.exports = (env, argv) => ({
  entry: ["babel-polyfill", "./src/js/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../"),
    publicPath: getPublicPath(''),
  },
  optimization: {
    minimize: false
  },
  resolve: { // babel-plugin-webpack-alias
    alias: {
        '@app': path.join(__dirname, './src/js'), // name from app to folder root
        '@styles': path.join(__dirname, './src/sass/style.scss')
    }
  },
  plugins:
  [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3001,
        proxy: 'http://estacionamento.test',
        files: ["../**/*.php", "../**/*.js"],
        notify: true
      },
      {
        reload: true,
        injectCss: true
      }
    ),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module:
  {
    rules: [
      /* JS */
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      /* CSS */
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv({
                    stage: 3,
                    features: {
                      'nesting-rules': true
                    },
                    browsers: [
                      'ie 8',
                      'last 2 versions'
                    ]
                  }),
                  autoprefixer({
                    overrideBrowserslist: [
                      'ie 8', 
                      'last 2 versions'
                    ],
                  }),
                ],
              }
            }
          },
          'sass-loader'
        ],
      },
    ],
  },
});