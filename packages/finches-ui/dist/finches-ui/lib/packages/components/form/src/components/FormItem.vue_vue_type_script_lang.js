'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/index.js');
require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js');
var is = require('../../../../utils/is.js');
var tsxHelper = require('../../../../utils/helper/tsxHelper.js');
var componentMap = require('../componentMap.js');
var helper = require('../helper.js');
var useLabelWidth = require('../hooks/useLabelWidth.js');
var cloneDeep = require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js');
var upperFirst = require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/upperFirst.js');
var index = require('../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/form/index.js');
var index$1 = require('../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/col/index.js');

var script = vue.defineComponent({
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
  setup(props, { slots }) {
    const { schema, formProps } = vue.toRefs(props);
    const itemLabelWidthProp = useLabelWidth.useItemLabWidth(schema, formProps);
    const getValues = vue.computed(() => {
      const { schema: schema2, formModel, allDefaultValues } = props;
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
    const getComponentsProps = vue.computed(() => {
      var _a;
      const { schema: schema2, formModel } = props;
      const { componentProps = {} } = schema2;
      if (!is.isFunction(componentProps)) {
        return componentProps;
      }
      return (_a = componentProps({ schema: schema2, formModel })) != null ? _a : {};
    });
    function getShow() {
      const { show, ifShow } = props.schema;
      let isShow = true;
      let isIfShow = true;
      if (is.isBoolean(show)) {
        isShow = show;
      }
      if (is.isBoolean(ifShow)) {
        isIfShow = ifShow;
      }
      if (is.isFunction(show)) {
        isShow = show(vue.unref(getValues));
      }
      if (is.isFunction(ifShow)) {
        isIfShow = ifShow(vue.unref(getValues));
      }
      return { isShow, isIfShow };
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
      if (is.isFunction(dynamicRules)) {
        return dynamicRules(vue.unref(getValues));
      }
      let rules = cloneDeep["default"](defRules);
      const { rulesMessageJoinLabel: globalRulesMessageJoinLabel = "" } = props.formProps;
      const joinLabel = Reflect.has(props.schema, "rulesMessageJoinLabel") ? rulesMessageJoinLabel : globalRulesMessageJoinLabel;
      const defaultMsg = `${helper.createPlaceholderMessage(component)}${joinLabel ? "" : label}`;
      function validator(rule, value) {
        const msg = rule.message || defaultMsg;
        if (value === void 0 || is.isNull(value)) {
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
      const getRequired = is.isFunction(required) ? required(vue.unref(getValues)) : required;
      if ((!rules || rules.length === 0) && getRequired) {
        rules = [{ required: getRequired, validator }];
      }
      const requiredRuleIndex = rules.findIndex((rule) => Reflect.has(rule, "required") && !Reflect.has(rule, "validator"));
      if (requiredRuleIndex !== -1) {
        const rule = rules[requiredRuleIndex];
        const { isShow } = getShow();
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
          const valueFormat = (_a = vue.unref(getComponentsProps)) == null ? void 0 : _a.valueFormat;
          helper.setComponentRuleType(rule, component, valueFormat);
        }
      }
      const characterInx = rules.findIndex((val) => val.max);
      if (characterInx !== -1 && !rules[characterInx].validator) {
        rules[characterInx].message = rules[characterInx].message || `\u5B57\u7B26\u6570\u5E94\u5C0F\u4E8E${rules[characterInx].max}\u4F4D`;
      }
      return rules;
    }
    function renderComponent() {
      const { component, field, changeEvent = "change" } = props.schema;
      const isCheck = component && ["Checkbox"].includes(component);
      let eventKey = `on${upperFirst["default"](changeEvent)}`;
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
      const Comp = componentMap.componentMap.get(component);
      let propsData = {
        ...vue.unref(getComponentsProps)
      };
      if (!["ColorPicker"].includes(component)) {
        propsData = Object.assign(propsData, { clearable: true });
      }
      const bindValue = {
        [isCheck ? "checked" : "model-value"]: helper.handleFormItemValue(props.schema, props.formModel[field])
      };
      const compAttr = {
        ...propsData,
        ...on,
        ...bindValue
      };
      if (["RadioGroup", "CheckboxGroup", "Select"].includes(component) && component && propsData.options && is.isArray(propsData.options)) {
        const options = propsData.options;
        const getContent = (component2, options2) => {
          return renderGroup(component2, options2);
        };
        return /* @__PURE__ */ vue.h(Comp, {
          ...compAttr
        }, getContent(component, options));
      }
      return /* @__PURE__ */ vue.h(Comp, {
        ...compAttr
      });
    }
    function renderGroup(component, options) {
      if (component === "Select") {
        const CompItem = componentMap.componentMap.get("Option");
        return options.map((val) => {
          return /* @__PURE__ */ vue.h(CompItem, {
            label: val.label,
            key: val.value,
            value: val.value
          });
        });
      } else {
        const componentName = component.replace(/w*Group$/, "");
        const CompItem = componentMap.componentMap.get(componentName);
        const CompList = options.map((val) => {
          return /* @__PURE__ */ vue.h(CompItem, {
            label: val.value
          }, val.label);
        });
        return CompList;
      }
    }
    function renderItem() {
      const { field, label, itemProps, slot } = props.schema;
      const { labelCol, wrapperCol } = vue.unref(itemLabelWidthProp);
      const getContent = () => {
        return slot ? tsxHelper.getSlot(slots, slot, vue.unref(getValues)) : renderComponent();
      };
      return /* @__PURE__ */ vue.h(index.ElFormItem, {
        prop: field,
        label,
        ...itemProps,
        ...wrapperCol,
        labelWidth: labelCol,
        rules: handleRules()
      }, /* @__PURE__ */ vue.h("div", {
        style: "display: flex;height: 100%;align-items: center;"
      }, /* @__PURE__ */ vue.h("div", {
        style: "flex: 1"
      }, getContent())));
    }
    return () => {
      const { component, colProps = {} } = props.schema;
      if (!componentMap.componentMap.has(component)) {
        return null;
      }
      const { baseColProps = {} } = props.formProps;
      const realColProps = { ...baseColProps, ...colProps };
      const { isIfShow, isShow } = getShow();
      const getContent = () => {
        return renderItem();
      };
      return isIfShow && /* @__PURE__ */ vue.h(index$1.ElCol, {
        ...realColProps,
        "v-show": isShow
      }, getContent());
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=FormItem.vue_vue_type_script_lang.js.map
