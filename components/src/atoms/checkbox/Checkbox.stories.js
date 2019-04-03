import { storiesOf } from '@storybook/vue'

import ACheckbox from './Checkbox.vue'

storiesOf('Atoms/Checkbox', module)
  .add('Default', () => ({
    components: { ACheckbox },
    template: `
        <a-checkbox
          id="checkbox"
          name="checkbox-name"
          value="checkbox-value"
        >
         Checkbox field
         </a-checkbox>
    `
  }))
  .add('Long label', () => ({
    components: { ACheckbox },
    template: `
        <a-checkbox
          id="checkbox-long-label"
          name="checkbox-long-label-name"
          value="checkbox-long-label-value"
        >
         I hereby agree for processing my personal data, included in my job offer, for the purpose of recruitment (as defined in the Act of August 29, 1997 on the Protection of Personal Data (Journal of Laws No. 133, item 883).
        </a-checkbox>
    `
  }))
  .add('With slot', () => ({
    components: { ACheckbox },
    template: `
        <a-checkbox
          id="checkbox-slots"
          name="checkbox-slots"
          value="checkbox-slots"
        >
          <template #label>
            <span>I hereby agree for processing my personal data.</span>
          </template>
         </a-checkbox>
    `
  }))
