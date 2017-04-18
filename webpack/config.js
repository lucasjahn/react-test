/* eslint-env node */

const
    PATH = require(`path`),
    ROOT_PATH = PATH.join(__dirname, `../`),
    SRC_PATH_RELATIVE = `app`;

const CONFIGURATION = {
    rootPath: ROOT_PATH,
    appRoot: PATH.join(ROOT_PATH, `app`),
    distPath: PATH.join(ROOT_PATH, `public`),
    srcPathRelative: SRC_PATH_RELATIVE,
    srcPath: PATH.join(ROOT_PATH, SRC_PATH_RELATIVE),
};

module.exports = CONFIGURATION;
