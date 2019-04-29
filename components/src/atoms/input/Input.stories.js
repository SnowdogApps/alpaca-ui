import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import AInput from './Input.vue'

const info = 'Check **Knobs** tab to edit component properties dynamically'
const inputTypes = ['text', 'email', 'search', 'number', 'password', 'hidden']

storiesOf('atoms/Input', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AInput },
    props: {
      placeholderKnob: {
        default: text('Placeholder', 'First and last name')
      },
      typeKnob: {
        default: select('Type', inputTypes)
      }
    },
    template: `
      <a-input
        :type="typeKnob"
        :placeholder="placeholderKnob"
      />
    `
  }))
