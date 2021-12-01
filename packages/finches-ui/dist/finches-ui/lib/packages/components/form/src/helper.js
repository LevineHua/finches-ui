'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js');
var is = require('../../../utils/is.js');
var _parseInt = require('../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/parseInt.js');

const DATE_TYPE = ["DatePicker", "TimePicker"];
function genType() {
  return [...DATE_TYPE, "RangePicker"];
}
function createPlaceholderMessage(component) {
  if (component.includes("Input") || component.includes("Complete")) {
    return "\u8BF7\u8F93\u5165";
  }
  if (component.includes("Picker")) {
    return "\u8BF7\u9009\u62E9";
  }
  if (component.includes("Select") || component.includes("Cascader") || component.includes("Checkbox") || component.includes("Radio") || component.includes("Switch")) {
    return "\u8BF7\u9009\u62E9";
  }
  return "";
}
function setComponentRuleType(rule, component, valueFormat) {
  if (["DatePicker", "TimePicker"].includes(component)) {
    rule.type = valueFormat ? "string" : "object";
  } else if (["Upload", "CheckboxGroup"].includes(component)) {
    rule.type = "array";
  } else if (["InputNumber"].includes(component)) {
    rule.type = "number";
  }
}
function handleFormItemValue(schema, val) {
  const { component, componentProps = {} } = schema;
  const type = componentProps.type;
  if (!component)
    return val;
  if (["Input"].includes(component) && type !== "number") {
    return val && is.isNumber(val) ? `${val}` : val || "";
  }
  if (["InputNumber", "Slider", "Rate"].includes(component)) {
    return val && is.isNumber(val) ? val : _parseInt["default"](val || 0);
  }
  if (["CheckboxGroup", "Upload"].includes(component)) {
    return val && is.isArray(val) ? val : [];
  }
  if (["TimePicker", "Editor"].includes(component)) {
    return val && is.isString(val) ? val : "";
  }
  return val;
}
const dateItemType = genType();

exports.createPlaceholderMessage = createPlaceholderMessage;
exports.dateItemType = dateItemType;
exports.handleFormItemValue = handleFormItemValue;
exports.setComponentRuleType = setComponentRuleType;
//# sourceMappingURL=helper.js.map
