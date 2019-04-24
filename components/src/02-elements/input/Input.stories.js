import { storiesOf } from '@storybook/vue'

import AInput from './Input.vue'
import ATextarea from '../textarea/Textarea.vue'

storiesOf('Elements/Form/Input', module)
  // @vue/component
  .add('Default', () => ({
    components: { AInput },
    data: () => ({ value: null }),
    template: `
      <a-input
        label="Default label"
        id="field_id"
        placeholder="First and last name"
        v-model="value"
      />
      Text: {{ value }}
    `
  }))
  // @vue/component
  .add('Textarea', () => ({
    components: { ATextarea },
    data: () => ({ value: null }),
    template: `
      <a-textarea
        label="Textarea"
        id="field_id"
        placeholder="First and last name"
        v-model="value"
      />
      Text: {{ value }}
    `
  }))
  // @vue/component
  .add('Hidden label', () => ({
    components: { AInput },
    data: () => ({ value: null }),
    template: `
      <a-input
        label="Hidden label"
        id="field_id"
        placeholder="Hidden label"
        hidden-label
        v-model="value"
      />
      Text: {{ value }}
    `
  }))
  // @vue/component
  .add('Inline label', () => ({
    components: { AInput },
    data: () => ({ value: null }),
    template: `
      <a-input
        label="Inline text"
        id="field_id"
        placeholder="First and last name"
        inline
        v-model="value"
      />
      Text: {{ value }}
    `
  }))
