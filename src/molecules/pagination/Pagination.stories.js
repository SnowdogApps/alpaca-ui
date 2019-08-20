import { storiesOf } from '@storybook/vue'
import { number } from '@storybook/addon-knobs'

import APagination from './Pagination.vue'

storiesOf('Molecules/Pagination', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { APagination },
    data: () => ({
      page: 1
    }),
    props: {
      limitPageKnobs: {
        default: number('Limit per page', 2)
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
      <a-pagination
        @update:page="(page) => {this.setCurrentPage(page)}"
        :current-page="page"
        :limit="limitPageKnobs"
        :totalSize="totalSizeKnobs"
      />
    `
  }))
