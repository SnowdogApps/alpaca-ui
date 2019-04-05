// Storybook
import { configure, addDecorator, addParameters } from '@storybook/vue'

// Addons
import { withInfo } from 'storybook-addon-vue-info'
import { withA11y } from '@storybook/addon-a11y'

// Wrap every story in Alpaca App component
import AApp from '../src/01-globals/app/App.vue'

addDecorator(withInfo)
addDecorator(withA11y)
addDecorator(() => ({
  components: {
    AApp
  },
  template: `
    <a-app style="padding: 10px;">
      <story />
    </a-app>
  `
}))

addParameters({
  options: {
    brandTitle: 'Alpaca components'
  }
})

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
