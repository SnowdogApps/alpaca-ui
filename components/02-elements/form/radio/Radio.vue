<template>
  <div class="radio">
    <fieldset
      :aria-label="legendId"
      class="radio"
    >
      <legend
        :id="legendId"
        class="radio__legend"
      >
        {{ legend }}
      </legend>
      <div
        v-for="option in options"
        :key="option.id"
        class="radio__handler"
      >
        <input
          :id="option.id"
          :name="name"
          :value="option.value"
          :checked="checkedValue === option.value"
          type="radio"
          class="radio__field"
          @change="$emit('change', $event.target.value)"
        >
        <label
          :for="option.id"
          class="radio__label"
        >
          <span class="radio__icon" />
          {{ option.label }}
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'checkedValue',
      event: 'change'
    },
    props: {
      checkedValue: {
        type: [String, Object, Number, Boolean],
        default: null,
      },
      legendId: {
        type: String,
        required: true
      },
      legend: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  $radio__size              : $spacer--medium !default;
  $radio__dot-size          : 6px !default;
  $radio__label-font-size   : $font-size-small !default;
  $radio__label-color       : $black !default;
  $radio__label-color-active: $color-primary !default;
  $radio__icon-border       : 1px solid $black !default;
  $radio__icon-background   : $color-primary !default;
  $radio__icon-transition   : $transition-base !default;

  .radio {
    position: relative;
    margin-bottom: $spacer--medium;

    &__fieldset {
      border: $reset;
      padding: $reset;
      margin: $reset;
    }

    &__legend {
      padding-bottom: $spacer--medium;
    }

    &__handler {
      position: relative;
    }

    &__field {
      position: absolute;
      left: 0;
      height: $radio__size;
      width: $radio__size;
      opacity: 0;
      z-index: -1;

      &:checked + .radio__label {
        color: $radio__label-color-active;

        .radio__icon {
          &::before {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }

    &__label {
      position: relative;
      height: $radio__size;
      width: 100%;
      vertical-align: top;
      line-height: $radio__size;
      cursor: pointer;
      font-size: $radio__label-font-size;
      color: $radio__label-color;
    }

    &__icon {
      position: relative;
      display: inline-block;
      border: $radio__icon-border;
      border-radius: $radio__size;
      width: $radio__size;
      height: $radio__size;
      margin-right: $spacer;
      vertical-align: top;

      &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        width: $radio__dot-size;
        height: $radio__dot-size;
        border-radius: $radio__dot-size;
        margin: auto;
        opacity: 0;
        transform: scale(0);
        background-color: $radio__icon-background;
        transition: $radio__icon-transition;
      }
    }
  }
</style>
