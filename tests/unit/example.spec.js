import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
  it('renders the survey', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).to.include('Tell us, what technologies do you use')
  })
})
