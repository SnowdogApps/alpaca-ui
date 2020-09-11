import { select, text } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Link.selectors.json'

import ALink from './Link.vue'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/Link',
  component: ALink
}

export const Default = () => ({
  components: { ALink },
  props: {
    textKnob: {
      default: text('Link text', 'Default link')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }
  },
  template: `
    <a-link
      href="#"
      :class="classKnob"
    >
      {{ textKnob }}
    </a-link>
  `
})
