import { storiesOf } from '@storybook/vue'
import App from '../../../01-globals/app/App.vue'
import AlpacaCheckbox from './Checkbox.vue'

storiesOf('Elements/Form/Checkbox', module)
  .add('Default', () => ({
    components: { App, AlpacaCheckbox },
    template: `
      <app>
        <alpaca-checkbox
          id="checkbox"
          name="checkbox-name"
          label="Checkbox field"
        />
      </app>
    `
  }))
  .add('Long label', () => ({
    components: { App, AlpacaCheckbox },
    template: `
      <app>
        <alpaca-checkbox
          id="checkbox-long-label"
          name="checkbox-long-label-name"
          label="'I hereby agree for processing my personal data, included in my job offer, for the purpose of recruitment (as defined in the Act of August 29, 1997 on the Protection of Personal Data (Journal of Laws No. 133, item 883)."
        />
      </app>
    `
  }))
