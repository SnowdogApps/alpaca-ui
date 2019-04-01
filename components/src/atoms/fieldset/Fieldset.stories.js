import { storiesOf } from '@storybook/vue'

import AFieldset from './Fieldset.vue'

const info = {}

storiesOf('Atoms/Fieldset', module)
  .add('Default', () => ({
      components: { AFieldset },
      template: `
      <a-fieldset legend-text="Legend text">
        <span>Fieldset content</span>
      </a-fieldset>
    `
    }),
    { info }
  )
