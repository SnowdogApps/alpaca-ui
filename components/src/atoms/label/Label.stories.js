import { storiesOf } from '@storybook/vue'

import ALabel from './Label.vue'
import notes from './README.md'

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
    { notes }
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
    { notes }
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
    { notes }
  )
