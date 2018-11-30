<template>
  <div class="swatch">

    <alpaca-heading
      v-if="heading"
      custom-class="swatch__title"
    >
      {{ heading }}
    </alpaca-heading>

    <div
      class="swatch__wrapper"
    >
      <div
        v-for="option in options"
        :key="option.id"
        class="swatch__option-container"
      >
        <div
          class="swatch__option"
        >
          {{ option.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
      heading: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  $swatch__transition                  : $transition-base !default;

  $swatch__title-margin-bottom         : $spacer !default;
  $swatch__title-font-size             : $font-size-base !default;

  $swatch__option-size                 : 40px !default;
  $swatch__option-size--image          : 48px !default;
  $swatch__option-margin               : $spacer !default;
  $swatch__option-background           : $white !default;
  $swatch__option-color                : $gray-dark !default;
  $swatch__option-border               : 4px solid $white !default;
  $swatch__option-border--white        : 1px solid $gray-lighter !default;
  $swatch__option-border-color--active : $color-primary !default;

  .swatch {
    display: flex;
    flex-wrap: wrap;

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    &__option-container {
      box-sizing: border-box;
      border: $swatch__option-border;
      margin-right: $swatch__option-margin;
      transition: $swatch__transition;
      cursor: pointer;

      &:hover,
      &:focus,
      &.selected {
        border-color: $swatch__option-border-color--active;
        .swatch__option--white {
          border: 0;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }

    &__tooltip,
    &__selected-option {
      display: none;
    }

    &__title {
      flex: 0 0 100%;
      margin-bottom: $swatch__title-margin-bottom;
      font-size: $swatch__title-font-size;
    }

    &__option {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: $swatch__option-size;
      min-height: $swatch__option-size;
      background-color: $swatch__option-background;
      color: $swatch__option-color;

      &--image {
        min-height: $swatch__option-size--image;
        background-size: cover;
        background-position: top center;
      }

      &--white {
        border: $swatch__option-border--white;
      }
    }
  }
</style>
