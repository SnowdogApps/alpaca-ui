import { storiesOf } from '@storybook/vue'

import AlpacaCookieMessage from './CookieMessage.vue'

storiesOf('Elements/CookieMessage', module)
  .add('Default', () => ({
    components: { AlpacaCookieMessage },
    template: `
        <alpaca-cookie-message
          text="<a href='#' class='cookie-message__link'>Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings."
          closeIcon="close"
          dataType="cookie"
          closeButton="Close"
        />
    `
  }))
