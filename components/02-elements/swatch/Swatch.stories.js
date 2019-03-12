import { storiesOf } from '@storybook/vue'

import textSwatch from './mocks/text-swatch.json'
import imageSwatch from './mocks/icon-swatch.json'
import colorSwatch from './mocks/color-swatch.json'

import App from '@alpaca-storybook/components/01-globals/app/App.vue'
import AlpacaSwatch from './Swatch.vue'

storiesOf('Elements/Swatch', module)
  .add('Default', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      textSwatch,
      selected: null
    }),
    template: `
      <app>
        <alpaca-swatch
          :options="textSwatch.options"
          v-model="selected"
        />
        Selected option: {{ selected }}
      </app>
    `
  }))
  .add('With label', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      textSwatch,
      selected: null
    }),
    template: `
      <app>
        <alpaca-swatch
          :options="textSwatch.options"
          v-model="selected"
          label="Label"
        />
        Selected option: {{ selected }}
      </app>
    `
  }))
  .add('Image', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      imageSwatch,
      selected: null
    }),
    template: `
      <app>
        <alpaca-swatch
          :options="imageSwatch.options"
          v-model="selected"
          image
        />
        Selected option: {{ selected }}
      </app>
    `
  }))
  .add('Image with label', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      imageSwatch,
      selected: null
    }),
    template: `
      <app>
        <alpaca-swatch
          :options="imageSwatch.options"
          v-model="selected"
          image
          label="Label"
        />
        Selected option: {{ selected }}
      </app>
    `
  }))
  .add('Color', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      colorSwatch,
      selected: null
    }),
    template: `
      <app>
        <alpaca-swatch
          :options="colorSwatch.options"
          v-model="selected"
          color
        />
        Selected option: {{ selected }}
      </app>
    `
  }))
  .add('Color with label', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      colorSwatch,
      selected: null
    }),
    template: `
      <app>
        <alpaca-swatch
          :options="colorSwatch.options"
          v-model="selected"
          color
          label="Label"
        />
        Selected option: {{ selected }}
      </app>
    `
  }))
