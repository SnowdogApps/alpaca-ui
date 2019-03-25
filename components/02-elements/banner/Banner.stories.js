import { storiesOf } from '@storybook/vue'

import AlpacaBanner from './Banner.vue'

import banner from './mocks/banner.json'

storiesOf('Elements/Banner', module)
  .add('Default', () => ({
    components: { AlpacaBanner},
    data() {
      return {
        banner
      }
    },
    template: `
        <alpaca-banner
          :link="banner.link"
          :image="banner.image"
          aria-label="Banner"
        />
    `
  }))
