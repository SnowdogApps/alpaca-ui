import { storiesOf } from '@storybook/vue'

import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

storiesOf('Modules/Off Canvas Sidebar', module)
  .add('Default', () => ({
    components: { AlpacaButton, AlpacaOffCanvasSidebar },
    template: `
        <alpaca-button @click="showSidebar">
          Sidebar button
        </alpaca-button>
        <alpaca-off-canvas-sidebar
          name="default"
          ref="modalDefault"
          heading="Sidebar Heading"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-off-canvas-sidebar>
    `,
    methods: {
      showSidebar () {
        this.$refs.modalDefault.show('default')
      }
    }
  }))
  .add('Blank', () => ({
    components: { AlpacaButton, AlpacaOffCanvasSidebar },
    template: `
        <alpaca-button @click="showBlankSidebar">
          Blank sidebar button
        </alpaca-button>
        <alpaca-off-canvas-sidebar
          name="blank"
          ref="modalBlank"
          blank
          :closeOnBackgroundClick="false"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-off-canvas-sidebar>
    `,
    methods: {
      showBlankSidebar () {
        this.$refs.modalBlank.show('blank')
      }
    }
  }))
