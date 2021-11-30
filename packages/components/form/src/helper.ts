/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-12 15:01:59
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:19:10
 * @FilePath: /finches-ui/packages/components/form/src/helper.ts
 */
import { parseInt } from 'lodash-es'
import { isArray, isNumber, isString } from '@finches-ui/utils/is'
import type { ComponentType } from './types'

const DATE_TYPE = ['DatePicker', 'TimePicker']

function genType() {
  return [...DATE_TYPE, 'RangePicker']
}

/**
 * @description: 生成placeholder
 */
export function createPlaceholderMessage(component: ComponentType) {
  if (component.includes('Input') || component.includes('Complete')) {
    return '请输入'
  }
  if (component.includes('Picker')) {
    return '请选择'
  }
  if (
    component.includes('Select') ||
    component.includes('Cascader') ||
    component.includes('Checkbox') ||
    component.includes('Radio') ||
    component.includes('Switch')
  ) {
    // return `请选择${label}`;
    return '请选择'
  }
  return ''
}

export function setComponentRuleType(
  rule: any,
  component: ComponentType,
  valueFormat: string
) {
  if (['DatePicker', 'TimePicker'].includes(component)) {
    rule.type = valueFormat ? 'string' : 'object'
  } else if (['Upload', 'CheckboxGroup'].includes(component)) {
    rule.type = 'array'
  } else if (['InputNumber'].includes(component)) {
    rule.type = 'number'
  }
}

// export function handleInputNumberValue(schema?: any, val?: any) {
//   const { component, componentProps = {} } = schema
//   const type = componentProps.type
//   if (!component) return val
//   if (['Input'].includes(component) && type !== 'number') {
//     return val && isNumber(val) ? `${val}` : val || ''
//   }
//   if (['InputNumber'].includes(component)) {
//     return val && isNumber(val) ? val : parseInt(val || 0)
//   }
//   return val
// }

export function handleFormItemValue(schema?: any, val?: any) {
  const { component, componentProps = {} } = schema
  const type = componentProps.type
  if (!component) return val
  if (['Input'].includes(component) && type !== 'number') {
    return val && isNumber(val) ? `${val}` : val || ''
  }
  if (['InputNumber', 'Slider', 'Rate'].includes(component)) {
    return val && isNumber(val) ? val : parseInt(val || 0)
  }
  if (['CheckboxGroup', 'Upload'].includes(component)) {
    return val && isArray(val) ? val : []
  }
  if (['TimePicker', 'Editor'].includes(component)) {
    return val && isString(val) ? val : ''
  }
  return val
}

/**
 * 时间字段
 */
export const dateItemType = genType()
