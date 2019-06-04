import { storiesOf } from '@storybook/vue'

import ACookieMessage from './CookieMessage.vue'

storiesOf('Elements/CookieMessage', module)
  // @vue/component
  .add('Default', () => ({
    components: { ACookieMessage },
    template: `
      <a-cookie-message
        text="<a href='#' class='cookie-message__link'>Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings."
        closeIcon="close"
        dataType="cookie"
        closeButton="Close"
      />
    `
  }))
