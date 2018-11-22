import { storiesOf } from '@storybook/vue'

import breadcrumbs from './mocks/breadcrumbs.json'

import App from '../../01-globals/app/App.vue'
import AlpacaBreadcrumbs from './Breadcrumbs.vue'

storiesOf('Elements/Breadcrumbs', module)
  .add('Default', () => ({
    components: { App, AlpacaBreadcrumbs },
    data() {
      return {
        breadcrumbs
      }
    },
    template: `
      <app>
        <alpaca-breadcrumbs :breadcrumbs="breadcrumbs"/>
      </app>
    `
  }))
