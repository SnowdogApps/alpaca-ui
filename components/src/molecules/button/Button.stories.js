import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AButton from './Button.vue'
import AIcon from '../../atoms/icon/Icon.vue'

import './preview/styles.css'

const info = `
  ---
  #### Use these modifiers with \`.button\` class.
  - \`.button--secondary\` - Selector for applying secondary styles
  - \`.button--blank\` - Selector for applying blank styles
  - \`.button--fluid\` - Selector for applying fluid styles
  ---
`
storiesOf('Molecules/Button', module)
  .addParameters({ info })
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
          class="button--secondary"
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
          class="button--blank"
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
          class="button--fluid"
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
  .add('Icon', () => ({
    components: { AButton, AIcon },
    template: `
        <a-button
          class="button--icon"
          @click="exampleMethod"
          type="button"
        >
          <template>
            <a-icon
              icon="search"
              class="button__icon"
              title="iconTitle"
            />
          </template>
        </a-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
  .add('Icon and text', () => ({
    components: { AButton, AIcon },
    template: `
        <a-button
          class="button--icon-custom"
          @click="exampleMethod"
          type="button"
        >
          <template>
            Search
            <a-icon
              icon="search"
              class="button__icon-custom"
              title="iconTitle"
            />
          </template>
         </a-button>
    `,
    methods: {
      exampleMethod: action('Clicked button')
    }
  }))
