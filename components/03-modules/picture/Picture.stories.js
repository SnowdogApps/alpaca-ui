import { storiesOf } from '@storybook/vue';

import App from '../../01-globals/app/App.vue';
import SanpolPicture from './Picture.vue';
import images from './mocks/images.json'

storiesOf('Modules/Picture', module)
  .add('Default', () => ({
    data: () => ({
      images
    }),
    components: { App, SanpolPicture },
    template: `
      <app>
        <sanpol-picture
          :images="images"
          alt="example alt text"
        />
      </app>
    `
  }))
