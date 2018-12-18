import { storiesOf } from '@storybook/vue'

import App from '../../../01-globals/app/App.vue'
import AlpacaDashboardNav from './Nav.vue'

import items from './mocks/nav.json'

storiesOf('Modules/Dashboard/Nav', module)
  .add('Default', () => ({
    components: { App, AlpacaDashboardNav },
    data: () => ({
      items
    }),
    template: `
      <app>
        <alpaca-dashboard-nav
          :title="items.title"
          :list="items.list.elements"
          :listClass="items.list.class"
          :actualPage="items.actualPage"
       />
      </app>
    `
  }))
