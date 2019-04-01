import { storiesOf } from '@storybook/vue'

import ALoader from './Loader.vue'

const info = `
  ------
  #### Use these modifiers with \`.loader\` class:
  - \`.loader--visible\` - Selector to display the loader
  ------
`

storiesOf('Atoms/Loader', module)
  .add(
    'Default',
    () => ({
      components: { ALoader },
      template: `
        <a-loader
          class="loader--visible"
          aria-label="Do not refresh the page"
        />
      `
    }),
    { info }
  )
