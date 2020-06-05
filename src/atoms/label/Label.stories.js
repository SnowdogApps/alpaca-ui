import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
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
      textKnobs: {
        default: text('Text', 'Label')
      },
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
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
      textKnobs: {
        default: text('Text', 'Custom tag label')
      },
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      tagKnobs: {
        default: text('Tag', 'span')
      }
    },
    template: `
      <a-label
        :tag="tagKnobs"
        :class="classKnobs"
      >
        {{ textKnobs }}
      </a-label>
    `
  }))
