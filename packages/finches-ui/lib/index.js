'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaults = require('./defaults.js');
require('./components/index.js');
var makeInstaller = require('./make-installer.js');
var index = require('./components/test/index.js');

const install = defaults["default"].install;
const version = defaults["default"].version;

exports["default"] = defaults["default"];
exports.makeInstaller = makeInstaller["default"];
exports.CbTest = index.CbTest;
exports.install = install;
exports.version = version;
//# sourceMappingURL=index.js.map
