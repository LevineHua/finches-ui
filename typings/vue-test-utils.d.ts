/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 16:13:23
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 16:14:55
 * @FilePath: /finches-ui/typings/vue-test-utils.d.ts
 */
import type { ComponentPublicInstance, CSSProperties } from 'vue'

declare module '@vue/test-utils' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMWrapper<ElementType> {
    style: CSSProperties
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface VueWrapper<T extends ComponentPublicInstance> {
    style: CSSProperties
  }
}
