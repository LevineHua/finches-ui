'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = vue.resolveComponent("el-option");
  const _component_el_select = vue.resolveComponent("el-select");
  return vue.openBlock(), vue.createBlock(_component_el_select, vue.mergeProps({
    modelValue: _ctx.state,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event)
  }, _ctx.attrs, { onChange: _ctx.handleChange }), vue.createSlots({
    default: vue.withCtx(() => [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.getOptions, (item) => {
        return vue.openBlock(), vue.createBlock(_component_el_option, {
          key: item.value,
          label: item.label,
          value: item.value
        }, null, 8, ["label", "value"]);
      }), 128))
    ]),
    _: 2
  }, [
    vue.renderList(Object.keys(_ctx.$slots), (item) => {
      return {
        name: item,
        fn: vue.withCtx((data) => [
          vue.renderSlot(_ctx.$slots, item, vue.normalizeProps(vue.guardReactiveProps(data)))
        ])
      };
    })
  ]), 1040, ["modelValue", "onChange"]);
}

exports.render = render;
//# sourceMappingURL=ApiSelect.vue_vue_type_template_id_550e8bc4_lang.js.map
