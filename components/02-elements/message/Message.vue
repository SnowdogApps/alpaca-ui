<template>
  <div
    :class="[
      'message',
      messageClass
    ]"
    role="alert"
  >
    <slot />
    <alpaca-icon
      :icon="getIcon"
      class="message__icon"
    />
  </div>
</template>

<script>
  import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'

  export default {
    components: { AlpacaIcon },
    props: {
      type: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    messageClass() {
      switch (this.type) {
        case 'success':
          return 'message--success'

          case 'error':
            return 'message--error'

          default:
            return 'message--warning'
        }
      },
      getIcon() {
        if (this.icon) return this.icon

        switch (this.type) {
          case 'success':
            return 'check'

          case 'error':
            return 'error'

          default:
            return 'warning'
        }
      }
    }
  }
</script>

<style lang="scss">
  $message__margin-top         : $spacer--medium !default;
  $message__padding            : $spacer $spacer--extra-large !default;
  $message__margin-base        : $spacer--medium 0 0 0 !default;
  $message__font-size          : $font-size-small !default;
  $message__transition         : $transition-base !default;
  $message__background         : rgba($blue, 0.05) !default;
  $message__background--success: rgba($color-primary, 0.05) !default;
  $message__background--error  : rgba($red, 0.05) !default;
  $message__color              : $blue !default;
  $message__color--success     : $gray !default;
  $message__color--error       : $red !default;
  $message__border             : 1px solid $blue !default;
  $message__border--success    : 1px solid $color-primary !default;
  $message__border--error      : 1px solid $red !default;
  $message__border-radius      : 24px !default;
  $message__icon-spacer        : $spacer--medium !default;
  $message__icon-fill          : $blue !default;
  $message__icon-fill--success : $color-primary !default;
  $message__icon-fill--error   : $red !default;

  .message {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    padding: $message__padding;
    margin: $message__margin-base;
    background-color: $message__background;
    border: $message__border;
    border-radius: $message__border-radius;
    color: $message__color;
    font-size: $message__font-size;
    transition: $message__transition;

    &:first-child {
      margin-top: $message__margin-top;
    }

    &__icon {
      position: absolute;
      left: $message__icon-spacer;
      top: 0;
      bottom: 0;
      height: $message__icon-spacer;
      width: $message__icon-spacer;
      margin: auto;
      fill: $message__icon-fill;

      .message--success & {
        fill: $message__icon-fill--success;
      }

      .message--error & {
        fill: $message__icon-fill--error;
      }
    }

    &--success {
      background-color: $message__background--success;
      border: $message__border--success;
      color: $message__color--success;
    }

    &--error {
      background-color: $message__background--error;
      border: $message__border--error;
      color: $message__color--error;
    }
  }
</style>
