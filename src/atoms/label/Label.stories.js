import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '../../../utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '../../../utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Label.selectors.json'

import ALabel from './Label.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/Label', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ALabel },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      textKnobs: {
        default: text('Text', 'Label')
      }
    },
    template: `
      <a-label :class="classKnobs">
        {{ textKnobs }}
      </a-label>
    `
  }))
  .add('Custom tag', () => ({
    components: { ALabel },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      textKnobs: {
        default: text('Text', 'Custom tag label')
      }
    },
    template: `
      <a-label
        tag="span"
        :class="classKnobs"
      >
        {{ textKnobs }}
      </a-label>
    `
  }))
