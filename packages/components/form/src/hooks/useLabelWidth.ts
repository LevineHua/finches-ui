/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-17 10:35:04
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:17:39
 * @FilePath: /finches-ui/packages/components/form/src/hooks/useLabelWidth.ts
 */
// import type { Ref } from 'vue'
import { computed, unref } from 'vue'
import { isNumber } from '@finches-ui/utils/is'

export function useItemLabWidth(schemaItemRef: any, propsRef: any) {
  return computed(() => {
    const schemaItem = unref(schemaItemRef)
    // labelCol： 表单域标签所占的栏数，共24栏
    // wrapperCol：表单输入控件区所占的栏数
    const { labelCol = {}, wrapperCol = {} } = schemaItem.itemProps || {}
    const { labelWidth, disabledLabelWidth } = schemaItem

    const {
      labelWidth: globalLabelWidth,
      labelCol: globalLabelCol,
      wrapperCol: globalWrapperCol,
      labelPosition,
    } = unref(propsRef)

    // propsRef 为 ElForm 的 prop 值；schemaItemRef 为 ElFormItem 的 Prop 值
    // schemaItemRef 优先级大于 propsRef
    // labelWidth 优先级大于 labelCol

    if (
      (!globalLabelWidth && !labelWidth && !globalLabelCol) ||
      disabledLabelWidth
    ) {
      return {
        labelCol: '200px',
        wrapperCol: {
          style: { paddingRight: labelPosition === 'top' ? '0' : '200px' },
        },
      }
    }

    let width = labelWidth || globalLabelWidth
    let paddingRight = '0'
    const col = { ...globalLabelCol, ...labelCol }
    const wrapCol = { ...globalWrapperCol, ...wrapperCol }
    const colSpan = col.span
    const wrapColSpan = wrapCol.span

    if (labelPosition !== 'top') {
      if (width) {
        width = isNumber(width) ? `${width}px` : width
      } else if (colSpan || wrapColSpan) {
        if (colSpan && !wrapColSpan) {
          width = `calc((100% / 24) * ${colSpan})`
          paddingRight = width
        } else if (!colSpan && wrapColSpan) {
          width = `calc((100% - ((100% / 24) * ${wrapColSpan})) / 2)`
          paddingRight = width
        } else {
          width = `calc((100% / 24) * ${colSpan})`
          paddingRight = `calc(100% - ((100% / 24) * ${colSpan + wrapColSpan}))`
        }
      }
    }

    // 返回计算后的 labelWidth 值，和 paddingRight 值
    return {
      labelCol: width,
      wrapperCol: {
        style: { paddingRight },
      },
    }
  })
}
