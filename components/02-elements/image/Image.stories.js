import { storiesOf } from '@storybook/vue'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaImage from './Image.vue'

storiesOf('Elements/Image', module)
  .add('Default', () => ({
    components: { App, AlpacaImage },
    template: `
      <app style="width: 480px; height: 480px; overflow: hidden;">
        <alpaca-image
          width="480"
          height="480"
          lazy-src="/images/image/banner-480_480.png"
          lazy-srcset="/images/image/banner-480_480.png 2x"
          alt="alt image text"
        />
      </app>
    `
  }))
