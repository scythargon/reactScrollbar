const webpackDevConfig = require('./webpack.dev.config.js');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS', 'Chrome' ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './test/tests.bundle.js'
    ],
    frameworks: [ 'mocha' ],
    preprocessors: {
      './test/tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha' ],
    singleRun: true,
    webpack: {
        devtool: 'inline-source-map',
        resolve: {
            modulesDirectories: ['node_modules', 'bower_components'],
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                { test: /\.jsx?$/, loader: 'babel' },
                { test: /\.less$/, loader: 'style!css!less' }
            ]
        }
    },
    webpackServer: {
      noInfo: true
    }
  });
};