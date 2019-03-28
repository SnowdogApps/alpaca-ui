import { storiesOf } from '@storybook/vue'

import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaInput from '../../02-elements/input/Input.vue'
import AlpacaModal from '../../03-modules/modal/Modal.vue'

storiesOf('Modules/Modal', module)
  .add('Default', () => ({
    components: { AlpacaButton, AlpacaModal, AlpacaHeading, AlpacaInput },
    data: () => ({ value: null }),
    template: `
      <div>
        <alpaca-button @click="showModal">
          Modal button
        </alpaca-button>
        <alpaca-modal name="default" ref="modalDefault">
          <template #heading>
            <alpaca-heading :level="1" class="modal__heading">
              Modal heading
            </alpaca-heading>
          </template>
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <alpaca-input
            label="Inline text"
            type="text"
            id="field_id"
            name="inline"
            placeholder="Test focus trap"
            inline
            v-model="value"
          />
        </alpaca-modal>
      </div>
    `,
    methods: {
      showModal () {
        this.$refs.modalDefault.show('default')
      }
    }
  }))
  .add('Blank', () => ({
    components: { AlpacaButton, AlpacaModal },
    template: `
      <div>
        <alpaca-button @click="showModal">
          Open Modal
        </alpaca-button>
        <alpaca-modal
          name="blank"
          ref="modalBlank"
          blank
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-modal>
      </div>
    `,
    methods: {
      showModal () {
        this.$refs.modalBlank.show('blank')
      }
    }
  }))
