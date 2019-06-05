import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import ARadioWrapper from './RadioWrapper.vue'
import ARadio from './../../atoms/radio/Radio.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-radio-wrapper--legend-hidden\` - Selector for hidding legend
  ---
`

storiesOf('Molecules/Radio Wrapper', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ARadio, ARadioWrapper },
    data () {
      return {
        selected: ''
      }
    },
    props: {
      classKnobs: {
        default: select('BEM Modifier', [null, 'a-radio-wrapper--legend-hidden'])
      }
    },
    template: `
      <a-radio-wrapper
        legend-text="Radio legend"
        :class="classKnobs"
      >
        <a-radio
          id="id-1"
          value="option_one"
          name="radio"
          v-model="selected"
        >
          Option one
        </a-radio>
        <a-radio
          id="id-2"
          value="option_two"
          name="radio"
          v-model="selected"
        >
          Option two
        </a-radio>
        <a-radio
          id="id-3"
          value="option_three"
          name="radio"
          v-model="selected"
        >
          Option three
        </a-radio>
      </a-radio-wrapper>
    `
  }))
