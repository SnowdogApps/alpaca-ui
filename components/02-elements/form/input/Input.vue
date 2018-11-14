<template>
  <div class="input">
    <alpaca-label
      :for="id"
      :hidden="hiddenLabel"
      :inline="inlineLabel"
      :custom-class="labelClass"
    >
      {{ label }}
    </alpaca-label>

    <input
      :class="['input__field', inputClass]"
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
import AlpacaLabel from '../../../01-globals/typography/Label.vue'

export default {
  components: {
    AlpacaLabel
  },
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    hiddenLabel: {
      type: Boolean,
      default: false
    },
    inlineLabel: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: String,
      default: null
    },
    inputClass: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
$input__field-padding: 0 $spacer--medium !default;
$input__field-padding--textarea: $spacer--medium !default;
$input__field-spacing: 40px !default;
$input__field-border: 1px solid $form-elements-border-color !default;
$input__field-border-radius: $form-elements-radius !default;
$input__field-border-radius--textarea: $form-elements-radius--small !default;
$input__field-line-height--textarea: $font-line-height !default;
$input__margin-bottom: $spacer--medium !default;
$input__placeholder-color: $gray !default;
$input__label-margin-right: $spacer--medium !default;
$input__min-height--textarea: 100px !default;

.input {
  margin-bottom: $input__margin-bottom;

  &--inline {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .input__label {
      margin-right: $input__label-margin-right;
    }
  }

  &__field {
    width: 100%;
    height: $input__field-spacing;
    line-height: $input__field-spacing;
    padding: $input__field-padding;
    border: $input__field-border;
    border-radius: $input__field-border-radius;

    &[type='search'] {
      -webkit-appearance: textfield;

      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
    }

    &::placeholder {
      color: $input__placeholder-color;
    }

    &--textarea {
      display: block;
      border-radius: $input__field-border-radius--textarea;
      min-width: 100%;
      max-width: 100%;
      min-height: $input__min-height--textarea;
      padding: $input__field-padding--textarea;
      line-height: $input__field-line-height--textarea;
    }
  }
}
</style>
