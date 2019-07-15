import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import countries from '../../../mocks/countries.json'

import ASelect from './Select.vue'

const data = {
  methods: {
    showCountry: action('Selected country')
  },
  props: {
    defaultOptionKnob: {
      default: text('Default option', 'Please select an option')
    },
    labelKnob: {
      default: text('Label', 'Label text')
    }
  }
}

const values = {
  countries,
  selectedCountry: 'PL'
}

storiesOf('Molecules/Select', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ASelect },
    data () {
      return {
        selected: '',
        ...values
      }
    },
    ...data,
    template: `
      <div>
        <a-select
          id="field-id"
          name="field-name"
          :label="labelKnob"
          :options="countries"
          :default-option="defaultOptionKnob"
          v-model="selected"
          @input="showCountry"
          style="margin-bottom: 20px;"
        />    
        <a-select
          id="field-id"
          name="field-name"
          :label="labelKnob"
          :options="countries"
          v-model="selectedCountry"
          @input="showCountry"
        />    
      </div>
    `
  }))
  .add('Custom icon', () => ({
    components: { ASelect },
    data () {
      return {
        countries,
        selected: '',
        ...values
      }
    },
    ...data,
    template: `
      <div>
        <a-select
          id="field-id"
          name="field-name"
          :label="labelKnob"
          :options="countries"
          :default-option="defaultOptionKnob"
          v-model="selected"
          @input="showCountry"
          icon="arrow-down"
        /> 
      </div>
    `
  }))
  .add('With slots', () => ({
    components: { ASelect },
    data () {
      return {
        countries,
        ...values
      }
    },
    ...data,
    template: `
      <a-select
        id="field-id"
        name="field-name"
        :options="countries"
        v-model="selectedCountry"
        @input="showCountry"
      >
        <template #label>
          <label 
            for="field-id"
            style="margin-bottom: 10px; display:block;"
          >
            {{ labelKnob }}
          </label>
        </template>
        <template #defaultOption>
          <option value="">
            {{ defaultOptionKnob }}
          </option>
        </template>
      </a-select>
    `
  }))
