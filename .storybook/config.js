// Storybook
import { configure, addDecorator } from '@storybook/vue'

// Wrap every story in Alpaca App component
import AApp from '../components/01-globals/app/App.vue'
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
  const req = require.context('../components', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
