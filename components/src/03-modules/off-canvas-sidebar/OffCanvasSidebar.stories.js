import { storiesOf } from '@storybook/vue'

import AButton from '../../atoms/button/Button.vue'
import AInput from '../../02-elements/input/Input.vue'
import AOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

storiesOf('Modules/Off Canvas Sidebar', module)
  .add('Default', () => ({
    components: { AButton, AInput, AOffCanvasSidebar },
    data: () => ({ value: null }),
    template: `
      <div>
        <a-button @click="showSidebar">
          Sidebar button
         </a-button>
        <a-off-canvas-sidebar
          name="default"
          ref="modalDefault"
          heading="Sidebar Heading"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a-input
            label="Inline text"
            type="text"
            id="field_id"
            name="inline"
            placeholder="Test focus trap"
            inline
            v-model="value"
          />
         </a-off-canvas-sidebar>
      </div>
    `,
    methods: {
      showSidebar () {
        this.$refs.modalDefault.show('default')
      }
    }
  }))
  .add('Blank', () => ({
    components: { AButton, AOffCanvasSidebar },
    template: `
      <div>
        <a-button @click="showBlankSidebar">
          Blank sidebar button
         </a-button>
        <a-off-canvas-sidebar
          name="blank"
          ref="modalBlank"
          blank
          :closeOnBackgroundClick="false"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </a-off-canvas-sidebar>
      </div>
    `,
    methods: {
      showBlankSidebar () {
        this.$refs.modalBlank.show('blank')
      }
    }
  }))
