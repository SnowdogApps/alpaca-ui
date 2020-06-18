import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Link.selectors.json'

import ALink from './Link.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/Link', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ALink },
    props: {
      textKnob: {
        default: text('Link text', 'Default link')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <a-link
        href="#"
        :class="classKnob"
      >
        {{ textKnob }}
      </a-link>
    `
  }))
