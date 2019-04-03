import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ARadio from './Radio.vue'

const defaultData = {
  components: { ARadio },
  data () {
    return {
      options: [
        {
          "id": "id-1",
          "label": "Option one",
          "value": "option_one"
        },
        {
          "id": "id-2",
          "label": "Option two",
          "value": "option_two"
        },
        {
          "id": "id-3",
          "label": "Options three",
          "value": "option_three"
        }
      ],
      selected: ''
    }
  },
  methods: {
    exampleMethod: action('Option changed')
  }
}

storiesOf('Molecules/Radio', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      ...defaultData,
      template: `
        <a-radio
          :options="options"
          name="radio1"
          legend="Choose option"
          v-model="selected"
          @change="exampleMethod"
        />
      `
    })
  )
  .add(
    'With slots',
    () => ({
      ...defaultData,
      template: `
        <a-radio
          :options="options"
          name="radio1"
          v-model="selected"
          input-class="radio__input-custom"
        >
          <template #label>
            <div class="radio__legend-custom">
              Choose option
            </div>
          </template>
          <template #option="data">
            <label
              class="radio__label-custom"
              :for="data.option.id"
            >
              {{ data.option.label }}
            </label>
          </template>
        </a-radio>
      `
    })
  )

