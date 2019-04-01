import { storiesOf } from '@storybook/vue'

import AContainer from './Container.vue'

const info = {}

storiesOf('Atoms/Container', module)
  .add(
    'Default',
    () => ({
      components: { AContainer },
      template: `
        <a-container>
          Container
        </a-container>
      `
    }),
    { info }
  )
