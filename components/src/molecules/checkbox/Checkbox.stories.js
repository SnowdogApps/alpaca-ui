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
          @input="onChange"
        >
          Checkbox field
        </a-checkbox>
      `,
    })
  )
  .add(
    'Custom Values',
    () => ({
      ...defaultData,
      template: `
        <a-checkbox
          id="checkbox-values"
          name="checkbox-values"
          v-model="status"
          value="accepted"
          unchecked-value="not_accepted"
          @input="onChange"
        >
          I hereby agree for processing my personal data, included in my job offer, for the purpose of recruitment (as defined in the Act of August 29, 1997 on the Protection of Personal Data (Journal of Laws No. 133, item 883).
        </a-checkbox>
      `
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
          v-model="selected"
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
