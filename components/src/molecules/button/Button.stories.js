import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AButton from './Button.vue'

storiesOf('Elements/Button', module)
  .add('Default', () => ({
    components: { AButton },
    template: `
        <a-button
          @click="exampleMethod"
          type="button"
        >
          Default button
         </a-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Secondary', () => ({
    components: { AButton },
    template: `
        <a-button
          secondary
          @click="exampleMethod"
          type="button"
        >
          Secondary button
         </a-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Blank', () => ({
    components: { AButton },
    template: `
        <a-button
          blank
          @click="exampleMethod"
          type="button"
        >
          Blank button
         </a-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Fluid', () => ({
    components: { AButton },
    template: `
        <a-button
          fluid
          @click="exampleMethod"
          type="button"
        >
          Fluid button
         </a-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Link', () => ({
    components: { AButton },
    template: `
        <a-button
          tag="a"
          link="#"
          @click="exampleMethod"
          type="button"
        >
          Link button
         </a-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Icon', () => ({
    components: { AButton },
    template: `
        <a-button
          icon="search"
          @click="exampleMethod"
          type="button"
        />
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Icon and text', () => ({
    components: { AButton },
    template: `
        <a-button
          icon="search"
          @click="exampleMethod"
          type="button"
        >
          Search
         </a-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
