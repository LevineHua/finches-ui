import { defineComponent, ref, reactive, computed, unref, watch, nextTick, onMounted } from 'vue';
import '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/index.mjs';
import { deepMerge } from '../../../utils/index.mjs';
import { dateUtil } from '../../../utils/dateUtil.mjs';
import { dateItemType } from './helper.mjs';
import './components/FormItem.mjs';
import './components/FormAction.mjs';
import { useFormValues } from './hooks/useFormValues.mjs';
import { useFormEvents } from './hooks/useFormEvents.mjs';
import { useContext } from './hooks/useContext.mjs';
import { createFormContext } from './hooks/useFormContext.mjs';
import { basicProps } from './props.mjs';
import script$1 from './components/FormItem.vue_vue_type_script_lang.mjs';
import script$2 from './components/FormAction.vue_vue_type_script_lang.mjs';
import { ElForm } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/form/index.mjs';
import { ElRow } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/row/index.mjs';

var script = defineComponent({
  name: "CbForm",
  components: { FormItem: script$1, FormAction: script$2, ElForm, ElRow },
  props: basicProps,
  emits: ["register", "reset", "submit"],
  setup(props, { emit, attrs }) {
    const key = Symbol();
    const modalFn = useContext(key);
    const formElRef = ref(null);
    const formModel = reactive({});
    const propsRef = ref({});
    const schemaRef = ref(null);
    const defaultValueRef = ref({});
    const isInitedDefaultRef = ref(false);
    const getProps = computed(() => {
      return { ...props, ...unref(propsRef) };
    });
    const getRow = computed(() => {
      const { baseRowStyle = {}, rowProps } = unref(getProps);
      return {
        style: baseRowStyle,
        ...rowProps
      };
    });
    async function setProps(formProps) {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps);
    }
    const getBindValue = computed(() => ({
      ...attrs,
      ...props,
      ...unref(getProps)
    }));
    const getSchema = computed(() => {
      var _a;
      const schemas = unref(schemaRef) || ((_a = unref(getProps)) == null ? void 0 : _a.schemas) || [];
      for (const item of schemas) {
        const schema = item;
        const { defaultValue, component } = schema;
        if (defaultValue && dateItemType.includes(component)) {
          if (!Array.isArray(defaultValue)) {
            schema.defaultValue = dateUtil(defaultValue);
          } else {
            const def = [];
            defaultValue.forEach((item2) => {
              def.push(dateUtil(item2));
            });
            schema.defaultValue = def;
          }
        }
      }
      return schemas;
    });
    const { handleFormValues, initDefault } = useFormValues({
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
    } = useFormEvents({
      emit,
      getProps,
      formModel,
      getSchema,
      defaultValueRef,
      formElRef,
      handleFormValues
    });
    createFormContext({
      resetAction: resetFields,
      submitAction: handleSubmit
    });
    watch(() => getSchema.value, (schema) => {
      nextTick(() => {
        var _a;
        (_a = modalFn == null ? void 0 : modalFn.redoModalHeight) == null ? void 0 : _a.call(modalFn);
      });
      if (unref(isInitedDefaultRef)) {
        return;
      }
      if (schema == null ? void 0 : schema.length) {
        initDefault();
        isInitedDefaultRef.value = true;
      }
    });
    function setFormModel(key2, value) {
      formModel[key2] = value;
      const { validateTrigger } = unref(getBindValue);
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
    onMounted(() => {
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

export { script as default };
//# sourceMappingURL=index.vue_vue_type_script_lang.mjs.map
