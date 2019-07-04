import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Collapse.selectors.json'

import ACollapse from './Collapse.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Molecules/Collapse', module)
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      components: {
        ACollapse
      },
      props: {
        classKnobs: {
          default: select('BEM Modifier', classKnobsConfig)
        },
        titleTextKnobs: {
          default: text('Title', 'Collapse title text')
        },
        contentTextKnobs: {
          default: text('Content', 'Collapse content text')
        }
      },
      template: `
        <a-collapse
          :class="classKnobs"
          :title="titleTextKnobs"
        >
          <span>{{ contentTextKnobs }}</span>
        </a-collapse>
      `
    })
  )
  .add(
    'With slots',
    () => ({
      components: {
        ACollapse
      },
      template: `
        <a-collapse>
          <template #button="{ toggle, collapseLocal, ariaControls }">
            <button
              :aria-expanded="!collapseLocal"
              :aria-controls="ariaControls"
              style="width: 100px; height: 50px; z-index: 1; position: relative;"
              @click="toggle"
            >
              Text
            </button>
          </template>
          <div>Content</div>
        </a-collapse>
      `
    })
  )
