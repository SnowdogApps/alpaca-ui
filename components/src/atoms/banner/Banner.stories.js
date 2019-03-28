import { storiesOf } from '@storybook/vue'

import ABanner from './Banner.vue'
import ASource from '../source/Source.vue'

import banner from './mocks/banner.json'

storiesOf('Atoms/Banner', module)
  .add('Default', () => ({
    components: { ABanner, ASource },
    data() {
      return {
        banner
      }
    },
    template: `
        <a-banner
          link="#"
          aria-label="Banner"
        >
         <a-source
           v-for="item in banner.sources"
           :key="item.id"
           :srcset="item.src"
           :media="item.mediaQuery"
         />
         <img
           :src="banner.defaultSrc"
           alt="banner-image"
         >
        </a-banner>
    `
  }))
