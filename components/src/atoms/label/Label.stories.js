import { storiesOf } from '@storybook/vue'

import ALabel from './Label.vue'

const info = `
  ---
  #### Use these modifiers with \`.label\` class.
  - \`.a-label--inline\` - Selector for applying inline styles
  - \`.a-label--hidden\` - Selector for applying hidden styles, mainly used for accessibility purposes
  ---
`

storiesOf('Atoms/Label', module)
  .addParameters({ info })
  // @vue/component
  .add('Default', () => ({
    components: { ALabel },
    template: `
      <a-label>
        Label
      </a-label>
    `
  }))
  // @vue/component
  .add('Custom tag', () => ({
    components: { ALabel },
    template: `
      <a-label tag="span">
        Custom tag label
      </a-label>
    `
  }))
  // @vue/component
  .add('Inline', () => ({
    components: { ALabel },
    template: `
      <a-label class="a-label--inline">
        Inline label
      </a-label>
    `
  }))
