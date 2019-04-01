import { storiesOf } from '@storybook/vue'

import AlpacaRadio from './Radio.vue'

import options from "./mocks/radio"

storiesOf('Atoms/Radio', module)
  .add('Default', () => ({
    components: { AlpacaRadio },
    data() {
      return {
        options
      }
    },
    template: `
        <alpaca-radio
          :legendId="options.legendId"
          :legend="options.legend"
          :options="options.options"
          :name="options.name"
        />
    `
  }))
