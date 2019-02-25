import {storiesOf} from '@storybook/vue'

import countries from './mocks/countries.json'

import App from '../../../01-globals/app/App.vue'
import AlpacaSelect from './Select.vue'

storiesOf('Elements/Form/Select', module)
  .add('Default', () => ({
    components: { App, AlpacaSelect },
    template: `
      <app>
        <alpaca-select
          :id="field.id"
          :name="field.name"
          :options="countryOptions"
          label="Label text"
          selected="PL"
        />
      </app>
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
