import { unref } from 'vue';
import { isObject } from './is.mjs';

function getDynamicProps(props) {
  const ret = {};
  Object.keys(props).map((key) => {
    ret[key] = unref(props[key]);
  });
  return ret;
}
function deepMerge(src = {}, target = {}) {
  let key;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : src[key] = target[key];
  }
  return src;
}

export { deepMerge, getDynamicProps };
//# sourceMappingURL=index.mjs.map
