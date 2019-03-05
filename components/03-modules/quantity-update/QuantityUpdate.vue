<template>
  <div class="quantity-update">
    <label
      class="quantity-update__label"
      :for="inputId"
    >
      {{ label }}
    </label>
    <div class="quantity-update__qty">
      <alpaca-button
        icon="minus"
        :icon-title="decrementIconTitle"
        :aria-label="decrementAriaLabel"
        :class="[
          'button--icon quantity-update__button quantity-update__button--minus',
          {'quantity-update__button--disabled': currentValue === 0},
          decrementButtonClass
        ]"
        icon-class="button__icon quantity-update__icon"
        @click="currentValue--"
      />
      <alpaca-input
        :id="inputId"
        v-model="currentValue"
        :label="inputAriaLabel"
        type="number"
        :min="inputMin"
        :max="inputMax"
        :name="inputName"
        :placeholder="inputPlaceholder"
        :class="inputClass"
        :input-default-class="false"
        input-class="quantity-update__input"
        autocomplete="off"
        hidden-label
      />
      <alpaca-button
        icon="plus"
        :icon-title="incrementIconTitle"
        :aria-label="incrementAriaLabel"
        :class="[
          'button--icon quantity-update__button quantity-update__button--plus',
          incrementButtonClass
        ]"
        icon-class="button__icon quantity-update__icon"
        @click="currentValue++"
      />
    </div>
  </div>
</template>

<script>
  import AlpacaInput from '../../02-elements/form/input/Input.vue'
  import AlpacaButton from '../../02-elements/button/Button.vue'

  export default {
    components: {
      AlpacaInput,
      AlpacaButton
    },
    props: {
      label: {
        type: String,
        default: 'Quantity'
      },
      inputClass: {
        type: String,
        default: ''
      },
      inputId: {
        type: String,
        default: 'qty'
      },
      inputName: {
        type: String,
        default: 'qty'
      },
      inputMin: {
        type: Number,
        default: 1
      },
      inputMax: {
        type: Number,
        default: null
      },
      inputPlaceholder: {
        type: String,
        default: '0'
      },
      inputAriaLabel: {
        type: String,
        default: 'Change the quantity'
      },
      decrementButtonClass: {
        type: String,
        default: ''
      },
      decrementAriaLabel: {
        type: String,
        default: 'Decrease the quantity'
      },
      decrementIconTitle: {
        type: String,
        default: 'Minus mark'
      },
      incrementButtonClass: {
        type: String,
        default: ''
      },
      incrementAriaLabel: {
        type: String,
        default: 'Increase the quantity'
      },
      incrementIconTitle: {
        type: String,
        default: 'Plus mark'
      }
    },
    data() {
      return {
        currentValue: 1
      }
    }
  }
</script>

<style lang="scss">
  // Label
  $quantity-update__label-font-size                  : $font-size-base !default;
  $quantity-update__label-font-weight                : $font-weight-bold !default;

  // Input
  $quantity-update__input-border                     : 1px solid $gray-dark !default;
  $quantity-update__input-width                      : 48px !default;
  $quantity-update__input-color                      : $gray-dark !default;

  // Button
  $quantity-update__button-background                : $white !default;
  $quantity-update__button-border                    : 1px solid $gray-dark !default;
  $quantity-update__button-background-hover--disabled: $white !default;
  $quantity-update__button-fill-hover--disabled      : $gray !default;

  // Icon
  $quantity-updater__icon-fill                       : $gray-dark !default;
  $quantity-updater__icon-spacing                    : 18px !default;

  // Error
  $quantity-updater__error-margin                    : 0 0 0 $spacer !default;
  $quantity-updater__error-max-width                 : 120px !default;

  .quantity-update {
    &__label {
      font-size: $quantity-update__label-font-size;
      font-weight: $quantity-update__label-font-weight;
    }

    &__qty {
      display: flex;
    }

    &__input {
      border-top: $quantity-update__input-border;
      border-bottom: $quantity-update__input-border;
      border-left: 0;
      border-right: 0;
      border-radius: 0;
      width: $quantity-update__input-width;
      height: $quantity-update__input-width;
      color: $quantity-update__input-color;
      text-align: center;
      appearance: none;

      &:focus {
        outline: none;
      }
    }

    &__button {
      border: $quantity-update__button-border;
      background: $quantity-update__button-background;
      margin: 0;

      &--plus {
        border-radius: 0 100% 100% 0;
        border-left: 0;
      }

      &--minus {
        border-radius: 100% 0 0 100%;
        border-right: 0;
      }

      &--disabled {
        pointer-events: none;

        &:hover,
        &:focus {
          background: $quantity-update__button-background-hover--disabled;

          .quantity-update__icon {
            fill: $quantity-update__button-fill-hover--disabled;
          }
        }

        .quantity-update__icon {
          fill: $quantity-update__button-fill-hover--disabled;
        }
      }
    }

    &__icon {
      fill: $quantity-updater__icon-fill;
      width: $quantity-updater__icon-spacing;
      height: $quantity-updater__icon-spacing;
    }

    // Disable spin buttons in number input type
    input[type="number"]::-webkit-outer-spin-button, // sass-lint:disable-line no-vendor-prefixes
    input[type="number"]::-webkit-inner-spin-button { // sass-lint:disable-line no-vendor-prefixes
      -webkit-appearance: none; // sass-lint:disable-line no-vendor-prefixes
      margin: 0;
    }

    input[type="number"] { // sass-lint:disable-line no-vendor-prefixes
      -moz-appearance: textfield; // sass-lint:disable-line no-vendor-prefixes
    }
  }
</style>
