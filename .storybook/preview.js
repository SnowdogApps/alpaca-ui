import { addDecorator, addParameters } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import AApp from '../src/templates/app/App.vue'

// Polyfills
import 'focus-visible'
import 'svgxuse'

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
