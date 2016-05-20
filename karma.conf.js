'use strict';

module.exports = require('wix-web-build').karma.config({
  files: [
    'node_modules/phantomjs-polyfill/bind-polyfill.js',
  ]
});
