import { storiesOf } from '@storybook/vue'

import MarketingBar from './MarketingBar.vue'

storiesOf('Elements/MarketingBar', module)
  // @vue/component
  .add('Default', () => ({
    components: { MarketingBar },
    template: `
      <MarketingBar>
        Subscribe and get 10$ for Shopping!
      </MarketingBar>
    `
  }))
