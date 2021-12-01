'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defaults = require('./defaults.js');
require('./packages/components/index.js');
var makeInstaller = require('./make-installer.js');
var index = require('./packages/components/test/index.js');
var useForm = require('./packages/components/form/src/hooks/useForm.js');
var ApiSelect_vue_vue_type_script_lang = require('./packages/components/form/src/components/ApiSelect.vue_vue_type_script_lang.js');
var index$1 = require('./packages/components/form/index.js');
var index$2 = require('./packages/components/aaa/index.js');

const install = defaults["default"].install;
const version = defaults["default"].version;

exports["default"] = defaults["default"];
exports.makeInstaller = makeInstaller["default"];
exports.CbTest = index.CbTest;
exports.useForm = useForm.useForm;
exports.ApiSelect = ApiSelect_vue_vue_type_script_lang["default"];
exports.CbForm = index$1.CbForm;
exports.CbAaa = index$2.CbAaa;
exports.install = install;
exports.version = version;
//# sourceMappingURL=index.js.map
