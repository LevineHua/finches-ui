/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-08-17 09:57:40
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-30 17:22:28
 * @FilePath: /finches-ui/packages/utils/propTypes.ts
 */
import { createTypes } from 'vue-types'
import type { CSSProperties, VNodeChild } from 'vue'
import type { VueTypeValidableDef, VueTypesInterface } from 'vue-types'

// eslint-disable-next-line no-undef
export type VueNode = VNodeChild | JSX.Element

type PropTypes = VueTypesInterface & {
  readonly style: VueTypeValidableDef<CSSProperties>
  readonly VNodeChild: VueTypeValidableDef<VueNode>
  // readonly trueBool: VueTypeValidableDef<boolean>;
}

const propTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined,
}) as PropTypes

propTypes.extend([
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined,
  },
  {
    name: 'VNodeChild',
    getter: true,
    type: undefined,
  },
])
export { propTypes }
