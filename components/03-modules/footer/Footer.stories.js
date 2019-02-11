import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaFooter from './Footer.vue'

import listElements from './mocks/listElements.json'
import dropdownListElements from './mocks/dropdownListElements.json'

storiesOf('Modules/Footer', module).add('Default', () => ({
  components: { App, AlpacaFooter },
  data: () => ({
    listElements,
    dropdownListElements
  }),
  template: `
    <app>
      <alpaca-footer 
       copyright-text="Copyright © 2019 Alpaca. All rights reserved."
       social-list-subtitle="Find us on"
       :social-elements="listElements"
       :list-elements="dropdownListElements"
       cookie-text="<a href='#' class='cookie-message__link'>Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings."
      />
    </app>
  `
}))
