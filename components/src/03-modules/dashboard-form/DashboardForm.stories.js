import { storiesOf } from '@storybook/vue'

import AlpacaDashboardForm from './DashboardForm.vue'

import checkboxes from './mocks/checkboxes'
import inputs from './mocks/inputs'
import hidden from './mocks/hiddenInputs'

storiesOf('Modules/Dashboard', module)
  .add('Form', () => ({
    components: { AlpacaDashboardForm },
    data: () => ({
      checkboxes,
      inputs,
      hidden
    }),
    template: `
      <alpaca-dashboard-form
         title="Account Information"
         :inputs="inputs"
         :checkboxes="checkboxes"
         :hiddenInputs="hidden.hiddenInputs"
         :hiddenTitles="hidden.hiddenTitles"
         formTitle="Change"
      />
    `
  }))
