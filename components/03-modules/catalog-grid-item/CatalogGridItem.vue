<template>
  <component
    :is="tag"
    class="catalog-grid-item"
  >
    <alpaca-badge
      v-if="badgeText"
      :type="badgeType"
    >
      {{ badgeText }}
    </alpaca-badge>
    <alpaca-link
      :href="href"
      class="catalog-grid-item__link"
    >
      <alpaca-image
        :src="image"
        :alt="alt"
        class="catalog-grid-item__image"
      />
    </alpaca-link>
    <section class="catalog-grid-item__details">
      <h2 class="catalog-grid-item__name">
        <alpaca-link
          :href="href"
          class="catalog-grid-item__link catalog-grid-item__link--name"
        >
          {{ name }}
        </alpaca-link>
      </h2>

      <div class="catalog-grid-item__price">
        <alpaca-price
          :price="price"
          :special-price="specialPrice"
          :old-price="oldPrice"
        />
      </div>
      <!--TODO Add rating component-->
      <div class="catalog-grid-item__options">
        <alpaca-swatch
          v-if="textSwatch"
          :options="textSwatch"
        />
        <alpaca-swatch
          v-if="iconSwatch"
          :options="iconSwatch"
          image
        />
      </div>
      <div class="catalog-grid-item__actions">
        <form class="catalog-grid-item__primary-form">
          <alpaca-button
            secondary
            custom-class="catalog-grid-item__primary-action"
            @click.stop.prevent="addToCart"
          >
            Add to cart
          </alpaca-button>
        </form>
        <div class="catalog-grid-item__secondary-action">
          <alpaca-button
            :icon="wishListIcon"
            :aria-label="wishListAriaLabel"
            @click="addToWishList"
          />
          <alpaca-button
            :icon="compareIcon"
            :aria-label="compareAriaLabel"
            @click="compare"
          />
        </div>
      </div>
    </section>
  </component>
</template>

<script>
  import AlpacaButton from '../../02-elements/button/Button'
  import AlpacaBadge from '../../02-elements/badge/Badge'
  import AlpacaLink from '../../01-globals/link/Link'
  import AlpacaPrice from '../../02-elements/price/Price'
  import AlpacaImage from '../../02-elements/image/Image'
  import AlpacaSwatch from '../../02-elements/swatch/Swatch'

  export default {
    components: {
      AlpacaButton,
      AlpacaBadge,
      AlpacaImage,
      AlpacaPrice,
      AlpacaLink,
      AlpacaSwatch
    },
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      image: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      },
      href: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      price: {
        type: String,
        default: null
      },
      oldPrice: {
        type: String,
        default: null
      },
      specialPrice: {
        type: String,
        default: null
      },
      badgeText: {
        type: String,
        default: null
      },
      badgeType: {
        type: String,
        default: null
      },
      textSwatch: {
        type: Array,
        default: null
      },
      iconSwatch: {
        type: Array,
        default: null
      },
      compareAriaLabel: {
        type: String,
        default: 'Add to compare'
      },
      wishListAriaLabel: {
        type: String,
        default: 'Add to Wish List'
      },
      compareIcon: {
        type: String,
        default: 'compare'
      },
      wishListIcon: {
        type: String,
        default: 'heart'
      }
    },
    methods: {
      addToCart(event) {
        this.$emit('addToCart', event)
      },
      addToWishList(event) {
        this.$emit('addToWishList', event)
      },
      compare(event) {
        this.$emit('compare', event)
      }
    }
  }
</script>

