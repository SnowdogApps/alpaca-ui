import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ACheckbox from './Checkbox.vue'
import AIcon from './../../atoms/icon/Icon.vue'

const defaultData = {
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
  .add('Default', () => ({
    ...defaultData,
    components: { ACheckbox },
    template: `
      <a-checkbox
        id="checkbox-default"
        name="checkbox-default"
        v-model="status"
        value="some value"
        @change="onChange"
      >
        Checkbox field
      </a-checkbox>
    `
  }))
  .add('With slot', () => ({
    ...defaultData,
    components: {
      ACheckbox,
      AIcon
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
          <div class="a-checkbox__item">
            <a-icon
              icon="checked"
              class="a-checkbox__icon"
            />
          </div>

          <label
            for="checkbox-slots"
            class="a-checkbox__label"
            style="color: #0000ff;"
          >
            I hereby agree for processing my personal data.
          </label>
        </template>
      </a-checkbox>
    `
  }))
