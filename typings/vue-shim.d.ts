/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-29 16:13:23
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 16:14:46
 * @FilePath: /finches-ui/typings/vue-shim.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
