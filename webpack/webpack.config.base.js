/* eslint-env node */

const CONFIG = require(`./config`);

const WEBPACK_CONFIG = {
    context: CONFIG.rootPath,
    output: {
        path: CONFIG.distPath,
        publicPath: `/dist`,
        filename: `[name].js`,
        chunkFilename: `[hash]/js/[id].js`,
    },
    devServer: {
        open: true,
        hot: true,
        contentBase: CONFIG.distPath,
        watchContentBase: true,
        watchOptions: {
            poll: true,
        },
    },
    module: {
        rules: [
            // enable import globbing (i. e. *.twig) so we don`t have to import every twig file on our own
            {
                enforce: `pre`,
                test: /\.js/,
                exclude: /node_modules/,
                loader: `import-glob`,
            },
            {
                test: /^(?!.*\.spec\.js$).(js|jsx)$/,
                exclude: /node_modules/,
                loader: `babel-loader`,
            },
            {
                test: /\.(jpe?g|gif|png|ico)$/,
                loader: `file-loader?name=images/[name].[ext]&limit=0`,
            },
            {
                test: /\.(woff2?|eot|ttf|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: `file-loader?name=fonts/[name].[ext]&limit=0`,
            },
        ],
    },
};

module.exports = WEBPACK_CONFIG;
