import { storiesOf } from '@storybook/vue'

import APicture from './Picture.vue'
import images from './mocks/images.json'

storiesOf('Modules/Picture', module)
  .add('Default', () => ({
    data: () => ({
      images
    }),
    components: { APicture },
    template: `
        <a-picture
          :images="images"
          alt="example alt text"
        />
    `
  }))
