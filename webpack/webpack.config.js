/* eslint-env node */

const
    MERGE = require(`webpack-merge`),
    BASE_CONFIG = require(`./webpack.config.base`),
    DEV_CONFIG = require(`./webpack.config.dev`),
    PROD_CONFIG = require(`./webpack.config.prod`);

const WEBPACK_CONFIG =  env => {
    let config;

    if (env.dev) {
        config = MERGE(BASE_CONFIG, DEV_CONFIG);
    } else {
        config = MERGE(BASE_CONFIG, PROD_CONFIG);
    }

    return config;
};

module.exports = WEBPACK_CONFIG;


