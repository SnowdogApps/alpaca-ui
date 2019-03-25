import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import toolbar from './mocks/toolbar.json'

import AlpacaToolbar from './Toolbar.vue'

storiesOf('Modules/Toolbar', module)
  .add('Default', () => ({
    data: () => {
      return {
        toolbar
      }
    },
    components: { AlpacaToolbar },
    template: `
        <alpaca-toolbar
          show-mode
          show-sorter
          show-limit
          show-amount
          :sort-by="toolbar.sortBy"
          :limiter="toolbar.limiter"
          :amount="toolbar.amount"
          @listView="listView"
          @gridView="gridView"
        />
    `,
    methods: {
      listView: action('Change on list view'),
      gridView: action('Change on gird view')
    }
  }))
  .add('With pager', () => ({
    data: () => {
      return {
        toolbar
      }
    },
    components: { AlpacaToolbar },
    template: `
        <alpaca-toolbar
          show-mode
          show-sorter
          show-limit
          show-pager
          show-amount
          :sort-by="toolbar.sortBy"
          :limiter="toolbar.limiter"
          :pager="toolbar.pager"
          :amount="toolbar.amount"
          @listView="listView"
          @gridView="gridView"
        />
    `,
    methods: {
      listView: action('Change on list view'),
      gridView: action('Change on grid view')
    }
  }))
