import { getCurrentInstance, shallowRef, reactive, watchEffect } from 'vue';

const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
function entries(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}
function useAttrs(params = {}) {
  const instance = getCurrentInstance();
  if (!instance)
    return {};
  const { excludeListeners = false, excludeKeys = [] } = params;
  const attrs = shallowRef({});
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  instance.attrs = reactive(instance.attrs);
  watchEffect(() => {
    const res = entries(instance.attrs).reduce((acm, [key, val]) => {
      if (!allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))) {
        acm[key] = val;
      }
      return acm;
    }, {});
    attrs.value = res;
  });
  return attrs;
}

export { entries, useAttrs };
//# sourceMappingURL=useAttrs.mjs.map
