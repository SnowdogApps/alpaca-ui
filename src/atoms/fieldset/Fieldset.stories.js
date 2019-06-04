import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'

import AFieldset from './Fieldset.vue'

storiesOf('Atoms/Fieldset', module)
  .addParameters({ info: 'Check **Knobs** tab to edit component properties dynamically.' })
  .add('Default', () => ({
    components: { AFieldset },
    props: {
      legendKnobs: {
        default: text('Legend', 'Legend text')
      }
    },
    template: `
      <a-fieldset :legend-text="legendKnobs">
        <span>Fieldset content</span>
      </a-fieldset>
    `
  }))
