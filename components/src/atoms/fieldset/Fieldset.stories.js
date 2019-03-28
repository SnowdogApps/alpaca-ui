import { storiesOf } from '@storybook/vue'

import AFieldset from './Fieldset.vue'

const info = `
  This component does not have any modifiers.
`

storiesOf('Atoms/Fieldset', module)
  .add('Default', () => ({
      components: { AFieldset },
      template: `
      <a-fieldset legend-text="Legend text">
        <span>Simple text</span>
      </a-fieldset>
    `
    }),
    { info }
  )
