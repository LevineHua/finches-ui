'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/index.js');
var index$2 = require('../../../utils/index.js');
var dateUtil = require('../../../utils/dateUtil.js');
var helper = require('./helper.js');
require('./components/FormItem.js');
require('./components/FormAction.js');
var useFormValues = require('./hooks/useFormValues.js');
var useFormEvents = require('./hooks/useFormEvents.js');
var useContext = require('./hooks/useContext.js');
var useFormContext = require('./hooks/useFormContext.js');
var props = require('./props.js');
var FormItem_vue_vue_type_script_lang = require('./components/FormItem.vue_vue_type_script_lang.js');
var FormAction_vue_vue_type_script_lang = require('./components/FormAction.vue_vue_type_script_lang.js');
var index = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/form/index.js');
var index$1 = require('../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/row/index.js');

var script = vue.defineComponent({
  name: "CbForm",
  components: { FormItem: FormItem_vue_vue_type_script_lang["default"], FormAction: FormAction_vue_vue_type_script_lang["default"], ElForm: index.ElForm, ElRow: index$1.ElRow },
  props: props.basicProps,
  emits: ["register", "reset", "submit"],
  setup(props, { emit, attrs }) {
    const key = Symbol();
    const modalFn = useContext.useContext(key);
    const formElRef = vue.ref(null);
    const formModel = vue.reactive({});
    const propsRef = vue.ref({});
    const schemaRef = vue.ref(null);
    const defaultValueRef = vue.ref({});
    const isInitedDefaultRef = vue.ref(false);
    const getProps = vue.computed(() => {
      return { ...props, ...vue.unref(propsRef) };
    });
    const getRow = vue.computed(() => {
      const { baseRowStyle = {}, rowProps } = vue.unref(getProps);
      return {
        style: baseRowStyle,
        ...rowProps
      };
    });
    async function setProps(formProps) {
      propsRef.value = index$2.deepMerge(vue.unref(propsRef) || {}, formProps);
    }
    const getBindValue = vue.computed(() => ({
      ...attrs,
      ...props,
      ...vue.unref(getProps)
    }));
    const getSchema = vue.computed(() => {
      var _a;
      const schemas = vue.unref(schemaRef) || ((_a = vue.unref(getProps)) == null ? void 0 : _a.schemas) || [];
      for (const item of schemas) {
        const schema = item;
        const { defaultValue, component } = schema;
        if (defaultValue && helper.dateItemType.includes(component)) {
          if (!Array.isArray(defaultValue)) {
            schema.defaultValue = dateUtil.dateUtil(defaultValue);
          } else {
            const def = [];
            defaultValue.forEach((item2) => {
              def.push(dateUtil.dateUtil(item2));
            });
            schema.defaultValue = def;
          }
        }
      }
      return schemas;
    });
    const { handleFormValues, initDefault } = useFormValues.useFormValues({
      defaultValueRef,
      getSchema,
      formModel,
      getProps
    });
    const {
      handleSubmit,
      setFieldsValue,
      validateFields,
      resetFields,
      validate,
      clearValidate,
      getAllFieldsValue
    } = useFormEvents.useFormEvents({
      emit,
      getProps,
      formModel,
      getSchema,
      defaultValueRef,
      formElRef,
      handleFormValues
    });
    useFormContext.createFormContext({
      resetAction: resetFields,
      submitAction: handleSubmit
    });
    vue.watch(() => getSchema.value, (schema) => {
      vue.nextTick(() => {
        var _a;
        (_a = modalFn == null ? void 0 : modalFn.redoModalHeight) == null ? void 0 : _a.call(modalFn);
      });
      if (vue.unref(isInitedDefaultRef)) {
        return;
      }
      if (schema == null ? void 0 : schema.length) {
        initDefault();
        isInitedDefaultRef.value = true;
      }
    });
    function setFormModel(key2, value) {
      formModel[key2] = value;
      const { validateTrigger } = vue.unref(getBindValue);
      if (!validateTrigger || validateTrigger === "change") {
        validateFields([key2]).catch((_) => {
        });
      }
    }
    const formActionType = {
      setProps,
      setFieldsValue,
      validate,
      clearValidate,
      submit: handleSubmit,
      getAllFieldsValue
    };
    vue.onMounted(() => {
      initDefault();
      emit("register", formActionType);
    });
    return {
      getProps,
      getSchema,
      formElRef,
      formModel,
      getBindValue,
      setFormModel,
      defaultValueRef,
      handleSubmit,
      getRow,
      formActionType
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue_type_script_lang.js.map
