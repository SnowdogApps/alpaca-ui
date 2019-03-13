import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'
import AlpacaModal from '@alpaca-storybook/components/03-modules/modal/Modal.vue'
import AlpacaHeading from '@alpaca-storybook/components/01-globals/heading/Heading.vue'

import EventBus from '@alpaca-storybook/eventBus'

storiesOf('Modules/Modal', module)
  .add('Default', () => ({
    components: { App, AlpacaButton, AlpacaModal, AlpacaHeading },
    template: `
      <app>
        <alpaca-button @click="showModal">
          Modal button
        </alpaca-button>
        <alpaca-modal name="default">
          <template #heading>
            <alpaca-heading :level="1" class="modal__heading">
              Modal heading
            </alpaca-heading>
          </template>
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-modal>
      </app>
    `,
    methods: {
      showModal () {
        EventBus.$emit('modal-show', 'default')
      }
    }
  }))
  .add('Blank', () => ({
    components: { App, AlpacaButton, AlpacaModal },
    template: `
      <app>
        <alpaca-button @click="showModal">
          Open Modal
        </alpaca-button>
        <alpaca-modal
          name="blank"
          blank
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-modal>
      </app>
    `,
    methods: {
      showModal () {
        EventBus.$emit('modal-show', 'blank')
      }
    }
  }))
