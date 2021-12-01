import { resolveComponent, openBlock, createBlock, mergeProps, createSlots, withCtx, createElementBlock, Fragment, renderList, renderSlot, normalizeProps, guardReactiveProps } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createBlock(_component_el_select, mergeProps({
    modelValue: _ctx.state,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event)
  }, _ctx.attrs, { onChange: _ctx.handleChange }), createSlots({
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getOptions, (item) => {
        return openBlock(), createBlock(_component_el_option, {
          key: item.value,
          label: item.label,
          value: item.value
        }, null, 8, ["label", "value"]);
      }), 128))
    ]),
    _: 2
  }, [
    renderList(Object.keys(_ctx.$slots), (item) => {
      return {
        name: item,
        fn: withCtx((data) => [
          renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data)))
        ])
      };
    })
  ]), 1040, ["modelValue", "onChange"]);
}

export { render };
//# sourceMappingURL=ApiSelect.vue_vue_type_template_id_550e8bc4_lang.mjs.map
