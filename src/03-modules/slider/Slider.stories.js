import { storiesOf } from '@storybook/vue'
import data from './mocks/data'

import ASlider from './Slider.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AImage from '../../atoms/image/Image'
import { Slide } from 'vue-carousel'

storiesOf('Modules/Slider', module)
  // @vue/component
  .add('Default', () => ({
    components: { ASlider, Slide, AImage, AIcon },
    data: () => {
      return {
        ...data
      }
    },
    template: `
      <a-slider>
        <slide
          class="slider__item"
          :key="index"
          v-for="(slide, index) in slides"
        >
          <div class="lazyload-wrapper">
            <a-image
              :src="slide.thumbnail"
              :alt="slide.alt"
            />
          </div>
        </slide>
      </a-slider>
    `
  }))
  // @vue/component
  .add('With dots', () => ({
    components: { ASlider, Slide, AImage, AIcon },
    data: () => {
      return {
        ...data
      }
    },
    template: `
      <a-slider :paginationEnabled="true">
        <slide
          class="slider__item"
          :key="index"
          v-for="(slide, index) in slides"
        >
          <div class="lazyload-wrapper">
            <a-image
              :src="slide.thumbnail"
              :alt="slide.alt"
            />
          </div>
        </slide>
      </a-slider>
    `
  }))