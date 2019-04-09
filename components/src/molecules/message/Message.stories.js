import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AMessage from './Message.vue'

const info = `
  ---
  #### Use these modifiers with \`.message\` class.
  - \`.message--success\` - Selector for applying styles for success message
  - \`.message--error\` - Selector for applying styles for error message
  ---
`

const defaultData = {
  components: { AMessage },
  methods: {
    onClick: action('Action clicked')
  }
}

storiesOf('Molecules/Message', module)
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      ...defaultData,
      template: `
        <a-message 
          action1-title="Ok"
          @action1="onClick"
        >
          Product has been added to the cart!
        </a-message>
      `
    })
  )
  .add(
    'Success',
    () => ({
      ...defaultData,
      template: `
        <a-message 
          action1-title="Ok" 
          action2-title="Proceed to checkout"
          @action1="onClick"
          @action2="onClick"
          class="message--success"
        >
          Product has been added to the cart!
        </a-message>
      `
    })
  )
  .add(
    'Error',
    () => ({
      ...defaultData,
      template: `
        <a-message 
          action1-title="Cancel" 
          @action1="onClick"
          class="message--error"
        >
          Product has been added to the cart!
        </a-message>
      `
    })
  )
  .add(
    'With slot',
    () => ({
      ...defaultData,
      template: `
        <a-message class="message--error">
          Product has been added to the cart!
          <template #actions>
            <button 
              @click="onClick"
              style="
                margin: 15px 0; 
                color: white;
                background: none; 
                border: none; 
                cursor: pointer;
              "
            >
              Ok
            </button>
          </template>
        </a-message>
      `
    })
  )
