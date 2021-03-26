import { select, text } from '@storybook/addon-knobs'

import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Input.selectors.json'

import AInput from './Input.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconVisibility from '../../atoms/icon/templates/IconVisibility.vue'
import AIconVisibilityOff from '../../atoms/icon/templates/IconVisibilityOff.vue'

const inputTypes = ['text', 'email', 'search', 'number', 'password', 'hidden']
const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

export default {
  title: 'Molecules/Input',
  component: AInput
}

export const Default = () => ({
  components: { AInput },
  props: {
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    },
    placeholderKnob: {
      default: text('Placeholder', 'First and last name')
    },
    labelKnob: {
      default: text('Label', 'Label')
    },
    typeKnob: {
      default: select('Type', inputTypes, 'text')
    }
  },
  data: () => {
    return {
      value: ''
    }
  },
  template: `
    <a-input
      :class="classKnob"
      v-model="value"
      :type="typeKnob"
      :label="labelKnob"
      :placeholder="placeholderKnob"
      id="input-id"
    />
  `
})

export const Password = () => ({
  components: { AInput, AIcon, AIconVisibility, AIconVisibilityOff },
  props: {
    classKnob: {
      default: select('BEM Modifier', classKnobsConfig)
    },
    placeholderKnob: {
      default: text('Placeholder', 'First and last name')
    },
    labelKnob: {
      default: text('Label', 'Label')
    }
  },
  data: () => {
    return {
      value: '',
      passwordVisible: false,
      inputType: 'password'
    }
  },
  methods: {
    toggle () {
      this.passwordVisible = !this.passwordVisible
      this.inputType = this.inputType === 'password' ? 'text' : 'password'
    }
  },
  template: `
    <a-input
      :class="classKnob"
      v-model="value"
      :label="labelKnob"
      :type="inputType"
      :placeholder="placeholderKnob"
      id="input-id"
    >
      <template #icon>
        <div
          class="absolute bottom-0 right-0 flex items-center justify-center w-12 h-12 cursor-pointer"
          @click="toggle"
        >
          <a-icon>
            <a-icon-visibility v-if="passwordVisible" />
            <a-icon-visibility-off v-else />
          </a-icon>
        </div>
      </template>
    </a-input>
  `
})
