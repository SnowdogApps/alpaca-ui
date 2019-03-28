import { storiesOf } from '@storybook/vue'
import data from './mocks/data'

import AlpacaSlider from './Slider.vue'
import AlpacaIcon from '../../atoms/icon/Icon.vue'
import AlpacaImage from '../../atoms/image/Image'
import { Slide } from 'vue-carousel'

storiesOf('Modules/Slider', module)
  .add('Default', () => ({
    components: { AlpacaSlider, Slide, AlpacaImage, AlpacaIcon },
    data: () => {
      return {
        ...data,
      }
    },
    template: `
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
    `
  })).add('With dots', () => ({
  components: { AlpacaSlider, Slide, AlpacaImage, AlpacaIcon },
  data: () => {
    return {
      ...data,
    }
  },
  template: `
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
    `
}))
