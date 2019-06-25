import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '../../../utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '../../../utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Badge.selectors.json'

import ABadge from './Badge.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`
const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/Badge', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { ABadge },
    props: {
      textKnob: {
        default: text('Badge text', 'Default badge')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <a-badge :class="classKnob">
        {{ textKnob }}
      </a-badge>
    `
  }))
  .add('Custom tag', () => ({
    components: { ABadge },
    props: {
      textKnob: {
        default: text('Badge text', 'Custom tag')
      },
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      tagKnob: {
        default: text('Html tag', 'span')
      }
    },
    template: `
      <a-badge
        :tag="tagKnob"
        :class="classKnob"
      >
        {{ textKnob }}
      </a-badge>
    `
  }))
