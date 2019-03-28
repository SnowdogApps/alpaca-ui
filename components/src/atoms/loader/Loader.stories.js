import { storiesOf } from '@storybook/vue'

import ALoader from './Loader.vue'

const info = `
  ------
  #### Available BEM modifiers for \`.loader\` class:
  - \`--visible\`
  ------
`

storiesOf('Atoms/Loader', module)
  .add('Default', () => ({
    components: { ALoader },
    template: `
      <a-loader class="loader--visible"/>
    `
    }),
    { info }
  )
