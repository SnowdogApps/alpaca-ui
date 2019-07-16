import { storiesOf } from '@storybook/vue'

import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'
import AInput from '../../molecules/input/Input.vue'
import AOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

storiesOf('Modules/Off Canvas Sidebar', module)
  // @vue/component
  .add('Default', () => ({
    components: { AButton, AInput, ALabel, AOffCanvasSidebar },
    data: () => ({ value: null }),
    methods: {
      showSidebar () {
        this.$refs.modalDefault.show('default')
      }
    },
    template: `
      <div>
        <a-button @click.native="showSidebar">
          Sidebar button
        </a-button>
        <a-off-canvas-sidebar
          name="default"
          ref="modalDefault"
          heading="Sidebar Heading"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a-input
            class="a-input--inline"
            label="Inline text"
            id="field_id"
            type="text"
            v-model="value"
            placeholder="Test focus trap"
          />
         </a-off-canvas-sidebar>
      </div>
    `
  }))
  // @vue/component
  .add('Blank', () => ({
    components: { AButton, AOffCanvasSidebar },
    methods: {
      showBlankSidebar () {
        this.$refs.modalBlank.show('blank')
      }
    },
    template: `
      <div>
        <a-button @click.native="showBlankSidebar">
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
    `
  }))
