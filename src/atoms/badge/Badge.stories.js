import { select, text } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Badge.selectors.json'

import ABadge from './Badge.vue'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/Badge',
  component: ABadge
}

export const Default = () => ({
  components: { ABadge },
  props: {
    textKnob: {
      default: text('Badge text', 'Default badge')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }
  },
  template: `
    <a-badge :class="classKnob">
      {{ textKnob }}
    </a-badge>
  `
})

export const CustomTag = () => ({
  components: { ABadge },
  props: {
    textKnob: {
      default: text('Badge text', 'Custom tag')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    },
    tagKnob: {
      default: text('Html tag', 'span')
    }
  },
  template: `
    <a-badge
      :tag="tagKnob"
      :class="classKnob"
    >
      {{ textKnob }}
    </a-badge>
  `
})
