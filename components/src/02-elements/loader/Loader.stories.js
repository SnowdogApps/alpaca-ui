import { storiesOf } from '@storybook/vue'

import Loader from './Loader.vue'

storiesOf('Elements/Loader', module)
  .add('Default', () => ({
    components: { Loader },
    template: `
        <Loader />
    `
  }))
