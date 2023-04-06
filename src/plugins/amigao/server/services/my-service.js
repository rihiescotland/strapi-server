"use strict";

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    strapi.log.info('🚀🚀🚀🚀🚀🚀🚀');

    return "Welcome to Strapi 🚀";
  },
  async sendSendGridEmail() {
    console.log('My controller');
  },
});
