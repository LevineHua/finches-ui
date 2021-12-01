import { resolveComponent, openBlock, createBlock, mergeProps, withCtx, createVNode, normalizeProps, guardReactiveProps, createElementBlock, Fragment, renderList, createSlots, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormItem = resolveComponent("FormItem");
  const _component_FormAction = resolveComponent("FormAction");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");
  return openBlock(), createBlock(_component_el_form, mergeProps({
    ref: "formElRef",
    model: _ctx.formModel
  }, _ctx.getBindValue), {
    default: withCtx(() => [
      createVNode(_component_el_row, normalizeProps(guardReactiveProps(_ctx.getRow)), {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getSchema, (schema) => {
            return openBlock(), createBlock(_component_FormItem, {
              key: schema.field,
              "form-action-type": _ctx.formActionType,
              schema,
              "form-props": _ctx.getProps,
              "form-model": _ctx.formModel,
              "set-form-model": _ctx.setFormModel,
              "all-default-values": _ctx.defaultValueRef
            }, createSlots({ _: 2 }, [
              renderList(Object.keys(_ctx.$slots), (item) => {
                return {
                  name: item,
                  fn: withCtx((data) => [
                    renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data)))
                  ])
                };
              })
            ]), 1032, ["form-action-type", "schema", "form-props", "form-model", "set-form-model", "all-default-values"]);
          }), 128)),
          createVNode(_component_FormAction, normalizeProps(guardReactiveProps({ ..._ctx.getProps })), createSlots({ _: 2 }, [
            renderList(["resetBefore", "submitBefore"], (item) => {
              return {
                name: item,
                fn: withCtx((data) => [
                  renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data)))
                ])
              };
            })
          ]), 1040)
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  }, 16, ["model"]);
}

export { render };
//# sourceMappingURL=index.vue_vue_type_template_id_d83fc93e_lang.mjs.map
