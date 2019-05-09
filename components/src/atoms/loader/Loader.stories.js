import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import ALoader from './Loader.vue'

const info = `
  ------
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-loader--visible\` - Selector to display the loader
  ------
`

const bemModifiers = [null, 'a-loader--visible']

storiesOf('Atoms/Loader', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ALoader },
    props: {
      classKnobs: {
        default: select('BEM Modifier', bemModifiers, 'a-loader--visible')
      }
    },
    template: `
      <a-loader
        :class="classKnobs"
        aria-label="Do not refresh the page"
      />
    `
  }))
