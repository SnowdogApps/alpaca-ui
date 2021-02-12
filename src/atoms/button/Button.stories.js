import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import AButton from './Button.vue'

export default {
  title: 'Atoms/Button',
  component: AButton
}

export const Default = () => ({
  components: { AButton },
  props: {
    textKnobs: {
      default: text('Text', 'Button text')
    }
  },
  methods: {
    buttonClick: action('Click')
  },
  template: `
    <a-button
      class="btn btn--primary"
      @click="buttonClick"
    >
      {{ textKnobs }}
    </a-button>
  `
})

export const Secondary = () => ({
  components: { AButton },
  props: {
    textKnobs: {
      default: text('Text', 'Button text')
    }
  },
  methods: {
    buttonClick: action('Click')
  },
  template: `
    <a-button
      class="btn btn--secondary"
      @click="buttonClick"
    >
      {{ textKnobs }}
    </a-button>
  `
})

export const SecondaryFuild = () => ({
  components: { AButton },
  props: {
    textKnobs: {
      default: text('Text', 'Button text')
    }
  },
  methods: {
    buttonClick: action('Click')
  },
  template: `
    <a-button
      class="btn btn--fluid btn--secondary"
      @click="buttonClick"
    >
      {{ textKnobs }}
    </a-button>
  `
})
