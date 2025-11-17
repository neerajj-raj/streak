'use strict';

const nodemailer = require('nodemailer');

module.exports = {
  async sendEmail(to, subject, text) {
    try {
      await strapi.plugins['email'].services.email.send({
        to,
        subject,
        text,
        // If you want to use HTML content, use `html` instead of `text`
        // html: '<p>Your HTML content</p>',
      });
    } catch (error) {
      strapi.log.error('Error sending email:', error);
    }
  },
};
