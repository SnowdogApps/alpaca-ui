import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import Pager from './Pager.vue'

import pagination from './mocks/pagination.json'

storiesOf('Modules/Pager', module).add('Default', () => ({
  components: { App, Pager },
  data: () => ({
    pagination
  }),
  computed: {
    currentPage () {
      return this.pagination.page
    }
  },
  template: `
    <app>
      <pager
        @update:page="(page) => {this.setCurrentPage(page)}"
        :page="currentPage"
        :limit="pagination.limit"
        :totalSize="pagination.totalSize"
      />
    </app>
  `,
  methods: {
    setCurrentPage(page) {
      this.pagination.page = page
    }
  }
}))
