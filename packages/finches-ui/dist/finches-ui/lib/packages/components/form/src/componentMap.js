'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/index.js');
require('./components/ApiSelect.js');
var index = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/input/index.js');
var index$1 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/input-number/index.js');
var index$2 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/select/index.js');
var index$3 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/switch/index.js');
var index$4 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/radio/index.js');
var index$5 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/checkbox/index.js');
var index$6 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/cascader/index.js');
var index$7 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/slider/index.js');
var index$8 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/rate/index.js');
var index$9 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/date-picker/index.js');
var index$a = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/time-picker/index.js');
var index$b = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/time-select/index.js');
var index$c = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/color-picker/index.js');
var ApiSelect_vue_vue_type_script_lang = require('./components/ApiSelect.vue_vue_type_script_lang.js');

const componentMap = new Map();
componentMap.set("Input", index.ElInput);
componentMap.set("InputNumber", index$1.ElInputNumber);
componentMap.set("Select", index$2.ElSelect);
componentMap.set("Option", index$2.ElOption);
componentMap.set("Switch", index$3.ElSwitch);
componentMap.set("Radio", index$4.ElRadio);
componentMap.set("RadioGroup", index$4.ElRadioGroup);
componentMap.set("Checkbox", index$5.ElCheckbox);
componentMap.set("CheckboxGroup", index$5.ElCheckboxGroup);
componentMap.set("Cascader", index$6.ElCascader);
componentMap.set("Slider", index$7.ElSlider);
componentMap.set("Rate", index$8.ElRate);
componentMap.set("DatePicker", index$9.ElDatePicker);
componentMap.set("TimePicker", index$a.ElTimePicker);
componentMap.set("TimeSelect", index$b.ElTimeSelect);
componentMap.set("ColorPicker", index$c.ElColorPicker);
componentMap.set("ApiSelect", ApiSelect_vue_vue_type_script_lang["default"]);
function add(compName, component) {
  componentMap.set(compName, component);
}
function del(compName) {
  componentMap.delete(compName);
}

exports.add = add;
exports.componentMap = componentMap;
exports.del = del;
//# sourceMappingURL=componentMap.js.map
