/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-18 15:21:56
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:23:23
 * @FilePath: /finches-ui/packages/utils/helper/tsxHelper.tsx
 */
import { isFunction } from '../is'
import type { Slots } from 'vue'

export function getSlot(slots: Slots, slot = 'default', data?: any) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null
  }
  if (!isFunction(slots[slot])) {
    console.error(`${slot} is not a function!`)
    return null
  }
  const slotFn = slots[slot]

  if (!slotFn) return null
  return slotFn(data)
}
