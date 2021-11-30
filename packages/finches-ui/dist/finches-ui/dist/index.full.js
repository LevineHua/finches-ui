/*! Finches Ui v0.0.0-dev.5 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FinchesUi = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  const version$1 = "0.0.0-dev.5";

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

  var script = vue.defineComponent({
    name: "CbTest",
    props: {},
    setup(props) {
    }
  });

  const _hoisted_1 = /* @__PURE__ */ vue.createTextVNode(" \u6211\u662F\u4E00\u4E2A\u6D4B\u8BD5\u7EC4\u4EF6 ");
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.renderSlot(_ctx.$slots, "default"),
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

  exports.CbTest = CbTest;
  exports["default"] = installer;
  exports.install = install;
  exports.makeInstaller = makeInstaller$1;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
