module.exports = {
    context: __dirname + "/lib",
    entry: "./ng-mobx",
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel']
      }]
    },
    output: {
      path: __dirname + "/dist",
      filename: "ng-mobx.js"
    }
};
