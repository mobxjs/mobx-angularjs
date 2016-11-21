/* global __dirname, process */

const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin       = require('clean-webpack-plugin');
const environmentsFile  = require('./environments.json');
const appPath           = path.join(__dirname, 'app');
const distPath          = path.join(__dirname, 'dist');
const exclude           = /node_modules/;

function getENVReplacements() {
  const replacements = environmentsFile[process.env.NODE_ENV];
  const result       = {};

  /* eslint-disable angular/json-functions */
  Object.keys(replacements)
    .forEach((key) => result[key] = JSON.stringify(replacements[key]));

  return result;
}

const config = {

  // The base directory for resolving `entry` (must be absolute path)
  context: appPath,

  entry: {
    app: 'app.js',
    vendor: [
      'angular',
      'angular-ui-router'
    ]
  },

  output: {
    path: distPath,
    publicPath: '/',
    filename: 'bundle.[hash].js'
  },

  plugins: [

    // Generate index.html with included script tags
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'app/index.html',
    }),

    // Remove build related folders
    new CleanPlugin(['dist']),

    // Do not output to dist if there are errors
    new webpack.NoErrorsPlugin(),

    // Global replacements for each environment
    new webpack.DefinePlugin(getENVReplacements()),
  ],

  // Enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: [appPath]
  },

  module: {
    loaders: [

      // Transpile ES6 and annotate AngularJS dependencies
      {
        test: /\.js$/,
        loaders: [
          'ng-annotate',
          'babel'
        ],
        exclude
      },

      // SCSS
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style',
          'css',
          'autoprefixer',
          `sass?includePaths[]=${appPath}`
        ]
      },

      // JSON
      {
        test: /\.json$/,
        loader: 'json',
        exclude
      },

      // Allow `require`ing image/font files (also when included in CSS)
      // Inline assets under 5kb as Base64 data URI, otherwise uses `file-loader`
      {
        test: /\.(eot|woff2?|ttf|otf)(\?.*)?$/i,
        loader: 'url?limit=5120&name=[path][name].[hash].[ext]'
      },

      {
        test: /\.(jpe?g|png|gif|svg)(\?.*)?$/i,
        loader: 'url?limit=5120&name=[path][name].[hash].[ext]'
      },

      // Create AngularJS templates from HTMLs
      {
        test: /\.html$/,
        loaders: [
          `ngtemplate?relativeTo=${appPath}`,
          'html'
        ]
      }
    ]
  },

  // Settings for webpack-dev-server
  // `--hot` and `--progress` must be set using CLI
  devServer: {
    contentBase: './app',
    colors: true,
    noInfo: true,
    inline: true,
    historyApiFallback: true
  }

};

if (process.env.NODE_ENV === 'development') {
  config.devtool = '#inline-source-map';
}

if (process.env.NODE_ENV !== 'test') {
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName: */ 'vendor',
      /* filename: */ 'vendor.[hash].js'
    )
  );
}

module.exports = config;
