import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import ALink from '../../atoms/link/Link.vue'
import ACookieMessage from './CookieMessage.vue'

storiesOf('Molecules/CookieMessage', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ACookieMessage, ALink },
    props: {
      textKnobs: {
        default: text('Text', 'Close')
      }
    },
    template: `
      <a-cookie-message
        dataType="cookie"
        :closeButton="textKnobs"
        aria-label="Cookie policy message"
        close-aria-label="Close cookie message"
      >
        <a-link href='#'>
          Example link
        </a-link> 
          Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings."
      </a-cookie-message>
    `
  }))
  .add('With slots', () => ({
    components: { ACookieMessage, ALink },
    props: {
      textKnobs: {
        default: text('Text', 'Custom button')
      }
    },
    template: `
      <a-cookie-message
        dataType="cookie"
        aria-label="Cookie policy message"
        close-aria-label="Close cookie message"
      >
        <a-link href='#'>
          Example link
        </a-link> 
          Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings."
        <template #button="{ closeBar }">
          <button @click="closeBar">
            {{ textKnobs }}
          </button>
        </template>
      </a-cookie-message>
    `
  }))
