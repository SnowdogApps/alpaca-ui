import { storiesOf } from '@storybook/vue'

import AGallery from './Gallery.vue'

import gallery from './mocks/gallery.json'

storiesOf('Modules/Gallery', module)
  .add('Default', () => ({
    components: { AGallery },
    data: () => ({
      gallery
    }),
    template: `
        <a-gallery
          :images="gallery.images"
        />
    `
  }))
  .add('Horizontal', () => ({
    components: { AGallery },
    data: () => ({
      gallery
    }),
    template: `
        <a-gallery
          :images="gallery.images"
          horizontal
        />
    `
  }))
  .add('With label', () => ({
    components: { AGallery },
    data: () => ({
      gallery
    }),
    template: `
        <a-gallery
          :productLabel="gallery.productLabel"
          :images="gallery.images"
        />
    `
  }))
