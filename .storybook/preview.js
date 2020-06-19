import { addDecorator, addParameters } from '@storybook/vue'
import Vue from 'vue'
import 'focus-visible'
import 'svgxuse'

import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

// Wrap every story in Alpaca App component
import AApp from '../src/atoms/app/App.vue'
import AButton from '../src/atoms/button/Button.vue'

Vue.component('AButton', AButton)

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(() => ({
  components: { AApp },
  template: `
    <a-app style="padding: 10px;">
      <story />
    </a-app>
  `
}))

addParameters({
  docs: {
    iframeHeight: '60px'
  }
});
