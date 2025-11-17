
const nodemailer = require('nodemailer');

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env('DO_SPACE_ACCESS_KEY'),
        secret: env('DO_SPACE_SECRET_KEY'),
        endpoint: env('DO_SPACE_ENDPOINT'),
        space: env('DO_SPACE_BUCKET'),

      }
    },
  },

  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'live.smtp.mailtrap.io',
        port: 587,
        auth: {
          user: 'api',
          pass: '738c6f0cfd91edcf85d03cac63245acd',
        },
      },
      settings: {
        defaultFrom: 'no-reply@iocod.com', // Replace with your default from email
        defaultReplyTo: 'aswathim@iocod.com', // Replace with your default reply-to email
      },
    },
  },



})
