import { storiesOf } from '@storybook/vue'

import AlpacaImage from './Image.vue'

storiesOf('Elements/Image', module)
  .add('Default', () => ({
    components: { AlpacaImage },
    template: `
        <alpaca-image
          src="images/image/banner-480_480.png"
          alt="alt image text"
        />
    `
  }))
