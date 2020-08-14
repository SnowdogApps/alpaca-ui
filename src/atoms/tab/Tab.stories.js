import { text, boolean } from '@storybook/addon-knobs'

import ATab from './Tab.vue'

const sampleTabContent = 'Velit proident fugiat pariatur irure sint non ut non. Adipisicing aliqua consectetur nisi aliquip velit. Nisi pariatur est consectetur culpa occaecat enim nulla laborum ex. Consectetur incididunt minim cupidatat ad aliquip. Ea non ipsum ut consequat sit adipisicing eiusmod do. Officia incididunt cillum incididunt aliquip sit labore laboris do cillum commodo occaecat voluptate ea aliqua.'

export default {
  title: 'Atoms/Tab',
  component: ATab
}

export const Default = () => ({
  components: { ATab },
  props: {
    nameKnob: {
      default: 'tab-1'
    },
    contentKnob: {
      default: text('Tab Content', sampleTabContent)
    },
    selectedKnob: {
      default: boolean('selected', true)
    }
  },
  template: `
    <a-tab name="nameKnob" :selected="selectedKnob">
      {{ contentKnob }}
    </a-tab>
  `
})

export const NotSelected = () => ({
  components: { ATab },
  props: {
    nameKnob: {
      default: 'tab-2'
    },
    contentKnob: {
      default: text('Tab Content', sampleTabContent)
    },
    selectedKnob: {
      default: boolean('selected', false)
    }
  },
  template: `
  <a-tab name="nameKnob" :selected="selectedKnob">
    {{ contentKnob }}
  </a-tab>
  `
})
