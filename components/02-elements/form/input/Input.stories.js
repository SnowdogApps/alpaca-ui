import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaInput from './Input.vue'
import AlpacaTextarea from './textarea/Textarea.vue'

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
    components: { App, AlpacaTextarea },
    data: () => ({ value: null }),
    template: `
      <app>
        <alpaca-textarea
          label="Textarea"
          id="field_id"
          name="textarea"
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
