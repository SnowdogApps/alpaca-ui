import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ACheckbox from './Checkbox.vue'
import AIcon from './../../atoms/icon/Icon.vue'
import AIconCheck from './../../atoms/icon/templates/IconCheck.vue'

const defaultData = {
  data: () => {
    return {
      status: true,
      status1: false
    }
  },
  methods: {
    onChange: action('Option changed')
  }
}

storiesOf('Molecules/Checkbox', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    ...defaultData,
    components: { ACheckbox },
    template: `
      <div>
        <a-checkbox
          class="mb-4"
          id="checkbox-default"
          name="checkbox-default1"
          v-model="status"
          value="some value"
          @change="onChange"
        >
          Checkbox field
        </a-checkbox>
        <a-checkbox
          class="mb-4"
          id="checkbox-default1"
          name="checkbox-default1"
          v-model="status1"
          value="some value"
          @change="onChange"
        >
          Checkbox field
        </a-checkbox>
      </div>
    `
  }))
  .add('With slot', () => ({
    ...defaultData,
    components: {
      ACheckbox,
      AIcon,
      AIconCheck
    },
    template: `
      <a-checkbox
        id="checkbox-slots"
        name="checkbox-slots"
        input-class="a-checkbox__field"
        v-model="status"
        value="some value"
        @change="onChange"
      >
        <template #label>
          <label
            for="checkbox-slots"
            class="a-checkbox__label"
            style="color: #0000ff;"
          >
            <div class="a-checkbox__icon-wrapper">
              <a-icon class="a-checkbox__icon">
                <a-icon-check />
              </a-icon>
            </div>
            I hereby agree for processing my personal data.
          </label>
        </template>
      </a-checkbox>
    `
  }))
