import { mount } from '@vue/test-utils'
import Aaa from '../src/Aaa.vue'

const AXIOM = 'Rem is the best girl'

describe('Aaa.vue', () => {
  test('render test', () => {
    const wrapper = mount(Aaa, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
