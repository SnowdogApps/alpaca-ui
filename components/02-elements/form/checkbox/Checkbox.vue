<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link ? href : null"
    :class="['checkbox', { 'checkbox--link': link }]"
  >
    <input
      v-if="!link"
      :id="id"
      :name="name"
      :value="value"
      :checked="selectedValue === value"
      type="checkbox"
      class="checkbox__field"
      @change="change($event.target.checked)"
    >
    <alpaca-icon
      icon="checked"
      :class="[
        iconClass,
        'checkbox__icon'
      ]"
    />
    <component
      :is="link ? 'span' : 'label'"
      :for="link ? null : id"
      :class="['checkbox__label', labelClass]"
    >
      <slot />
    </component>
  </component>
</template>

<script>
  import AlpacaIcon from '../../../01-globals/icon/Icon.vue'

  export default {
    components: { AlpacaIcon },
    model: {
      prop: 'selectedValue',
      event: 'change'
    },
    props: {
      selectedValue: {
        type: [String, Boolean, Number, Object],
        default: null
      },
      value: {
        type: [String, Boolean, Number, Object],
        default: null
      },
      uncheckedValue: {
        type: [String, Boolean, Number, Object],
        default: null
      },
      id: {
        type: String,
        default: null
      },
      name: {
        type: String,
        default: null
      },
      iconClass: {
        type: String,
        default: null
      },
      labelClass: {
        type: String,
        required: false,
        default: null
      },
      link: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: null
      }
    },
    methods: {
      change(checked) {
        this.$emit('change', checked ? this.value : this.uncheckedValue)
      }
    }
  }
</script>

<style lang="scss">
  $checkbox__margin               : 10px !default;
  $checkbox__line-height          : $font-line-height !default;
  $checkbox__label-padding        : 26px !default;
  $checkbox__spacer               : 18px !default;
  $checkbox__gap                  : 0 !default;
  $checkbox__icon-border-radius   : 2px !default;
  $checkbox__icon-check-mark-color: $white !default;
  $checkbox__icon-fill            : $color-primary !default;
  $checkbox__icon-transition      : $transition-base !default;
  $checkbox__border               : 2px solid $gray !default;
  $checkbox__border--checked      : none !default;
  $checkbox__color--fake          : $gray-dark !default;

  .checkbox {
    position: relative;
    margin-bottom: $checkbox__margin;

    &--link {
      display: block;
      text-decoration: none;
      color: $checkbox__color--fake;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    &--link-checked {
      display: block;

      .checkbox__icon {
        opacity: 1;
      }

      .checkbox__label:before {
        border: $checkbox__border--checked;
      }
    }

    &__field {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;

      &:checked + .checkbox__icon {
        opacity: 1;
      }

      &:checked~.checkbox__label:before {
        border: $checkbox__border--checked;
      }
    }

    &__label {
      display: block;
      padding-left: $checkbox__label-padding;
      line-height: $checkbox__line-height;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        top: $checkbox__gap;
        left: $checkbox__gap;
        width: $checkbox__spacer;
        height: $checkbox__spacer;
        border: $checkbox__border;
        border-radius: $checkbox__icon-border-radius;
      }
    }

    &__icon {
      position: absolute;
      top: $checkbox__gap;
      left: $checkbox__gap;
      width: $checkbox__spacer;
      height: $checkbox__spacer;
      fill: $checkbox__icon-fill;
      background: $checkbox__icon-check-mark-color;
      cursor: pointer;
      opacity: 0;
      transition: $checkbox__icon-transition;
    }
  }
</style>
