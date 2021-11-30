/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 16:06:06
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 10:01:52
 * @FilePath: /finches-ui/packages/finches-ui/make-installer.ts
 */
import { setConfig } from "@finches-ui/utils/config";
// import { LocaleInjectionKey, localeProviderMaker } from '@finches-ui/hooks'
import { version } from "./version";

import type { App, Plugin } from "vue";
import type { ComponentSize } from "@finches-ui/utils/types";
import type { InstallOptions } from "@finches-ui/utils/config";

const makeInstaller = (components: Plugin[] = []) => {
  const apps: App[] = [];

  const install = (app: App, opts: InstallOptions) => {
    const defaultInstallOpt: InstallOptions = {
      size: "" as ComponentSize,
      zIndex: 2000,
    };

    const option = Object.assign(defaultInstallOpt, opts);
    if (apps.includes(app)) return;
    apps.push(app);

    components.forEach((c) => {
      app.use(c);
    });

    // if (option.locale) {
    //   const localeProvides = localeProviderMaker(opts.locale)
    //   app.provide(LocaleInjectionKey, localeProvides)
    // }

    app.config.globalProperties.$FINCHES = option;
    // app.provide() ? is this better? I think its not that flexible but worth implement
    setConfig(option);
  };

  return {
    version,
    install,
  };
};

export default makeInstaller;
