import { storiesOf } from '@storybook/vue'

import ALink from '../../atoms/link/Link.vue'
import ACookieMessage from './CookieMessage.vue'

storiesOf('Molecules/CookieMessage', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ACookieMessage, ALink },
    template: `
      <a-cookie-message
        closeIcon="close"
        dataType="cookie"
        closeButton="Close"
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
    template: `
      <a-cookie-message
        closeIcon="close"
        dataType="cookie"
        closeButton="Close"
        aria-label="Cookie policy message"
        close-aria-label="Close cookie message"
      >
        <a-link href='#'>
          Example link
        </a-link> 
          Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings."
        <template #button="{ closeBar }">
           <button @click="closeBar">Custom button</button>
        </template>
      </a-cookie-message>
    `
  }))
