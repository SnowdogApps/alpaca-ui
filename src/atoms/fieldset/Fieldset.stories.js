import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'

import AFieldset from './Fieldset.vue'

storiesOf('Atoms/Fieldset', module)
  .addParameters({ info: 'Check **Knobs** tab to edit component properties dynamically.' })
  .add('Default', () => ({
    components: { AFieldset },
    props: {
      legendKnobs: {
        default: text('Legend', 'Legend text')
      },
      disabledKnobs: {
        default: boolean('Disabled', false)
      },
      hideLegendKnobs: {
        default: boolean('Hide legend', false)
      }
    },
    template: `
      <a-fieldset
        :legend-text="legendKnobs"
        :hide-legend="hideLegendKnobs"
        :disabled="disabledKnobs"
      >
        <span>Fieldset content</span>
      </a-fieldset>
    `
  }))
