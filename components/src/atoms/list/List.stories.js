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
    'Description',
    () => ({
      components: { AList, AListItem },
      data: () => ({
        items: [
          {
            "id": "desc_id_1",
            "label": "Lorem",
            "value": "ipsum"
          },
          {
            "id": "desc_id_2",
            "label": "Lorem",
            "value": "ipsum"
          },
          {
            "id": "desc_id_3",
            "label": "Lorem",
            "value": "ipsum"
          }
        ]
      }),
      template: `
        <a-list 
          tag-list="dl"
          style="display: inline-block;"
        >
          <template v-for="item in items">
            <a-list-item
              tag="dt"
              style="float: left; clear: left; padding: 5px;"
            >
              {{ item.label }}
            </a-list-item>
            <a-list-item
              tag="dd"
              style="padding: 5px; float: left;"
            >
              {{ item.value }}
            </a-list-item>
          </template>
        </a-list>
      `
    })
  )
  .add(
    'With slots, and items as a props',
    () => ({
      components: { AList, AIcon },
      data: () => ({
        items: [
          {
            "id": "el1",
            "iconId": "facebook"
          },
          {
            "id": "el2",
            "iconId": "twitter"
          },
          {
            "id": "el3",
            "iconId": "linkedin"
          }
        ]
      }),
      template: `
        <a-list :items="items">
          <template #item="data">
            <a-icon
              :icon="data.item.iconId"
            />
          </template>
        </a-list>
      `
    })
  )
