import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ANewsletter from './Newsletter.vue'
import AHeading from '../../atoms/heading/Heading.vue'

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
        heading="Sing up to our twisted newsletter"
        :input="newsletter.input"
        button="Submit"
        :checkboxes="newsletter.checkboxes"
        @submit="exampleMethod"
      />
    `
  }))
  .add('With slots', () => ({
    components: { ANewsletter, AHeading },

    template: `
      <a-newsletter>
        <template #heading>
          <a-heading 
            :level="2"
            style="color: white;"
          >
            Sing up to our twisted newsletter
          </a-heading>
        </template>
        <template #input>
          <label for="newsletter" style="color: white;">Sample label</label>
          <input type="text" id="newsletter"/>
        </template>
        <template #button="{ onSubmit }">
          <button 
            @click.stop.prevent="onSubmit"
            style="display: block; margin: 20px 0;"
          >
            Submit
          </button>
        </template>
        <template #agreements>
          <ul style="color: white;">
            <li>I agree to <a href='#' title='Terms and conditions'/></li>
            <li>I am happy to receive your newsletter with all your promotions</li>
            <li>Terms and conditions</li>
          </ul>
        </template>
      </a-newsletter>
    `
  }))