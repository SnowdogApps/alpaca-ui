import { addDecorator, addParameters } from '@storybook/vue'

import 'focus-visible'
import 'svgxuse'

import '../assets/styles/tailwind.css'
// Wrap every story in Alpaca App component
import AApp from '../src/atoms/app/App.vue'

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
