<template>
  <div class="dashboard-form">
    <alpaca-heading :level="5">
      {{ title }}
    </alpaca-heading>
    <div class="dashboard-form__divider">
      <template v-if="inputs">
        <alpaca-input
          v-for="field in inputs"
          :id="field.id"
          :key="field.id"
          class="dashboard-form__divider"
          :label="field.placeholder"
          hidden-label
          type="text"
          :name="field.name"
          :placeholder="field.placeholder"
        />
      </template>
      <template v-if="options">
        <alpaca-select
          v-for="option in options"
          :id="option.id"
          :key="option.id"
          v-model="test"
          :name="option.name"
          :options="option.options"
          :label="option.label"
        />
      </template>
      <template v-if="checkboxes">
        <alpaca-checkbox
          v-for="checkbox in checkboxes"
          :id="checkbox.id"
          :key="checkbox.id"
          v-model="selected[checkbox.type]"
          :value="true"
          :unchecked-value="false"
          class="dashboard-form__divider"
          @change="checkedValues"
        >
          {{ checkbox.text }}
        </alpaca-checkbox>
      </template>
      <div class="dashboard-form__divider dashboard-form__fields">
        <template v-if="visibleInputs">
          <alpaca-heading
            :level="5"
            class="dashboard-form__title-form dashboard-form__divider"
          >
            {{ visibleTitle.title }}
          </alpaca-heading>
          <alpaca-input
            v-for="field in visibleInputs"
            :id="field.id"
            :key="field.id"
            class="dashboard-form__divider"
            :label="field.text"
            type="text"
            :name="field.name"
            :placeholder="field.text"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../../01-globals/heading/Heading'
  import AlpacaInput from '../../../02-elements/form/input/Input'
  import AlpacaSelect from '../../../02-elements/form/select/Select'
  import AlpacaCheckbox from '../../../02-elements/form/checkbox/Checkbox'

  export default {
    components: {
      AlpacaHeading,
      AlpacaInput,
      AlpacaSelect,
      AlpacaCheckbox
    },
    props: {
      title: {
        type: String,
        required: true
      },
      inputs: {
        type: Array,
        default: null
      },
      options: {
        type: Array,
        default: null
      },
      checkboxes: {
        type: Array,
        default: null
      },
      hiddenInputs: {
        type: Array,
        default: null
      },
      hiddenTitles: {
        type: Array,
        default: null
      }
    },
    data() {
      return {
        selected: {},
        visibleInputs: [],
        visibleTitle: {}
      }
    },
    methods: {
      checkedValues() {
        const selectedItemsNumber = Object.values(this.selected).filter(el => el).length

        this.visibleInputs =
          selectedItemsNumber ? this.hiddenInputs.filter(el => this.selected[el.type] || el.type === true)
          : []

        this.visibleTitle =
          selectedItemsNumber === 1 ? this.hiddenTitles.find(el => this.selected[el.type])
            : selectedItemsNumber > 1 ? this.hiddenTitles.find(el => el.type === true)
            : []
      }
    }
  }
</script>

<style lang="scss">
  $dashborad-form-margin: 30px !default;

  .dashboard-form {
    &__title {
      margin-bottom: $dashborad-form-margin;
      padding-bottom: 10px;
      border-bottom: 1px solid $gray;
    }

    &__divider,
    &__select {
      margin-bottom: $dashborad-form-margin;
    }

    &--hidden {
      display: none;
    }
  }
</style>
