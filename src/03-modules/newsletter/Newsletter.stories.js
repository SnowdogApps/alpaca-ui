import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ANewsletter from './Newsletter.vue'
import newsletter from './mocks/newsletter.json'

storiesOf('Modules/Newsletter', module)
  .add('Default', () => ({
    components: { ANewsletter },
    data: () => ({
      newsletter,
      checkbox: {
        status: true,
        name: 'newsletter',
        id: 'newsletter-agreement',
        value: 'newsletter-agreement-value',
        label: 'I agree to Terms and conditions and I am happy to receive your newsletter with all your promotions.'
      }
    }),
    methods: {
      exampleMethod: action('Clicked button')
    },
    template: `
      <div style="background: #393243; padding: 0 10px;">
        <a-newsletter
          :heading="newsletter.heading"
          :input="newsletter.input"
          button-text="Submit"
          :checkbox="checkbox"
          @submit="exampleMethod"
        />
      </div>
    `
  }))
