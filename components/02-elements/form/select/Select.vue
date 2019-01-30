<template>
  <div class="select">
    <alpaca-label
      :for="id"
      :hidden="hiddenLabel"
      :inline="inlineLabel"
      :custom-class="labelClass"
      class="select__label"
    >
      {{ label }}
    </alpaca-label>
    <div class="select__field">
      <select
        :id:="id"
        :name="name"
        :class="['select__input', selectClass]"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @change="$emit('input', $event.target.value)"
      >
        <option v-if="!selected" />
        <option
          v-for="(option, key) in options"
          :key="key"
          :value="option.value"
          :selected="option.value === selected"
        >
          {{ option.text }}
        </option>
      </select>
    </div>

    <template v-if="validations">
      <span
        v-for="(validation, index) in currentValidations"
        :key="index"
      >
        {{ validation.text }}
      </span>
    </template>
  </div>
</template>

<script>
  import AlpacaLabel from '../../../01-globals/label/Label.vue'

  export default {
    components: {
      AlpacaLabel
    },
    props: {
      id: {
        type: String,
        required: true,
        default: null
      },
      name: {
        type: String,
        required: true,
        default: null
      },
      options: {
        type: Array,
        required: true,
        default: () => []
      },
      label: {
        type: String,
        required: true,
        default: null
      },
      selected: {
        type: String,
        required: false,
        default: null
      },
      validations: {
        type: Array,
        required: false,
        default: () => []
      },
      selectClass: {
        type: String,
        required: false,
        default: null
      },
      hiddenLabel: {
        type: Boolean,
        required: false,
        default: false
      },
      inlineLabel: {
        type: Boolean,
        required: false,
        default: false
      },
      labelClass: {
        type: String,
        required: false,
        default: null
      }
    },
    computed: {
      currentValidations() {
        return this.validations.filter(validation => validation.condition)
      }
    }
  }
</script>

<style lang="scss">
  $select__margin: $spacer !default;
  $select__padding: 0 $spacer--medium 0 $spacer--medium !default;
  $select__border: 1px solid $form-elements-border-color !default;
  $select__spacing: 40px !default;
  $select__arrow-color: $gray-dark transparent transparent transparent;
  $select__border-radius: 20px !default;

  .select {
    margin-bottom: $select__margin;

    &__field {
      position: relative;
      padding: $reset;
      border: $select__border;
      border-radius: $select__border-radius;

      &::after {
        content: "";
        height: 0;
        width: 0;
        border-style: solid;
        border-color: $select__arrow-color;
        border-width: 5px;
        position: absolute;
        right: 11.5px;
        top: 50%;
        margin-top: -2.5px;
        pointer-events: none;
      }
    }

    &__input {
      padding: $select__padding;
      height: $select__spacing;
      line-height: $select__spacing;
      border: none;
      width: 100%;
      -moz-appearance: none;
      -webkit-appearance: none;
      border-radius: 0;
      background-color: transparent;

      &:hover,
      &:focus {
        outline: none;
      }
    }
  }
</style>
