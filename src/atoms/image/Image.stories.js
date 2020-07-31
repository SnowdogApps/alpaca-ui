import { text } from '@storybook/addon-knobs'

import AImage from './Image.vue'

export default {
  title: 'Atoms/Image',
  components: AImage
}

export const Default = () => ({
  components: { AImage },
  props: {
    srcKnob: {
      default: text('Image src', 'images/image/banner-480_480.png')
    }
  },
  template: `
    <a-image
      :src="srcKnob"
      alt="alt image text"
    />
  `
})

export const Picture = () => ({
  components: { AImage },
  props: {
    srcKnob: {
      default: text('Default src', 'images/image/banner-480_480.png')
    },
    srcKnob1: {
      default: text('Image src 1', 'images/image/banner-480_480.png')
    },
    srcKnob2: {
      default: text('Image src 2', 'images/image/banner-768_402.png')
    },
    srcKnob3: {
      default: text('Image src 3', 'images/image/banner-992_254.png')
    },
    tagKnob: {
      default: text('Html tag', 'picture')
    }
  },
  template: `
    <a-image
      :tag="tagKnob"
      alt="alt image text"
    >
      <source
        :srcset="srcKnob1"
        media="(max-width: 480px)"
      />
      <source
        :srcset="srcKnob2"
        media="(max-width: 768px)"
      />
      <source
        :srcset="srcKnob3"
        media="(max-width: 1024px)"
      />
      <img :src="srcKnob" alt="alt text"/>
    </a-image>
  `
})
