import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import AMarketingBar from './MarketingBar.vue'

const info = 'Check **Knobs** tab to edit component properties dynamically.'

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
  .addParameters({ info })
  .add('Default', () => ({
    components: { AMarketingBar },
    props: {
      contentKnobs: {
        default: text('Content text', 'Subscribe and get 10$ for Shopping!')
      }
    },
    ...data,
    template: `
      <a-marketing-bar
        v-if="isOpen"
        @close="close"
      >
        {{ contentKnobs }}
      </a-marketing-bar>
    `
  }))
  .add('With slots', () => ({
    components: { AMarketingBar },
    props: {
      buttonKnobs: {
        default: text('Button text', 'Close')
      },
      contentKnobs: {
        default: text('Content text', 'Subscribe!')
      }
    },
    ...data,
    template: `
      <a-marketing-bar v-if="isOpen">
        {{ contentKnobs }}
        <template #button>
          <button 
            @click="close"
            style="border: none; margin-top: 10px; opacity: 0.8;"
          >
            {{ buttonKnobs }}
          </button>
        </template>
      </a-marketing-bar>
    `
  }))
