'use strict';

const path = require('path');
const fs = require('fs-extra');
const _ = require('lodash');

const staticFileMiddleware = require('./middlewares/staticFiles');

module.exports = async ({ strapi }) => {
  await staticFileMiddleware({ strapi });
  await generateJson();
  // await generateHtml();
  // await generateApp();
};

async function generateJson() {
  const jsonData = fs.readFileSync(path.resolve(__dirname, 'public', 'assetlinks.json'), 'utf8');
  const filledJsData = _.template(jsonData)({
    backendUrl: strapi.config.server.url,
  });
  const extensionsPath = strapi.dirs.extensions || strapi.dirs.dist.extensions;
  const bbbJsPath = path.resolve(extensionsPath, 'strapi-well-known', 'public', 'assetlinks.json');
  await fs.ensureFile(bbbJsPath);
  await fs.writeFile(bbbJsPath, filledJsData);
}
// async function generateHtml() {
//   const jsonData = fs.readFileSync(path.resolve(__dirname, 'public', 'welcome', 'index.html'), 'utf8');
//   const filledJsData = _.template(jsonData)({
//     backendUrl: strapi.config.server.url,
//   });
//   const extensionsPath = strapi.dirs.extensions || strapi.dirs.dist.extensions;
//   const bbbJsPath = path.resolve(extensionsPath, 'welcome', 'index.html');
//   await fs.ensureFile(bbbJsPath);
//   await fs.writeFile(bbbJsPath, filledJsData);
// }
// async function generateApp() {
//   const jsonData = fs.readFileSync(path.resolve(__dirname, 'public', 'mobile', 'www', 'index.html'), 'utf8');
//   const filledJsData = _.template(jsonData)({
//     backendUrl: strapi.config.server.url,
//   });
//   const extensionsPath = strapi.dirs.extensions || strapi.dirs.dist.extensions;
//   const bbbJsPath = path.resolve(extensionsPath, 'mobile', 'index.html');
//   await fs.ensureFile(bbbJsPath);
//   await fs.writeFile(bbbJsPath, filledJsData);
// }