<template>
  <div class="quicksearch__wrapper">
    <div class="quicksearch quicksearch--visible">
      <alpaca-button
        class="quicksearch__close-button"
        icon-class="quicksearch__close-icon"
        aria-label="Close quicksearch"
        icon="close"
      />
      <alpaca-paragraph class="quicksearch__results">
        {{ resultText }}
        <span class="quicksearch__typed">
          {{ resultTyped }}
        </span>
      </alpaca-paragraph>
      <div class="quicksearch__content">
        <alpaca-paragraph
          v-if="isNoResult"
          class="quicksearch__empty"
        >
          {{ noResultText }}
        </alpaca-paragraph>
        <alpaca-list class="quicksearch__list quicksearch__list--column">
          <alpaca-list-item
            v-for="product in products"
            :key="product.id"
            :element="product"
            class="quicksearch__product"
          >
            <alpaca-link
              :href="product.href"
              class="quicksearch__product-image-wrapper"
            >
              <alpaca-image
                :alt="product.alt"
                :src="product.src"
                class="quicksearch__product-image"
              />
            </alpaca-link>
            <div class="quicksearch__product-details">
              <alpaca-link
                :href="product.href"
                class="quicksearch__link"
                inverted
              >
                <alpaca-heading
                  :level="3"
                  class="quicksearch__name quicksearch__name--thin"
                >
                  {{ product.text }}
                </alpaca-heading>
              </alpaca-link>
              <alpaca-price
                :special-price="product.specialPrice"
                :old-price="product.oldPrice"
              />
            </div>
          </alpaca-list-item>
        </alpaca-list>
        <div class="quicksearch__categories-column">
          <alpaca-list class="quicksearch__list">
            <alpaca-list-item
              v-for="category in categories"
              :key="category.id"
              class="quicksearch__list"
              :element="category"
            >
              <alpaca-link
                class="quicksearch__link"
                :href="category.href"
                inverted
              >
                <alpaca-heading
                  :level="3"
                  class="quicksearch__name"
                >
                  {{ category.title }}
                </alpaca-heading>
              </alpaca-link>
              {{ showItems(category.items) }}
            </alpaca-list-item>
          </alpaca-list>
          <alpaca-list class="quicksearch__list quicksearch__list--below">
            <alpaca-list-item
              v-for="manufacturer in manufacturers"
              :key="manufacturer.id"
              class="quicksearch__manufacturer"
              :element="manufacturer"
            >
              <alpaca-link
                class="quicksearch__link"
                :href="manufacturer.href"
                inverted
              >
                <alpaca-heading
                  :level="3"
                  class="quicksearch__name"
                >
                  {{ manufacturer.title }}
                </alpaca-heading>
              </alpaca-link>
              {{ showItems(manufacturer.items) }}
            </alpaca-list-item>
          </alpaca-list>
        </div>
      </div>
      <alpaca-button
        class="quicksearch__more-button"
        @click="seeAll"
      >
        {{ 'See All' }}
      </alpaca-button>
    </div>
  </div>
</template>

<script>
  import AlpacaParagraph from '../../01-globals/paragraph/Paragraph.vue'
  import AlpacaLink from '../../01-globals/link/Link.vue'
  import AlpacaHeading from '../../01-globals/heading/Heading.vue'
  import AlpacaImage from '../../02-elements/image/Image.vue'
  import AlpacaButton from '../../02-elements/button/Button.vue'
  import AlpacaPrice from '../../02-elements/price/Price.vue'
  import AlpacaList from '../../02-elements/list/List.vue'
  import AlpacaListItem from '../../02-elements/list/ListItem.vue'

  export default {
    components: {
      AlpacaParagraph,
      AlpacaLink,
      AlpacaHeading,
      AlpacaImage,
      AlpacaButton,
      AlpacaPrice,
      AlpacaList,
      AlpacaListItem
    },
    props: {
      resultText: {
        type: String,
        required: true
      },
      resultTyped: {
        type: String,
        required: true
      },
      noResultText: {
        type: String,
        required: true
      },
      products: {
        type: Array,
        required: true
      },
      categories: {
        type: Array,
        required: true
      },
      manufacturers: {
        type: Array,
        required: true
      },
      isNoResult: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      seeAll() {
        this.$emit('seeAll')
      },
      showItems(items) {
        return items + ' item(s)'
      }
    }
  }
</script>

