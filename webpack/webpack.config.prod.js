/* eslint-env node */

const
    CONFIG = require(`./config`),
    PATH = require(`path`),
    WEBPACK = require(`webpack`),
    ExtractTextPlugin = require(`extract-text-webpack-plugin`);

const PROD_CONFIG = {
    devtool: undefined,
    cache: false,
    entry: [
        PATH.join(CONFIG.srcPath, `main.js`),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                include: CONFIG.srcPath,
                use: ExtractTextPlugin.extract({
                    use: [
                        `css-loader`,
                        `postcss-loader`,
                        `sass-loader`,
                    ],
                    fallback: `style-loader`,
                }),
            },
        ],
    },
    plugins: [
        new WEBPACK.optimize.UglifyJsPlugin({
            minimize: true,
        }),
        new ExtractTextPlugin(`[name].css`),
    ],
};

module.exports = PROD_CONFIG;
