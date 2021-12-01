/*
 * @Description:
 * @Author: 华松林
 * @Date: 2021-11-30 16:42:20
 * @LastEditors: 华松林
 * @LastEditTime: 2021-12-01 10:39:49
 * @FilePath: /finches-ui/packages/components/form/__tests__/form.spec.ts
 */
import { mount } from '@vue/test-utils'
import Form from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Form.vue', () => {
  test('render test', () => {
    const wrapper = mount(Form, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
