'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
function entries(obj) {
  return Object.keys(obj).map((key) => [key, obj[key]]);
}
function useAttrs(params = {}) {
  const instance = vue.getCurrentInstance();
  if (!instance)
    return {};
  const { excludeListeners = false, excludeKeys = [] } = params;
  const attrs = vue.shallowRef({});
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  instance.attrs = vue.reactive(instance.attrs);
  vue.watchEffect(() => {
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

exports.entries = entries;
exports.useAttrs = useAttrs;
//# sourceMappingURL=useAttrs.js.map
