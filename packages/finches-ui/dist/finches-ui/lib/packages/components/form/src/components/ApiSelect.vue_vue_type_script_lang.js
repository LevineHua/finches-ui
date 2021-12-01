'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js');
var propTypes = require('../../../../utils/propTypes.js');
var is = require('../../../../utils/is.js');
var useFormItem = require('../hooks/useFormItem.js');
var useAttrs = require('../hooks/useAttrs.js');
var omit = require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js');
var get = require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get.js');

var script = vue.defineComponent({
  name: "ApiSelect",
  inheritAttrs: false,
  props: {
    value: propTypes.propTypes.oneOfType([
      propTypes.propTypes.object,
      propTypes.propTypes.number,
      propTypes.propTypes.string,
      propTypes.propTypes.array
    ]),
    numberToString: propTypes.propTypes.bool,
    api: {
      type: Function,
      default: null
    },
    params: {
      type: Object,
      default: () => ({})
    },
    resultField: propTypes.propTypes.string.def(""),
    labelField: propTypes.propTypes.string.def("label"),
    valueField: propTypes.propTypes.string.def("value")
  },
  emits: ["options-change", "change"],
  setup(props, { emit }) {
    const options = vue.ref([]);
    const loading = vue.ref(false);
    const isFirstLoad = vue.ref(true);
    const emitData = vue.ref([]);
    const attrs = useAttrs.useAttrs();
    const [state] = useFormItem.useRuleFormItem(props, "value", "change", emitData);
    const getOptions = vue.computed(() => {
      const { labelField, valueField, numberToString } = props;
      return vue.unref(options).reduce((prev, next) => {
        if (next) {
          const value = next[valueField];
          prev.push({
            label: next[labelField],
            value: numberToString ? `${value}` : value,
            ...omit["default"](next, [labelField, valueField])
          });
        }
        return prev;
      }, []);
    });
    vue.watchEffect(() => {
      !vue.unref(loading) && fetch();
    });
    vue.watch(() => props.params, () => {
      !vue.unref(isFirstLoad) && fetch();
    }, { deep: true });
    async function fetch() {
      const api = props.api;
      if (!api || !is.isFunction(api))
        return;
      options.value = [];
      try {
        loading.value = true;
        const res = await api(props.params);
        if (Array.isArray(res)) {
          options.value = res;
          return;
        }
        if (props.resultField) {
          options.value = get["default"](res, props.resultField) || [];
        }
      } catch (error) {
        console.warn(error);
      } finally {
      }
    }
    function emitChange() {
      emit("options-change", vue.unref(getOptions));
    }
    function handleChange(_, ...args) {
      emitData.value = args;
    }
    return {
      getOptions,
      emitChange,
      state,
      attrs,
      handleChange
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=ApiSelect.vue_vue_type_script_lang.js.map
