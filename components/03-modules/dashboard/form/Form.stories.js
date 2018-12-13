import { storiesOf } from '@storybook/vue'

import App from '../../../01-globals/app/App.vue'
import AlpacaDashboardForm from './Form.vue'

import form from './mocks/form.json'

storiesOf('Modules/Dashboard/Form', module)
  .add('Default', () => ({
    components: { App, AlpacaDashboardForm },
    data: () => ({
      form
    }),
    template: `
      <app>
        <alpaca-dashboard-form
          :level="5"
          title="Example heading"
          :fields="form.fields"
          :checkboxes="form.checkboxes"
          :hiddenFields="form.hiddenFields"
          formTitle="Form title"
       />
      </app>
    `
  }))
