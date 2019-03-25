import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaGallery from './Gallery.vue'

import gallery from './mocks/gallery.json'

storiesOf('Modules/Gallery', module)
  .add('Default', () => ({
    components: { App, AlpacaGallery },
    data: () => ({
      gallery
    }),
    template: `
      <app>
        <alpaca-gallery
          :images="gallery.images"
        />
      </app>
    `
  }))
  .add('Horizontal', () => ({
    components: { App, AlpacaGallery },
    data: () => ({
      gallery
    }),
    template: `
      <app>
        <alpaca-gallery
          :images="gallery.images"
          horizontal
        />
      </app>
    `
  }))
  .add('With label', () => ({
    components: { App, AlpacaGallery },
    data: () => ({
      gallery
    }),
    template: `
      <app>
        <alpaca-gallery
          :productLabel="gallery.productLabel"
          :images="gallery.images"
        />
      </app>
    `
  }))
