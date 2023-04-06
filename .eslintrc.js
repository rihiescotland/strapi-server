'use strict';

const frontPaths = ['./src/plugins/strapi-stripe/admin/src/**/*.js', './src/plugins/strapi-stripe/admin/src/**/**/*.js'];

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  overrides: [
    {
      files: ['./src/plugins/strapi-stripe/server/**/*.js', './src/plugins/strapi-stripe/server/*.js'],
      excludedFiles: frontPaths,
      ...require('./.eslintrc.back.js'),
    },
    {
      files: frontPaths,
      ...require('./.eslintrc.front.js'),
    },
  ],
};
