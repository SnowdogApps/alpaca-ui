import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaGallery from './Gallery.vue'

import gallery from './mocks/gallery.json'

storiesOf('Modules/Gallery', module).add('Default', () => ({
  components: { App, AlpacaGallery },
  data: () => ({
    gallery
  }),
  template: `
    <app>
      <alpaca-gallery
        :images="gallery.images"
        :mainImage="1"
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
