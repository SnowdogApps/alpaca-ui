<template>
  <div :class="['gallery', horizontal ? 'gallery--horizontal' : 'gallery--vertical']">
    <div :class="['gallery__stage', horizontal ? 'gallery__stage--horizontal' : 'gallery__stage--vertical']">
      <div class="gallery__frame">
        <alpaca-badge
          v-if="productLabel"
          :class="productLabel.class"
        >
          {{ productLabel.text }}
        </alpaca-badge>
        <alpaca-image
          :src="imageMain.dataSrc"
          :alt="imageMain.alt"
        />
      </div>
    </div>
    <div :class="['gallery__nav', horizontal ? 'gallery__nav--horizontal' : 'gallery__nav--vertical']">
      <div class="gallery__thumb-arr">
        <alpaca-icon
          icon="angle-up"
          :class="['gallery__icon-arrow', horizontal ? 'gallery__icon-arrow--horizontal' : 'gallery__icon-arrow--vertical']"
        />
      </div>
      <div
        v-for="(thumb, i) in thumbs"
        :key="i"
        :class="['gallery__thumb', thumb.imageThumb.active && 'gallery__thumb--active']"
      >
        <alpaca-image
          :src="thumb.imageThumb.dataSrc"
          :alt="thumb.imageThumb.alt"
        />
      </div>
      <div class="gallery__thumb-arr">
        <alpaca-icon
          icon="angle-down"
          :class="['gallery__icon-arrow', horizontal ? 'gallery__icon-arrow--horizontal' : 'gallery__icon-arrow--vertical']"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaBadge from '../../02-elements/badge/Badge.vue'
  import AlpacaImage from '../../02-elements/image/Image.vue';
  import AlpacaIcon from '../../01-globals/icon/Icon.vue';

  export default {
    components: {
      AlpacaBadge,
      AlpacaImage,
      AlpacaIcon
    },
    props: {
      imageMain: {
        type: Object,
        required: true
      },
      thumbs: {
        type: Array,
        required: true
      },
      horizontal: {
        type: Boolean,
        default: null
      },
      productLabel: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  $gallery__icon-arrow-color                 : $gray !default;
  $gallery__icon-arrow-width                 : 12px !default;
  $gallery__label-offset-top                 : $spacer--medium !default;
  $gallery__label-offset-left                : $spacer !default;
  $gallery__nav-vertical-margin-right\@medium: $spacer--medium !default;
  $gallery__nav-vertical-margin-right        : 40px !default;
  $gallery__stage-margin-bottom              : $spacer--medium !default;
  $gallery__thumb-arrow-height               : 48px !default;
  $gallery__thumb-arrow-width                : 48px !default;
  $gallery__thumb-border                     : none !default;
  $gallery__thumb-border--active             : 1px solid $green !default;
  $gallery__thumb-spacing                    : $spacer--medium !default;
  $gallery__thumb-height                     : 48px !default;
  $gallery__thumb-height--large              : 80px !default;
  $gallery__thumb-width                      : 48px !default;
  $gallery__thumb-width--large               : 80px !default;


  .gallery {
    display: flex;
    flex-flow: nowrap;
    justify-content: flex-start;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex-direction: column;
    &--vertical {
      @include mq($screen-m) {
        flex-direction: row;
      }
    }
    &__frame {
      position: relative;
    }
    &__stage {
      order: 1;
      margin-bottom: $gallery__stage-margin-bottom;
      &--vertical {
        @include mq($screen-m) {
          order: 2;
          width: calc(100% - (#{$gallery__nav-vertical-margin-right\@medium} + #{$gallery__thumb-width}));
        }
        @include mq($screen-l) {
          width: calc(100% - (#{$gallery__nav-vertical-margin-right} + #{$gallery__thumb-width--large}));
        }
      }
      &--horizontal {
        order: 1;
      }
    }
    &__nav {
      order: 2;
      display: flex;
      align-items: center;
      &--vertical {
        @include mq($screen-m) {
          margin-right: $gallery__nav-vertical-margin-right\@medium;
          flex-direction: column;
          order: 1;
        }
        @include mq($screen-l) {
          margin-right: $gallery__nav-vertical-margin-right;
        }
      }
    }
    &__thumb {
      overflow: hidden;
      margin-right: $gallery__thumb-spacing;
      border: $gallery__thumb-border;
      width: $gallery__thumb-width;
      height: $gallery__thumb-height;
      @include mq($screen-m) {
        margin-bottom: $gallery__thumb-spacing;
        margin-right: 0;
      }
      @include mq($screen-l) {
        width: $gallery__thumb-width--large;
        height: $gallery__thumb-height--large;
      }
      &:hover,
      &:focus {
        cursor: pointer;
      }
      &--active {
        border: $gallery__thumb-border--active;
      }
    }
    &__thumb-arr {
      display: flex !important; // sass-lint:disable-line no-important
      justify-content: center;
      align-items: center;
      width: $gallery__thumb-arrow-width;
      height: $gallery__thumb-arrow-height;
      margin: 0 auto;
      &:hover,
      &:focus {
        cursor: pointer;
      }
    }
    &__icon-arrow {
      width: $gallery__icon-arrow-width;
      transform: rotate(-90deg);
      fill: $gallery__icon-arrow-color;
      &--small {
        width: $gallery__icon-arrow-width;
      }
      &--vertical {
        @include mq($screen-m) {
          transform: none;
        }
      }
    }
    &__product-label {
      position: absolute;
      left: $gallery__label-offset-left;
      top: $gallery__label-offset-top;
    }

    &-placeholder {
      position: relative;

      .loader {
        position: static;
      }
    }
  }
</style>
