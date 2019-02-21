import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaModal from '../../03-modules/modal/Modal.vue'

storiesOf('Modules/Modal', module)
  .add('Default', () => ({
    components: { App, AlpacaButton, AlpacaModal },
    template: `
      <app>
        <alpaca-button @click="showModal">
          Modal button
        </alpaca-button>
        <alpaca-modal ref="myModalRef">
          <h1>
            Modal heading
          </h1>
          <div>
            Modal body
          </div>
        </alpaca-modal>
      </app>
    `,
    methods: {
      showModal () {
        this.$refs.myModalRef.show()
      }
    }
  }))
  .add('Close Button', () => ({
    components: { App, AlpacaButton, AlpacaModal },
    template: `
      <app>
        <alpaca-button @click="showModal">
          Open Modal
        </alpaca-button>
        <alpaca-modal
          ref="myModalCloseButtonRef" 
          :max-width="500"
          :closeButton="false"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </alpaca-modal>
      </app>
    `,
    methods: {
      showModal() {
        this.$refs.myModalCloseButtonRef.show()
      }
    }
  }))
