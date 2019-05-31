import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ANewsletter from './Newsletter.vue'

import newsletter from './mocks/newsletter.json'

storiesOf('Organisms/Newsletter', module)
  // @vue/component
  .add('Default', () => ({
    components: { ANewsletter },
    data: () => ({ newsletter }),
    methods: {
      exampleMethod: action('Clicked button')
    },
    template: `
      <a-newsletter
        :heading="newsletter.heading"
        :input="newsletter.input"
        button="Submit"
        :checkboxes="newsletter.checkboxes"
        @submit="exampleMethod"
      />
    `
  }))
