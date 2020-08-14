import { text, object } from '@storybook/addon-knobs'

import AImage from './Image.vue'
import ALazyImage from './LazyImage.vue'

export default {
  title: 'Atoms/Image',
  components: {
    AImage,
    ALazyImage
  }
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
      default: object('Image src 1', {
        src: 'images/image/banner-480_480.png',
        width: '480px'
      })
    },
    srcKnob2: {
      default: object('Image src 2', {
        src: 'images/image/banner-768_402.png',
        width: '768px'
      })
    },
    srcKnob3: {
      default: object('Image src 3', {
        src: 'images/image/banner-992_254.png',
        width: '1024px'
      })
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
        :srcset="srcKnob1.src"
        :media="'(max-width: ' + srcKnob1.width + ')'"
      />
      <source
        :srcset="srcKnob2.src"
        :media="'(max-width: ' + srcKnob2.width + ')'"
      />
      <source
        :srcset="srcKnob3.src"
        :media="'(max-width: ' + srcKnob3.width + ')'"
      />
      <img :src="srcKnob" alt="alt text"/>
    </a-image>
  `
})

export const LazyImage = () => ({
  components: { ALazyImage },
  props: {
    srcKnob: {
      default: text('Image src', 'images/image/banner-480_480.png')
    }
  },
  template: `
      <a-lazy-image
        :src="srcKnob"
        style="margin-top: 2000px;"
        alt="alt text"
      />
    `
})

export const LazyPicture = () => ({
  components: { ALazyImage },
  props: {
    srcKnob: {
      default: text('Image src', 'images/image/banner-480_480.png')
    },
    srcKnob1: {
      default: object('Image src 1', {
        src: 'images/image/banner-480_480.png',
        width: '480px'
      })
    },
    srcKnob2: {
      default: object('Image src 2', {
        src: 'images/image/banner-768_402.png',
        width: '768px'
      })
    },
    srcKnob3: {
      default: object('Image src 3', {
        src: 'images/image/banner-992_254.png',
        width: '1024px'
      })
    },
    tagKnob: {
      default: text('Html tag', 'picture')
    }
  },
  template: `
    <div style="margin-top: 2000px;">
      <a-lazy-image
        :tag="tagKnob"
        alt="alt text"
        :src="srcKnob"
      >
        <source
          :srcset="srcKnob1.src"
          :media="'(max-width: ' + srcKnob1.width + ')'"
        />
        <source
          :srcset="srcKnob2.src"
          :media="'(max-width: ' + srcKnob2.width + ')'"
        />
        <source
          :srcset="srcKnob3.src"
          :media="'(max-width: ' + srcKnob3.width + ')'"
        />
      </a-lazy-image>
    </div>
  `
})
