/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-11 18:06:45
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:14:50
 * @FilePath: /finches-ui/packages/utils/index.ts
 */
import { unref } from 'vue'
import { isObject } from './is'

export function getDynamicProps(props: any) {
  const ret: any = {}
  Object.keys(props).map((key: any) => {
    ret[key] = unref(props[key])
  })
  return ret
}

export function deepMerge(src: any = {}, target: any = {}) {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key])
  }
  return src
}
