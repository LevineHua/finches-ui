'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js');
var is = require('../../../../utils/is.js');
var dateUtil = require('../../../../utils/dateUtil.js');
var set = require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.js');

function useFormValues({
  defaultValueRef,
  getSchema,
  formModel,
  getProps
}) {
  function handleFormValues(values) {
    var _a, _b;
    if (!is.isObject(values)) {
      return {};
    }
    const res = {};
    for (const item of Object.entries(values)) {
      let [, value] = item;
      const [key] = item;
      if (!key || is.isArray(value) && value.length === 0 || is.isFunction(value)) {
        continue;
      }
      const transformDateFunc = vue.unref(getProps).transformDateFunc;
      if (is.isObject(value)) {
        value = transformDateFunc == null ? void 0 : transformDateFunc(value);
      }
      if (is.isArray(value) && ((_a = value[0]) == null ? void 0 : _a._isAMomentObject) && ((_b = value[1]) == null ? void 0 : _b._isAMomentObject)) {
        value = value.map((item2) => transformDateFunc == null ? void 0 : transformDateFunc(item2));
      }
      if (is.isString(value)) {
        value = value.trim();
      }
      set["default"](res, key, value);
    }
    return handleRangeTimeValue(res);
  }
  function handleRangeTimeValue(values) {
    const fieldMapToTime = vue.unref(getProps).fieldMapToTime;
    if (!fieldMapToTime || !Array.isArray(fieldMapToTime)) {
      return values;
    }
    for (const [
      field,
      [startTimeKey, endTimeKey],
      format = "YYYY-MM-DD"
    ] of fieldMapToTime) {
      if (!field || !startTimeKey || !endTimeKey || !values[field]) {
        continue;
      }
      const [startTime, endTime] = values[field];
      values[startTimeKey] = dateUtil.dateUtil(startTime).format(format);
      values[endTimeKey] = dateUtil.dateUtil(endTime).format(format);
      Reflect.deleteProperty(values, field);
    }
    return values;
  }
  function initDefault() {
    const schemas = vue.unref(getSchema);
    const obj = {};
    schemas.forEach((item) => {
      const { defaultValue } = item;
      if (!is.isNullOrUnDef(defaultValue)) {
        obj[item.field] = defaultValue;
        formModel[item.field] = defaultValue;
      }
    });
    defaultValueRef.value = obj;
  }
  return { handleFormValues, initDefault };
}

exports.useFormValues = useFormValues;
//# sourceMappingURL=useFormValues.js.map
