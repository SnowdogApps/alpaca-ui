import { storiesOf } from '@storybook/vue';

import App from '../../01-globals/app/App.vue';
import AlpacaPicture from './Picture.vue';
import images from './mocks/images.json'

storiesOf('Modules/Picture', module)
  .add('Default', () => ({
    data: () => ({
      images
    }),
    components: { App, AlpacaPicture },
    template: `
      <app>
        <alpaca-picture
          :images="images"
          alt="example alt text"
        />
      </app>
    `
  }))
