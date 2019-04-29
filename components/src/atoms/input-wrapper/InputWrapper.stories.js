import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import AInputWrapper from './InputWrapper.vue'
import ALabel from '../label/Label.vue'
import AInput from '../input/Input.vue'

const info = 'Check **Knobs** tab to edit component properties dynamically'
const inputClasses = [null, 'input-wrapper--inline']

storiesOf('atoms/Input wrapper', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AInputWrapper },
    props: {
      labelKnob: {
        default: text('Label text', 'First name')
      },
      classKnob: {
        default: select('Input wrapper class', inputClasses)
      }
    },
    template: `
      <a-input-wrapper
        :class="classKnob"
        :label="labelKnob"
        id="input-1"
      />
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
        default: select('Input wrapper class', inputClasses)
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
