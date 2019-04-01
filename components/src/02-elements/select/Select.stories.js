import {storiesOf} from '@storybook/vue'

import countries from './mocks/countries.json'

import AlpacaSelect from './Select.vue'

storiesOf('Elements/Form/Select', module)
  .add('Default', () => ({
    components: { AlpacaSelect },
    template: `
        <alpaca-select
          :id="field.id"
          :name="field.name"
          :options="countryOptions"
          label="Label text"
          selected="PL"
        />
    `,
    data() {
      return {
        field: {
          id: 'field-id',
          name: 'field-name',
        },
      }
    },
    computed: {
      countryOptions() {
        return countries.map((country) => {
          return {
            value: country.code,
            text: country.name
          }
        })
      }
    }
  }))
