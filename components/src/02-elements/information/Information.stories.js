import { storiesOf } from '@storybook/vue'

import information from "./mocks/information"

import AlpacaInformation from './Information.vue'

storiesOf('Elements/Information', module)
  .add('Default', () => ({
    data: () => ({
      information
    }),
    components: { AlpacaInformation },
    template: `
        <alpaca-information
          v-for="info in information"
          :key="info.id"
          :title="info.title"
          :text="info.text"
        />
    `
  }))
