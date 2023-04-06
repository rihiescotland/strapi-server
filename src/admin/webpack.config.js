"use strict";


const firebase = require("firebase/app");

const config = {
  firebase: {
    apiKey: "AIzaSyAKPqlzZDnZszbdySKHlM3-Fgw76MMvF-o",
    authDomain: "ion-amigao.firebaseapp.com",
    projectId: "ion-amigao",
    storageBucket: "ion-amigao.appspot.com",
    messagingSenderId: "247045122799",
    appId: "1:247045122799:web:f348b0fa0c34720247891a",
    measurementId: "G-CHDXVMWZFR"
  },
};

const admin = require("firebase-admin");
// const serviceAccount = require("../../ion-amigao-firebase-adminsdk-1kqju-f52918fb18.json");


/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {

  firebase.initializeApp(config);

  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount),
  // });
  // strapi.firebase = admin;

  return config;
};
