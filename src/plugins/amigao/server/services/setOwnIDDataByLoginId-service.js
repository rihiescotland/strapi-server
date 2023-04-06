"use strict";

const { getFetchParams } = require('@strapi/strapi/lib/core-api/service');

module.exports = ({ strapi }) => ({
  async setOwnIDDataByLoginId(ctx) {
    // const fetchParams = getFetchParams(params);
    console.log(ctx);
    // ctx.res.sendStatus(204);
    console.log("setOwnIDDataByLoginIdsetOwnIDDataByLoginId");
  },
});
