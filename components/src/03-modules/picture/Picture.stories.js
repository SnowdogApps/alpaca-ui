import { storiesOf } from '@storybook/vue'

import AlpacaPicture from './Picture.vue'
import images from './mocks/images.json'

storiesOf('Modules/Picture', module)
  .add('Default', () => ({
    data: () => ({
      images
    }),
    components: { AlpacaPicture },
    template: `
        <alpaca-picture
          :images="images"
          alt="example alt text"
        />
    `
  }))
