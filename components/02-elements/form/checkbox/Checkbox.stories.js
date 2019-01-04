import { storiesOf } from '@storybook/vue'
import App from '../../../01-globals/app/App.vue'
import AlpacaCheckbox from './Checkbox.vue'

storiesOf('Elements/Form/Checkbox', module)
  .add('Default', () => ({
    components: { App, AlpacaCheckbox },
    data: () => ({ selected: null }),
    template: `
      <app>
        <alpaca-checkbox
          id="checkbox"
          name="checkbox-name"
          value="checkbox-value"
          v-model="selected"
        >
         Checkbox field
        </alpaca-checkbox>
         Selected: {{ selected }}
      </app>
    `
  }))
  .add('Long label', () => ({
    components: { App, AlpacaCheckbox },
    data: () => ({ selected: null }),
    template: `
      <app>
        <alpaca-checkbox
          id="checkbox-long-label"
          name="checkbox-long-label-name"
          value="checkbox-long-label-value"
          v-model="selected"
        >
         I hereby agree for processing my personal data, included in my job offer, for the purpose of recruitment (as defined in the Act of August 29, 1997 on the Protection of Personal Data (Journal of Laws No. 133, item 883).
        </alpaca-checkbox>
         Selected: {{ selected }}
      </app>
    `
  }))
  .add('Link', () => ({
    components: { App, AlpacaCheckbox },
    template: `
      <app>
        <alpaca-checkbox
          link
          href="#"
        >
          Checkbox link label
        </alpaca-checkbox>
      </app>
    `
  }))
