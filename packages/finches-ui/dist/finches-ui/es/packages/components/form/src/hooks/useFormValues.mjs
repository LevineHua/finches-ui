import { unref } from 'vue';
import '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.mjs';
import { isObject, isArray, isFunction, isString, isNullOrUnDef } from '../../../../utils/is.mjs';
import { dateUtil } from '../../../../utils/dateUtil.mjs';
import set from '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.mjs';

function useFormValues({
  defaultValueRef,
  getSchema,
  formModel,
  getProps
}) {
  function handleFormValues(values) {
    var _a, _b;
    if (!isObject(values)) {
      return {};
    }
    const res = {};
    for (const item of Object.entries(values)) {
      let [, value] = item;
      const [key] = item;
      if (!key || isArray(value) && value.length === 0 || isFunction(value)) {
        continue;
      }
      const transformDateFunc = unref(getProps).transformDateFunc;
      if (isObject(value)) {
        value = transformDateFunc == null ? void 0 : transformDateFunc(value);
      }
      if (isArray(value) && ((_a = value[0]) == null ? void 0 : _a._isAMomentObject) && ((_b = value[1]) == null ? void 0 : _b._isAMomentObject)) {
        value = value.map((item2) => transformDateFunc == null ? void 0 : transformDateFunc(item2));
      }
      if (isString(value)) {
        value = value.trim();
      }
      set(res, key, value);
    }
    return handleRangeTimeValue(res);
  }
  function handleRangeTimeValue(values) {
    const fieldMapToTime = unref(getProps).fieldMapToTime;
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
      values[startTimeKey] = dateUtil(startTime).format(format);
      values[endTimeKey] = dateUtil(endTime).format(format);
      Reflect.deleteProperty(values, field);
    }
    return values;
  }
  function initDefault() {
    const schemas = unref(getSchema);
    const obj = {};
    schemas.forEach((item) => {
      const { defaultValue } = item;
      if (!isNullOrUnDef(defaultValue)) {
        obj[item.field] = defaultValue;
        formModel[item.field] = defaultValue;
      }
    });
    defaultValueRef.value = obj;
  }
  return { handleFormValues, initDefault };
}

export { useFormValues };
//# sourceMappingURL=useFormValues.mjs.map
