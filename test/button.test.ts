import { mount } from '@vue/test-utils'
import AButton from '../src/AButton.vue'

test('mount component', async () => {
  expect(AButton).toBeTruthy()

  const wrapper = mount(AButton, {
    props: {
      color: 'red',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
