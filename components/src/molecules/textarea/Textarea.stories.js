import { storiesOf } from '@storybook/vue'

import ATextarea from './Textarea.vue'

storiesOf('Molecules/Textarea', module)
  // @vue/component
  .add('Default', () => ({
    components: { ATextarea },
    data: () => ({ value: null }),
    template: `
      <a-textarea
        label="Default label"
        id="field_id"
        placeholder="First and last name"
        v-model="value"
      />
      Text: {{ value }}
    `
  }))
  // @vue/component
  .add('Hidden label', () => ({
    components: { ATextarea },
    data: () => ({ value: null }),
    template: `
      <a-textarea
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
    components: { ATextarea },
    data: () => ({ value: null }),
    template: `
      <a-textarea
        label="Inline text"
        id="field_id"
        placeholder="First and last name"
        inline
        v-model="value"
      />
      Text: {{ value }}
    `
  }))
