import { storiesOf } from '@storybook/vue'

import AMessage from './Message.vue'

const info = `
  ------
  #### Available BEM modifiers for \`.message\` class:
  - \`.message--success\`
  - \`.message--error\`
  - \`.message--warning\`
  ------
`

storiesOf('Atoms/Message', module)
  .add('Default', () => ({
    components: { AMessage },
    template: `
      <a-message 
        class="message--success"
        icon="check"
      >
        You added Jacket to your shopping cart.
      </a-message>
    `
    }),
    { info }
  )
  .add('Warning', () => ({
    components: { AMessage },
    template: `
      <a-message
        class="message--warning"
        icon="warning"
      >
        You added Jacket to your shopping cart.
      </a-message>
    `
    }),
    { info }
  )
  .add('Error', () => ({
    components: { AMessage },
    template: `
      <a-message
        class="message--error"
        icon="error"
      >
        You added Jacket to your shopping cart.
      </a-message>
    `
    }),
    { info }
  )
