module.exports = conf =>
  conf.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'src/app/**/*.spec.ts',
    ],
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/app/**/*.spec.ts': ['webpack'],
    },
    webpack: require('./webpack.config'),
    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-phantomjs-launcher'),
    ]
  });
