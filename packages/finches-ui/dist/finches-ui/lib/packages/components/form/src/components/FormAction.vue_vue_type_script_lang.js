'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/index.js');
var propTypes = require('../../../../utils/propTypes.js');
var useFormContext = require('../hooks/useFormContext.js');
var index = require('../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/button/index.js');
var index$1 = require('../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/col/index.js');

var script = vue.defineComponent({
  name: "BasicFormAction",
  components: { ElButton: index.ElButton, ElCol: index$1.ElCol },
  props: {
    showActionButtonGroup: propTypes.propTypes.bool.def(true),
    showResetButton: propTypes.propTypes.bool.def(true),
    showSubmitButton: propTypes.propTypes.bool.def(true),
    resetButtonOptions: {
      type: Object,
      default: () => ({})
    },
    submitButtonOptions: {
      type: Object,
      default: () => ({})
    },
    actionColOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const actionColOpt = vue.computed(() => {
      const { actionColOptions } = props;
      const actionColOpt2 = {
        style: { textAlign: "left" },
        span: 4,
        ...actionColOptions
      };
      return actionColOpt2;
    });
    const getResetBtnOptions = vue.computed(() => {
      return Object.assign({
        text: "\u91CD\u7F6E",
        size: "mini"
      }, props.resetButtonOptions);
    });
    const getSubmitBtnOptons = vue.computed(() => {
      return Object.assign({
        text: "\u63D0\u4EA4",
        size: "mini"
      }, props.submitButtonOptions);
    });
    return {
      actionColOpt,
      getResetBtnOptions,
      getSubmitBtnOptons,
      ...useFormContext.useFormContext()
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=FormAction.vue_vue_type_script_lang.js.map
