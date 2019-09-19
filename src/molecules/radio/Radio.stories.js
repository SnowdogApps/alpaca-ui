import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import ARadio from './Radio.vue'

const sampleData = {
  data () {
    return {
      selected: ''
    }
  },
  props: {
    labelTextKnobs: {
      default: text('Label', 'Option one')
    }
  },
  methods: {
    change: action('Changed')
  }
}

storiesOf('Molecules/Radio', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ARadio },
    ...sampleData,
    template: `
      <div>
        <a-radio
          v-model="selected"
          name="radio1"
          value="option_one"
          @change="change"
          id="r1"
        >
          {{ labelTextKnobs }}
        </a-radio>
      </div>
    `
  }))
  .add('With slot', () => ({
    components: { ARadio },
    ...sampleData,
    template: `
      <div>
        <a-radio
          v-model="selected"
          name="radio1"
          id="id1"
          @change="change"
          value="option_one"
        >
          <template #option="label">
            <label
              :for="label.id"
              class="a-radio__label"
              style="background-color: #f1f1f1;"
            >
              <span class="a-radio__icon" />
              {{ labelTextKnobs }}
            </label>
          </template>
        </a-radio>
      </div>
    `
  }))
