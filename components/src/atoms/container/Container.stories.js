import { storiesOf } from '@storybook/vue'

import AContainer from './Container.vue'

const info = `
  This component does not have any modifiers.
`

storiesOf('Atoms/Container', module)
  .add('Default', () => ({
    components: { AContainer },
    template: `
      <a-container>
        Container
      </a-container>
  `
  }),
  { info }
)
