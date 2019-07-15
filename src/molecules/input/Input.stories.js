import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Input.selectors.json'

import AInput from './Input.vue'

const inputTypes = ['text', 'email', 'search', 'number', 'password', 'hidden']

const info = `
  Check **Knobs** tab to edit component properties dynamically.<br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Molecules/Input', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AInput },
    data: () => {
      return {
        value: ''
      }
    },
    props: {
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      placeholderKnob: {
        default: text('Placeholder', 'First and last name')
      },
      labelKnob: {
        default: text('Label', 'Label')
      },
      typeKnob: {
        default: select('Type', inputTypes, 'text')
      }
    },
    template: `
      <a-input
        :class="classKnob"
        v-model="value"
        :type="typeKnob"
        :label="labelKnob"
        :placeholder="placeholderKnob"
        id="input-id"
      />
    `
  }))
