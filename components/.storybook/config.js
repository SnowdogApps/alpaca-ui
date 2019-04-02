// Storybook
import { configure, addDecorator, addParameters } from '@storybook/vue'

// Info Addon
import { withInfo } from 'storybook-addon-vue-info'

// Wrap every story in Alpaca App component
import AApp from '../src/01-globals/app/App.vue'

addDecorator(withInfo)

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
    name: 'Alpaca components'
  }
})

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