<style lang="scss">
  $quicksearch__top                              : calc(100% - #{$spacer} + 1px) !default;
  $quicksearch__top\@medium                      : calc(100% + 1px) !default;
  $quicksearch__left                             : 0 !default;
  $quicksearch__left\@medium                     : auto !default;
  $quicksearch__right\@medium                    : calc(50% - 375px) !default;
  $quicksearch__left\@large                      : -$spacer--medium !default;
  $quicksearch__width                            : 100% !default;
  $quicksearch__width\@medium                    : 688px !default;
  $quicksearch__padding                          : 0 $spacer !default;
  $quicksearch__padding\@medium                  : 0 $spacer--medium !default;
  $quicksearch__background                       : $white !default;
  $quicksearch__box-shadow                       : 0 4px 6px 0 rgba(57, 50, 67, 0.3) !default;
  $quicksearch__results-padding                  : $spacer--medium 0 !default;
  $quicksearch__results-border                   : 1px solid $gray-light !default;
  $quicksearch__empty-margin                     : $spacer 0 !default;
  $quicksearch__typed-font-weight                : $font-weight-bold !default;
  $quicksearch__close-top                        : 0 !default;
  $quicksearch__close-right                      : 0 !default;
  $quicksearch__close-fill                       : $color-secondary !default;
  $quicksearch__close-background                 : transparent !default;
  $quicksearch__close-border                     : 0 !default;
  $quicksearch__close-size                       : $spacer--medium !default;
  $quicksearch__content-padding                  : $spacer 0 !default;
  $quicksearch__list-padding-top--below          : $spacer--medium !default;
  $quicksearch__category-padding                 : $spacer 0 !default;
  $quicksearch__categories-column-padding        : $spacer 0 0 0 !default;
  $quicksearch__categories-column-padding\@medium: 0 0 0 $spacer--medium !default;
  $quicksearch__product-border                   : 1px solid $gray-light !default;
  $quicksearch__product-border--last             : 0 !default;
  $quicksearch__product-padding                  : $spacer 0 !default;
  $quicksearch__product-image-size               : 72px !default;
  $quicksearch__product-image-margin-right       : $spacer !default;
  $quicksearch__name-padding                     : $spacer 0 !default;
  $quicksearch__name-color                       : inherit !default;
  $quicksearch__name-font-size                   : 16px !default;
  $quicksearch__name-font-weight                 : $font-weight-normal !default;
  $quicksearch__more-button-padding              : $spacer--medium 0 !default;
  $quicksearch__more-button-border-top           : 1px solid $gray-light !default;
  $quicksearch__more-button-text-align           : center !default;
  $quicksearch__more-button-font-weight          : $font-weight-bold !default;

  .quicksearch {
    position: absolute;
    top: $quicksearch__top;
    left: $quicksearch__left;
    display: none;
    padding: $quicksearch__padding;
    width: $quicksearch__width;
    background: $quicksearch__background;
    box-shadow: $quicksearch__box-shadow;

    @include mq($screen-m) {
      top: $quicksearch__top\@medium;
      left: $quicksearch__left\@medium;
      right: $quicksearch__right\@medium;
      padding: $quicksearch__padding\@medium;
      width: $quicksearch__width\@medium;
    }

    @include mq($screen-l) {
      left: $quicksearch__left\@large;
    }

    &--visible {
      display: block;
    }

    &__wrapper {
      position: relative;
    }

    &__results {
      margin: $reset;
      padding: $quicksearch__results-padding;
      border-bottom: $quicksearch__results-border;
    }

    &__empty {
      margin: $quicksearch__empty-margin;
    }

    &__typed {
      font-weight: $quicksearch__typed-font-weight;
    }

    &__close-button {
      position: absolute;
      top: $quicksearch__close-top;
      right: $quicksearch__close-right;
      border: $quicksearch__close-border;
      background-color: $quicksearch__close-background;

      &:hover,
      &:focus {
        border: $quicksearch__close-border;
        background-color: $quicksearch__close-background;
      }
    }

    &__close-icon {
      width: $quicksearch__close-size;
      height: $quicksearch__close-size;
      fill: $quicksearch__close-fill;
    }

    &__content {
      padding: $quicksearch__content-padding;

      @include mq($screen-m) {
        display: flex;
      }
    }

    &__list {
      margin: $reset;
      padding: $reset;
      list-style-type: none;

      &--column {
        flex: 2;
      }

      &--below {
        padding-top: $quicksearch__list-padding-top--below;
      }
    }

    &__categories-column {
      flex: 1;
      padding: $quicksearch__categories-column-padding;

      @include mq($screen-m) {
        padding: $quicksearch__categories-column-padding\@medium;
      }
    }

    &__product {
      display: flex;
      padding: $quicksearch__product-padding;
      border-bottom: $quicksearch__product-border;

      @include mq($screen-m) {
        &:last-child {
          border-bottom: $quicksearch__product-border--last;
        }
      }
    }

    &__product-image-wrapper {
      min-width: $quicksearch__product-image-size;
      min-height: $quicksearch__product-image-size;
      margin-right: $quicksearch__product-image-margin-right;
    }

    &__product-image {
      max-width: $quicksearch__product-image-size;
    }

    &__link {
      text-decoration: none;
    }

    &__name {
      color: $quicksearch__name-color;
      font-size: $quicksearch__name-font-size;

      &--thin {
        margin: $reset;
        padding: $quicksearch__name-padding;
        font-weight: $quicksearch__name-font-weight;
      }
    }

    &__category,
    &__manufacturer {
      padding: $quicksearch__category-padding;
    }

    &__more-button {
      display: block;
      border-radius: 0;
      background: none;
      width: 100%;
      border-top: $quicksearch__more-button-border-top;
      padding: $quicksearch__more-button-padding;
      text-align: $quicksearch__more-button-text-align;
      font-weight: $quicksearch__more-button-font-weight;
      text-decoration: none;

      &:hover,
      &:focus {
        background: none;
        color: $blue;
      }
    }
  }
</style>
