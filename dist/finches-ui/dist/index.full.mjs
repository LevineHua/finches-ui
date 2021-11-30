/*! Element Plus v0.0.0-dev.3 */

import { defineComponent, openBlock, createElementBlock, renderSlot, createTextVNode } from 'vue';

const version$1 = "0.0.0-dev.3";

const makeInstaller = (components = []) => {
  const apps = [];
  const install = (app, opts) => {
    const defaultInstallOpt = {
      size: "",
      zIndex: 2e3
    };
    const option = Object.assign(defaultInstallOpt, opts);
    if (apps.includes(app))
      return;
    apps.push(app);
    components.forEach((c) => {
      app.use(c);
    });
    app.config.globalProperties.$FINCHES = option;
  };
  return {
    version: version$1,
    install
  };
};
var makeInstaller$1 = makeInstaller;

const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};

var script = defineComponent({
  name: "CbTest",
  props: {},
  setup(props) {
  }
});

const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u6211\u662F\u4E00\u4E2A\u6D4B\u8BD5\u7EC4\u4EF6 ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default"),
    _hoisted_1
  ]);
}

script.render = render;
script.__file = "packages/components/test/src/test.vue";

const CbTest = withInstall(script);

var Components = [CbTest];

var installer = makeInstaller$1([...Components]);

const install = installer.install;
const version = installer.version;

export { CbTest, installer as default, install, makeInstaller$1 as makeInstaller, version };
