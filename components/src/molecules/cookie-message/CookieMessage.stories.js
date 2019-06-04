import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import ALink from '../../atoms/link/Link.vue'
import ACookieMessage from './CookieMessage.vue'

const data = {
  props: {
    textKnobs: {
      default: text('Button text', 'Button text')
    },
    linkText: {
      default: text('Link text', 'Example link')
    },
    infoText: {
      default: text('Info text', 'Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.')
    }
  },
  data: () => ({
    isOpen: true
  }),
  methods: {
    close () {
      this.isOpen = false
    }
  }
}
storiesOf('Molecules/CookieMessage', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ACookieMessage, ALink },
    ...data,
    template: `
      <a-cookie-message
        v-if="isOpen"
        :close-button="textKnobs"
        aria-label="Cookie policy message"
        close-aria-label="Close cookie message"
        @close="close"
      >
        <a-link href='#'>
          {{ linkText }}
        </a-link> 
        {{ infoText }}
      </a-cookie-message>
    `
  }))
  .add('With slots', () => ({
    components: { ACookieMessage, ALink },
    ...data,
    template: `
      <a-cookie-message
        v-if="isOpen"
        aria-label="Cookie policy message"
        close-aria-label="Close cookie message"
      >
        <a-link href='#'>
          {{ linkText }}
        </a-link> 
        {{ infoText }}
        <template #button="{ closeBar }">
          <button @click="() => { closeBar(); close(); }">
            {{ textKnobs }}
          </button>
        </template>
      </a-cookie-message>
    `
  }))
