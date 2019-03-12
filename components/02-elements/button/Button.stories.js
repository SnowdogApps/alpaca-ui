import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '@/components/01-globals/app/App.vue'
import AlpacaButton from './Button.vue'

storiesOf('Elements/Button', module)
  .add('Default', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          @click="exampleMethod"
        >
          Default button
        </alpaca-button>
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Secondary', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          secondary
          @click="exampleMethod"
        >
          Secondary button
        </alpaca-button>
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Blank', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          blank
          @click="exampleMethod"
        >
          Blank button
        </alpaca-button>
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Fluid', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          fluid
          @click="exampleMethod"
        >
          Fluid button
        </alpaca-button>
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Link', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          tag="a"
          link="#"
          @click="exampleMethod"
        >
          Link button
        </alpaca-button>
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Icon', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          icon="search"
          @click="exampleMethod"
        />
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Icon and text', () => ({
    components: { App, AlpacaButton },
    template: `
      <app>
        <alpaca-button
          icon="search"
          @click="exampleMethod"
        >
          Search
        </alpaca-button>
      </app>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
