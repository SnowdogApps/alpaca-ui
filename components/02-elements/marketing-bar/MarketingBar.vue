<template>
  <div
    v-if="isBarVisible"
    class="marketing-bar"
    :data-type="dataType"
  >
    <div class="container marketing-bar__container">
      <div class="marketing-bar__text">
        <slot />
      </div>
      <alpaca-button
        class="marketing-bar__close"
        icon="close"
        icon-class="marketing-bar__close-icon"
        @click="onButtonClose"
      />
    </div>
  </div>
</template>

<script>
  import AlpacaButton from '../button/Button.vue';

  export default {
    components: {
      AlpacaButton
    },
    props: {
      dataType: {
        type: String,
        default: 'marketing-bar'
      }
    },
    data() {
      return {
        isBarVisible: false
      }
    },
    mounted() {
      // Display message if it wasn't closed before
      if (localStorage.getItem(this.dataType) !== 'closed') {
        this.isBarVisible = true;
      }
    },
    methods: {
      onButtonClose() {
        localStorage.setItem(this.dataType, 'closed');
        this.isBarVisible = false;
      }
    }
  }
</script>

<style lang="scss">
  $marketing-bar__padding: $spacer !default;
  $marketing-bar__background-color: $color-primary !default;

  $marketing-bar__text-padding: 0 32px 0 0 !default;
  $marketing-bar__text-padding--medium: 0 !default;
  $marketing-bar__text-font-size: $font-size-base !default;
  $marketing-bar__text-font-color: $gray-darker !default;
  $marketing-bar__text-font-weight: $font-weight-bold !default;

  $marketing-bar__button-size: 32px !default;
  $marketing-bar__button-icon-color: $gray-darker !default;
  $marketing-bar__button-icon-size: 18px !default;
  $marketing-bar__button-icon-padding: 2px !default;

  .marketing-bar {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $marketing-bar__padding;
    background-color: $marketing-bar__background-color;

    @include mq($screen-m) {
      text-align: center;
    }

    &__container {
      position: relative;
      width: 100%;
    }

    &__text {
      padding: $marketing-bar__text-padding;
      font-size: $marketing-bar__text-font-size;
      font-weight: $marketing-bar__text-font-weight;
      color: $marketing-bar__text-font-color;

      @include mq($screen-m) {
        padding: $marketing-bar__text-padding--medium;
      }
    }

    &__close {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      height: $marketing-bar__button-size;
      min-width: $marketing-bar__button-size;
      margin: auto;
      border: none;
      background-color: transparent;

      &:focus,
      &:hover {
        background-color: transparent;
      }

      &-icon {
        width: $marketing-bar__button-icon-size;
        height: $marketing-bar__button-icon-size;
        padding: $marketing-bar__button-icon-padding;
        fill: $marketing-bar__button-icon-color;
      }
    }
  }
</style>
