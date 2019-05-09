import { storiesOf } from '@storybook/vue'

import ALoader from './Loader.vue'

const info = `
  ------
  #### Use these modifiers with \`.a-loader\` class:
  - \`.a-loader--visible\` - Selector to display the loader
  ------
`

storiesOf('Atoms/Loader', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ALoader },
    template: `
      <a-loader
        class="a-loader--visible"
        aria-label="Do not refresh the page"
      />
    `
  }))
