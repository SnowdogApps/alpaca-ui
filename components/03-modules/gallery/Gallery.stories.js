import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
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
          :images="gallery.media_gallery"
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
          :images="gallery.media_gallery"
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
          productLabel="New"
          :images="gallery.media_gallery"
        />
      </app>
    `
  }))
