'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js');
var isEqual = require('../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js');

function useRuleFormItem(props, key = "value", changeEvent = "change", emitData) {
  const instance = vue.getCurrentInstance();
  const emit = instance == null ? void 0 : instance.emit;
  const innerState = vue.reactive({
    value: props[key]
  });
  const defaultState = vue.readonly(innerState);
  const setState = (val) => {
    innerState.value = val;
  };
  vue.watchEffect(() => {
    innerState.value = props[key];
  });
  const state = vue.computed({
    get() {
      return innerState.value;
    },
    set(value) {
      if (isEqual["default"](value, defaultState.value))
        return;
      innerState.value = value;
      vue.nextTick(() => {
        emit == null ? void 0 : emit(changeEvent, value, ...vue.toRaw(vue.unref(emitData)) || []);
      });
    }
  });
  return [state, setState, defaultState];
}

exports.useRuleFormItem = useRuleFormItem;
//# sourceMappingURL=useFormItem.js.map
