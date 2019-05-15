import { addDecorator, storiesOf } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

import ACollapse from './Collapse.vue'
import { select, text } from '@storybook/addon-knobs'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.collapse--secondary\` - Selector for applying secondary styles
  - \`.collapse--inner\` - Selector for applying inner styles
  ---
`

const bemModifiers = [
  null,
  'collapse--secondary',
  'collapse--inner'
]

addDecorator(StoryRouter())
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
          <template #title>
            <span>tesciunio title</span>
          </template>
          <div>tesciunio</div>
        </a-collapse>
      `
    })
  )
