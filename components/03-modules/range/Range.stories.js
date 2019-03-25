import { storiesOf } from '@storybook/vue'
import { action } from "@storybook/addon-actions"

import App from '../../01-globals/app/App.vue'
import AlpacaRange from './Range.vue'

storiesOf('Modules/Range', module).add('Default', () => ({
  components: { App, AlpacaRange },
  template: `
    <app>
      <alpaca-range
        v-model="value"
        :min="min"
        :max="max"
        @apply="updateVal"
      />
      Range: {{ value }}
    </app>
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
