import {storiesOf} from '@storybook/vue'

import countries from './mocks/countries.json'

import App from '../../../01-globals/app/App.vue'
import AlpacaSelect from './Select.vue'
import AlpacaLabel from '../../../01-globals/label/Label.vue'

storiesOf('Elements/Form/Select', module)
  .add('Default', () => ({
    components: { App, AlpacaSelect, AlpacaLabel },
    template: `
      <app>
        <alpaca-select
          :id="field.id"  
          :name="field.name"
          :options="countryOptions"
        >
          <alpaca-label
            :for="field.id"
            :hidden="false"
            :inline="false"
            class="select__label"
          >
            Label text
          </alpaca-label>
        </alpaca-select>
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

