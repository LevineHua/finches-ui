import installer from './defaults.mjs';
export { default } from './defaults.mjs';
import './components/index.mjs';
export { default as makeInstaller } from './make-installer.mjs';
export { CbTest } from './components/test/index.mjs';

const install = installer.install;
const version = installer.version;

export { install, version };
//# sourceMappingURL=index.mjs.map
