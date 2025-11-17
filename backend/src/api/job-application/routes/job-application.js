'use strict';

/**
 * job-application router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::job-application.job-application', {
    routes: [
        {
            method: 'POST',
            path: '/apply',
            handler: 'job-application.apply',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
});
