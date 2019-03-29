import { storiesOf } from '@storybook/vue'

import options from "./mocks/radio"

import ARadio from './Radio.vue'

storiesOf('Elements/Form/Radio', module)
  .add('Default', () => ({
    components: { ARadio },
    data() {
      return {
        options
      }
    },
    template: `
        <a-radio
          :legendId="options.legendId"
          :legend="options.legend"
          :options="options.options"
          :name="options.name"
        />
    `
  }))
