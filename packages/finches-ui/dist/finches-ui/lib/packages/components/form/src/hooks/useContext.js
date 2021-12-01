'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function createContext(context, key = Symbol(), options = {}) {
  const { readonly = true, createProvider = false, native = false } = options;
  const state = vue.reactive(context);
  const provideData = readonly ? vue.readonly(state) : state;
  !createProvider && vue.provide(key, native ? context : provideData);
  return {
    state
  };
}
function useContext(key = Symbol(), defaultValue) {
  return vue.inject(key, defaultValue || {});
}

exports.createContext = createContext;
exports.useContext = useContext;
//# sourceMappingURL=useContext.js.map
