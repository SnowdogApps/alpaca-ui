import AHeading from './Heading.vue'
import { select, text } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Heading.selectors.json'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

const levels = [1, 2, 3, 4, 5, 6]

export default {
  title: 'Atoms/Heading',
  component: AHeading
}

export const First = () => ({
  components: { AHeading },
  props: {
    levelKnobs: {
      default: select('Heading level', levels, 1)
    },
    tagKnobs: {
      default: text('Tag', null)
    },
    textKnobs: {
      default: text('Text', 'Heading level 1')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }
  },
  template: `
    <a-heading
      :level="levelKnobs"
      :tag="tagKnobs"
      :class="classKnob"
    >
      {{ textKnobs }}
    </a-heading>
  `
})

export const Second = () => ({
  components: { AHeading },
  props: {
    levelKnobs: {
      default: select('Heading level', levels, 2)
    },
    tagKnobs: {
      default: text('Tag', null)
    },
    textKnobs: {
      default: text('Text', 'Heading level 2')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }

  },
  template: `
    <a-heading
      :level="levelKnobs"
      :tag="tagKnobs"
      :class="classKnob"
    >
      {{ textKnobs }}
    </a-heading>
  `
})

export const Third = () => ({
  components: { AHeading },
  props: {
    levelKnobs: {
      default: select('Heading level', levels, 3)
    },
    tagKnobs: {
      default: text('Tag', null)
    },
    textKnobs: {
      default: text('Text', 'Heading level 3')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }

  },
  template: `
    <a-heading
      :level="levelKnobs"
      :tag="tagKnobs"
      :class="classKnob"
    >
      {{ textKnobs }}
    </a-heading>
  `
})

export const Fourth = () => ({
  components: { AHeading },
  props: {
    levelKnobs: {
      default: select('Heading level', levels, 4)
    },
    tagKnobs: {
      default: text('Tag', null)
    },
    textKnobs: {
      default: text('Text', 'Heading level 4')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }

  },
  template: `
    <a-heading
      :level="levelKnobs"
      :tag="tagKnobs"
      :class="classKnob"
    >
      {{ textKnobs }}
    </a-heading>
  `
})

export const Fifth = () => ({
  components: { AHeading },
  props: {
    levelKnobs: {
      default: select('Heading level', levels, 5)
    },
    tagKnobs: {
      default: text('Tag', null)
    },
    textKnobs: {
      default: text('Text', 'Heading level 5')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }

  },
  template: `
    <a-heading
      :level="levelKnobs"
      :tag="tagKnobs"
      :class="classKnob"
    >
      {{ textKnobs }}
    </a-heading>
  `
})

export const Sixth = () => ({
  components: { AHeading },
  props: {
    levelKnobs: {
      default: select('Heading level', levels, 6)
    },
    tagKnobs: {
      default: text('Tag', null)
    },
    textKnobs: {
      default: text('Text', 'Heading level 6')
    },
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    }

  },
  template: `
    <a-heading
      :level="levelKnobs"
      :tag="tagKnobs"
      :class="classKnob"
    >
      {{ textKnobs }}
    </a-heading>
  `
})
