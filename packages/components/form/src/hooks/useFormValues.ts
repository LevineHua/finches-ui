/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-13 11:31:30
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:17:32
 * @FilePath: /finches-ui/packages/components/form/src/hooks/useFormValues.ts
 */
import { unref } from 'vue'
import { set } from 'lodash-es'
import {
  isArray,
  isFunction,
  isNullOrUnDef,
  isObject,
  isString,
} from '@finches-ui/utils/is'
import { dateUtil } from '@finches-ui/utils/dateUtil'
import type { Ref, ComputedRef } from 'vue'

interface useFormValuesContext {
  defaultValueRef: Ref<any>
  getSchema: ComputedRef<any>
  getProps: ComputedRef<any>
  formModel: any
  formElRef: any
}
export function useFormValues({
  defaultValueRef,
  getSchema,
  formModel,
  getProps,
}: useFormValuesContext) {
  function handleFormValues(values: any) {
    if (!isObject(values)) {
      return {}
    }
    const res = {}
    // Objece.entries 返回对象自身可枚举属性的键值对数组
    for (const item of Object.entries(values)) {
      let [, value] = item
      const [key] = item
      if (!key || (isArray(value) && value.length === 0) || isFunction(value)) {
        continue
      }
      const transformDateFunc = unref(getProps).transformDateFunc
      if (isObject(value)) {
        value = transformDateFunc?.(value)
      }
      if (
        isArray(value) &&
        value[0]?._isAMomentObject &&
        value[1]?._isAMomentObject
      ) {
        value = value.map((item) => transformDateFunc?.(item))
      }
      // Remove spaces
      if (isString(value)) {
        value = value.trim()
      }
      set(res, key, value)
    }
    return handleRangeTimeValue(res)
  }

  // 处理时间间隔参数
  function handleRangeTimeValue(values: any) {
    const fieldMapToTime = unref(getProps).fieldMapToTime

    if (!fieldMapToTime || !Array.isArray(fieldMapToTime)) {
      return values
    }

    for (const [
      field,
      [startTimeKey, endTimeKey],
      format = 'YYYY-MM-DD',
    ] of fieldMapToTime) {
      if (!field || !startTimeKey || !endTimeKey || !values[field]) {
        continue
      }

      const [startTime, endTime]: string[] = values[field]

      values[startTimeKey] = dateUtil(startTime).format(format)
      values[endTimeKey] = dateUtil(endTime).format(format)
      Reflect.deleteProperty(values, field)
    }

    return values
  }

  function initDefault() {
    const schemas = unref(getSchema)
    const obj: any = {}
    schemas.forEach((item: any) => {
      const { defaultValue } = item
      if (!isNullOrUnDef(defaultValue)) {
        obj[item.field] = defaultValue
        formModel[item.field] = defaultValue
      }
    })
    defaultValueRef.value = obj
  }

  return { handleFormValues, initDefault }
}
