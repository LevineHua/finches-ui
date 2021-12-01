import { ref, unref, nextTick, watch } from 'vue';
import { getDynamicProps } from '../../../../utils/index.mjs';

function useForm(props) {
  const fromRef = ref(null);
  const loadedRef = ref(false);
  async function getForm() {
    const form = unref(fromRef);
    await nextTick();
    return form;
  }
  function register(instance) {
    if (unref(loadedRef) && instance === unref(fromRef))
      return;
    fromRef.value = instance;
    loadedRef.value = true;
    watch(() => props, () => {
      props && instance.setProps(getDynamicProps(props));
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

export { useForm };
//# sourceMappingURL=useForm.mjs.map
