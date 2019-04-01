import { storiesOf } from '@storybook/vue'

import AlpacaRadio from './Radio.vue'

const info = {}

storiesOf('Atoms/Radio', module)
  .add('Default', () => ({
    components: { AlpacaRadio },
    data() {
      return {
        options: [
          {
            "id": "id-1",
            "label": "Option one",
            "value": "option_one"
          },
          {
            "id": "id-2",
            "label": "Option two",
            "value": "option_two"
          },
          {
            "id": "id-3",
            "label": "Options three",
            "value": "option_three"
          }
        ]
      }
    },
    template: `
        <alpaca-radio
          :options="options"
          name="radio1"
        />
    `
    }),
    { info }
  )
