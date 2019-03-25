import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaNewsletter from './Newsletter.vue'

import newsletter from './mocks/newsletter.json'

storiesOf('Modules/Newsletter', module).add('Default', () => ({
  components: { AlpacaNewsletter },
  data: () => ({ newsletter }),
  template: `
      <alpaca-newsletter
        :heading="newsletter.heading"
        :input="newsletter.input"
        button="Submit"
        :checkboxes="newsletter.checkboxes"
        @submit="exampleMethod"
      />
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
