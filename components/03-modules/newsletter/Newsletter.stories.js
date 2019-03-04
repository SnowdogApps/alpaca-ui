import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaNewsletter from './Newsletter.vue'

import newsletter from './mocks/newsletter.json'

storiesOf('Modules/Newsletter', module).add('Default', () => ({
  components: { App, AlpacaNewsletter },
  data: () => ({ newsletter }),
  template: `
    <app>
      <alpaca-newsletter
        :heading="newsletter.heading"
        :input="newsletter.input"
        button="Submit"
        :checkboxes="newsletter.checkboxes"
        @submit="exampleMethod"
      />
    </app>
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
