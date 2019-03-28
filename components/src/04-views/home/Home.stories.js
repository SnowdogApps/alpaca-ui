import { storiesOf } from '@storybook/vue'

import AlpacaHome from './Home.vue'

import banner from '../../atoms/banner/mocks/banner.json'
import smallBanners from './mocks/smallBanners.json'
import mediumBanners from './mocks/mediumBanners.json'
import imageListElements from './mocks/imageListElements.json'
import text from './mocks/text.json'

storiesOf('Views/Home', module)
  .add('Default', () => ({
    components: { AlpacaHome},
    data() {
      return {
        banner,
        smallBanners,
        mediumBanners,
        imageListElements,
        text
      }
    },
    template: `
        <alpaca-home
          :text="text.text"
          :headingLevel="2"
          heading="BRANDS"
          :image-list-elements="imageListElements"
          :main-banner="banner"
          :small-banners="smallBanners"
          :medium-banners="mediumBanners"
        />
    `
  }))
