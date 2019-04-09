import { storiesOf } from '@storybook/vue'

import AInformation from './Information.vue'

const info = {}

storiesOf('Global/Information', module)
  .add('Default', () => ({
    components: { AInformation },
    template: `
        <a-information
          title="Balance"
          text="Your balance is: $0.00"
        />
    `
  }),
  { info }
  )
