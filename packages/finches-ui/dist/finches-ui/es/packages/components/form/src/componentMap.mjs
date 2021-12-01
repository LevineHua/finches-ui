import '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/index.mjs';
import './components/ApiSelect.mjs';
import { ElInput } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/input/index.mjs';
import { ElInputNumber } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/input-number/index.mjs';
import { ElSelect, ElOption } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/select/index.mjs';
import { ElSwitch } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/switch/index.mjs';
import { ElRadio, ElRadioGroup } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/radio/index.mjs';
import { ElCheckbox, ElCheckboxGroup } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/checkbox/index.mjs';
import { ElCascader } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/cascader/index.mjs';
import { ElSlider } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/slider/index.mjs';
import { ElRate } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/rate/index.mjs';
import { ElDatePicker } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/date-picker/index.mjs';
import { ElTimePicker } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/time-picker/index.mjs';
import { ElTimeSelect } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/time-select/index.mjs';
import { ElColorPicker } from '../../../../node_modules/.pnpm/element-plus@1.2.0-beta.4_vue@3.2.22/node_modules/element-plus/es/components/color-picker/index.mjs';
import script from './components/ApiSelect.vue_vue_type_script_lang.mjs';

const componentMap = new Map();
componentMap.set("Input", ElInput);
componentMap.set("InputNumber", ElInputNumber);
componentMap.set("Select", ElSelect);
componentMap.set("Option", ElOption);
componentMap.set("Switch", ElSwitch);
componentMap.set("Radio", ElRadio);
componentMap.set("RadioGroup", ElRadioGroup);
componentMap.set("Checkbox", ElCheckbox);
componentMap.set("CheckboxGroup", ElCheckboxGroup);
componentMap.set("Cascader", ElCascader);
componentMap.set("Slider", ElSlider);
componentMap.set("Rate", ElRate);
componentMap.set("DatePicker", ElDatePicker);
componentMap.set("TimePicker", ElTimePicker);
componentMap.set("TimeSelect", ElTimeSelect);
componentMap.set("ColorPicker", ElColorPicker);
componentMap.set("ApiSelect", script);
function add(compName, component) {
  componentMap.set(compName, component);
}
function del(compName) {
  componentMap.delete(compName);
}

export { add, componentMap, del };
//# sourceMappingURL=componentMap.mjs.map
