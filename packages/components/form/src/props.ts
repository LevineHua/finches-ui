/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-17 09:48:16
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:20:26
 * @FilePath: /finches-ui/packages/components/form/src/props.ts
 */
import { propTypes } from '@finches-ui/utils/propTypes'
import type { CSSProperties, PropType } from 'vue'

export const basicProps = {
  /**
   * Form Attributes start：https://element-plus.gitee.io/#/zh-CN/component/form
   */
  labelWidth: {
    type: [Number, String],
    default: 0,
  },
  labelPosition: propTypes.oneOf(['right', 'left', 'top']).def('right'),
  size: propTypes.oneOf(['medium', 'small', 'mini']).def('medium'),
  disabled: propTypes.bool.def(false),
  /**
   * Form Attributes end
   */

  // fieldMapToTime: {
  //   type: Array,
  //   default: () => [],
  // },
  // 表单项
  schemas: {
    type: [Array],
    default: () => [],
  },

  // 重置时提交
  submitOnReset: propTypes.bool,

  // 转化时间
  transformDateFunc: {
    type: Function,
    default: (date: any) => {
      return date._isAMomentObject ? date?.format('YYYY-MM-DD HH:mm:ss') : date
    },
  },
  // 是否显示操作按钮
  showActionButtonGroup: propTypes.bool.def(true),
  // 操作按钮列Col配置：https://element-plus.gitee.io/#/zh-CN/component/layout
  actionColOptions: Object,
  // 显示重置按钮：https://element-plus.gitee.io/#/zh-CN/component/button
  showResetButton: propTypes.bool.def(true),
  // 重置按钮配置：https://element-plus.gitee.io/#/zh-CN/component/button
  resetButtonOptions: Object,

  // 自定义重置函数
  resetFunc: Function as PropType<() => Promise<void>>,
  // 自定义提交函数
  submitFunc: Function as PropType<() => Promise<void>>,

  // label col 配置：https://element-plus.gitee.io/#/zh-CN/component/layout
  labelCol: Object,
  // 输入/操作区 col 配置：https://element-plus.gitee.io/#/zh-CN/component/layout
  wrapperCol: Object,
  // row 配置：https://element-plus.gitee.io/#/zh-CN/component/layout
  rowProps: Object,
  // 自定义 row 样式
  baseRowStyle: {
    type: Object as PropType<CSSProperties>,
  },
  // col 配置：https://element-plus.gitee.io/#/zh-CN/component/layout
  baseColProps: {
    type: Object,
  },
}
