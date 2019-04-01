import { storiesOf } from '@storybook/vue'

import ALabel from './Label.vue'

const info = `
  ---
  #### Use these modifiers with \`.label\` class.
  - \`.label--inline\` - Selector for applying inline styles
  - \`.label--hidden\` - Selector for applying hidden styles, mainly used for accessibility purposes
  ---
`

storiesOf('Atoms/Label', module)
  .add(
    'Default',
    () => ({
      components: { ALabel },
      template: `
        <a-label>
          Label
        </a-label>
      `
    }),
    { info }
  )
  .add(
    'Custom tag',
    () => ({
      components: { ALabel },
      template: `
        <a-label tag="span">
          Custom tag label
        </a-label>
      `
    }),
    { info }
  )
  .add('Inline',
    () => ({
      components: { ALabel },
      template: `
        <a-label class="label--inline">
          Inline label
        </a-label>
      `
    }),
    { info }
  )
