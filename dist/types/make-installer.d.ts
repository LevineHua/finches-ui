import type { App, Plugin } from "vue";
import type { InstallOptions } from "@finches-ui/utils/config";
declare const makeInstaller: (components?: Plugin[]) => {
    version: string;
    install: (app: App, opts: InstallOptions) => void;
};
export default makeInstaller;
