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
        :thumbs="gallery.thumbs"
        :mainThumb="1"
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
        :thumbs="gallery.thumbs"
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
        :thumbs="gallery.thumbs"
      />
    </app>
  `
  }))
