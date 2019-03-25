import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import MarketingBar from './MarketingBar.vue'

storiesOf('Elements/MarketingBar', module)
  .add('Default', () => ({
    components: { App, MarketingBar },
    template: `
      <MarketingBar>
        Subscribe and get 10$ for Shopping!
      </MarketingBar>
    `
  }))
