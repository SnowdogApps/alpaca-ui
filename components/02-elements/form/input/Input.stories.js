import { storiesOf } from '@storybook/vue'

import App from '../../../01-globals/app/App.vue'
import AlpacaInput from './Input.vue'

storiesOf('Elements/Form/Input', module)
  .add('Default', () => ({
    components: { App, AlpacaInput },
    data: () => ({ value: null }),
    template: `
      <app>
        <alpaca-input
          label="Default label"
          type="text"
          id="field_id"
          name="default"
          placeholder="First and last name"
          v-model="value"
        />
        Text: {{ value }}
      </app>
    `
  }))
  .add('Textarea', () => ({
    components: { App, AlpacaInput },
    data: () => ({ value: null }),
    template: `
      <app>
        <alpaca-input
          label="Textarea"
          type="text"
          id="field_id"
          name="textarea"
          textarea
          placeholder="First and last name"
          v-model="value"
        />
        Text: {{ value }}
      </app>
    `
  }))
  .add('Hidden label', () => ({
    components: { App, AlpacaInput },
    data: () => ({ value: null }),
    template: `
      <app>
        <alpaca-input
          label="Hidden label"
          type="text"
          id="field_id"
          name="hidden"
          placeholder="Hidden label"
          hidden-label
          v-model="value"
        />
        Text: {{ value }}
      </app>
    `
  }))
  .add('Inline label', () => ({
    components: { App, AlpacaInput },
    data: () => ({ value: null }),
    template: `
      <app>
        <alpaca-input
          label="Inline text"
          type="text"
          id="field_id"
          name="inline"
          placeholder="First and last name"
          inline
          v-model="value"
        />
        Text: {{ value }}
      </app>
    `
  }))
