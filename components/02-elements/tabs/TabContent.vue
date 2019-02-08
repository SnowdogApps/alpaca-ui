<template>
  <div
    v-if="activeTab === tabId"
    :id="tabId"
    :data-content="tabId"
    :aria-labelledby="titleId"
    :aria-hidden="activeTab === tabId"
    :class="[
      'tab__content',
      { 'tab__content--active': activeTab === tabId }
    ]"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      tabId: {
        type: String,
        required: true
      },
      titleId: {
        type: String,
        required: true
      },
      activeTab: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  $tab__border-width          : 1px !default;
  $tab__content-padding       : $spacer--medium !default;
  $tab__content-padding--large: $spacer--large $spacer--extra-large !default;
  $tab__title-border          : $tab__border-width solid $gray-light !default;

  .tab {
    &__content {
      position: relative;
      display: none;
      width: 100%;
      padding: $tab__content-padding;
      z-index: -1;
      opacity: 0;
      overflow: hidden;

      @include mq($screen-l) {
        padding: $tab__content-padding--large;
        flex-basis: 100%;
        z-index: 1;
      }

      &--active {
        display: block;
        opacity: 1;
        z-index: 1;

        &:nth-last-child(1) {
          border-bottom: $tab__title-border;

          @include mq($screen-l) {
            border-bottom: none;
          }
        }
      }
    }
  }
</style>
