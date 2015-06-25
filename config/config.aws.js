'use strict';

module.exports = function(config, options) {
  config.aws = {
    sync: false,
    gzip: false,
    options: {
      params: {}
    },
    headers: {
      'Cache-Control': 'max-age=315360000, no-transform, public'
    }
  };
};
