<!--
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-08-23 10:58:42
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 11:07:32
 * @FilePath: /finches-ui/packages/components/form/src/components/ApiSelect.vue
-->
<template>
  <el-select v-model="state" v-bind="attrs" @change="handleChange">
    <el-option
      v-for="item in getOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    <template v-for="item in Object.keys($slots)" #[item]="data">
      <slot :name="item" v-bind="data"></slot>
    </template>
  </el-select>
</template>
<script lang="ts">
import { computed, defineComponent, ref, unref, watchEffect, watch } from 'vue'
import { omit, get } from 'lodash-es'
import { propTypes } from '@finches-ui/utils/propTypes'
import { isFunction } from '@finches-ui/utils/is'
import { useRuleFormItem } from '../hooks/useFormItem'
import { useAttrs } from '../hooks/useAttrs'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'ApiSelect',
  inheritAttrs: false,
  props: {
    // 除了以下 props 还可使用 element-plus 的 Select 属性
    value: propTypes.oneOfType([
      propTypes.object,
      propTypes.number,
      propTypes.string,
      propTypes.array,
    ]),
    numberToString: propTypes.bool,
    api: {
      // eslint-disable-next-line no-undef
      type: Function as PropType<(arg?: any) => Promise<any[]>>,
      default: null,
    },
    // api params
    params: {
      // eslint-disable-next-line no-undef
      type: Object as PropType<any>,
      default: () => ({}),
    },
    resultField: propTypes.string.def(''),
    labelField: propTypes.string.def('label'),
    valueField: propTypes.string.def('value'),
  },
  emits: ['options-change', 'change'],
  setup(props, { emit }) {
    const options: any = ref([])
    const loading = ref(false)
    const isFirstLoad = ref(true)
    const emitData = ref<any[]>([])
    const attrs = useAttrs()

    const [state] = useRuleFormItem(props, 'value', 'change', emitData)

    const getOptions = computed(() => {
      const { labelField, valueField, numberToString } = props

      return unref(options).reduce((prev: any, next) => {
        if (next) {
          const value = next[valueField]
          prev.push({
            label: next[labelField],
            value: numberToString ? `${value}` : value,
            ...omit(next, [labelField, valueField]),
          })
        }
        return prev
      }, [])
    })

    watchEffect(() => {
      !unref(loading) && fetch()
    })

    watch(
      () => props.params,
      () => {
        !unref(isFirstLoad) && fetch()
      },
      { deep: true }
    )

    async function fetch() {
      const api = props.api
      if (!api || !isFunction(api)) return
      options.value = []
      try {
        loading.value = true
        const res = await api(props.params)
        if (Array.isArray(res)) {
          options.value = res
          return
        }
        if (props.resultField) {
          options.value = get(res, props.resultField) || []
        }
      } catch (error) {
        console.warn(error)
      } finally {
        // loading.value = false
      }
    }

    function emitChange() {
      emit('options-change', unref(getOptions))
    }

    function handleChange(_, ...args) {
      emitData.value = args
    }

    return {
      getOptions,
      emitChange,
      state,
      attrs,
      handleChange,
    }
  },
})
</script>
