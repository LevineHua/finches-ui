import { createTypes as R } from '../../node_modules/.pnpm/vue-types@4.1.1_vue@3.2.22/node_modules/vue-types/dist/vue-types.modern.mjs';

const propTypes = R({
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

export { propTypes };
//# sourceMappingURL=propTypes.mjs.map
