import { storiesOf } from '@storybook/vue'

import AlpacaDivider from './Divider.vue'

storiesOf('Elements/Divider', module)
  .add('Default', () => ({
    components: { AlpacaDivider},
    template: `
        <alpaca-divider/>
    `
  }))
