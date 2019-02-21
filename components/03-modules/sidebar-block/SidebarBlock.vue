<template>
  <div class="sidebar-block">
    <div class="sidebar-block__heading">
      <alpaca-heading
        class="sidebar-block__title"
        level="2"
      >
        {{ heading }}
      </alpaca-heading>
      <span class="sidebar-block__counter">
        {{ productsCount }} items
      </span>
    </div>
    <alpaca-divider class="sidebar-block__divider" />
    <ol class="list sidebar-block__list">
      <li   
        v-for="product in products"
        :key="product.id"
        class="sidebar-block__item"
      >
        <alpaca-button
          class="sidebar-block__remove"
          :default-class="false"
          icon="close"
          icon-class="sidebar-block__remove-icon"
          :default-icon-class="false"
          aria-label="Remove product from compare"
          @click="removeFromCompare"
        />
        <alpaca-link
          class="sidebar-block__link"
          :href="product.link"
        >
          {{ product.name }}
        </alpaca-link>
      </li>
    </ol>
    <div>
      <router-link
        class="button button--link sidebar-block__action"
        :to="comparePageUrl"
      >
        {{ compareButton }}
      </router-link>
      <alpaca-button
        class="sidebar-block__action"
        @click="clearCompareList"
      >
        {{ clearAllButton }}
      </alpaca-button>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../01-globals/heading/Heading'
  import AlpacaLink from '../../01-globals/link/Link'
  import AlpacaButton from '../../02-elements/button/Button.vue'
  import AlpacaDivider from '../../02-elements/divider/Divider'

  export default {
    components: {
      AlpacaHeading,
      AlpacaButton,
      AlpacaDivider,
      AlpacaLink
    },
    props: {
      heading: {
        type: String,
        required: false,
        default: 'Compare Products'
      },
      compareButton: {
        type: String,
        required: false,
        default: 'Compare'
      },
      clearAllButton: {
        type: String,
        required: false,
        default: 'Clear All'
      },
      products: {
        type: Array,
        required: true
      },
      comparePageUrl: {
        type: String,
        requited: false,
        default: 'compare'
      }
    },
    computed: {
      productsCount() {
        return this.products.length
      }
    },
    methods: {
      removeFromCompare() {
        this.$emit('removeFromCompare')
      },
      clearCompareList() {
        this.$emit('clearCompareList')
      },
    }
  }
</script>

<style lang="scss">
  $sidebar-block__padding                    : 0 0 $spacer--large !default;
  $sidebar-block__min-height                 : 150px !default;
  $sidebar-block__min-height--loaded         : auto !default;
  $sidebar-block__heading-margin-bottom      : $spacer--medium !default;
  $sidebar-block__title-font-weight          : $font-weight-normal !default;
  $sidebar-block__title-margin-bottom        : 0 !default;
  $sidebar-block__divider-margin-bottom      : $spacer--medium !default;
  $sidebar-block__list-margin-bottom         : $spacer !default;
  $sidebar-block__item-margin-bottom         : $spacer !default;
  $sidebar-block__index-margin               : 0 $spacer !default;
  $sidebar-block__index-font-weight          : $font-weight-bold !default;
  $sidebar-block__index-min-width            : $spacer--medium !default;
  $sidebar-block__remove-padding             : $spacer--medium !default;
  $sidebar-block__remove-margin-right        : $spacer !default;
  $sidebar-block__remove-background          : transparent !default;
  $sidebar-block__remove-icon-padding        : 0 !default;
  $sidebar-block__remove-icon-transition     : $transition-base !default;
  $sidebar-block__icon-fill                  : $red !default;
  $sidebar-block__icon-fill--active          : $green !default;
  $sidebar-block__icon-size                  : 16px !default;
  $sidebar-block__action-margin-left         : $spacer !default;
  $sidebar-block__wishlist-item-margin-bottom: $spacer--large !default;
  $sidebar-block__product-image-max-width    : 72px !default;
  $sidebar-block__product-info-margin-left   : $spacer--medium !default;
  $sidebar-block__checkbox-margin            : $spacer $spacer $spacer--medium !default;
  $sidebar-block__price-margin               : 0 !default;
  $sidebar-block__price-font-weight          : $font-weight-bold !default;
  $sidebar-block__message-margin             : 0 !default;

  .sidebar-block {
    position: relative;
    padding: $sidebar-block__padding;
    min-height: $sidebar-block__min-height;

    &--hidden {
      display: none;
    }

    &--loaded {
      min-height: $sidebar-block__min-height--loaded;
    }

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: $sidebar-block__heading-margin-bottom;
    }

    &__title {
      font-weight: $sidebar-block__title-font-weight;
      margin-bottom: $sidebar-block__title-margin-bottom;
    }

    &__divider {
      margin-bottom: $sidebar-block__divider-margin-bottom;
    }

    &__list {
      margin-bottom: $sidebar-block__list-margin-bottom;
      counter-reset: sidebarIndex;

      &--hidden {
        display: none;
      }
    }

    &__item {
      display: flex;
      align-items: center;

      &::before {
        content: counter(sidebarIndex) ".";
        counter-increment: sidebarIndex;
        margin: $sidebar-block__index-margin;
        min-width: $sidebar-block__index-min-width;
        font-weight: $sidebar-block__index-font-weight;
      }

      &--wishlist {
        margin-bottom: $sidebar-block__item-margin-bottom;
      }
    }

    &__remove {
      padding: $sidebar-block__remove-padding;
      margin-right: $sidebar-block__remove-margin-right;
      background-color: $sidebar-block__remove-background;

      &:hover,
      &:focus {
        background-color: $sidebar-block__remove-background;

        .sidebar-block__remove-icon {
          fill: $sidebar-block__icon-fill--active;
        }
      }
    }

    &__remove-icon {
      padding: $sidebar-block__remove-icon-padding;
      width: $sidebar-block__icon-size;
      height: $sidebar-block__icon-size;
      transition: $sidebar-block__remove-icon-transition;
      fill: $sidebar-block__icon-fill;
    }

    &__action {
      &:not(:first-child) {
        margin-left: $sidebar-block__action-margin-left;
      }
    }

    &__wishlist-item {
      margin-bottom: $sidebar-block__wishlist-item-margin-bottom;
    }

    &__product-image {
      width: $sidebar-block__product-image-max-width;
    }

    &__product-info {
      margin-left: $sidebar-block__product-info-margin-left;
    }

    &__checkbox {
      margin: $sidebar-block__checkbox-margin;
    }

    &__hidden {
      display: none;
    }

    &__message {
      margin: $sidebar-block__message-margin;
    }

    .price-as-configured {
      margin: $sidebar-block__price-margin;
      font-weight: $sidebar-block__price-font-weight;
    }
  }
</style>
