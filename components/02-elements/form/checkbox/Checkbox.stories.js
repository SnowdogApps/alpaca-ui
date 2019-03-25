import { storiesOf } from '@storybook/vue'

import AlpacaCheckbox from './Checkbox.vue'

storiesOf('Elements/Form/Checkbox', module)
  .add('Default', () => ({
    components: { AlpacaCheckbox },
    template: `
        <alpaca-checkbox
          id="checkbox"
          name="checkbox-name"
          value="checkbox-value"
        >
         Checkbox field
        </alpaca-checkbox>
    `
  }))
  .add('Long label', () => ({
    components: { AlpacaCheckbox },
    template: `
        <alpaca-checkbox
          id="checkbox-long-label"
          name="checkbox-long-label-name"
          value="checkbox-long-label-value"
        >
         I hereby agree for processing my personal data, included in my job offer, for the purpose of recruitment (as defined in the Act of August 29, 1997 on the Protection of Personal Data (Journal of Laws No. 133, item 883).
        </alpaca-checkbox>
    `
  }))
  .add('Link', () => ({
    components: { AlpacaCheckbox },
    template: `
        <alpaca-checkbox
          link
          href="#"
        >
          Checkbox link label
        </alpaca-checkbox>
    `
  }))
