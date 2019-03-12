import { storiesOf } from '@storybook/vue'

import App from '@/components/01-globals/app/App.vue'
import AlpacaButton from '@/components/02-elements/button/Button.vue'
import AlpacaModal from '@/components/03-modules/modal/Modal.vue'

import EventBus from '@/eventBus'

storiesOf('Modules/Modal', module)
  .add('Default', () => ({
    components: { App, AlpacaButton, AlpacaModal },
    template: `
      <app>
        <alpaca-button @click="showModal">
          Modal button
        </alpaca-button>
        <alpaca-modal
          name="default"
          heading="Modal Heading"
        >
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
