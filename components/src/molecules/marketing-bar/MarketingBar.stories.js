import { storiesOf } from '@storybook/vue'

import MarketingBar from './MarketingBar.vue'

storiesOf('Molecules/MarketingBar', module)
  // @vue/component
  .add('Default', () => ({
    components: { MarketingBar },
    template: `
      <MarketingBar>
        Subscribe and get 10$ for Shopping!
      </MarketingBar>
    `
  }))
