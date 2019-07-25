import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import AIcon from './Icon.vue'

import readme from './README.md'
import icons from './mocks/icons.json'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Icon.selectors.json'

const info = `
  Check **Knobs** tab to edit component properties dynamically.<br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/Icon', module)
  .addParameters(
    {
      info,
      notes: readme
    }
  )
  .add('Default', () => ({
    components: { AIcon },
    data: () => ({ icons }),
    props: {
      classKnob: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; padding: 10px;">
        <div
          v-for="icon in icons"
          :key="icon.iconId"
          style="margin: 20px; width: 100px;"
        >
          <a-icon
            :icon="icon.iconId"
            :class="classKnob"
            style="margin: 0 auto;"
            :title="icon.iconTitle"
          />
          <span style="display: block; margin-top: 20px; text-align: center;">
            {{ icon.iconId }}
          </span>
        </div>
      </div>
    `
  }))
