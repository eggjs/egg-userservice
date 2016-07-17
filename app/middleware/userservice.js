'use strict';

module.exports = function(options) {
  return function* (next) {
    if (!this.user && options.service.getUser) {
      this.user = yield options.service.getUser(this);
    }

    if (!this.userId && options.service.getUserId) {
      this.userId = options.service.getUserId(this);
    }

    yield next;
  };
};
