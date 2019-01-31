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
          inverted
          custom-class="cart-list-item__name"
        >
          {{ productName }}
        </alpaca-link>
        <div class="cart-list-item__details">
          <div class="cart-list-item__qty">
            <div class="cart-list-item__qty-wrapper">
              <alpaca-input
                :id="qtyInput.id"
                :label="qtyInput.label.text"
                :placeholder="qtyInput.field.placeholder"
                :name="name"
                type="number"
                :min="0"
                :max="maxInputValue"
                input-class="cart-list-item__qty-input"
                :value="quantity"
                :hidden-label="hiddenLabel"
                @input="onChange($event)"
              />
            </div>
          </div>
          <div class="cart-list-item__price">
            {{ productPrice }}
          </div>
        </div>
        <alpaca-description-list
          :elements="productDetails"
          list-class="cart-list-item__attributes"
        />
      </div>
      <div class="cart-list-item__actions">
        <alpaca-button
          :tag="link ? 'a' : 'button'"
          :icon="edit.iconId"
          :link="edit.href"
          :aria-label="edit.ariaLabel"
          custom-class="cart-list-item__actions-item"
          @click="onEdit"
        />
        <alpaca-button
          :tag="link ? 'a' : 'button'"
          :icon="remove.iconId"
          :link="remove.href"
          :aria-label="remove.ariaLabel"
          custom-class="cart-list-item__actions-item"
          @click="onRemove"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaImage from '../../02-elements/image/Image'
  import AlpacaLink from '../../01-globals/link/Link'
  import AlpacaInput from '../../02-elements/form/input/Input'
  import AlpacaDescriptionList from '../../02-elements/list/DescriptionList'
  import AlpacaButton from '../../02-elements/button/Button'

  export default {
    components: {
      AlpacaImage,
      AlpacaLink,
      AlpacaInput,
      AlpacaDescriptionList,
      AlpacaButton
    },
    model: {
      prop: 'quantity',
      event: 'change'
    },
    props: {
      productImage: {
        type: Object,
        required: true
      },
      quantity: {
        type: Number,
        default: null
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
      name: {
        type: String,
        required: true
      },
      productDetails: {
        type: Array,
        required: true
      },
      edit: {
        type: Object,
        required: true
      },
      remove: {
        type: Object,
        required: true
      },
      link: {
        type: Boolean,
        default: false
      },
      hiddenLabel: {
        type: Boolean,
        default: false
      },
      maxInputValue: {
        type: Number,
        default: null
      }
    },
    methods: {
      onEdit() {
        this.$emit('edit')
      },
      onRemove() {
        this.$emit('remove')
      },
      onChange(val){
        this.$emit('change', val)
      }
    }
  }
</script>

<style lang="scss">
  $cart-list-item__padding               : $spacer--medium 0 !default;
  $cart-list-item__border                : 1px solid $gray-light !default;
  $cart-list-item__image-width           : 160px !default;
  $cart-list-item__image-padding         : 0 $spacer--medium 0 0 !default;
  $cart-list-item__name-weight           : $font-weight-bold !default;
  $cart-list-item__name-width            : 65% !default;
  $cart-list-item__name-padding\@small   : 0 $spacer--medium 0 0 !default;
  $cart-list-item__details-width         : calc(100% - #{$cart-list-item__name-width}) !default;
  $cart-list-item__details-margin        : $spacer--medium 0 !default;
  $cart-list-item__attributes-margin     : 0 0 $spacer--medium 0 !default;
  $cart-list-item__price-margin          : $spacer 0 0 0 !default;
  $cart-list-item__qty-width             : 100% !default;
  $cart-list-item__qty-width\@small      : auto !default;
  $cart-list-item__qty-input-width\@small: 70px !default;
  $cart-list-item__actions-item-margin   : 0 0 0 $spacer !default;

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
        margin: $reset;
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
        margin: $reset;
      }
    }

    &__qty {
      width: $cart-list-item__qty-width;
      @include mq($screen-m) {
        width: $cart-list-item__qty-width\@small;
      }
    }

    &__qty-wrapper {
      margin: $reset;
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
