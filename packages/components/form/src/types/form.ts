/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-18 18:06:48
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:17:43
 * @FilePath: /finches-ui/packages/components/form/src/types/form.ts
 */
import type { ComponentType } from './index'

export interface RenderCallbackParams {
  schema: FormSchema
  // eslint-disable-next-line no-undef
  values: Recordable
  // eslint-disable-next-line no-undef
  model: Recordable
  field: string
}

export interface FormSchema {
  // 字段名
  field: string
  // 数据改变事件名
  changeEvent?: string
  // label name
  label: string
  // 组件名
  component: ComponentType
  // label width
  labelWidth?: string | number
  // 是否禁用 labelWidth
  disabledLabelWidth?: boolean
  // 组件属性：element 组件属性可在 element-plus 官网查看
  componentProps?:
    | ((opt: { schema: FormSchema; formModel: any }) => any)
    | object
  // 是否必填
  required?: boolean
  // 校验规则
  rules?: []
  // 检查信息是否添加到标签中
  rulesMessageJoinLabel?: boolean
  // el-form-item 属性
  itemProps?: any
  // el-col 属性
  colProps?: any
  // 默认值
  defaultValue?: any

  // 是否显示
  ifShow?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)
  show?: boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)

  // 插槽名
  slot?: string
}
