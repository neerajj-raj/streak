'use strict';

/**
 * latest-update service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-update.latest-update');
