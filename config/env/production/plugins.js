module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  "strapi-plugin-fcm": {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-fcm",
  },
  "strapi-stripe": {
    enabled: true,
    resolve: "./src/plugins/strapi-stripe",
  },
  amigao: {
    enabled: true,
    resolve: "./src/plugins/amigao",
  },
  "strapi-plugin-passwordless": {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-passwordless",
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "roicoroy@mercadoamigao.com",
        defaultReplyTo: "roicoroy@mercadoamigao.com",
        testAddress: "roicoroy@mercadoamigao.com",
      },
    },
  },
  // email: {
  //   config: {
  //     provider: 'mailgun',
  //     providerOptions: {
  //       key: env('MAILGUN_API_KEY'), // Required
  //       domain: env('MAILGUN_DOMAIN'), // Required
  //       url: env('MAILGUN_URL'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
  //     },
  //     settings: {
  //       defaultFrom: 'roicoroy@mercadoamigao.com',
  //       defaultReplyTo: 'roicoroy@mercadoamigao.com',
  //     },
  //   },
  // },
  // email: {
  //   config: {
  //     provider: "nodemailer",
  //     providerOptions: {
  //       host: env("SMTP_HOST"),
  //       port: env("SMTP_PORT"),
  //       auth: {
  //         user: env("SMTP_USERNAME"),
  //         pass: env("SMTP_PASSWORD"),
  //       },
  //     },
  //     settings: {
  //       defaultFrom: "roicoroy@mercadoamigao.com",
  //       defaultReplyTo: "roicoroy@mercadoamigao.com",
  //       testAddress: "roicoroy@mercadoamigao.com",
  //     },
  //   },
  // },
});
