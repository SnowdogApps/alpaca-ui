import { storiesOf } from '@storybook/vue'

import AButton from './Button.vue'
import AIcon from '../icon/Icon.vue'

const info = `
  ---
  #### Use these modifiers with \`.button\` class.
  - \`.button--secondary\` - Selector for applying secondary styles
  - \`.button--blank\` - Selector for applying blank styles
  - \`.button--fluid\` - Selector for applying fluid styles (width: 100%)
  ---
`

storiesOf('Atoms/Button', module)
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      components: { AButton },
      template: `
        <a-button type="button">
          Default button
        </a-button>
      `
    })
  )
  .add(
    'Secondary',
    () => ({
      components: { AButton },
      template: `
        <a-button
          class="button--secondary"
          type="button"
        >
          Secondary button
        </a-button>
      `
    })
  )
  .add(
    'Blank',
    () => ({
      components: { AButton },
      template: `
        <a-button
          class="button--blank"
          type="button"
        >
          Blank button
        </a-button>
      `
    })
  )
  .add(
    'Fluid',
    () => ({
      components: { AButton },
      template: `
        <a-button
          class="button--fluid"
          type="button"
        >
          Fluid button
        </a-button>
      `
    })
  )
  .add(
    'Icon',
    () => ({
      components: { AButton, AIcon },
      template: `
        <a-button
          class="button--icon"
          type="button"
          :style="{padding: '0 12px'}"
        >
          <template>
            <a-icon
              icon="search"
              class="button__icon"
              title="iconTitle"
            />
          </template>
        </a-button>
      `
    })
  )
  .add(
    'Icon and text',
    () => ({
      components: { AButton, AIcon },
      template: `
        <a-button 
          type="button"
          :style="{
            justifyContent: 'center',
            alignItems: 'center'
          }"
        >
          <template>
            Search
            <a-icon
              icon="search"
              title="iconTitle"
              :style="{marginLeft: '8px'}"
            />
          </template>
        </a-button>
      `
    })
  )
