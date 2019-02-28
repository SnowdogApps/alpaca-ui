import { storiesOf } from '@storybook/vue'
import data from './mocks/data'

import App from '../../01-globals/app/App.vue'
import AlpacaSlider from './Slider.vue'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'
import AlpacaImage from '../../02-elements/image/Image'
import { Slide } from 'vue-carousel'

storiesOf('Modules/Slider', module)
  .add('Default', () => ({
    components: { App, AlpacaSlider, Slide, AlpacaImage, AlpacaIcon },
    data: () => {
      return {
        ...data,
      }
    },
    template: `
      <app>
        <alpaca-slider>
          <slide
            class="slider__item"
            :key="index"
            v-for="(slide, index) in slides"
          >
            <div class="lazyload-wrapper">
              <alpaca-image
                :src="slide.thumbnail"
                :alt="slide.alt"
              />
            </div>
          </slide>
        </alpaca-slider>
      </app>
    `
  })).add('With dots', () => ({
  components: { App, AlpacaSlider, Slide, AlpacaImage, AlpacaIcon },
  data: () => {
    return {
      ...data,
    }
  },
  template: `
      <app>
        <alpaca-slider :paginationEnabled="true">
          <slide
            class="slider__item"
            :key="index"
            v-for="(slide, index) in slides"
          >
            <div class="lazyload-wrapper">
              <alpaca-image
                :src="slide.thumbnail"
                :alt="slide.alt"
              />
            </div>
          </slide>
        </alpaca-slider>
      </app>
    `
}))