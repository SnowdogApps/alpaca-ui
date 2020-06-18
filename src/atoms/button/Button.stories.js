import { select, text } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Button.selectors.json'

import AButton from './Button.vue'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/Button',
  component: AButton
}

export const Default = () => ({
  components: { AButton },
  props: {
    classKnobs: {
      default: select('BEM Modifier', classKnobsConfig)
    },
    textKnobs: {
      default: text('Text', 'Button text')
    }
  },
  template: `
    <a-button :class="classKnobs">
      {{ textKnobs }}
    </a-button>
  `
})
