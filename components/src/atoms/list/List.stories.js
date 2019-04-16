import { storiesOf } from '@storybook/vue'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'
import AIcon from '../icon/Icon.vue'

const info = `
  ---
  #### Use these modifiers with \`.list\` class.
  - \`.list--horizontal\` - Selector for applying horizontal styles
  ---
`

const defaultData = {
  components: { AList },
  data () {
    return {
      items: [
        {
          'text': 'Lorem Ipsum',
          'id': 'el1'
        },
        {
          'text': 'Lorem Ipsum',
          'id': 'el2'
        },
        {
          'text': 'Lorem Ipsum',
          'id': 'el3'
        }
      ]
    }
  }
}

storiesOf('Atoms/List', module)
  .addParameters({ info })
  // @vue/component
  .add('Default',
    () => ({
      ...defaultData,
      template: `<a-list :items="items"/>`
    })
  )
  // @vue/component
  .add(
    'Horizontal',
    () => ({
      ...defaultData,
      template: `
        <a-list
          :items="items"
          class="list--horizontal"
        />
      `
    })
  )
  // @vue/component
  .add(
    'With slots',
    () => ({
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
        <a-list :items="items">
          <a-list-item
            v-for="item in items"
            :key="item.id"
          >
            <a-icon :icon="item.icon"/>
          </a-list-item>
        </a-list>
      `,
      components: {
        AList,
        AListItem,
        AIcon
      }
    })
  )
