import { storiesOf } from '@storybook/vue'

import AInput from './Input.vue'
import ATextarea from '../textarea/Textarea.vue'

storiesOf('Elements/Form/Input', module)
  .add('Default', () => ({
    components: { AInput },
    data: () => ({ value: null }),
    template: `
        <a-input
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
    components: { ATextarea },
    data: () => ({ value: null }),
    template: `
        <a-textarea
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
    components: { AInput },
    data: () => ({ value: null }),
    template: `
        <a-input
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
    components: { AInput },
    data: () => ({ value: null }),
    template: `
        <a-input
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
