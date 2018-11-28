import { storiesOf } from '@storybook/vue';

import App from '../../01-globals/app/App.vue';
import AlpacaImage from './Image.vue';

storiesOf('Elements/Image', module)
  .add('Default', () => ({
    components: { App, AlpacaImage },
    template: `
      <app>
        <alpaca-image
          src="images/image/banner-480_480.png"
          alt="alt image text"
        />
      </app>
    `
  }))
