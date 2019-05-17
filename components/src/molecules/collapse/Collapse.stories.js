import { storiesOf } from '@storybook/vue'
import { select, text } from '@storybook/addon-knobs'

import ACollapse from './Collapse.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-collapse--secondary\` - Selector for applying secondary styles
  - \`.a-collapse--inner\` - Selector for applying inner styles
  ---
`

const bemModifiers = [
  null,
  'a-collapse--secondary',
  'a-collapse--inner'
]

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
          default: select('BEM Modifier', bemModifiers)
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
          <template #button="{ collapse }">
            <button @click="collapse">X</button>
          </template>
          <div>Content</div>
        </a-collapse>
      `
    })
  )