<style lang="scss">
  $catalog-grid-item__base-spacing              : $spacer !default;
  $catalog-grid-item__border                    : 1px solid $gray-lightest !default;
  $catalog-grid-item__font-size                 : $font-size-base !default;
  $catalog-grid-item__font-size\@large          : 16px !default;
  $catalog-grid-item__line-height               : 1.5 !default;
  $catalog-grid-item__font-weight               : $font-weight-bold !default;

  $catalog-grid-item__badge-top-position        : $spacer--medium !default;
  $catalog-grid-item__badge-left-position       : 0 !default;
  $catalog-grid-item__badge-z-index             : 1 !default;
  $catalog-grid-item__badge-padding             : 5px 12px !default;
  $catalog-grid-item__badge-bg-color            : $color-primary !default;
  $catalog-grid-item__badge-font-size           : $font-size-small !default;
  $catalog-grid-item__badge-border-radius       : 0 !default;

  $catalog-grid-item__image-margin              : 0 auto !default;
  $catalog-grid-item__image-width               : auto !default;
  $catalog-grid-item__image-width--lazyload     : 100% !default;
  $catalog-grid-item__image-height              : auto !default;

  $catalog-grid-item__loader-margin-top         : 30% !default;

  $catalog-grid-item__link-overflow             : hidden !default;
  $catalog-grid-item__link-overflow--visible    : visible !default;
  $catalog-grid-item__link-white-space          : nowrap !default;
  $catalog-grid-item__link-white-space--visible : normal !default;
  $catalog-grid-item__link-text-overflow        : ellipsis !default;

  $catalog-grid-item__content-bg-color          : $white !default;
  $catalog-grid-item__content-padding           : $spacer !default;
  $catalog-grid-item__content-width             : 100% !default;
  $catalog-grid-item__content-height            : 67px !default;
  $catalog-grid-item__content-height\@large     : 73px !default;
  $catalog-grid-item__content-translateY        : translateY(-$catalog-grid-item__content-height) !default;
  $catalog-grid-item__content-translateY\@large : translateY(-$catalog-grid-item__content-height\@large) !default;
  $catalog-grid-item__content-translateY--active: translateY(-100%) !default;

  $catalog-grid-item__name-color                : $font-color-base !default;
  $catalog-grid-item__name-font-weight          : $font-weight-normal !default;
  $catalog-grid-item__name-margin-botttom       : $spacer !default;
  $catalog-grid-item__name-padding--bigger      : $spacer--medium 0 !default;

  $catalog-grid-item__rating-margin-bottom      : $spacer !default;
  $catalog-grid-item__price-margin-bottom       : $spacer !default;

  $catalog-grid-item__primary-padding           : 0 $spacer !default;

  $catalog-grid-item__action-size               : 48px !default;
  $catalog-grid-item__action-background         : transparent !default;
  $catalog-grid-item__action-border             : none !default;
  $catalog-grid-item__action-cursor             : pointer !default;
  $catalog-grid-item__action-icon-size          : 18px !default;
  $catalog-grid-item__action-icon-transition    : $transition-base !default;
  $catalog-grid-item__action-icon-fill          : $gray-darker !default;
  $catalog-grid-item__action-icon-fill-hover    : $green !default;

  $catalog-grid-item__IE-margin                 : 0 $spacer $spacer--medium $spacer !default;
  $catalog-grid-item__IE-width                  : calc(50% - #{$spacer--medium} - 1px) !default;
  $catalog-grid-item__IE-width\@medium          : calc(100% / 3 - #{$spacer--medium} - 1px) !default;

  .catalog-grid-item {
    position: relative;
    display: block;
    border: $catalog-grid-item__border;
    padding: $reset;
    overflow: hidden;

    @include mq($screen-m) {
      &:hover,
      &:focus-within {
        .catalog-grid-item__details {
          transform: $catalog-grid-item__content-translateY--active;
        }

        .catalog-grid-item__link--name {
          overflow: $catalog-grid-item__link-overflow--visible;
          white-space: $catalog-grid-item__link-white-space--visible;
        }
      }
    }

    &__badge {
      position: absolute;
      top: $catalog-grid-item__badge-top-position;
      left: $catalog-grid-item__badge-left-position;
      z-index: $catalog-grid-item__badge-z-index;
      border-radius: $catalog-grid-item__badge-border-radius;
      padding: $catalog-grid-item__badge-padding;
      font-size: $catalog-grid-item__badge-font-size;
      background-color: $catalog-grid-item__badge-bg-color;
    }

    &__link {
      display: block;

      &--name {
        color: $catalog-grid-item__name-color;
        overflow: $catalog-grid-item__link-overflow;
        white-space: $catalog-grid-item__link-white-space;
        text-overflow: $catalog-grid-item__link-text-overflow;
      }
    }

    &__image {
      display: block;
      width: 100%;
      max-width: 100%;

      @media all and (min-width: 768px) {
        padding-bottom: $catalog-grid-item__content-height;
      }

      @media all and (min-width: 768px) and (min-width: 1600px) {
        padding-bottom: $reset;
      }
    }

    &__image-wrapper {
      .image {
        margin: $reset;
        width: $catalog-grid-item__image-width;
        height: $catalog-grid-item__image-height;
      }

      .lazyload,
      .lazyloading {
        width: $catalog-grid-item__image-width--lazyload;
      }

      .loader__circle {
        margin-top: $catalog-grid-item__loader-margin-top;
      }
    }

    &__name {
      font-weight: $catalog-grid-item__name-font-weight;
      font-size: $catalog-grid-item__font-size;
      line-height: $catalog-grid-item__line-height;
      margin-bottom: $catalog-grid-item__name-margin-botttom;

      @include mq($screen-xxl) {
        font-size: $reset
      }

      &--bigger {
        padding: $catalog-grid-item__name-padding--bigger;
      }
    }

    &__rating {
      margin-bottom: $catalog-grid-item__rating-margin-bottom;
    }

    &__price {
      margin-bottom: $catalog-grid-item__price-margin-bottom;
      padding: $reset;
      font-size: $catalog-grid-item__font-size;
      line-height: $catalog-grid-item__line-height;
      font-weight: $catalog-grid-item__font-weight;
      white-space: nowrap;

      @include mq($screen-xxl) {
        font-size: $reset;
      }
    }

    &__details {
      padding: $catalog-grid-item__content-padding;
      background: $catalog-grid-item__content-bg-color;
      transition: $transition-base;

      @include mq($screen-m) {
        position: absolute;
        transform: $catalog-grid-item__content-translateY;
        width: $catalog-grid-item__content-width;
        border-top: $catalog-grid-item__border;
      }

      @include mq($screen-xxl) {
        transform: $reset;
      }
    }

    &__options {
      .swatch {
        margin: $catalog-grid-item__base-spacing 0;
      }
    }

    &__actions {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
    }

    &__primary-form {
      margin: $reset;
      @include mq($screen-m) {
        flex: 1;
      }
    }

    &__primary-action {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: $catalog-grid-item__primary-padding;
    }

    &__cart-icon {
      @include mq($screen-m) {
        display: none;
      }
    }

    &__cart-text {
      display: none;
      @include mq($screen-m) {
        display: block;
      }
    }

    &__secondary-action {
      display: flex;
      align-items: center;
      justify-content: center;
      .button {
        height: $catalog-grid-item__action-size;
        width: $catalog-grid-item__action-size;
        padding: $reset;
        background: $catalog-grid-item__action-background;
        border: $catalog-grid-item__action-border;
        cursor: $catalog-grid-item__action-cursor;
        &:hover,
        &:focus {
          .button__icon {
            fill: $catalog-grid-item__action-icon-fill-hover;
          }
        }
        .button__icon {
          width: $catalog-grid-item__action-icon-size;
          height: $catalog-grid-item__action-icon-size;
          transition: $catalog-grid-item__action-icon-transition;
          fill: $catalog-grid-item__action-icon-fill;
        }
      }
    }
  }
</style>
