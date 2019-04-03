import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import countries from '../../../mocks/countries.json'

import ASelect from './Select.vue'


storiesOf('Molecules/Select', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ASelect },
    data () {
      return {
        countries,
        selectedCountry: 'PL'
      }
    },
    methods: {
      showCountry: action('Selected country')
    },
    template: `
      <a-select
        id="field-id"
        name="field-name"
        :options="countries"
        :selected="selectedCountry"
        v-model="selectedCountry"
        @change="showCountry"
      >
        Label text
      </a-select>
    `
  }))
  .add('Hidden label', () => ({
    components: { ASelect },
    data () {
      return {
        countries,
        selectedCountry: 'PL'
      }
    },
    methods: {
      showCountry: action('Selected country')
    },
    template: `
      <a-select
        id="field-id"
        name="field-name"
        :options="countries"
        :selected="selectedCountry"
        v-model="selectedCountry"
        @change="showCountry"
        label-class="label--hidden"
      >
        Label text
      </a-select>
    `
  }))
