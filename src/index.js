'use strict';
// const firebase = require("firebase/app");

// const config = {
//   firebase: {
//     apiKey: "AIzaSyAKPqlzZDnZszbdySKHlM3-Fgw76MMvF-o",
//     authDomain: "ion-amigao.firebaseapp.com",
//     projectId: "ion-amigao",
//     storageBucket: "ion-amigao.appspot.com",
//     messagingSenderId: "247045122799",
//     appId: "1:247045122799:web:f348b0fa0c34720247891a",
//     measurementId: "G-CHDXVMWZFR"
//   },
// };

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {

    // const emailSender = await strapi.plugins['email'].services.email.send({
    //   to: 'sendgridtesting@gmail.com',
    //   from: 'roicoroy@yahoo.com.br', //e.g. single sender verification in SendGrid
    //   subject: '<<SG-11710215fdV>>',
    // });

    // firebase.initializeApp(config);
  },
};
