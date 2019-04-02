import { storiesOf } from '@storybook/vue'

import ARadio from './Radio.vue'
import AIcon from '../icon/Icon.vue'

const info = {}

storiesOf('Atoms/Radio', module)
  .add('Default', () => ({
    components: { ARadio },
    data() {
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
    template: `
        <div>
          <a-radio
            :options="options"
            name="radio1"
            legend="Radio"
            v-model="selected"
          />
          Selected: {{ selected }}
        </div>
    `
    }),
    { info }
  )
  .add('With slots', () => ({
      components: { ARadio, AIcon },
      data() {
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
      template: `
        <a-radio
          :options="options"
          name="radio1"
          legend="test"
        >
          <template #label>
            <div :style="{ margin: '10px 0'}">
              Radio
            </div>
          </template>
          <template #option="data">
            <div>
              <a-icon
                icon="checked"
                :style="{margin: '0 8px', display: 'inline-block'}"
              />
              <span :style="{verticalAlign: 'super'}">
                {{ data.option.label }}
              </span>
            </div>
          </template>
        </a-radio>
    `
    }),
    { info }
  )

