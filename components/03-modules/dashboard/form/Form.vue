<template>
  <div class="dashboard-form">
    <alpaca-heading
      :level="level"
    >
      {{ title }}
    </alpaca-heading>

    <div class="dashboard-form__divider">
      <template v-if="fields">
        <alpaca-input
          v-for="field in fields"
          :id="field.input.field.id"
          :key="field.input.field.id"
          :label="field.input.field.placeholder"
          hidden-label
          type="text"
          :name="field.input.field.name"
          :placeholder="field.input.field.placeholder"
        />
      </template>

      <!--TODO textarea-->

      <!--<template v-if="textarea">-->
      <!--<alpaca-input-->
      <!--id="field_id"-->
      <!--label="Textarea"-->
      <!--type="text"-->
      <!--name="textarea"-->
      <!--textarea-->
      <!--placeholder="First and last name"-->
      <!--/>-->
      <!--</template>-->

      <template v-if="options">
        <alpaca-select
          v-for="option in options"
          :id="option.id"
          :key="option.id"
          :name="option.name"
          :options="option.options"
          :label="option.label"
        />
      </template>

      <template v-if="checkboxes">
        <alpaca-checkbox
          v-for="checkbox in checkboxes"
          :id="checkbox.checkbox.id"
          :key="checkbox.checkbox.id"
          :label="checkbox.checkbox.label.text"
        />
      </template>

      <div class="dashboard-form__divider dashboard-form__fields">
        <h5 class="heading heading--five-level dashboard-form__title-form dashboard-form__divider">
          {{ 'Change password' }}
        </h5>

        <template v-if="hiddenFields">
          <alpaca-input
            v-for="field in hiddenFields"
            :id="field.hiddenField.field.id"
            :key="field.hiddenField.field.id"
            :label="field.hiddenField.label.text"
            type="text"
            :name="field.hiddenField.field.name"
            :placeholder="field.hiddenField.label.text"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../../01-globals/heading/Heading.vue'
  import AlpacaInput from '../../../02-elements/form/input/Input.vue'
  import AlpacaSelect from '../../../02-elements/form/select/Select.vue'
  import AlpacaCheckbox from '../../../02-elements/form/checkbox/Checkbox.vue'

  export default {
    components: {
      AlpacaHeading,
      AlpacaInput,
      AlpacaSelect,
      AlpacaCheckbox
    },
    props: {
      level: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      fields: {
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
      hiddenFields: {
        type: Array,
        default: null
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
