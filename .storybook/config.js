// Storybook
import { configure, addDecorator, addParameters } from '@storybook/vue'

// Polyfills
import 'focus-visible'
import 'svgxuse'

// Addons
import { withInfo } from 'storybook-addon-vue-info'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

// Wrap every story in Alpaca App component
import AApp from '../src/atoms/app/App.vue'

addDecorator(withInfo)
addDecorator(withA11y)
addDecorator(withKnobs)
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
    theme: {
      brandTitle: 'Alpaca UI',
      brandImage: 'assets/icons/alpaca.svg',
      brandUrl: 'https://github.com/SnowdogApps/alpaca-ui'
    }
  }
})

function loadStories () {
  const req = require.context('../src/atoms/', true, /.stories.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
