import { storiesOf } from '@storybook/vue'

import App from '@/components/01-globals/app/App.vue'
import AlpacaHome from './Home.vue'

import banner from '@/components/02-elements/banner/mocks/banner.json'
import smallBanners from './mocks/smallBanners.json'
import mediumBanners from './mocks/mediumBanners.json'
import imageListElements from './mocks/imageListElements.json'
import text from './mocks/text.json'


storiesOf('Views/Home', module)
  .add('Default', () => ({
    components: { App, AlpacaHome},
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
      <app>
        <alpaca-home
          :text="text.text"
          :headingLevel="2"
          heading="BRANDS"
          :image-list-elements="imageListElements"
          :main-banner="banner"
          :small-banners="smallBanners"
          :medium-banners="mediumBanners"
        />
      </app>
    `
  }))
