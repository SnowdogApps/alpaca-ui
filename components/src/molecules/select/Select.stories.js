import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import countries from '../../../mocks/countries.json'

import ASelect from './Select.vue'

storiesOf('Molecules/Select', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      components: { ASelect },
      data () {
        return {
          countries,
          selectedCountry: ''
        }
      },
      methods: {
        showCountry: action('Selected country')
      },
      template: `
        <a-select
          id="field-id"
          name="field-name"
          label="Label text"
          :options="countries"
          default-option="Please select an option"
          v-model="selectedCountry"
          @input="showCountry"
        />
      `
    })
  )
  .add(
    'Selected',
    () => ({
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
          label="Label text"
          :options="countries"
          v-model="selectedCountry"
          @input="showCountry"
        />
      `
    })
  )
  .add(
    'With slots',
    () => ({
      components: { ASelect },
      data () {
        return {
          countries,
          selectedCountry: ''
        }
      },
      methods: {
        showCountry: action('Selected country')
      },
      template: `
        <a-select
          id="field-id"
          name="field-name"
          label="Label text"
          :options="countries"
          v-model="selectedCountry"
          @input="showCountry"
        >
          <template #label>
            <label
              class="label--hidden"
              for="field-id"
            >
              Label text
            </label>
          </template>
          <template #defaultOption>
            <option value="">
              Default option
            </option>
          </template>
        </a-select>
      `
    })
  )
