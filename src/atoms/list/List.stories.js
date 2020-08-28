import { text, optionsKnob } from '@storybook/addon-knobs'

import getSelectKnobsConfig from '@utils/helpers/get-select-knobs-config.js'
import selectorsConfig from './List.selectors.json'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'

const classKnobsConfig = getSelectKnobsConfig(selectorsConfig)

export default {
  title: 'Atoms/List',
  component: AList
}

export const Default = () => ({
  components: { AList, AListItem },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, 'null', { display: 'multi-select' })
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
      default: optionsKnob('BEM Modifier', classKnobsConfig, 'null', { display: 'multi-select' })
    }
  },
  template: `
    <a-list :class="classKnobs">
    </a-list>
  `
})
