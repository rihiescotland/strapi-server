/* eslint-disable node/no-missing-require */

'use strict';

const path = require('path');
const koaStatic = require('koa-static');

module.exports = async ({ strapi }) => {
  strapi.server.routes([
    {
      method: 'GET',
      path: '/.well-known/(.*)',
      async handler(ctx, next) {
        ctx.url = path.basename(`${ctx.url}/assetlinks.json`);
        const folderPath = strapi.dirs.extensions || strapi.dirs.dist.extensions;
        const staticFolder = path.resolve(folderPath, 'strapi-well-known', 'public');
        return koaStatic(staticFolder)(ctx, next);
      },
      config: {
        auth: false,
      },
    },
    // {
    //   method: 'GET',
    //   path: '/(.*)',
    //   async handler(ctx, next) {
    //     ctx.url = path.basename(`${ctx.url}/index.html`);
    //     const folderPath = strapi.dirs.extensions || strapi.dirs.dist.extensions;
    //     const staticFolder = path.resolve(folderPath, 'welcome');
    //     return koaStatic(staticFolder)(ctx, next);
    //   },
    //   config: {
    //     auth: false,
    //   },
    // },
    // {
    //   method: 'GET',
    //   path: '/app/(.*)',
    //   async handler(ctx, next) {
    //     ctx.url = path.basename(`${ctx.url}/index.html`);
    //     const folderPath = strapi.dirs.extensions || strapi.dirs.dist.extensions;
    //     const staticFolder = path.resolve(folderPath, 'mobile', 'www');
    //     return koaStatic(staticFolder)(ctx, next);
    //   },
    //   config: {
    //     auth: false,
    //   },
    // },
  ]);
};
