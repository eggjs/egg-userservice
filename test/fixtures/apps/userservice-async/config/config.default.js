'use strict';

exports.userservice = {
  service: {
    getUserId(ctx) {
      return ctx.user && ctx.user.uid;
    },
    async getUser(ctx) {
      if (!ctx.query.uid || !ctx.query.name) {
        return null;
      }
      return {
        uid: ctx.query.uid,
        name: ctx.query.name,
      };
    },
  },
};

exports.keys = 'keys';
