import { storiesOf } from '@storybook/vue'

import App from '@/components/01-globals/app/App.vue'
import AlpacaDivider from './Divider.vue'

storiesOf('Elements/Divider', module)
  .add('Default', () => ({
    components: { App, AlpacaDivider},
    template: `
      <app>
        <alpaca-divider/>
      </app>
    `
  }))
