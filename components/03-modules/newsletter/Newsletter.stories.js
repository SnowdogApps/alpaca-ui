import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaNewsletter from './Newsletter.vue'

import newsletter from './mocks/newsletter.json'

storiesOf('Modules/Newsletter', module).add('Default', () => ({
  components: { App, AlpacaNewsletter },
  data: () => ({
    newsletter
  }),
  template: `
    <app>
      <alpaca-newsletter 
        :headingText="newsletter.heading.text"
        :input="newsletter.input"
        :button="newsletter.button"
        :checkbox="newsletter.checkbox"
      />
    </app>
  `
}))
