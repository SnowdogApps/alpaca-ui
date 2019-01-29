import {storiesOf} from '@storybook/vue';

import App from '../../01-globals/app/App.vue';
import AlpacaCookieMessage from './CookieMessage.vue';

storiesOf('Elements/CookieMessage', module)
  .add('Default', () => ({
    components: { App, AlpacaCookieMessage },
    template: `
      <app>
        <alpaca-cookie-message
            ariaLabel="Cookie policy message"
            text= '<a href="#" class="cookie-message__link">Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.'
            closeIcon="close"
            closeAriaLabel="Close cookie message"
            dataType= "cookie"
        />
      </app>
    `
  }))
  .add('With button', () => ({
    components: { App, AlpacaCookieMessage },
    template: `
      <app>
        <alpaca-cookie-message
            class="cookie-message--with-button"
            ariaLabel="Cookie policy message"
            text= 'This site uses cookies. <a href="#" class="cookie-message__link">Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.'
            closeIcon="close"
            closeLabel="Close"
            closeAriaLabel="Close cookie message"
            dataType= "cookie1"
        />
      </app>
    `
  }))
