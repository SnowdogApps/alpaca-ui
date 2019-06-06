import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import generateVueInfoTable from '../../../utils/helpers/generate-vue-info-table.js'
import selectorsConfig from './Message.selectors.json'

import AMessage from './Message.vue'

const info = `
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const defaultData = {
  components: { AMessage },
  methods: {
    onClick: action('Action clicked')
  }
}

storiesOf('Molecules/Message', module)
  .addParameters({ info })
  .add('Default', () => ({
    ...defaultData,
    template: `
      <a-message
        action1-text="Ok"
        @action1="onClick"
      >
        Product has been added to the cart!
      </a-message>
    `
  }))
  .add('Success', () => ({
    ...defaultData,
    template: `
      <a-message
        class="message--success"
        action1-text="Ok"
        action2-text="Proceed to checkout"
        @action1="onClick"
        @action2="onClick"
      >
        Product has been added to the cart!
      </a-message>
    `
  }))
  .add('Error', () => ({
    ...defaultData,
    template: `
      <a-message
        class="message--error"
        action1-text="Cancel"
        @action1="onClick"
      >
        Product has been added to the cart!
      </a-message>
    `
  }))
  .add('With slot', () => ({
    ...defaultData,
    template: `
      <a-message class="message--error">
        Product has been added to the cart!
        <template #actions>
          <button
            style="
              margin: 15px 0;
              color: white;
              background: none;
              border: none;
              cursor: pointer;
            "
            @click="onClick"
          >
            Ok
          </button>
        </template>
      </a-message>
    `
  }))
