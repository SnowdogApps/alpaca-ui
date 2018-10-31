import {storiesOf} from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaHeader from './Header.vue'

import menu from '../../../data/menu.json'

storiesOf('Modules/Header', module).add('Default', () => ({
  components: {App, AlpacaHeader},
  data: () => ({
    menu
  }),
  template: `
    <app>
      <alpaca-header :menu="menu"/>
    </app>
  `
}))
