import { storiesOf } from '@storybook/vue'

import AMarketingBar from './MarketingBar.vue'

const data = {
  data: () => ({
    isOpen: true
  }),
  methods: {
    close () {
      this.isOpen = false
    }
  }
}

storiesOf('Molecules/MarketingBar', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AMarketingBar },
    ...data,
    template: `
      <a-marketing-bar
        v-if="isOpen"
        @close="close"
      >
        Subscribe and get 10$ for Shopping!
      </a-marketing-bar>
    `
  }))
  .add('With slots', () => ({
    components: { AMarketingBar },
    ...data,
    template: `
      <a-marketing-bar v-if="isOpen">
        Subscribe and get 10$ for Shopping!
        <template #button>
          <button 
            @click="close"
            style="border: none; margin-top: 10px; opacity: 0.8;"
          >
            Close
          </button>
        </template>
      </a-marketing-bar>
    `
  }))
