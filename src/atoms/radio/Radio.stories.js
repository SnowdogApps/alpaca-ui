import { storiesOf } from '@storybook/vue'

import ARadio from './Radio.vue'

storiesOf('Atoms/Radio', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ARadio },
    data () {
      return {
        selected: 'option_two'
      }
    },
    template: `
      <div>
        <a-radio
          v-model="selected"
          name="radio1"
          value="option_one"
        >
          Option one
        </a-radio>
        <a-radio
          v-model="selected"
          name="radio1"
          value="option_two"
        >
          Option two
        </a-radio>
      </div>
    `
  }))
  .add('With slot', () => ({
    components: { ARadio },
    data () {
      return {
        selected: ''
      }
    },
    template: `
      <div>
        <a-radio
          v-model="selected"
          name="radio1"
          id="id1"
          value="option_one"
        >
          <template #option="{ id }">
            <label
              :for="id"
              class="a-radio__label"
              style="background-color: #f1f1f1;"
            >
              <span class="a-radio__icon" />
              Custom option one
            </label>
          </template>
          Option one
        </a-radio>
        <a-radio
          v-model="selected"
          name="radio1"
          id="id2"
          value="option_two"
        >
          Option two
        </a-radio>
      </div>
    `
  }))
