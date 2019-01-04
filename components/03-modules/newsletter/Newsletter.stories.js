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
        :headingText="newsletter.heading.text"
        :input="newsletter.input"
        :button="newsletter.button"
        :checkbox="newsletter.checkbox"
        @submit="exampleMethod"
      >
        <template slot="checkboxLabel">
          <span v-html="newsletter.checkboxLabel" />
        </template>
      </alpaca-newsletter>
    </app>
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
