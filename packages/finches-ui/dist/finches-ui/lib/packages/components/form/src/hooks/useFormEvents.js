'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dateUtil = require('../../../../utils/dateUtil.js');
var is = require('../../../../utils/is.js');
var helper = require('../helper.js');

function useFormEvents({
  emit,
  getProps,
  formModel,
  getSchema,
  defaultValueRef,
  formElRef,
  handleFormValues
}) {
  async function resetFields() {
    const { resetFunc, submitOnReset } = vue.unref(getProps);
    resetFunc && is.isFunction(resetFunc) && await resetFunc();
    const formEl = vue.unref(formElRef);
    if (!formEl)
      return;
    Object.keys(formModel).forEach((key) => {
      formModel[key] = defaultValueRef.value[key];
    });
    clearValidate();
    emit("reset", vue.toRaw(formModel));
    submitOnReset && handleSubmit();
  }
  async function setFieldsValue(values) {
    const fields = vue.unref(getSchema).map((item) => item.field).filter(Boolean);
    const validKeys = [];
    Object.keys(values).forEach((key) => {
      const schema = vue.unref(getSchema).find((item) => item.field === key);
      let value = values[key];
      const hasKey = Reflect.has(values, key);
      if (schema) {
        value = helper.handleFormItemValue(schema, value);
      }
      if (hasKey && fields.includes(key)) {
        if (itemIsDateType(key)) {
          if (Array.isArray(value)) {
            const arr = [];
            for (const ele of value) {
              arr.push(ele ? dateUtil.dateUtil(ele) : null);
            }
            formModel[key] = arr;
          } else {
            const { componentProps } = schema || {};
            let _props = componentProps;
            if (typeof componentProps === "function") {
              _props = _props({ formModel });
            }
            formModel[key] = value ? (_props == null ? void 0 : _props.valueFormat) ? value : dateUtil.dateUtil(value) : null;
          }
        } else {
          formModel[key] = value;
        }
        validKeys.push(key);
      }
    });
    validateFields(validKeys).catch((_) => {
    });
  }
  function itemIsDateType(key) {
    return vue.unref(getSchema).some((item) => {
      return item.field === key ? helper.dateItemType.includes(item.component) : false;
    });
  }
  function getFieldsValue() {
    const formEl = vue.unref(formElRef);
    if (!formEl)
      return {};
    return handleFormValues(vue.unref(formModel));
  }
  function getAllFieldsValue() {
    const schemas = vue.unref(getSchema);
    const fields = {};
    schemas.forEach((item) => {
      const { field } = item;
      fields[field] = helper.handleFormItemValue(item, item.defaultValue);
    });
    return { ...fields, ...getFieldsValue() };
  }
  async function validateFields(nameList) {
    var _a;
    return (_a = vue.unref(formElRef)) == null ? void 0 : _a.validateFields(nameList);
  }
  async function validate(nameList) {
    var _a;
    const ref = await ((_a = vue.unref(formElRef)) == null ? void 0 : _a.validate(nameList));
    if (ref) {
      return getAllFieldsValue();
    }
    return false;
  }
  async function clearValidate(name) {
    vue.nextTick(async () => {
      var _a;
      await ((_a = vue.unref(formElRef)) == null ? void 0 : _a.clearValidate(name));
    });
  }
  async function handleSubmit(e) {
    e && e.preventDefault();
    const { submitFunc } = vue.unref(getProps);
    if (submitFunc && is.isFunction(submitFunc)) {
      await submitFunc();
      return;
    }
    const formEl = vue.unref(formElRef);
    if (!formEl)
      return;
    try {
      const values = await validate();
      const res = handleFormValues(values);
      emit("submit", res);
    } catch (error) {
      throw new Error(error);
    }
  }
  return {
    setFieldsValue,
    validateFields,
    handleSubmit,
    resetFields,
    clearValidate,
    validate,
    getAllFieldsValue
  };
}

exports.useFormEvents = useFormEvents;
//# sourceMappingURL=useFormEvents.js.map
