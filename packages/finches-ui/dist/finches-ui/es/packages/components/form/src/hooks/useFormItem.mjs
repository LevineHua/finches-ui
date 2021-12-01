import { getCurrentInstance, reactive, readonly, watchEffect, computed, nextTick, toRaw, unref } from 'vue';
import '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.mjs';
import isEqual from '../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.mjs';

function useRuleFormItem(props, key = "value", changeEvent = "change", emitData) {
  const instance = getCurrentInstance();
  const emit = instance == null ? void 0 : instance.emit;
  const innerState = reactive({
    value: props[key]
  });
  const defaultState = readonly(innerState);
  const setState = (val) => {
    innerState.value = val;
  };
  watchEffect(() => {
    innerState.value = props[key];
  });
  const state = computed({
    get() {
      return innerState.value;
    },
    set(value) {
      if (isEqual(value, defaultState.value))
        return;
      innerState.value = value;
      nextTick(() => {
        emit == null ? void 0 : emit(changeEvent, value, ...toRaw(unref(emitData)) || []);
      });
    }
  });
  return [state, setState, defaultState];
}

export { useRuleFormItem };
//# sourceMappingURL=useFormItem.mjs.map
