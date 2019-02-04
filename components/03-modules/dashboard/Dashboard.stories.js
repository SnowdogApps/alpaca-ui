import { storiesOf } from '@storybook/vue'

import form from './form/mocks/form'
import nav from "./nav/mocks/nav";
import items from "./items/mocks/items";
import bodyRows from "./table/mocks/bodyRows";
import headCells from "./table/mocks/headCells";

import App from '../../01-globals/app/App.vue'
import AlpacaDashboardForm from './form/Form.vue'
import AlpacaDashboardNav from './nav/Nav.vue'
import AlpacaDashboardItem from './items/Items.vue'
import AlpacaDashboardTable from './table/Table.vue'

storiesOf('Modules/Dashboard', module)
  .add('Form', () => ({
    components: { App, AlpacaDashboardForm },
    data: () => ({
      form
    }),
    template: `
      <app>
        <alpaca-dashboard-form
          :level="5"
          title="Example heading"
          :fields="form.fields"
          :checkboxes="form.checkboxes"
          :hiddenFields="form.hiddenFields"
          formTitle="Form title"
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
         :informations="items.informations"
         :title="items.title"
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
          :title="nav.title"
          :list="nav.list.elements"
          :listClass="nav.list.class"
          :actualPage="nav.actualPage"
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
