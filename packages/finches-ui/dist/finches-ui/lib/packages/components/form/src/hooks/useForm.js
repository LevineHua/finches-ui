'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../../../utils/index.js');

function useForm(props) {
  const fromRef = vue.ref(null);
  const loadedRef = vue.ref(false);
  async function getForm() {
    const form = vue.unref(fromRef);
    await vue.nextTick();
    return form;
  }
  function register(instance) {
    if (vue.unref(loadedRef) && instance === vue.unref(fromRef))
      return;
    fromRef.value = instance;
    loadedRef.value = true;
    vue.watch(() => props, () => {
      props && instance.setProps(index.getDynamicProps(props));
    }, {
      immediate: true,
      deep: true
    });
  }
  const methods = {
    setProps: async (formProps) => {
      const form = await getForm();
      form.setProps(formProps);
    },
    validate: async (nameList) => {
      const form = await getForm();
      return form.validate(nameList);
    },
    setFieldsValue: async (values) => {
      const form = await getForm();
      return form.setFieldsValue(values);
    },
    submit: async () => {
      const form = await getForm();
      return form.submit();
    },
    getAllFieldsValue: async () => {
      const form = await getForm();
      return form == null ? void 0 : form.getAllFieldsValue();
    },
    clearValidate: async (name) => {
      const form = await getForm();
      form.clearValidate(name);
    }
  };
  return [register, methods];
}

exports.useForm = useForm;
//# sourceMappingURL=useForm.js.map
