import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaTab from './Tab.vue'

import tab from './mocks/tab.json'

storiesOf('Elements/Tab', module).add('Default', () => ({
  components: { App, AlpacaTab },
  data: () => ({
    tab
  }),
  template: `
    <app>
      <alpaca-tab :tab="tab"/>
    </app>
  `
}))
