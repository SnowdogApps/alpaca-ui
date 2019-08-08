import { storiesOf } from '@storybook/vue'

import APagination from './Pagination.vue'

storiesOf('Modules/Pagination', module)
// @vue/component
  .add('Default', () => ({
    components: { APagination },
    template: `
      <a-pagination
        :pages="17"
        :currentPage="5"
      />
    `
  }))
