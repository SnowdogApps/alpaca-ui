import { storiesOf } from '@storybook/vue'

import ASwatch from './Swatch.vue'

import textSwatch from './mocks/text-swatch.json'
import imageSwatch from './mocks/icon-swatch.json'
import colorSwatch from './mocks/color-swatch.json'

storiesOf('Elements/Swatch', module)
  .add('Default', () => ({
    components: { ASwatch },
    data: () => ({
      textSwatch,
      selected: null
    }),
    template: `
        <a-swatch
          :options="textSwatch.options"
          v-model="selected"
        />
        Selected option: {{ selected }}
    `
  }))
  .add('With label', () => ({
    components: { ASwatch },
    data: () => ({
      textSwatch,
      selected: null
    }),
    template: `
        <a-swatch
          :options="textSwatch.options"
          v-model="selected"
          label="Label"
        />
        Selected option: {{ selected }}
    `
  }))
  .add('Image', () => ({
    components: { ASwatch },
    data: () => ({
      imageSwatch,
      selected: null
    }),
    template: `
        <a-swatch
          :options="imageSwatch.options"
          v-model="selected"
          image
        />
        Selected option: {{ selected }}
    `
  }))
  .add('Image with label', () => ({
    components: { ASwatch },
    data: () => ({
      imageSwatch,
      selected: null
    }),
    template: `
        <a-swatch
          :options="imageSwatch.options"
          v-model="selected"
          image
          label="Label"
        />
        Selected option: {{ selected }}
    `
  }))
  .add('Color', () => ({
    components: { ASwatch },
    data: () => ({
      colorSwatch,
      selected: null
    }),
    template: `
        <a-swatch
          :options="colorSwatch.options"
          v-model="selected"
          color
        />
        Selected option: {{ selected }}
    `
  }))
  .add('Color with label', () => ({
    components: { ASwatch },
    data: () => ({
      colorSwatch,
      selected: null
    }),
    template: `
        <a-swatch
          :options="colorSwatch.options"
          v-model="selected"
          color
          label="Label"
        />
        Selected option: {{ selected }}
    `
  }))
