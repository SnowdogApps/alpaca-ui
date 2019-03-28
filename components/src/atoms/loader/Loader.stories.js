import { storiesOf } from '@storybook/vue'

import Loader from './Loader.vue'

const info = `
  ------
  #### Available BEM modifiers for \`.loader\` class:
  - \`--visible\`
  ------
`

storiesOf('Atoms/Loader', module)
  .add('Default', () => ({
    components: { Loader },
    template: `
      <Loader class="loader--visible"/>
    `
    }),
    { info }
  )
