import { storiesOf } from '@storybook/vue'

import ALabel from './Label.vue'

const info = `
  ------
  #### Available BEM modifiers for \`.label\` class:
  - \`--inline\`
  - \`--hidden\`
  ------
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
