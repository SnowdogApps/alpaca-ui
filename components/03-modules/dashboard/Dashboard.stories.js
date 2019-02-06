import { storiesOf } from '@storybook/vue'

import checkboxes from './form/mocks/checkboxes'
import inputs from './form/mocks/inputs'
import hidden from './form/mocks/hiddenInputs'
import nav from "./nav/mocks/nav"
import items from "./items/mocks/items"
import bodyRows from "./table/mocks/bodyRows"
import headCells from "./table/mocks/headCells"

import App from '../../01-globals/app/App.vue'
import AlpacaDashboardForm from './form/Form.vue'
import AlpacaDashboardNav from './nav/Nav.vue'
import AlpacaDashboardItem from './items/Items.vue'
import AlpacaDashboardTable from './table/Table.vue'

storiesOf('Modules/Dashboard', module)
  .add('Form', () => ({
    components: { App, AlpacaDashboardForm },
    data: () => ({
      checkboxes,
      inputs,
      hidden
    }),
    template: `
      <app>
        <alpaca-dashboard-form
          title="Account Information"
          :inputs="inputs"
          :checkboxes="checkboxes"
          :hiddenInputs="hidden.hiddenInputs"
          :hiddenTitles="hidden.hiddenTitles"
          formTitle="Change"
       />
      </app>
    `
  }))
  .add('Items', () => ({
    components: { App, AlpacaDashboardItem },
    data: () => ({
      items
    }),
    template: `
      <app>
        <alpaca-dashboard-item
         :elements="items"
         title="Addresses"
       />
      </app>
    `
  }))
  .add('Nav', () => ({
    components: { App, AlpacaDashboardNav },
    data: () => ({
      nav
    }),
    template: `
      <app>
        <alpaca-dashboard-nav
          title="My Account"
          :list="nav"
          actualPage="Account Dashboard"
       />
      </app>
    `
  }))
  .add('Table', () => ({
    components: { App, AlpacaDashboardTable },
    data: () => ({
      bodyRows,
      headCells
    }),
    template: `
      <app>
        <alpaca-dashboard-table
          title="Recent Orders"
          viewAllLink="#"
          :headCells="headCells"
          :bodyRows="bodyRows"
       />
      </app>
    `
  }))
