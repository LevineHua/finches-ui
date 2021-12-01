import { defineComponent, ref, computed, unref, watchEffect, watch } from 'vue';
import '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.mjs';
import { propTypes } from '../../../../utils/propTypes.mjs';
import { isFunction } from '../../../../utils/is.mjs';
import { useRuleFormItem } from '../hooks/useFormItem.mjs';
import { useAttrs } from '../hooks/useAttrs.mjs';
import omit from '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.mjs';
import get from '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get.mjs';

var script = defineComponent({
  name: "ApiSelect",
  inheritAttrs: false,
  props: {
    value: propTypes.oneOfType([
      propTypes.object,
      propTypes.number,
      propTypes.string,
      propTypes.array
    ]),
    numberToString: propTypes.bool,
    api: {
      type: Function,
      default: null
    },
    params: {
      type: Object,
      default: () => ({})
    },
    resultField: propTypes.string.def(""),
    labelField: propTypes.string.def("label"),
    valueField: propTypes.string.def("value")
  },
  emits: ["options-change", "change"],
  setup(props, { emit }) {
    const options = ref([]);
    const loading = ref(false);
    const isFirstLoad = ref(true);
    const emitData = ref([]);
    const attrs = useAttrs();
    const [state] = useRuleFormItem(props, "value", "change", emitData);
    const getOptions = computed(() => {
      const { labelField, valueField, numberToString } = props;
      return unref(options).reduce((prev, next) => {
        if (next) {
          const value = next[valueField];
          prev.push({
            label: next[labelField],
            value: numberToString ? `${value}` : value,
            ...omit(next, [labelField, valueField])
          });
        }
        return prev;
      }, []);
    });
    watchEffect(() => {
      !unref(loading) && fetch();
    });
    watch(() => props.params, () => {
      !unref(isFirstLoad) && fetch();
    }, { deep: true });
    async function fetch() {
      const api = props.api;
      if (!api || !isFunction(api))
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
          options.value = get(res, props.resultField) || [];
        }
      } catch (error) {
        console.warn(error);
      } finally {
      }
    }
    function emitChange() {
      emit("options-change", unref(getOptions));
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

export { script as default };
//# sourceMappingURL=ApiSelect.vue_vue_type_script_lang.mjs.map
