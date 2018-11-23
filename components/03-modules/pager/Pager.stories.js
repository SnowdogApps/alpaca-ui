import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import Pager from './Pager.vue'

import pagination from './mocks/pagination.json'

storiesOf('Modules/Pager', module).add('Default', () => ({
  components: { App, Pager },
  data: () => ({
    pagination
  }),
  template: `
    <app>
      <pager 
        @update:page="pagination.page"
        :page="pagination.page"
        :limit="pagination.limit" 
        :totalSize="pagination.totalSize" 
      />
    </app>
  `
}))
