import { storiesOf } from '@storybook/vue'

import Pager from './Pager.vue'

import pagination from './mocks/pagination.json'

storiesOf('Modules/Pager', module)
  // @vue/component
  .add('Default', () => ({
    components: { Pager },
    data: () => ({
      pagination
    }),
    computed: {
      currentPage () {
        return this.pagination.page
      }
    },
    methods: {
      setCurrentPage (page) {
        this.pagination.page = page
      }
    },
    template: `
      <pager
        @update:page="(page) => {this.setCurrentPage(page)}"
        :page="currentPage"
        :limit="pagination.limit"
        :totalSize="pagination.totalSize"
      />
    `
  }))
