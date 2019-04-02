import {storiesOf} from '@storybook/vue'

import countries from '../../../mocks/countries.json'

import ASelect from './Select.vue'

storiesOf('Molecules/Select', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ASelect },
    template: `
      <a-select
        id="field-id"
        name="field-name"
        :options="countryOptions"
        selected="PL"
      >
        Label text
      </a-select>
    `,
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
  .add('Hidden label', () => ({
    components: { ASelect },
    template: `
      <a-select
        id="field-id"
        name="field-name"
        :options="countryOptions"
        selected="PL"
        labelClass="label--hidden"
      >
        Label text
      </a-select>
    `,
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
