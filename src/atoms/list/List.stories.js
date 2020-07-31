import { select, text } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './List.selectors.json'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/List',
  component: AList
}

export const Default = () => ({
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
})

export const Description = () => ({
  components: { AList, AListItem },
  props: {
    tagKnobs: {
      default: text('Tag', 'dl')
    }
  },
  template: `
    <a-list :tag="tagKnobs">
      <a-list-item tag="dt">
        Lorem ipsum
      </a-list-item>
      <a-list-item tag="dd">
        Lorem ipsum value
      </a-list-item>
      <a-list-item tag="dt">
        Lorem ipsum
      </a-list-item>
      <a-list-item tag="dd">
        Lorem ipsum value
      </a-list-item>
    </a-list>
  `
})

export const WithSlots = () => ({
  components: { AList, AListItem },
  props: {
    classKnobs: {
      default: select('BEM Modifier', classKnobsConfig)
    }
  },
  template: `
    <a-list :class="classKnobs">
    </a-list>
  `
})
