import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ARadio from './Radio.vue'

// @vue/component
const defaultData = {
  components: { ARadio },
  data () {
    return {
      options: [
        {
          'id': 'id-1',
          'label': 'Option one',
          'value': 'option_one'
        },
        {
          'id': 'id-2',
          'label': 'Option two',
          'value': 'option_two'
        },
        {
          'id': 'id-3',
          'label': 'Options three',
          'value': 'option_three'
        }
      ],
      selected: 'option_two'
    }
  },
  methods: {
    onChange: action('Option changed')
  }
}

storiesOf('Atoms/Radio', module)
  .addParameters({ info: true })
  // @vue/component
  .add('Default', () => ({
    ...defaultData,
    template: `
      <div role="radiogroup" aria-labelledby="dsds">
        <a-radio
          name="radio1"
          v-model="selected"
          id="option_one"
          value="option_one"
        >
          Option one
        </a-radio>
        <a-radio
          name="radio1"
          v-model="selected"
          id="option_two"
          value="option_two"
        >
          Option two
        </a-radio>
        v-model {{ selected }}
      </div>
    `
  }))
  // @vue/component
  .add('With slots', () => ({
    ...defaultData,
    template: `
      <a-radio
        :options="options"
        name="radio1"
        v-model="selected"
        @change="onChange"
      >
        <template #legend>
          <legend
            class="radio__legend"
            id="legend-radio1"
          >
            Please choose one:
          </legend>
        </template>
        <template #option="data">
          <label
            :for="data.option.id"
            class="radio__label"
          >
            <span class="radio__icon" />
            Prefix - {{ data.option.label }}
          </label>
        </template>
      </a-radio>
    `
  }))
