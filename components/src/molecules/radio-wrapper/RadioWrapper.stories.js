import { storiesOf } from '@storybook/vue'

import ARadioWrapper from './RadioWrapper.vue'

import ARadio from './../../atoms/radio/Radio.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-input-wrapper--inline\` - Selector for applying inline styles
  ---
`

// @vue/component
const defaultData = {
  components: { ARadio, ARadioWrapper },
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
      selected: ''
    }
  }
}

storiesOf('Molecules/Radio Wrapper', module)
  .addParameters({ info })
  .add('Default', () => ({
    ...defaultData,
    template: `
      <a-radio-wrapper legend-text="Radio legend" legendHidden>
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
      </a-radio-wrapper>
    `
  }))
