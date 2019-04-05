import { storiesOf } from '@storybook/vue'

import ACheckbox from './Checkbox.vue'
import { action } from '@storybook/addon-actions'

// Preview styles
import './preview/styles.css'

const defaultData = {
  components: { ACheckbox },
  data: () => {
    return {
      status: true
    }
  },
  methods: {
    onChange: action('Option changed')
  }
}

storiesOf('Molecules/Checkbox', module)
  .addParameters({ info: true })
  .add(
    'Default',
    () => ({
      ...defaultData,
      template: `
        <a-checkbox
          id="checkbox-default"
          name="checkbox-default"
          v-model="status"
          value="some value"
          @input="onChange"
        >
          Checkbox field
        </a-checkbox>
      `,
    })
  )
  .add(
    'With slot',
    () => ({
      ...defaultData,
      template: `
        <a-checkbox
          id="checkbox-slots"
          name="checkbox-slots"
          input-class="checkbox__field-custom"
          v-model="status"
          value="some value"
          @input="onChange"
        >
          <template #label>
            <label
              for="checkbox-slots"
              class="checkbox__label-custom"
            >
              I hereby agree for processing my personal data.
            </label>
          </template>
        </a-checkbox>
      `
    })
  )
