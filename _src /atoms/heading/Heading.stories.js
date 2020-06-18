import { storiesOf } from '@storybook/vue'

import AHeading from './Heading.vue'
import { select, text } from '@storybook/addon-knobs'

const info = 'Check **Knobs** tab to edit component properties dynamically, All HTML six levels of headings are available.'

const levels = [1, 2, 3, 4, 5, 6]

storiesOf('Atoms/Heading', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AHeading },
    props: {
      levelKnobs: {
        default: select('Heading level', levels, 1)
      },
      tagKnobs: {
        default: text('Tag', null)
      },
      textKnobs: {
        default: text('Text', 'Heading level 1')
      }
    },
    template: `
      <a-heading 
        :level="levelKnobs"
        :tag="tagKnobs"
      >
        {{ textKnobs }}
      </a-heading>
    `
  }))
