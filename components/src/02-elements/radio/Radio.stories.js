import { storiesOf } from '@storybook/vue'

import options from "./mocks/radio"

import AlpacaRadio from './Radio.vue'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'

storiesOf('Elements/Form/Radio', module)
  .add('Default', () => ({
    components: { AlpacaRadio },
    data() {
      return {
        options
      }
    },
    template: `
      <alpaca-radio
        :options="options.options"
        :name="options.name"
      />
    `
  }))
  .add('Allow deselect', () => ({
    components: { AlpacaRadio },
    data() {
      return {
        options
      }
    },
    template: `
      <alpaca-radio
        :options="options.options"
        :name="options.name"
        wrapperTag="fieldset"
        style="padding: 20px 10px 10px 10px;"
        allowDeselect
      >
        <template v-slot:wrapper>
          <legend>Choose an option</legend>
        </template>
      </alpaca-radio>
    `
  }))
  .add('With check icon', () => ({
    components: { AlpacaRadio, AlpacaIcon },
    data() {
      return {
        options
      }
    },
    template: `
      <alpaca-radio
        :options="options.options"
        :name="options.name"
        wrapperTag="fieldset"
        style="padding: 20px 10px 10px 10px;"
        allowDeselect
      >
        <template v-slot:wrapper>
          <legend>Choose an option</legend>
        </template>
        <template v-slot:option="data">
          <alpaca-icon
            icon="checked"
            style="margin-right: 8px;"
          />
          {{ data.option.label }}
        </template>
      </alpaca-radio>
    `
  }))
