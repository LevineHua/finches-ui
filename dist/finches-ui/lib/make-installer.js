'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('./utils/config.js');
var version = require('./version.js');

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
    config.setConfig(option);
  };
  return {
    version: version.version,
    install
  };
};

exports["default"] = makeInstaller;
//# sourceMappingURL=make-installer.js.map
