<!--
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-08-11 16:59:37
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 16:49:54
 * @FilePath: /finches-ui/packages/components/form/src/index.vue
-->
<template>
  <el-form ref="formElRef" :model="formModel" v-bind="getBindValue">
    <el-row v-bind="getRow">
      <template v-for="schema in getSchema" :key="schema.field">
        <FormItem
          :form-action-type="formActionType"
          :schema="schema"
          :form-props="getProps"
          :form-model="formModel"
          :set-form-model="setFormModel"
          :all-default-values="defaultValueRef"
        >
          <template v-for="item in Object.keys($slots)" #[item]="data">
            <slot :name="item" v-bind="data"></slot>
          </template>
        </FormItem>
      </template>

      <FormAction v-bind="{ ...getProps }">
        <template
          v-for="item in ['resetBefore', 'submitBefore']"
          #[item]="data"
        >
          <slot :name="item" v-bind="data"></slot>
        </template>
      </FormAction>
    </el-row>
  </el-form>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  unref,
  watch,
  nextTick,
} from 'vue'
import { ElForm, ElRow } from 'element-plus'
import { deepMerge } from '@finches-ui/utils/index'
import { dateUtil } from '@finches-ui/utils/dateUtil'
import { dateItemType } from './helper'
import FormItem from './components/FormItem.vue'
import FormAction from './components/FormAction.vue'
import { useFormValues } from './hooks/useFormValues'
import { useFormEvents } from './hooks/useFormEvents'
import { useContext } from './hooks/useContext'
import { createFormContext } from './hooks/useFormContext'
import { basicProps } from './props'
import type moment from 'moment'
import type { FormSchema } from './types/form'
import type { Nullable } from '@finches-ui/utils/types'
import type { InjectionKey } from 'vue'

export default defineComponent({
  name: 'CbForm',
  components: { FormItem, FormAction, ElForm, ElRow },
  props: basicProps,
  emits: ['register', 'reset', 'submit'],
  setup(props, { emit, attrs }) {
    const key: InjectionKey<any> = Symbol()
    const modalFn = useContext<any>(key)
    const formElRef = ref(null)
    const formModel = reactive({})
    const propsRef = ref({})
    // eslint-disable-next-line no-undef
    const schemaRef = ref<Nullable<FormSchema[]>>(null)
    const defaultValueRef = ref({})

    const isInitedDefaultRef = ref(false)

    const getProps = computed(() => {
      return { ...props, ...unref(propsRef) }
    })

    const getRow = computed(() => {
      const { baseRowStyle = {}, rowProps } = unref(getProps)
      return {
        style: baseRowStyle,
        ...rowProps,
      }
    })

    async function setProps(formProps) {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps)
    }

    const getBindValue = computed(() => ({
      ...attrs,
      ...props,
      ...unref(getProps),
    }))

    const getSchema = computed(() => {
      const schemas = unref(schemaRef) || unref(getProps)?.schemas || []
      for (const item of schemas) {
        const schema: any = item
        const { defaultValue, component } = schema
        if (defaultValue && dateItemType.includes(component)) {
          if (!Array.isArray(defaultValue)) {
            schema.defaultValue = dateUtil(defaultValue)
          } else {
            const def: moment.Moment[] = []
            defaultValue.forEach((item) => {
              def.push(dateUtil(item))
            })
            schema.defaultValue = def
          }
        }
      }
      return schemas
    })

    const { handleFormValues, initDefault } = useFormValues({
      defaultValueRef,
      getSchema,
      formModel,
      getProps,
    } as any)

    const {
      handleSubmit,
      setFieldsValue,
      validateFields,
      resetFields,
      validate,
      clearValidate,
      getAllFieldsValue,
    } = useFormEvents({
      emit,
      getProps,
      formModel,
      getSchema,
      defaultValueRef,
      formElRef,
      handleFormValues,
    } as any)

    createFormContext({
      resetAction: resetFields,
      submitAction: handleSubmit,
    })

    // watch(
    //   () => unref(getProps).model,
    //   () => {
    //     const { model } = unref(getProps)
    //     if (!model) return
    //     setFieldsValue(model)
    //   },
    //   {
    //     immediate: true,
    //   }
    // )

    watch(
      () => getSchema.value,
      (schema) => {
        nextTick(() => {
          modalFn?.redoModalHeight?.()
        })
        if (unref(isInitedDefaultRef)) {
          return
        }
        if (schema?.length) {
          initDefault()
          isInitedDefaultRef.value = true
        }
      }
    )

    function setFormModel(key: string, value: any) {
      // console.log(key, value)

      formModel[key] = value

      // console.log(formModel)

      const { validateTrigger } = unref(getBindValue) as any

      if (!validateTrigger || validateTrigger === 'change') {
        validateFields([key]).catch((_) => {})
      }
    }

    const formActionType = {
      setProps,
      setFieldsValue,
      validate,
      clearValidate,
      submit: handleSubmit,
      getAllFieldsValue,
    }

    onMounted(() => {
      initDefault()
      // console.log(formModel)
      // console.log(formElRef)

      emit('register', formActionType)
    })
    return {
      getProps,
      getSchema,
      formElRef,
      formModel,
      getBindValue,
      setFormModel,
      defaultValueRef,
      handleSubmit,
      getRow,
      formActionType,
    }
  },
})
</script>
