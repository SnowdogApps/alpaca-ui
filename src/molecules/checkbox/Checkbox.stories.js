import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ACheckbox from './Checkbox.vue'
import AIcon from './../../atoms/icon/Icon.vue'

// @vue/component
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
  // @vue/component
  .add('Default', () => ({
    ...defaultData,
    components: { ACheckbox },
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
    `
  }))
  // @vue/component
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
        @input="onChange"
      >
        <template #label>
          <a-icon
            icon="checked"
            class="a-checkbox__icon"
          />
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