/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-11 17:46:48
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:15:11
 * @FilePath: /finches-ui/packages/components/form/src/hooks/useForm.ts
 */
import { nextTick, ref, unref, watch } from 'vue'
import { getDynamicProps } from '@finches-ui/utils/index'

export function useForm(props: any) {
  const fromRef = ref(null)
  const loadedRef = ref(false)

  async function getForm() {
    const form = unref(fromRef)
    // if (!form) {
    //   console.error(
    //     'The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!'
    //   )
    // }
    await nextTick()
    return form as any
  }

  function register(instance: any) {
    if (unref(loadedRef) && instance === unref(fromRef)) return

    fromRef.value = instance
    loadedRef.value = true

    watch(
      () => props,
      () => {
        props && instance.setProps(getDynamicProps(props))
      },
      {
        immediate: true,
        deep: true,
      }
    )
  }

  const methods: any = {
    setProps: async (formProps: any): Promise<any> => {
      const form = await getForm()
      form.setProps(formProps)
    },
    validate: async (nameList: any): Promise<any> => {
      const form = await getForm()
      return form.validate(nameList)
    },
    setFieldsValue: async <T>(values: T): Promise<any> => {
      const form = await getForm()
      return form.setFieldsValue(values)
    },
    submit: async (): Promise<any> => {
      const form = await getForm()
      return form.submit()
    },
    getAllFieldsValue: async (): Promise<any> => {
      const form = await getForm()
      return form?.getAllFieldsValue()
    },
    clearValidate: async (name?: string | string[]) => {
      const form = await getForm()
      form.clearValidate(name)
    },
  }

  return [register, methods]
}
