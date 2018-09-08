import { storiesOf } from '@storybook/vue'

import Catalog from '../components/04-views/catalog/Catalog.vue'

storiesOf('Views|Catalog', module)
  .add('Default', () => ({
    components: { Catalog },
    template: `
      <Catalog />
    `,
  }))
