import { storiesOf } from '@storybook/vue'
import App from '../../../01-globals/app/App.vue'
import AlpacaCheckbox from './Checkbox.vue'

storiesOf('Elements/Form/Checkbox', module)
  .add('Default', () => ({
    components: { App, AlpacaCheckbox },
    template: `
      <app>
        <alpaca-checkbox/>
      </app>
    `
  }))
