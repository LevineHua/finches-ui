'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vueTypes_modern = require('../../node_modules/.pnpm/vue-types@4.1.1_vue@3.2.22/node_modules/vue-types/dist/vue-types.modern.js');

const propTypes = vueTypes_modern.createTypes({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  object: void 0,
  integer: void 0
});
propTypes.extend([
  {
    name: "style",
    getter: true,
    type: [String, Object],
    default: void 0
  },
  {
    name: "VNodeChild",
    getter: true,
    type: void 0
  }
]);

exports.propTypes = propTypes;
//# sourceMappingURL=propTypes.js.map
