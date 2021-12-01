'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var is = require('./is.js');

function getDynamicProps(props) {
  const ret = {};
  Object.keys(props).map((key) => {
    ret[key] = vue.unref(props[key]);
  });
  return ret;
}
function deepMerge(src = {}, target = {}) {
  let key;
  for (key in target) {
    src[key] = is.isObject(src[key]) ? deepMerge(src[key], target[key]) : src[key] = target[key];
  }
  return src;
}

exports.deepMerge = deepMerge;
exports.getDynamicProps = getDynamicProps;
//# sourceMappingURL=index.js.map
