import { storiesOf } from '@storybook/vue'

import countries from '../../../mocks/countries.json'

import ASelect from './Select.vue'

storiesOf('Molecules/Select', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ASelect },
    data () {
      return {
        countries
      }
    },
    template: `
      <a-select
        id="field-id"
        name="field-name"
        :options="countries"
        selected="PL"
      >
        Label text
      </a-select>
    `
  }))
  .add('Hidden label', () => ({
    components: { ASelect },
    data () {
      return {
        countries
      }
    },
    template: `
      <a-select
        id="field-id"
        name="field-name"
        :options="countryOptions"
        selected="PL"
        label-class="label--hidden"
      >
        Label text
      </a-select>
    `
  }))
