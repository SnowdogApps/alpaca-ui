import { storiesOf } from '@storybook/vue'

import AlpacaDashboardNav from './DashboardNav.vue'

import nav from "./mocks/nav"

storiesOf('Modules/Dashboard', module)
  .add('Nav', () => ({
    components: { AlpacaDashboardNav },
    data: () => ({
      nav
    }),
    template: `
      <alpaca-dashboard-nav
        title="My Account"
        :list="nav"
        actualPage="Account Dashboard"
      />
    `
  }))
