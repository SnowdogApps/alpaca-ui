import { storiesOf } from '@storybook/vue'

import ABanner from './Banner.vue'
import ASource from '../source/Source.vue'
import AImage from '../image/Image.vue'

import banner from './mocks/banner.json'

const info = `
  This component does not have any modifiers.
`

storiesOf('Atoms/Banner', module)
  .add('Default', () => ({
    components: { ABanner, ASource, AImage },
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
         <a-image
           :src="banner.defaultSrc"
           alt="banner-image"
         />
        </a-banner>
    `
    }),
    { info }
  )
