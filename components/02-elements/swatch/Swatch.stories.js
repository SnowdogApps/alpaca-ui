import { storiesOf } from '@storybook/vue'

import textSwatch from './mocks/text-swatch.json'
import imageSwatch from './mocks/icon-swatch.json'
import colorSwatch from './mocks/color-swatch.json'

import App from '../../01-globals/app/App.vue'
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
        <alpaca-swatch :options="textSwatch.options" v-model="selected"/>
        Selected option {{ selected }}
      </app>
    `
  }))
  .add('With label', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      textSwatch
    }),
    template: `
      <app>
        <alpaca-swatch 
          :options="textSwatch.options" 
          label="Label"
        />
      </app>
    `
  }))
  .add('Image', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      imageSwatch
    }),
    template: `
      <app>
        <alpaca-swatch 
          :options="imageSwatch.options" 
          image
          />
      </app>
    `
  }))
  .add('Image with label', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      imageSwatch
    }),
    template: `
      <app>
       <alpaca-swatch 
         :options="imageSwatch.options" 
         image
         label="Label"
       />
      </app>
    `
  }))
  .add('Color', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      colorSwatch
    }),
    template: `
      <app>
       <alpaca-swatch 
         :options="colorSwatch.options" 
         color
       />
      </app>
    `
  }))
  .add('Color with label', () => ({
    components: { App, AlpacaSwatch },
    data: () => ({
      colorSwatch
    }),
    template: `
      <app>
       <alpaca-swatch 
         :options="colorSwatch.options" 
         color
         label="Label" 
       />
      </app>
    `
  }))

