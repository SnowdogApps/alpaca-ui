<template>
  <div class="cart-list-item">
    <div class="cart-list-item__image">
      <alpaca-image
        :src="productImage.dataSrc"
        :alt="productImage.alt"
      />
    </div>

    <div class="cart-list-item__info">
      <div class="cart-list-item__data">
        <alpaca-link
          :href="href"
          custom-class="link--inverted cart-list-item__name"
        >
          {{ productName }}
        </alpaca-link>

        <div class="cart-list-item__details">
          <div class="cart-list-item__qty">
            <alpaca-input
              :id="id"
              :label="qtyInput.label.text"
              :placeholder="qtyInput.field.placeholder"
              :name="name"
              type="text"
            />
          </div>
          <div class="cart-list-item__price">
            {{ productPrice }}
          </div>
        </div>
        <alpaca-description-list
          :elements="elements"
        />
      </div>
      <div class="cart-list-item__actions">
        <alpaca-button
          tag="a"
          :icon="editIcon.iconId"
          :link="editIcon.attributes.href"
          :aria-label="editIcon.attributes.ariaLabel"
          :custom-class="editIcon.class"
        />
        <alpaca-button
          tag="a"
          :icon="removeIcon.iconId"
          :link="removeIcon.attributes.href"
          :aria-label="removeIcon.attributes.ariaLabel"
          :custom-class="removeIcon.class"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaImage from '../../02-elements/image/Image.vue';
  import AlpacaLink from '../../01-globals/link/Link.vue'
  import AlpacaInput from '../../02-elements/form/input/Input.vue'
  import AlpacaDescriptionList from '../../02-elements/list/DescriptionList.vue'
  import AlpacaButton from '../../02-elements/button/Button.vue'

  export default {
    components: {
      AlpacaImage,
      AlpacaLink,
      AlpacaInput,
      AlpacaDescriptionList,
      AlpacaButton
    },
    props: {
      productImage: {
        type: Object,
        required: true
      },
      href: {
        type: String,
        required: true
      },
      productName: {
        type: String,
        required: true
      },
      productPrice: {
        type: String,
        required: true
      },
      qtyInput: {
        type: Object,
        required: true
      },
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      elements: {
        type: Array,
        required: true
      },
      editIcon: {
        type: Object,
        required: true
      },
      removeIcon: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  $cart-list-item__padding                   : $spacer--medium 0 !default;
  $cart-list-item__border                    : 1px solid $gray-light !default;

  $cart-list-item__image-width               : 160px !default;
  $cart-list-item__image-padding             : 0 $spacer--medium 0 0 !default;

  $cart-list-item__name-weight               : $font-weight-bold !default;
  $cart-list-item__name-width                : 65% !default;
  $cart-list-item__name-padding\@small       : 0 $spacer--medium 0 0 !default;

  $cart-list-item__details-width             : calc(100% - #{$cart-list-item__name-width}) !default;
  $cart-list-item__details-margin            : $spacer--medium 0 !default;
  $cart-list-item__details-margin\@small     : 0 !default;

  $cart-list-item__attributes-margin         : 0 0 $spacer--medium 0 !default;

  $cart-list-item__price-margin              : $spacer 0 0 0 !default;
  $cart-list-item__price-margin\@medium      : 0 !default;

  $cart-list-item__qty-width                 : 100% !default;
  $cart-list-item__qty-width\@small          : auto !default;

  $cart-list-item__qty-wrapper-margin        : 0 !default;

  $cart-list-item__qty-input-width\@small    : 70px !default;

  $cart-list-item__actions-item-margin       : 0 0 0 $spacer !default;

  .cart-list-item {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    padding: $cart-list-item__padding;
    border-bottom: $cart-list-item__border;

    &__image {
      flex: 0 0 $cart-list-item__image-width;
      padding: $cart-list-item__image-padding;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      flex: 1;
    }

    &__data {
      display: flex;
      flex-direction: column;
      @include mq($screen-m) {
        flex-flow: row wrap;
      }
    }

    &__name {
      line-height: $font-line-height;
      text-decoration: none;
      font-weight: $cart-list-item__name-weight;
      @include mq($screen-m) {
        flex: 0 0 $cart-list-item__name-width;
        padding: $cart-list-item__name-padding\@small;
      }

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }

    &__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin: $cart-list-item__details-margin;
      @include mq($screen-m) {
        flex: 0 0 $cart-list-item__details-width;
        margin: $cart-list-item__details-margin\@small;
        flex-direction: row;
        align-items: center;
      }
    }

    &__attributes {
      margin: $cart-list-item__attributes-margin;
    }

    &__price {
      margin: $cart-list-item__price-margin;
      @include mq($screen-m) {
        margin: $cart-list-item__price-margin\@medium;
      }
    }

    &__qty {
      width: $cart-list-item__qty-width;
      @include mq($screen-m) {
        width: $cart-list-item__qty-width\@small;
      }
    }

    &__qty-wrapper {
      margin: $cart-list-item__qty-wrapper-margin;
    }

    &__qty-input {
      @include mq($screen-m) {
        width: $cart-list-item__qty-input-width\@small;
      }
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
    }

    &__actions-item {
      margin: $cart-list-item__actions-item-margin;
    }
  }
</style>
