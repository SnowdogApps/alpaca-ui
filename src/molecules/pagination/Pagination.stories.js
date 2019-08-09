import { storiesOf } from '@storybook/vue'
import { number } from '@storybook/addon-knobs'

import Pager from './Pagination.vue'

storiesOf('Molecules/Pagination', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { Pager },
    data: () => ({
      page: 1
    }),
    props: {
      limitPageKnobs: {
        default: number('Limit per page', 3)
      },
      totalSizeKnobs: {
        default: number('Total size', 20)
      }
    },
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
        :limit="limitPageKnobs"
        :totalSize="totalSizeKnobs"
      />
    `
  }))
