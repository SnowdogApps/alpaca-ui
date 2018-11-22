import { storiesOf } from '@storybook/vue'

import banner from './mocks/banner.json'

import App from '../../01-globals/app/App.vue'
import AlpacaBanner from './Banner.vue'

storiesOf('Elements/Banner', module)
  .add('Default', () => ({
    components: { App, AlpacaBanner},
    data() {
      return {
        banner
      }
    },
    template: `
      <app>
        <alpaca-banner 
          :link="banner.link"
          :image="banner.image"
          />
      </app>
    `
  }))
