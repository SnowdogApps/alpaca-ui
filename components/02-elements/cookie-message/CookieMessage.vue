<template>
  <div
    :class="['cookie-message', isOpen && 'cookie-message--open']"
    :data-type="dataType"
    :aria-label="ariaLabel"
    tabindex="0"
  >
    <div class="cookie-message__container">
      <span
        class="cookie-message__text"
        v-html="text"
      />
      <button
        v-if="closeBar || closeIcon"
        class="cookie-message__close"
        type="button"
        :aria-label="closeAriaLabel"
        @click="closeBar"
      >
        {{ closeLabel }}
        <icon
          v-if="closeIcon"
          :icon="closeIcon"
          class="cookie-message__close-icon"
        />
      </button>
    </div>
  </div>
</template>

<script>
import Icon from '../../01-globals/icon/Icon.vue'

export default {
  components: { Icon },
  props: {
    ariaLabel: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    dataType: {
      type: String,
      required: true
    },
    closeIcon: {
      type: String,
      required: false,
      default: null
    },
    closeLabel: {
      type: String,
      required: false,
      default: null
    },
    closeAriaLabel: {
      type: String,
      required: false,
      default: null
    }
  },
  data: () => {
    return {
      isOpen: false
    }
  },
  mounted() {
    if (localStorage.getItem(this.dataType) !== 'closed') {
      this.isOpen = true
    }
  },
  methods: {
    closeBar() {
      const focusable = document.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]');

      this.isOpen = false
      localStorage.setItem(this.dataType, 'closed');
      // after closing message box move focus on first focusable element on the page
      if (focusable.length) {
        let firstFocusable = [...focusable].find(el => el.offsetParent !== null)
        firstFocusable.focus();
      }
    }
  }
}
</script>

<style lang="scss">
$cookie-message__width                  : 100% !default;
$cookie-message__background-color       : $gray-lightest !default;
$cookie-message__font-size              : $font-size-small !default;
$cookie-message__font-family            : $font-family-base !default;
$cookie-message__text-color             : $gray !default;
$cookie-message__text-padding           : $spacer--medium $spacer--medium 0 $spacer--medium !default;
$cookie-message__text-padding--small    : $spacer--medium $spacer $spacer--medium $spacer--medium !default;
$cookie-message__link-color             : $blue !default;
$cookie-message__close-color            : $cookie-message__text-color !default;
$cookie-message__close-size             : 48px !default;
$cookie-message__close-font-weight      : $font-weight-bold !default;
$cookie-message__close-padding          : 0 $spacer--medium 0 0 !default;
$cookie-message__text-padding--small    : $spacer--medium $spacer $spacer--medium $spacer--medium !default;
$cookie-message__close-icon-size        : 14px !default;
$cookie-message__close-icon-margin-left : $spacer !default;

.cookie-message {
  display: none;
  align-items: stretch;
  width: $cookie-message__width;
  background-color: $cookie-message__background-color;
  box-sizing: border-box;
  font-size: $cookie-message__font-size;
  font-family: $cookie-message__font-family;

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    min-width: 100%;
    text-align: center;

    @include mq($screen-s) {
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  &__text {
    flex-basis: 100%;
    color: $cookie-message__text-color;
    text-align: justify;
    padding: $cookie-message__text-padding;
    font-size: inherit;
    font-family: inherit;

    @include mq($screen-s) {
      text-align: left;
      flex-basis: auto;
      padding: $cookie-message__text-padding--small;
    }
  }

  &__link {
    color: $cookie-message__link-color;
  }

  &__close {
    display: flex;
    align-items: center;
    flex-basis: auto;
    flex-shrink: 0;
    min-width: $cookie_message__close-size;
    height: $cookie-message__close-size;
    padding: $cookie-message__close-padding;
    background: none;
    border: none;
    color: $cookie-message__close-color;
    cursor: pointer;
    font-weight: $cookie-message__close-font-weight;
    font-family: inherit;
    font-size: inherit;

    &:active,
    &:hover {
      background: none;
      color: $cookie-message__close-color;
    }

    @include mq($screen-s) {
      padding: $cookie-message__close-padding--small;
    }
  }

  &__close-icon {
    fill: $cookie-message__close-color;
    width: $cookie-message__close-icon-size;
    height: $cookie-message__close-icon-size;
    margin-left: $cookie-message__close-icon-margin-left;
  }

  &--open {
    display: flex;
  }
}

.cookie-message__text > a {
  @extend .cookie-message__link;
}
</style>
