import { shallow } from 'vue-test-utils'
import Badge from './Button.vue'

 describe('App.test.js', () => {
  let cmp

   beforeEach(() => {
    cmp = shallow(Badge)
  })

   it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
