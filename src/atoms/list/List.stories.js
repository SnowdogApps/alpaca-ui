import { optionsKnob } from '@storybook/addon-knobs'

import getSelectKnobsConfig from '@utils/helpers/get-select-knobs-config.js'
import selectorsConfig from './List.selectors.json'

import AList from './List.vue'
import AListItem from '../list-item/ListItem.vue'
import AIcon from '../icon/Icon.vue'
import AIconPerson from '../icon/templates/IconPerson.vue'
import AIconCheck from '../icon/templates/IconCheck.vue'
import AIconPhone from '../icon/templates/IconPhone.vue'
import ALink from '../link/Link.vue'

const classKnobsConfig = getSelectKnobsConfig(selectorsConfig)

const basicTemplate = `
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

export default {
  title: 'Atoms/List',
  component: AList
}

export const Default = () => ({
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

export const Native = () => ({
  components: { AList, AListItem },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, 'a-list--native', { display: 'multi-select' })
    }
  },
  template: basicTemplate
})

export const Horizontal = () => ({
  components: { AList, AListItem },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, 'a-list--horizontal', { display: 'multi-select' })
    }
  },
  template: basicTemplate
})

export const Divided = () => ({
  components: { AList, AListItem },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, 'a-list--divided', { display: 'multi-select' })
    }
  },
  template: basicTemplate
})

export const Centered = () => ({
  components: { AList, AListItem },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, 'a-list--center', { display: 'multi-select' })
    }
  },
  template: basicTemplate
})

export const CenteredHorizontal = () => ({
  components: { AList, AListItem },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, ['a-list--center', 'a-list--horizontal'], { display: 'multi-select' })
    }
  },
  template: basicTemplate
})

export const DividedHorizontal = () => ({
  components: { AList, AListItem },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, ['a-list--horizontal', 'a-list--divided'], { display: 'multi-select' })
    }
  },
  template: basicTemplate
})

export const Description = () => ({
  components: { AList, AListItem },
  template: `
    <a-list tag="dl">
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

export const WithLinks = () => ({
  components: { AList, AListItem, ALink },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, 'null', { display: 'multi-select' })
    }
  },
  template: `
  <a-list :class="classKnobs">
    <a-list-item>
      <a-link href="#">Lorem ipsum</a-link>
    </a-list-item>
    <a-list-item>
      <a-link href="#">Lorem ipsum</a-link>
    </a-list-item>
    <a-list-item>
      <a-link href="#">Lorem ipsum</a-link>
    </a-list-item>
  </a-list>
  `
})

export const WithIcons = () => ({
  components: { AList, AListItem, AIcon, AIconPerson, AIconCheck, AIconPhone },
  props: {
    classKnobs: {
      default: optionsKnob('BEM Modifier', classKnobsConfig, 'null', { display: 'multi-select' })
    }
  },
  template: `
  <a-list :class="classKnobs">
    <a-list-item>
      <a-icon title="Account icon">
        <a-icon-person />
      </a-icon>
    </a-list-item>
    <a-list-item>
      <a-icon title="Check icon">
        <a-icon-check />
      </a-icon>
    </a-list-item>
    <a-list-item>
      <a-icon title="Phone icon">
        <a-icon-phone />
      </a-icon>
    </a-list-item>
  </a-list>
  `
})
