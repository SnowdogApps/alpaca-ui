import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './InputWrapper.selectors.json'

import AInputWrapper from './InputWrapper.vue'
import ALabel from '../../atoms/label/Label.vue'
import AInput from '../../atoms/input/Input.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}<br>
  Remember, you should use AInput component inside the AInputWrapper.
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Molecules/Input Wrapper', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AInputWrapper, AInput },
    props: {
      labelKnob: {
        default: text('Label text', 'First name')
      },
      classKnob: {
        default: select('Input wrapper class', classKnobsConfig)
      }
    },
    template: `
      <a-input-wrapper
        :class="classKnob"
        :label="labelKnob"
      >
        <a-input
          id="inputId"
          type="text"
        />
      </a-input-wrapper>
    `
  }))
  .add('With slot', () => ({
    components: { AInputWrapper, ALabel, AInput },
    props: {
      labelKnob: {
        default: text('Label text', 'Last name')
      },
      placeholderKnob: {
        default: text('Placeholder', 'Kowalski')
      },
      classKnob: {
        default: select('Input wrapper class', classKnobsConfig)
      }
    },
    template: `
      <a-input-wrapper :class="classKnob">
        <template #label>
          <a-label
            for="input-2"
            style="font-weight: bold"
          >
            {{ labelKnob }}
          </a-label>
        </template>
        <a-input
          id="input-2"
          :placeholder="placeholderKnob"
        />
      </a-input-wrapper>
    `
  }))
