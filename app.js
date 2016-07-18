'use strict';

module.exports = function(app) {
  const coreMiddleware = app.config.coreMiddleware;
  coreMiddleware.push('userservice');
};
