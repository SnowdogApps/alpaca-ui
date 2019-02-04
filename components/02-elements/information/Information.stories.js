import { storiesOf } from '@storybook/vue'

import information from "./mocks/information"

import App from '../../01-globals/app/App.vue'
import AlpacaInformation from './Information.vue'

storiesOf('Elements/Information', module)
  .add('Default', () => ({
    data: () => ({
      information
    }),
    components: { App, AlpacaInformation },
    template: `
      <app>
        <alpaca-information
          v-for="info in information"
          :key="info.id"
          :title="info.title"
          :text="info.text"
        >
      </app>
    `
  }))
