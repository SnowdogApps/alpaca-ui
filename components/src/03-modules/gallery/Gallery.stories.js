import { storiesOf } from '@storybook/vue'

import AlpacaGallery from './Gallery.vue'

import gallery from './mocks/gallery.json'

storiesOf('Modules/Gallery', module)
  .add('Default', () => ({
    components: { AlpacaGallery },
    data: () => ({
      gallery
    }),
    template: `
        <alpaca-gallery
          :images="gallery.images"
        />
    `
  }))
  .add('Horizontal', () => ({
    components: { AlpacaGallery },
    data: () => ({
      gallery
    }),
    template: `
        <alpaca-gallery
          :images="gallery.images"
          horizontal
        />
    `
  }))
  .add('With label', () => ({
    components: { AlpacaGallery },
    data: () => ({
      gallery
    }),
    template: `
        <alpaca-gallery
          :productLabel="gallery.productLabel"
          :images="gallery.images"
        />
    `
  }))
