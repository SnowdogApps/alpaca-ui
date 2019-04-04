import { storiesOf } from '@storybook/vue'

import AButton from './Button.vue'
import AIcon from '../icon/Icon.vue'

import './preview/styles.css'

const info = `
  ---
  #### Use these modifiers with \`.button\` class.
  - \`.button--secondary\` - Selector for applying secondary styles
  - \`.button--blank\` - Selector for applying blank styles
  - \`.button--fluid\` - Selector for applying fluid styles (width: 100%)
  ---
`

const defaultData = {
  components: { AButton, AIcon },
}

storiesOf('Atoms/Button', module)
  .addParameters({ info })
  .add('Default', () => ({
    ...defaultData,
    template: `
      <a-button type="button">
        Default button
      </a-button>
    `
  }))
  .add('Secondary', () => ({
    ...defaultData,
    template: `
      <a-button
        class="button--secondary"
        type="button"
      >
        Secondary button
      </a-button>
    `
  }))
  .add('Blank', () => ({
    ...defaultData,
    template: `
      <a-button
        class="button--blank"
        type="button"
      >
        Blank button
      </a-button>
    `
  }))
  .add('Fluid', () => ({
    ...defaultData,
    template: `
      <a-button
        class="button--fluid"
        type="button"
      >
        Fluid button
      </a-button>
    `
  }))
  .add('Icon', () => ({
    ...defaultData,
    template: `
      <a-button
        class="button--icon"
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
    `
  }))
  .add('Icon and text', () => ({
    ...defaultData,
    template: `
      <a-button
        class="button--icon-custom"
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
    `
  }))
