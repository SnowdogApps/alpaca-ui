import { storiesOf } from '@storybook/vue'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'
import AIcon from '../icon/Icon.vue'

const info = `
  ---
  #### Use these modifiers with \`.list\` class.
  - \`.list--native\` - Selector for applying native styles
  - \`.list--horizontal\` - Selector for applying horizontal styles
  ---
`

const defaultListData = {
  components: { AList, AListItem },
  data () {
    return {
      items: [
        {
          "text": "Lorem Ipsum",
          "id": "el1"
        },
        {
          "text": "Lorem Ipsum",
          "id": "el2"
        },
        {
          "text": "Lorem Ipsum",
          "id": "el3"
        }
      ]
    }
  }
}

storiesOf('Atoms/List', module)
  .addParameters({ info })
  .add(
    'Default',
    () => ({
      ...defaultListData,
      template: `
        <a-list>
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
  .add(
    'Native',
    () => ({
      ...defaultListData,
      template: `
        <a-list class="list--native">
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
  .add(
    'Horizontal',
    () => ({
      ...defaultListData,
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
  .add(
    'With slot',
    () => ({
      components: { AList, AListItem, AIcon },
      data: () => ({
        items: [
          {
            "icon": {
              "iconId": "facebook"
            },
            "linkHref": "#",
            "wrapperClass": "list__icon-link"
          },
          {
            "icon": {
              "iconId": "twitter"
            },
            "linkHref": "#",
            "wrapperClass": "list__icon-link"
          },
          {
            "icon": {
              "iconId": "linkedin"
            },
            "linkHref": "#",
            "wrapperClass": "list__icon-link"
          }
        ]
      }),
      template: `
        <a-list>
          <a-list-item
            v-for="item in items"
            :key="item.id"
          >
            <a-icon
              :icon="item.icon.iconId"
            />
          </a-list-item>
        </a-list>
      `
    })
  )
