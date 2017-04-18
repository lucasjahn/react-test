/* eslint-env node */

const PROJECT_CONFIG = require(`./webpack/config`);

const KARMA_CONFIG = config => {
    config.set({
        frameworks: [`jasmine`],
        files: [
            `./node_modules/babel-polyfill/dist/polyfill.js`,
            `${PROJECT_CONFIG.srcPathRelative}/**/*.spec.js`,
        ],
        browsers: [`PhantomJS`],
        logLevel: config.LOG_ERROR,
        preprocessors: {
            [`${PROJECT_CONFIG.srcPathRelative}/**/*.js`]: [`webpack`],
        },
        reporters: [`spec`, `coverage`],
        coverageReporter: {
            type : `html`,
            dir : `./coverage/`,
            reporters: [
                {
                    type: `html`,
                    subdir: `report-html`,
                },
                {
                    type: `text-summary`,
                },
            ],
        },
        webpack: {
            cache: true,
            module: {
                rules: [
                    {
                        test: /\.spec\.js?$/,
                        exclude: /(node_modules)/,
                        loader: `babel-loader`,
                        query: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        test: /^(?!.*\.spec\.js$).*\.js$/,
                        exclude: /(node_modules)/,
                        loader: `babel-istanbul-loader`,
                        query: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
        },
        webpackMiddleware: {
            noInfo: true,
        },
    });
};

module.exports = KARMA_CONFIG;