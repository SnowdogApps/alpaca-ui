import { storiesOf } from '@storybook/vue'

import AlpacaSwatch from './Swatch.vue'

import textSwatch from './mocks/text-swatch.json'
import imageSwatch from './mocks/icon-swatch.json'
import colorSwatch from './mocks/color-swatch.json'

storiesOf('Elements/Swatch', module)
  .add('Default', () => ({
    components: { AlpacaSwatch },
    data: () => ({
      textSwatch,
      selected: null
    }),
    template: `
        <alpaca-swatch
          :options="textSwatch.options"
          v-model="selected"
        />
        Selected option: {{ selected }}
    `
  }))
  .add('With label', () => ({
    components: { AlpacaSwatch },
    data: () => ({
      textSwatch,
      selected: null
    }),
    template: `
        <alpaca-swatch
          :options="textSwatch.options"
          v-model="selected"
          label="Label"
        />
        Selected option: {{ selected }}
    `
  }))
  .add('Image', () => ({
    components: { AlpacaSwatch },
    data: () => ({
      imageSwatch,
      selected: null
    }),
    template: `
        <alpaca-swatch
          :options="imageSwatch.options"
          v-model="selected"
          image
        />
        Selected option: {{ selected }}
    `
  }))
  .add('Image with label', () => ({
    components: { AlpacaSwatch },
    data: () => ({
      imageSwatch,
      selected: null
    }),
    template: `
        <alpaca-swatch
          :options="imageSwatch.options"
          v-model="selected"
          image
          label="Label"
        />
        Selected option: {{ selected }}
    `
  }))
  .add('Color', () => ({
    components: { AlpacaSwatch },
    data: () => ({
      colorSwatch,
      selected: null
    }),
    template: `
        <alpaca-swatch
          :options="colorSwatch.options"
          v-model="selected"
          color
        />
        Selected option: {{ selected }}
    `
  }))
  .add('Color with label', () => ({
    components: { AlpacaSwatch },
    data: () => ({
      colorSwatch,
      selected: null
    }),
    template: `
        <alpaca-swatch
          :options="colorSwatch.options"
          v-model="selected"
          color
          label="Label"
        />
        Selected option: {{ selected }}
    `
  }))
