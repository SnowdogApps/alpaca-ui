// Storybook
import { configure, addDecorator } from '@storybook/vue'

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
    <a-app>
      <story />
    </a-app>
  `
}))

function loadStories() {
  const req = require.context('../src', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
