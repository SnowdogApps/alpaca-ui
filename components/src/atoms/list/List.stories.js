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

storiesOf('Atoms/List', module)
  .addParameters({ info })
  // @vue/component
  .add('Default',
    () => ({
      components: { AList, AListItem },
      template: `
        <a-list>
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
    })
  )
  // @vue/component
  .add(
    'Horizontal',
    () => ({
      components: { AList, AListItem },
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
      },
      template: `
        <a-list class="list--horizontal">
          <a-list-item
            v-for="item in items"
            :key="item.id"
          >
            {{ item.text }}
          </a-list-item>          
        </a-list>
      `
    })
  )
  // @vue/component
  .add(
    'With slots',
    () => ({
      components: { AList, AListItem, AIcon },
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
        <a-list>
          <a-list-item
            v-for="item in items"
            :key="item.id"
          >
            <a-icon :icon="item.icon"/>
          </a-list-item>
        </a-list>
      `
    })
  )
