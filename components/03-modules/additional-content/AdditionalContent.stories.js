import { storiesOf } from '@storybook/vue'

import App from '../../01-globals/app/App.vue'
import AlpacaAdditionalContent from './AdditionalContent.vue'

import additionalContent from './mocks/additional-content.json'

storiesOf('Modules/Additional Content', module)
  .add('Default', () => ({
    components: { App, AlpacaAdditionalContent },
    data: () => ({
      additionalContent
    }),
    template: `
      <app>
        <alpaca-additional-content 
          :images="additionalContent.images"
          :alt="additionalContent.images[0].alt"
          :firstSection="additionalContent.firstSection.text"
          :secondSection="additionalContent.secondSection.text">
        </alpaca-additional-content>
      </app>
    `
  }))
