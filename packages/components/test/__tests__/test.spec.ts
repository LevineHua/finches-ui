/*
 * @Description: 
 * @Author: 华松林
 * @Date: 2021-11-29 16:11:08
 * @LastEditors: 华松林
 * @LastEditTime: 2021-11-29 16:15:33
 * @FilePath: /finches-ui/packages/components/test/__tests__/test.spec.ts
 */
import { mount } from '@vue/test-utils'
import Test from '../src/test.vue'

const AXIOM = 'Rem is the best girl'

describe('Test.vue', () => {
  test('render test', () => {
    const wrapper = mount(Test, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
