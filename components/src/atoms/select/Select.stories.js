import {storiesOf} from '@storybook/vue'

import countries from './mocks/countries.json'

import ASelect from './Select.vue'

storiesOf('Atoms/Select', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ASelect },
    template: `
      <a-select
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
        }
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
