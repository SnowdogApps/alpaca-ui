import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import generateVueInfoTable from '../../../utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '../../../utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Loader.selectors.json'

import ALoader from './Loader.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/Loader', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ALoader },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig, 'a-loader--visible')
      }
    },
    template: `
      <a-loader
        :class="classKnobs"
        aria-label="Do not refresh the page"
      />
    `
  }))
