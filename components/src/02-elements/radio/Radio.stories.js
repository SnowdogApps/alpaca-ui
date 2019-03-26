import { storiesOf } from '@storybook/vue'

import options from "./mocks/radio"

import AlpacaRadio from './Radio.vue'

storiesOf('Elements/Form/Radio', module)
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
