import { defineComponent, computed } from 'vue';
import '../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/index.mjs';
import { propTypes } from '../../../../utils/propTypes.mjs';
import { useFormContext } from '../hooks/useFormContext.mjs';
import { ElButton } from '../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/button/index.mjs';
import { ElCol } from '../../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/col/index.mjs';

var script = defineComponent({
  name: "BasicFormAction",
  components: { ElButton, ElCol },
  props: {
    showActionButtonGroup: propTypes.bool.def(true),
    showResetButton: propTypes.bool.def(true),
    showSubmitButton: propTypes.bool.def(true),
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
    const actionColOpt = computed(() => {
      const { actionColOptions } = props;
      const actionColOpt2 = {
        style: { textAlign: "left" },
        span: 4,
        ...actionColOptions
      };
      return actionColOpt2;
    });
    const getResetBtnOptions = computed(() => {
      return Object.assign({
        text: "\u91CD\u7F6E",
        size: "mini"
      }, props.resetButtonOptions);
    });
    const getSubmitBtnOptons = computed(() => {
      return Object.assign({
        text: "\u63D0\u4EA4",
        size: "mini"
      }, props.submitButtonOptions);
    });
    return {
      actionColOpt,
      getResetBtnOptions,
      getSubmitBtnOptons,
      ...useFormContext()
    };
  }
});

export { script as default };
//# sourceMappingURL=FormAction.vue_vue_type_script_lang.mjs.map
