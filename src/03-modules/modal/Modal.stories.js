import { storiesOf } from '@storybook/vue'

import AHeading from '../../atoms/heading/Heading.vue'
import AButton from '../../atoms/button/Button.vue'
import AModal from '../../03-modules/modal/Modal.vue'

storiesOf('Modules/Modal', module)
  // @vue/component
  .add('Default', () => ({
    components: { AButton, AModal, AHeading },
    data: () => ({ value: null }),
    methods: {
      showModal () {
        this.$refs.modalDefault.show('default')
      }
    },
    template: `
      <div>
        <a-button @click.native="showModal">
          Modal button
        </a-button>
        <a-modal name="default" ref="modalDefault">
          <template #heading>
            <a-heading :level="1" class="modal__heading">
              Modal heading
            </a-heading>
          </template>
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </a-modal>
      </div>
    `
  }))
  // @vue/component
  .add('Blank', () => ({
    components: { AButton, AModal },
    methods: {
      showModal () {
        this.$refs.modalBlank.show('blank')
      }
    },
    template: `
      <div>
        <a-button @click.native="showModal">
          Open Modal
        </a-button>
        <a-modal
          name="blank"
          ref="modalBlank"
          blank
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </a-modal>
      </div>
    `
  }))
