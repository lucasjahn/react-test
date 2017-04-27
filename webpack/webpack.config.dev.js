/* eslint-env node */

const
    CONFIG = require(`./config`),
    PATH = require(`path`),
    WEBPACK = require(`webpack`),
    ExtractTextPlugin = require(`extract-text-webpack-plugin`);

const DEV_CONFIG = {
    devtool: `#cheap-module-source-map`,
    cache: true,
    entry: [
        PATH.join(CONFIG.rootPath, `main.js`),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                include: CONFIG.srcPath,
                use: ExtractTextPlugin.extract({
                    use: [
                        `css-loader?sourceMap`,
                        `sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true`,
                    ],
                    fallback: `style-loader`,
                }),
            },
        ],
    },
    plugins: [
        new WEBPACK.HotModuleReplacementPlugin(),
        new WEBPACK.NamedModulesPlugin(),
        new ExtractTextPlugin({
            disable: true,
        }),
    ],
};

module.exports = DEV_CONFIG;
