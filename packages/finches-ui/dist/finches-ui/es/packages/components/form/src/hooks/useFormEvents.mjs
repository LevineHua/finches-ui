import { unref, toRaw, nextTick } from 'vue';
import { dateUtil } from '../../../../utils/dateUtil.mjs';
import { isFunction } from '../../../../utils/is.mjs';
import { handleFormItemValue, dateItemType } from '../helper.mjs';

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
    const { resetFunc, submitOnReset } = unref(getProps);
    resetFunc && isFunction(resetFunc) && await resetFunc();
    const formEl = unref(formElRef);
    if (!formEl)
      return;
    Object.keys(formModel).forEach((key) => {
      formModel[key] = defaultValueRef.value[key];
    });
    clearValidate();
    emit("reset", toRaw(formModel));
    submitOnReset && handleSubmit();
  }
  async function setFieldsValue(values) {
    const fields = unref(getSchema).map((item) => item.field).filter(Boolean);
    const validKeys = [];
    Object.keys(values).forEach((key) => {
      const schema = unref(getSchema).find((item) => item.field === key);
      let value = values[key];
      const hasKey = Reflect.has(values, key);
      if (schema) {
        value = handleFormItemValue(schema, value);
      }
      if (hasKey && fields.includes(key)) {
        if (itemIsDateType(key)) {
          if (Array.isArray(value)) {
            const arr = [];
            for (const ele of value) {
              arr.push(ele ? dateUtil(ele) : null);
            }
            formModel[key] = arr;
          } else {
            const { componentProps } = schema || {};
            let _props = componentProps;
            if (typeof componentProps === "function") {
              _props = _props({ formModel });
            }
            formModel[key] = value ? (_props == null ? void 0 : _props.valueFormat) ? value : dateUtil(value) : null;
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
    return unref(getSchema).some((item) => {
      return item.field === key ? dateItemType.includes(item.component) : false;
    });
  }
  function getFieldsValue() {
    const formEl = unref(formElRef);
    if (!formEl)
      return {};
    return handleFormValues(unref(formModel));
  }
  function getAllFieldsValue() {
    const schemas = unref(getSchema);
    const fields = {};
    schemas.forEach((item) => {
      const { field } = item;
      fields[field] = handleFormItemValue(item, item.defaultValue);
    });
    return { ...fields, ...getFieldsValue() };
  }
  async function validateFields(nameList) {
    var _a;
    return (_a = unref(formElRef)) == null ? void 0 : _a.validateFields(nameList);
  }
  async function validate(nameList) {
    var _a;
    const ref = await ((_a = unref(formElRef)) == null ? void 0 : _a.validate(nameList));
    if (ref) {
      return getAllFieldsValue();
    }
    return false;
  }
  async function clearValidate(name) {
    nextTick(async () => {
      var _a;
      await ((_a = unref(formElRef)) == null ? void 0 : _a.clearValidate(name));
    });
  }
  async function handleSubmit(e) {
    e && e.preventDefault();
    const { submitFunc } = unref(getProps);
    if (submitFunc && isFunction(submitFunc)) {
      await submitFunc();
      return;
    }
    const formEl = unref(formElRef);
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

export { useFormEvents };
//# sourceMappingURL=useFormEvents.mjs.map
