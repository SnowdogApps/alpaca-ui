import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

storiesOf('Modules/Off Canvas Sidebar', module)
  .add('Default', () => ({
    components: { App, AlpacaButton, AlpacaOffCanvasSidebar },
    template: `
      <app>
        <alpaca-button @click="showSidebar">
          Sidebar button
        </alpaca-button>
        <alpaca-off-canvas-sidebar
          ref="mySidebarRef"
          heading="Sidebar Heading"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-off-canvas-sidebar>
      </app>
    `,
    methods: {
      showSidebar () {
        this.$refs.mySidebarRef.show()
      }
    }
  }))
  .add('Blank', () => ({
    components: { App, AlpacaButton, AlpacaOffCanvasSidebar },
    template: `
      <app>
        <alpaca-button @click="showBlankSidebar">
          Blank sidebar button
        </alpaca-button>
        <alpaca-off-canvas-sidebar
          ref="myBlankSidebarRef"
          blank
          :closeOnBackgroundClick="false"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </alpaca-off-canvas-sidebar>
      </app>
    `,
    methods: {
      showSidebar () {
        this.$refs.mySidebarRef.show()
      },
      showBlankSidebar () {
        this.$refs.myBlankSidebarRef.show()
      }
    }
  }))
