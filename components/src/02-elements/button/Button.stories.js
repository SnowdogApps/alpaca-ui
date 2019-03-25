import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AlpacaButton from './Button.vue'

storiesOf('Elements/Button', module)
  .add('Default', () => ({
    components: { AlpacaButton },
    template: `
        <alpaca-button
          @click="exampleMethod"
        >
          Default button
        </alpaca-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Secondary', () => ({
    components: { AlpacaButton },
    template: `
        <alpaca-button
          secondary
          @click="exampleMethod"
        >
          Secondary button
        </alpaca-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Blank', () => ({
    components: { AlpacaButton },
    template: `
        <alpaca-button
          blank
          @click="exampleMethod"
        >
          Blank button
        </alpaca-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Fluid', () => ({
    components: { AlpacaButton },
    template: `
        <alpaca-button
          fluid
          @click="exampleMethod"
        >
          Fluid button
        </alpaca-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Link', () => ({
    components: { AlpacaButton },
    template: `
        <alpaca-button
          tag="a"
          link="#"
          @click="exampleMethod"
        >
          Link button
        </alpaca-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Icon', () => ({
    components: { AlpacaButton },
    template: `
        <alpaca-button
          icon="search"
          @click="exampleMethod"
        />
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Icon and text', () => ({
    components: { AlpacaButton },
    template: `
        <alpaca-button
          icon="search"
          @click="exampleMethod"
        >
          Search
        </alpaca-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
