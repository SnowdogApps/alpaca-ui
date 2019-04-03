import { storiesOf } from '@storybook/vue'

import ACheckbox from './Checkbox.vue'

// Preview styles
import './preview/styles.css'

storiesOf('Molecules/Checkbox', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ACheckbox },
    data: () => {
      return {
        selected: null
      }
    },
    template: `
      <div>
        <a-checkbox
          id="checkbox-label"
          name="checkbox-label-name"
          value="checkbox-label-value"
          v-model="selected"
        >
          Checkbox field
        </a-checkbox>
        Selected: {{ selected }}
      </div>
    `
  }))
  .add('Long label', () => ({
    data: () => {
      return {
        selected: null
      }
    },
    components: { ACheckbox },
    template: `
      <div>
        <a-checkbox
          id="checkbox-long-label"
          name="checkbox-long-label-name"
          value="checkbox-long-label-value"
          v-model="selected"
        >
          I hereby agree for processing my personal data, included in my job offer, for the purpose of recruitment (as defined in the Act of August 29, 1997 on the Protection of Personal Data (Journal of Laws No. 133, item 883).
        </a-checkbox>
        Selected: {{ selected }}
      </div>
    `
  }))
  .add('With slot', () => ({
    components: { ACheckbox },
    data: () => {
      return {
        selected: null
      }
    },
    template: `
      <div>
        <a-checkbox
          id="checkbox-slots"
          name="checkbox-slots"
          value="checkbox-slots"
          input-class="checkbox__field-custom"
          v-model="selected"
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
        Selected: {{ selected }}  
      </div>
    `
  }))
