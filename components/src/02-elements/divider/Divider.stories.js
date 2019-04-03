import { storiesOf } from '@storybook/vue'

import ADivider from './Divider.vue'

storiesOf('Elements/Divider', module)
  .add('Default', () => ({
    components: { ADivider},
    template: `
        <a-divider/>
    `
  }))
