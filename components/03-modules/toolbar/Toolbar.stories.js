import { storiesOf } from '@storybook/vue'

import toolbar from './mocks/toolbar.json'

import App from '../../01-globals/app/App.vue'
import AlpacaToolbar from './Toolbar.vue'

storiesOf('Modules/Toolbar', module).add('Default', () => ({
    data: () => {
      return {
        toolbar
      }
    },
    components: { App, AlpacaToolbar },
    template: `
      <app>
        <alpaca-toolbar
          showMode
          showSorter
          showLimit
          showAmount
          :sortBy="toolbar.sortBy"
          :limiter="toolbar.limiter"
          :amount="toolbar.amount"
        />
      </app>
    `
  }))
  .add('With pager', () => ({
    data: () => {
      return {
        toolbar
      }
    },
    components: { App, AlpacaToolbar },
    template: `
      <app>
        <alpaca-toolbar
          showMode
          showSorter
          showLimit
          showPager
          showAmount
          gridHref="#"
          listHref="#"
          :sortBy="toolbar.sortBy"
          :limiter="toolbar.limiter"
          :pager="toolbar.pager"
          :amount="toolbar.amount"
        />
      </app>
    `
  }))

