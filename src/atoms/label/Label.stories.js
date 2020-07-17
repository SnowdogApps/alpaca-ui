import { select, text } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Label.selectors.json'

import ALabel from './Label.vue'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/Label',
  component: ALabel
}

export const Default = () => ({
  components: { ALabel },
  props: {
    classKnobs: {
      default: select('BEM Modifier', classKnobsConfig)
    },
    textKnobs: {
      default: text('Text', 'Label')
    }
  },
  template: `
    <a-label :class="classKnobs">
      {{ textKnobs }}
    </a-label>
  `
})

export const CustomTag = () => ({
  components: { ALabel },
  props: {
    classKnobs: {
      default: select('BEM Modifier', classKnobsConfig)
    },
    textKnobs: {
      default: text('Text', 'Custom tag label')
    },
    tagKnob: {
      default: text('Html tag', 'span')
    }
  },
  template: `
    <a-label
      :tag="tagKnob"
      :class="classKnobs"
    >
      {{ textKnobs }}
    </a-label>
  `
})
