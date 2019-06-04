import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'
import AIcon from '../icon/Icon.vue'

const info = `
  ---
  Check **Knobs** tab to edit component properties dynamically. Below list of available BEM modifiers.
  - \`.a-list--horizontal\` - Selector for applying horizontal styles
  ---
`

const bemModifiers = [
  null,
  'a-list--horizontal'
]

storiesOf('Atoms/List', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AList, AListItem },
    props: {
      classKnobs: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    template: `
      <a-list :class="classKnobs">
        <a-list-item>
          Lorem ipsum
        </a-list-item>
        <a-list-item>
          Lorem ipsum
        </a-list-item>
        <a-list-item>
          Lorem ipsum
        </a-list-item>
      </a-list>
    `
  }))
  .add('With slots', () => ({
    components: { AList, AListItem, AIcon },
    props: {
      classKnobs: {
        default: select('BEM Modifier', bemModifiers)
      }
    },
    data: () => ({
      items: [
        {
          'id': 'el1',
          'icon': 'facebook'
        },
        {
          'id': 'el2',
          'icon': 'twitter'
        },
        {
          'id': 'el3',
          'icon': 'linkedin'
        }
      ]
    }),
    template: `
      <a-list :class="classKnobs">
        <a-list-item
          v-for="item in items"
          :key="item.id"
        >
          <a-icon :icon="item.icon"/>
        </a-list-item>
      </a-list>
    `
  }))
