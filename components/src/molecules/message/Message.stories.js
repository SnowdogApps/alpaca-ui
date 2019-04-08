import { storiesOf } from '@storybook/vue'

import AMessage from './Message.vue'
import AButton from '../../../src/02-elements/button/Button.vue'

const info = `
  ---
  #### Use these modifiers with \`.message\` class.
  - \`.message--success\` - Selector for applying styles for success message
  - \`.message--error\` - Selector for applying styles for error message
  ---
`

storiesOf('Molecules/Message', module)
  .add('Default', () => ({
    components: { AMessage },
    template: `
        <a-message 
          accept-button="Ok" 
        >
          Product has been added to the cart!
        </a-message>
    `
    }),
    { info }
  )
  .add('Success', () => ({
    components: { AMessage },
    template: `
        <a-message 
          accept-button="Ok" 
          cancel-button="Proceed to checkout"
          class="message--success"
        >
          Product has been added to the cart!
        </a-message>
    `
    }),
    { info }
  )
  .add('Error', () => ({
    components: { AMessage },
    template: `
        <a-message 
          accept-button="Ok" 
          class="message--error"
        >
          Product has been added to the cart!
        </a-message>
    `
    }),
    { info }
  )
  .add('With slot', () => ({
      components: { AMessage, AButton },
      template: `
        <a-message class="message--error">
          Product has been added to the cart!
          <template #actions>
            <a-button>Ok</a-button>
          </template>
        </a-message>
    `
    }),
    { info }
  )
