import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'

import generateVueInfoTable from '../../../utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '../../../utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './List.selectors.json'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'
import AIcon from '../icon/Icon.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/List', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AList, AListItem },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
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
        default: select('BEM Modifier', classKnobsConfig)
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
