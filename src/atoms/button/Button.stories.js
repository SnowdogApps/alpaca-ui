import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

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
  methods: {
    buttonClick: action('Click')
  },
  template: `
    <a-button
      :class="classKnobs"
      @click="buttonClick"
    >
      {{ textKnobs }}
    </a-button>
  `
})
