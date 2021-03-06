import { isVNode, defineComponent, toRefs, computed, unref, createVNode, mergeProps, withDirectives, vShow } from 'vue';
import '../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/index.mjs';
import '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.mjs';
import { isFunction, isBoolean, isNull, isArray } from '../../../../utils/is.mjs';
import { getSlot } from '../../../../utils/helper/tsxHelper.mjs';
import { componentMap } from '../componentMap.mjs';
import { createPlaceholderMessage, setComponentRuleType, handleFormItemValue } from '../helper.mjs';
import { useItemLabWidth } from '../hooks/useLabelWidth.mjs';
import cloneDeep from '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.mjs';
import upperFirst from '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/upperFirst.mjs';
import { ElFormItem } from '../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/form/index.mjs';
import { ElCol } from '../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/col/index.mjs';

function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var script = defineComponent({
  name: "BasicFormItem",
  inheritAttrs: false,
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    formProps: {
      type: Object,
      default: () => ({})
    },
    allDefaultValues: {
      type: Object,
      default: () => ({})
    },
    formModel: {
      type: Object,
      default: () => ({})
    },
    setFormModel: {
      type: Function,
      default: null
    },
    formActionType: {
      type: Object
    }
  },
  setup(props, {
    slots
  }) {
    const {
      schema,
      formProps
    } = toRefs(props);
    const itemLabelWidthProp = useItemLabWidth(schema, formProps);
    const getValues = computed(() => {
      const {
        schema: schema2,
        formModel,
        allDefaultValues
      } = props;
      return {
        field: schema2.field,
        schema: schema2,
        model: formModel,
        values: {
          ...formModel,
          ...allDefaultValues
        }
      };
    });
    const getComponentsProps = computed(() => {
      var _a;
      const {
        schema: schema2,
        formModel
      } = props;
      const {
        componentProps = {}
      } = schema2;
      if (!isFunction(componentProps)) {
        return componentProps;
      }
      return (_a = componentProps({
        schema: schema2,
        formModel
      })) != null ? _a : {};
    });
    function getShow() {
      const {
        show,
        ifShow
      } = props.schema;
      let isShow = true;
      let isIfShow = true;
      if (isBoolean(show)) {
        isShow = show;
      }
      if (isBoolean(ifShow)) {
        isIfShow = ifShow;
      }
      if (isFunction(show)) {
        isShow = show(unref(getValues));
      }
      if (isFunction(ifShow)) {
        isIfShow = ifShow(unref(getValues));
      }
      return {
        isShow,
        isIfShow
      };
    }
    function handleRules() {
      var _a;
      const {
        rules: defRules = [],
        component,
        rulesMessageJoinLabel,
        label,
        dynamicRules,
        required
      } = props.schema;
      if (isFunction(dynamicRules)) {
        return dynamicRules(unref(getValues));
      }
      let rules = cloneDeep(defRules);
      const {
        rulesMessageJoinLabel: globalRulesMessageJoinLabel = ""
      } = props.formProps;
      const joinLabel = Reflect.has(props.schema, "rulesMessageJoinLabel") ? rulesMessageJoinLabel : globalRulesMessageJoinLabel;
      const defaultMsg = `${createPlaceholderMessage(component)}${joinLabel ? "" : label}`;
      function validator(rule, value) {
        const msg = rule.message || defaultMsg;
        if (value === void 0 || isNull(value)) {
          return Promise.reject(msg);
        } else if (Array.isArray(value) && value.length === 0) {
          return Promise.reject(msg);
        } else if (typeof value === "string" && value.trim() === "") {
          return Promise.reject(msg);
        } else if (typeof value === "object" && Reflect.has(value, "checked") && Reflect.has(value, "halfChecked") && Array.isArray(value.checked) && Array.isArray(value.halfChecked) && value.checked.length === 0 && value.halfChecked.length === 0) {
          return Promise.reject(msg);
        }
        return Promise.resolve();
      }
      const getRequired = isFunction(required) ? required(unref(getValues)) : required;
      if ((!rules || rules.length === 0) && getRequired) {
        rules = [{
          required: getRequired,
          validator
        }];
      }
      const requiredRuleIndex = rules.findIndex((rule) => Reflect.has(rule, "required") && !Reflect.has(rule, "validator"));
      if (requiredRuleIndex !== -1) {
        const rule = rules[requiredRuleIndex];
        const {
          isShow
        } = getShow();
        if (!isShow) {
          rule.required = false;
        }
        if (component) {
          if (!Reflect.has(rule, "type")) {
            rule.type = component === "InputNumber" ? "number" : "string";
          }
          rule.message = rule.message || defaultMsg;
          if (component.includes("Input") || component.includes("Textarea")) {
            rule.whitespace = true;
          }
          const valueFormat = (_a = unref(getComponentsProps)) == null ? void 0 : _a.valueFormat;
          setComponentRuleType(rule, component, valueFormat);
        }
      }
      const characterInx = rules.findIndex((val) => val.max);
      if (characterInx !== -1 && !rules[characterInx].validator) {
        rules[characterInx].message = rules[characterInx].message || `\u5B57\u7B26\u6570\u5E94\u5C0F\u4E8E${rules[characterInx].max}\u4F4D`;
      }
      return rules;
    }
    function renderComponent() {
      const {
        component,
        field,
        changeEvent = "change"
      } = props.schema;
      const isCheck = component && ["Checkbox"].includes(component);
      let eventKey = `on${upperFirst(changeEvent)}`;
      if (["Input", "Slider"].includes(component)) {
        eventKey = "onInput";
      }
      const on = {
        [eventKey]: (...args) => {
          const [e] = args;
          if (propsData[eventKey]) {
            propsData[eventKey](...args);
          }
          const target = e ? e.target : null;
          const value = target ? isCheck ? target.checked : target.value : e;
          props.setFormModel(field, value);
        }
      };
      const Comp = componentMap.get(component);
      let propsData = {
        ...unref(getComponentsProps)
      };
      if (!["ColorPicker"].includes(component)) {
        propsData = Object.assign(propsData, {
          clearable: true
        });
      }
      const bindValue = {
        [isCheck ? "checked" : "model-value"]: handleFormItemValue(props.schema, props.formModel[field])
      };
      const compAttr = {
        ...propsData,
        ...on,
        ...bindValue
      };
      if (["RadioGroup", "CheckboxGroup", "Select"].includes(component) && component && propsData.options && isArray(propsData.options)) {
        let _slot;
        const options = propsData.options;
        const getContent = (component2, options2) => {
          return renderGroup(component2, options2);
        };
        return createVNode(Comp, compAttr, _isSlot(_slot = getContent(component, options)) ? _slot : {
          default: () => [_slot]
        });
      }
      return createVNode(Comp, compAttr, null);
    }
    function renderGroup(component, options) {
      if (component === "Select") {
        const CompItem = componentMap.get("Option");
        return options.map((val) => {
          return createVNode(CompItem, {
            "label": val.label,
            "key": val.value,
            "value": val.value
          }, null);
        });
      } else {
        const componentName = component.replace(/w*Group$/, "");
        const CompItem = componentMap.get(componentName);
        const CompList = options.map((val) => {
          return createVNode(CompItem, {
            "label": val.value
          }, {
            default: () => [val.label]
          });
        });
        return CompList;
      }
    }
    function renderItem() {
      const {
        field,
        label,
        itemProps,
        slot
      } = props.schema;
      const {
        labelCol,
        wrapperCol
      } = unref(itemLabelWidthProp);
      const getContent = () => {
        return slot ? getSlot(slots, slot, unref(getValues)) : renderComponent();
      };
      return createVNode(ElFormItem, mergeProps({
        "prop": field,
        "label": label
      }, itemProps, wrapperCol, {
        "labelWidth": labelCol,
        "rules": handleRules()
      }), {
        default: () => [createVNode("div", {
          "style": "display: flex;height: 100%;align-items: center;"
        }, [createVNode("div", {
          "style": "flex: 1"
        }, [getContent()])])]
      });
    }
    function renderBottomSlot() {
      const {
        field
      } = props.schema;
      const {
        labelCol,
        wrapperCol
      } = unref(itemLabelWidthProp);
      console.log(labelCol, wrapperCol);
      const slotFn = slots[`${field}-bottom`];
      const getContent = () => {
        return slotFn ? getSlot(slots, `${field}-bottom`, unref(getValues)) : null;
      };
      if (slotFn) {
        const style = {
          style: {
            paddingLeft: labelCol,
            marginBottom: "22px"
          }
        };
        return createVNode("div", wrapperCol, [createVNode("div", style, [getContent()])]);
      }
    }
    return () => {
      const {
        component,
        colProps = {}
      } = props.schema;
      if (!componentMap.has(component)) {
        return null;
      }
      const {
        baseColProps = {}
      } = props.formProps;
      const realColProps = {
        ...baseColProps,
        ...colProps
      };
      const {
        isIfShow,
        isShow
      } = getShow();
      const getContent = () => {
        return renderItem();
      };
      return isIfShow && withDirectives(createVNode(ElCol, realColProps, {
        default: () => [getContent(), renderBottomSlot()]
      }), [[vShow, isShow]]);
    };
  }
});

export { script as default };
//# sourceMappingURL=FormItem.vue_vue_type_script_lang.mjs.map
