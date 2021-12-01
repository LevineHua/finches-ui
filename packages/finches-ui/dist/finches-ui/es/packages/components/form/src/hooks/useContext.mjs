import { reactive, readonly, provide, inject } from 'vue';

function createContext(context, key = Symbol(), options = {}) {
  const { readonly: readonly$1 = true, createProvider = false, native = false } = options;
  const state = reactive(context);
  const provideData = readonly$1 ? readonly(state) : state;
  !createProvider && provide(key, native ? context : provideData);
  return {
    state
  };
}
function useContext(key = Symbol(), defaultValue) {
  return inject(key, defaultValue || {});
}

export { createContext, useContext };
//# sourceMappingURL=useContext.mjs.map
