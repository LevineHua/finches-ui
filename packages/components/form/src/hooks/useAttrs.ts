/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-23 15:15:14
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 10:55:26
 * @FilePath: /finches-ui/packages/components/form/src/hooks/useAttrs.ts
 */
import { getCurrentInstance, reactive, shallowRef, watchEffect } from 'vue'
import type { Ref } from 'vue'
interface Params {
  excludeListeners?: boolean
  excludeKeys?: string[]
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

// eslint-disable-next-line no-undef
export function entries<T>(obj: any): [string, T][] {
  return Object.keys(obj).map((key: string) => [key, obj[key]])
}

// eslint-disable-next-line no-undef
// eslint-disable-next-line @typescript-eslint/ban-types
export function useAttrs(params: Params = {}): Ref<any> | {} {
  const instance = getCurrentInstance()
  if (!instance) return {}

  const { excludeListeners = false, excludeKeys = [] } = params
  const attrs = shallowRef({})
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS)

  // Since attrs are not reactive, make it reactive instead of doing in `onUpdated` hook for better performance
  instance.attrs = reactive(instance.attrs)

  watchEffect(() => {
    const res = entries(instance.attrs).reduce((acm, [key, val]) => {
      if (
        !allExcludeKeys.includes(key) &&
        !(excludeListeners && LISTENER_PREFIX.test(key))
      ) {
        acm[key] = val
      }

      return acm
      // eslint-disable-next-line no-undef
    }, {})

    attrs.value = res
  })

  return attrs
}
