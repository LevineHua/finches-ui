/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-23 15:11:14
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:17:20
 * @FilePath: /finches-ui/packages/components/form/src/hooks/useFormItem.ts
 */
import {
  reactive,
  readonly,
  computed,
  getCurrentInstance,
  watchEffect,
  unref,
  nextTick,
  toRaw,
} from 'vue'

import { isEqual } from 'lodash-es'
import type { UnwrapRef, Ref } from 'vue'

// eslint-disable-next-line no-undef
export function useRuleFormItem<T extends Recordable>(
  props: T,
  key: keyof T = 'value',
  changeEvent = 'change',
  emitData?: Ref<any[]>
) {
  const instance = getCurrentInstance()
  const emit = instance?.emit

  const innerState = reactive({
    value: props[key],
  })

  const defaultState = readonly(innerState)

  const setState = (val: UnwrapRef<T[keyof T]>): void => {
    innerState.value = val as T[keyof T]
  }

  watchEffect(() => {
    innerState.value = props[key]
  })

  const state: any = computed({
    get() {
      return innerState.value
    },
    set(value) {
      if (isEqual(value, defaultState.value)) return

      innerState.value = value as T[keyof T]
      nextTick(() => {
        emit?.(changeEvent, value, ...(toRaw(unref(emitData)) || []))
      })
    },
  })

  return [state, setState, defaultState]
}
