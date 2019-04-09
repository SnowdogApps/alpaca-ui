import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ARange from './Range.vue'

storiesOf('Modules/Range', module).add('Default', () => ({
  components: { ARange },
  template: `
      <a-range
        v-model="value"
        :min="min"
        :max="max"
        @apply="updateVal"
      />
      Range: {{ value }}
  `,
  data: () => {
    return {
      value: [0, 1000],
      min: 0,
      max: 1000
    }
  },
  methods: {
    updateVal: action('Updated Range')
  }
}))
