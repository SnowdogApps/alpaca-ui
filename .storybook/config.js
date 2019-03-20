// Storybook
import {configure, addParameters} from '@storybook/vue'

addParameters({
  options: {
    showPanel: false
  }
})

function loadStories() {
  const req = require.context('../components', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
