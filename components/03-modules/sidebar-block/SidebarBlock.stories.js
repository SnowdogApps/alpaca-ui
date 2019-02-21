import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaSidebarBlock from './SidebarBlock.vue'

storiesOf('Modules/Sidebar Block', module)
  .add('Default', () => ({
    components: { App, AlpacaSidebarBlock },
    template: `
      <app>
        <alpaca-sidebar-block/>
      </app>
    `
  }))
