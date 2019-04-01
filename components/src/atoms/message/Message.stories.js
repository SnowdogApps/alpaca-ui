import { storiesOf } from '@storybook/vue'

import AMessage from './Message.vue'

const info = `
  ###### Use these modifiers with \`.message\` class.
  - \`.message--success\` - Selector for applying styles for success message
  - \`.message--error\` - Selector for applying styles for error message
  ---
`

storiesOf('Atoms/Message', module)
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
