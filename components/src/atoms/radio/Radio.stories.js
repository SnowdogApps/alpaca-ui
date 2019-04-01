import { storiesOf } from '@storybook/vue'

import AlpacaRadio from './Radio.vue'

import options from "./mocks/radio"

const info = {}

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
          :options="options.options"
          :name="options.name"
        />
    `
    }),
    { info }
  )
