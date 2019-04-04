import { storiesOf } from '@storybook/vue'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'
import ADescriptionList from '../description-list/DescriptionList.vue'
import AIcon from '../icon/Icon.vue'
import ALink from '../link/Link.vue'

const info = `
  ---
  #### Use these modifiers with \`.list\` class.
  - \`.list--native\` - Selector for applying native styles
  - \`.list--horizontal\` - Selector for applying horizontal styles
  - \`.list--horizontal@medium\` - Selector for applying horizontal-medium styles
  - \`.list--with-icon\` - Selector for applying styles for item with icon
  - \`.list--divided\` - Selector for applying divided styles
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
    'Horizontal Medium',
    () => ({
      ...defaultListData,
      template: `
        <a-list class="list--horizontal@medium">
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
    'Icon',
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
        <a-list class="list--with-icon">
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
  .add(
    'Divided',
    () => ({
      ...defaultListData,
      template: `
        <a-list class="list--divided">
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
    'Center',
    () => ({
      ...defaultListData,
      template: `
        <a-list class="list--center">
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
    'Center Horizontal',
    () => ({
      ...defaultListData,
      template: `
        <a-list class="list--center list--horizontal">
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
    'Divided Horizontal',
    () => ({
      ...defaultListData,
      template: `
        <a-list class="list--divided list--horizontal">
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
    'Divided Horizontal Medium',
    () => ({
      ...defaultListData,
      template: `
        <a-list class="list--divided list--horizontal@medium">
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
      components: { ADescriptionList },
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
        <a-description-list
          :listClass="'list--divided'"
          :title="'A description List'"
          :elements="items"
        />
      `
    })
  )
  .add(
    'Link',
    () => ({
      components: { AList, AListItem, ALink },
      data: () => ({
        items: [
          {
            "text": "Lorem Ipsum",
            "linkHref": "#"
          },
          {
            "text": "Lorem Ipsum",
            "linkHref": "#"
          },
          {
            "text": "Lorem Ipsum",
            "linkHref": "#"
          }
        ]
      }),
      template: `
        <a-list>
          <a-list-item
            v-for="item in items"
            :key="item.id"
           >
            <a-link
              :href="item.linkHref"
            >
              {{ item.text }}
            </a-link>
          </a-list-item>
        </a-list>
      `
    })
  )
