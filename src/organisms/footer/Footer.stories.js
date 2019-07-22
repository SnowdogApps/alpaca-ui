import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AFooter from './Footer.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ANewsletter from '../../molecules/newsletter/Newsletter.vue'

import socials from '../../../mocks/socials.json'
import menu from '../../../mocks/footer-menu.json'

const checkbox = {
  name: 'agreement',
  value: 'agreement-value',
  id: 'newsletter-agreement',
  label: 'I agree to Terms and conditions and I am happy to receive your newsletter with all your promotions.'
}

const input = {
  placeholder: 'Enter your email address',
  id: 'newsletter-id',
  name: 'newsletter-email',
  label: 'Email'
}

const cookieMessage = {
  visible: true,
  text: 'Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.',
  closeButton: 'Close',
  closeAriaLabel: 'Close cookie message'
}

storiesOf('Organisms/Footer', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AFooter },
    data: () => ({
      socials,
      menu,
      cookieMessage,
      checkbox,
      input
    }),
    methods: {
      submitNewsletter: action('Submitted'),
      closeCookieMessage () {
        this.cookieMessage.visible = false
      }
    },
    template: `
      <a-footer
        :input="input"
        :checkbox="checkbox"
        :social-list="socials"
        :menu="menu"
        :cookie-message="cookieMessage"
        copyright-text="Copyright © 2019 A. All rights reserved."
        scroll-aria-label="Scroll to top"
        heading="Sing up to our twisted newsletter"
        social-list-subtitle="Find us on"
        @closeCookieMessage="closeCookieMessage"
        @submitNewsletter="submitNewsletter"
      />
    `
  }))
  .add('With slots', () => ({
    components: { AFooter, ANewsletter, AIcon },
    data: () => ({
      socials,
      menu,
      input,
      checkbox,
      status: true
    }),
    methods: {
      onChange: action('Option changed')
    },
    template: `
      <a-footer
        :menu="menu"
        :social-list="socials"
      >
        <template #scrollButton="{ scrollToTop }">
          <span><!-- Removed scrollButton--></span>
        </template>
        <template #newsletter="{ submitNewsletter }">
          <div style="border: 1px solid #444; padding: 16px;">
            <a-newsletter
              class="a-footer__newsletter"
              heading="Sing up to our twisted newsletter"
              :input="input"
              button-text="Submit"
              :checkbox="checkbox"
              @submit="submitNewsletter"
            />
          </div>
        </template>
        <template #socialTitle>
          <span>Find us on</span>
        </template>
      </a-footer>
    `
  }))
