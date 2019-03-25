import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaBanner from './Banner.vue'

import banner from './mocks/banner.json'

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
          aria-label="Banner"
        />
      </app>
    `
  }))
