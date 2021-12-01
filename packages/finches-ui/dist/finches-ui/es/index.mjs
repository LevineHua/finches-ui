import installer from './defaults.mjs';
export { default } from './defaults.mjs';
import './packages/components/index.mjs';
export { default as makeInstaller } from './make-installer.mjs';
export { CbTest } from './packages/components/test/index.mjs';
export { useForm } from './packages/components/form/src/hooks/useForm.mjs';
export { default as ApiSelect } from './packages/components/form/src/components/ApiSelect.vue_vue_type_script_lang.mjs';
export { CbForm } from './packages/components/form/index.mjs';

const install = installer.install;
const version = installer.version;

export { install, version };
//# sourceMappingURL=index.mjs.map
