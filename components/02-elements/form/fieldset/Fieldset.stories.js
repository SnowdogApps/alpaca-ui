import { storiesOf } from '@storybook/vue'
import App from '../../../01-globals/app/App.vue'
import AlpacaFieldset from './Fieldset.vue'

storiesOf('Elements/Form/Fieldset', module)
  .add('Default', () => ({
    components: { App, AlpacaFieldset },
    template: `
      <app>
        <alpaca-fieldset
          legendText="Simple legend"
        >
         Fieldset text
        </alpaca-fieldset>
      </app>
    `
  }))
