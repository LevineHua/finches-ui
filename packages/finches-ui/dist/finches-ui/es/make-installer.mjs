import { setConfig } from './packages/utils/config.mjs';
import { version } from './version.mjs';

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
    setConfig(option);
  };
  return {
    version,
    install
  };
};

export { makeInstaller as default };
//# sourceMappingURL=make-installer.mjs.map
