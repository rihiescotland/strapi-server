'use strict';

const authRoutes = require('./setOwnIDDataByLoginId');

module.exports = {
  type: 'content-api',
  routes: [...authRoutes],
};