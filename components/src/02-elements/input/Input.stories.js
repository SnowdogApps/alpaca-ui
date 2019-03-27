import { storiesOf } from '@storybook/vue'

import AlpacaInput from './Input.vue'
import AlpacaTextarea from '../textarea/Textarea.vue'

storiesOf('Elements/Form/Input', module)
  .add('Default', () => ({
    components: { AlpacaInput },
    data: () => ({ value: null }),
    template: `
        <alpaca-input
          label="Default label"
          type="text"
          id="field_id"
          name="default"
          placeholder="First and last name"
          v-model="value"
        />
        Text: {{ value }}
    `
  }))
  .add('Textarea', () => ({
    components: { AlpacaTextarea },
    data: () => ({ value: null }),
    template: `
        <alpaca-textarea
          label="Textarea"
          id="field_id"
          name="textarea"
          placeholder="First and last name"
          v-model="value"
        />
        Text: {{ value }}
    `
  }))
  .add('Hidden label', () => ({
    components: { AlpacaInput },
    data: () => ({ value: null }),
    template: `
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
    `
  }))
  .add('Inline label', () => ({
    components: { AlpacaInput },
    data: () => ({ value: null }),
    template: `
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
    `
  }))
