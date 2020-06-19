import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'

import generateVueInfoTable from '@utils/helpers/generate-vue-info-table.js'
import getClassKnobsConfig from '@utils/helpers/get-class-knobs-config.js'
import selectorsConfig from './Button.selectors.json'

import AButton from './Button.vue'
import AIcon from '../icon/Icon.vue'
import AIconSearch from '../icon/templates/IconSearch.vue'

const info = `
  <p>Check <b>Knobs</b> tab to edit component properties dynamically.</p><br>
  ${generateVueInfoTable(selectorsConfig, 'BEM modifiers')}
`

const classKnobsConfig = getClassKnobsConfig(selectorsConfig)

storiesOf('Atoms/Button', module)
  .addParameters({ info })
  .add('Default', () => ({
    components: { AButton },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      },
      textKnobs: {
        default: text('Text', 'Button text')
      }
    },
    methods: {
      buttonClick: action('Clicked')
    },
    template: `
      <a-button
        :class="classKnobs"
        @click.native="buttonClick"
      >
        {{ textKnobs }}
      </a-button>
    `
  }))
  .add('With icon', () => ({
    components: { AButton, AIcon, AIconSearch },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    methods: {
      buttonClick: action('Clicked')
    },
    template: `
      <a-button
        :class="['a-button--icon', classKnobs]"
        aria-label="action button text"
        @click.native="buttonClick"
      >
        <a-icon title="Search icon">
          <a-icon-search />
        </a-icon>
      </a-button>
    `
  }))
  .add('With icon and text', () => ({
    components: { AButton, AIcon, AIconSearch },
    props: {
      classKnobs: {
        default: select('BEM Modifier', classKnobsConfig)
      }
    },
    methods: {
      buttonClick: action('Clicked')
    },
    template: `
      <a-button
        :class="['a-button--icon', classKnobs]"
        aria-label="action button text"
        @click.native="buttonClick"
      >
        <a-icon title="Search icon">
          <a-icon-search />
        </a-icon>
        <span class="a-button__text">
          Button with icon and text
        </span>
      </a-button>
    `
  }))
