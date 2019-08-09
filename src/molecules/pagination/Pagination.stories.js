import { storiesOf } from '@storybook/vue'

import Pager from './Pagination.vue'

storiesOf('Molecules/Pagination', module)
  // @vue/component
  .add('Default', () => ({
    components: { Pager },
    data: () => ({
      page: 1
    }),
    computed: {
      currentPage () {
        return this.page
      }
    },
    methods: {
      setCurrentPage (page) {
        this.page = page
      }
    },
    template: `
      <pager
        @update:page="(page) => {this.setCurrentPage(page)}"
        :page="page"
        :limit="3"
        :totalSize="55"
      />
    `
  }))
