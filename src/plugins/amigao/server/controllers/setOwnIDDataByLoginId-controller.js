'use strict';

const getService = () => {
  return strapi.plugin('amigao').service('setOwnIDDataByLoginIdService');
}

module.exports = ({ strapi }) => ({
    index(ctx) {
      ctx.body = strapi
        .plugin('amigao')
        .service('setOwnIDDataByLoginIdService')
        .setOwnIDDataByLoginId(ctx);
    },
    async postId(ctx) {
      try {
          ctx.body = await getService().setOwnIDDataByLoginId(ctx);
      } catch (err) {
          ctx.throw(500, err);
      }
  },
  });