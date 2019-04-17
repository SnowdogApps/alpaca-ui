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
  // @vue/component
  .add('Default', () => ({
    components: { AButton },
    template: `
      <a-button>
        Default button
      </a-button>
    `
  }))
  // @vue/component
  .add('Secondary', () => ({
    components: { AButton },
    template: `
      <a-button
        class="button--secondary"
        type="submit"
      >
        Secondary button
      </a-button>
    `
  }))
  // @vue/component
  .add('Blank', () => ({
    components: { AButton },
    template: `
      <a-button class="button--blank">
        Blank button
      </a-button>
    `
  }))
  // @vue/component
  .add('Fluid', () => ({
    components: { AButton },
    template: `
      <a-button class="button--fluid">
        Fluid button
      </a-button>
    `
  }))
  // @vue/component
  .add('Icon', () => ({
    components: { AButton, AIcon },
    template: `
      <a-button
        class="button--icon"
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
  }))
  // @vue/component
  .add('Icon and text', () => ({
    components: { AButton, AIcon },
    template: `
      <a-button
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
  }))
