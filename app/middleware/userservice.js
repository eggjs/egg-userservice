'use strict';

module.exports = (options, app) => {
  // both support generator function and async function
  if (options.service.getUser) {
    options.service.getUser = app.toAsyncFunction(options.service.getUser);
  }
  return async function userservice(ctx, next) {
    if (!ctx.user && options.service.getUser) {
      ctx.user = await options.service.getUser(ctx);
    }

    if (!ctx.userId && options.service.getUserId) {
      ctx.userId = options.service.getUserId(ctx);
    }

    return next();
  };
};
