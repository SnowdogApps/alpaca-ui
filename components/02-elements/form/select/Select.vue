<template>
  <div class="select">
    <slot />
    <div class="select__field">
      <select
        :name="name"
        class="select__input"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @change="$emit('input', $event.target.value)"
      >
        <option v-if="!selected" />
        <option
          v-for="(option, key) in options"
          :key="key"
          :value="option.value"
          v-bind="{selected: option.value === selected}"
        >
          {{ option.text }}
        </option>
      </select>
    </div>

    <template if="validations">
      <span
        v-for="(validation, index) in showValidations"
        :key="index"
        class="block cl-error h6"
      >
        {{ validation.text }}
      </span>
    </template>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    selected: {
      type: String,
      required: false,
      default: ''
    },
    validations: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  computed: {
    showValidations() {
      return this.validations.filter((validation) => validation.condition)
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
    padding: 0;
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
