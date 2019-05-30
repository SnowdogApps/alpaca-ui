import { storiesOf } from '@storybook/vue'

import MarketingBar from './MarketingBar.vue'

storiesOf('Molecules/MarketingBar', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { MarketingBar },
    template: `
      <MarketingBar>
        Subscribe and get 10$ for Shopping!
      </MarketingBar>
    `
  }))
  .add('With slots', () => ({
    components: { MarketingBar },
    template: `
      <MarketingBar>
        Subscribe and get 10$ for Shopping!
        <template #button="{ onButtonClose }">
          <button 
            @click="onButtonClose"
            style="border: none; margin-top: 10px; opacity: 0.8;"
          >
            Close
          </button>
        </template>
      </MarketingBar>
    `
  }))
