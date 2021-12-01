'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/index.js');
require('./src/types/form.js');
var useForm = require('./src/hooks/useForm.js');
require('./src/components/ApiSelect.js');
var index_vue_vue_type_script_lang = require('./src/index.vue_vue_type_script_lang.js');
var ApiSelect_vue_vue_type_script_lang = require('./src/components/ApiSelect.vue_vue_type_script_lang.js');

const CbForm = withInstall.withInstall(index_vue_vue_type_script_lang["default"]);

exports.useForm = useForm.useForm;
exports.ApiSelect = ApiSelect_vue_vue_type_script_lang["default"];
exports.CbForm = CbForm;
exports["default"] = CbForm;
//# sourceMappingURL=index.js.map
