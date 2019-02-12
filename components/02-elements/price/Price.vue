<template>
  <div class="price">
    <del
      v-if="oldPrice"
      :aria-label="setAriaLabel(oldPrice)"
      class="price--old"
    >
      {{ oldPrice }}
    </del>
    <ins
      v-if="specialPrice"
      :aria-label="setAriaLabel(specialPrice)"
      class="price--special"
    >
      {{ specialPrice }}
    </ins>
    <span
      v-if="price"
      :aria-label="setAriaLabel(price)"
    >
      {{ price }}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      price: {
        type: String,
        default: null
      },
      specialPrice: {
        type: String,
        default: null
      },
      oldPrice: {
        type: String,
        default: null
      },
      ariaLabelPrice: {
        type: String,
        default: 'Price:'
      },
      ariaLabelSpecial: {
        type: String,
        default: 'Special price:'
      },
      ariaLabelOld: {
        type: String,
        default: 'Old price:'
      }
    },
    methods: {
      setAriaLabel(type) {
        if (type === this.specialPrice) {
          return `${this.ariaLabelSpecial} ${this.specialPrice}`
        }
        if (type === this.oldPrice) {
          return `${this.ariaLabelOld} ${this.oldPrice}`
        }
        return `${this.ariaLabelPrice} ${this.price}`
      }
    }
  }
</script>

<style lang="scss">
  $price__color              : inherit !default;
  $price__color--special     : $green !default;
  $price__color--old         : inherit !default;
  $price__font-weight        : $font-weight-bold !default;
  $price__font-weight--old   : $font-weight-normal !default;
  $price__font-weight--old   : $font-weight-normal !default;
  $price__special-margin-left: $spacer !default;

  .price {
    font-weight: $price__font-weight;

    &--old {
      text-decoration: line-through;
      font-weight: $price__font-weight--old;
    }

    &--special {
      margin-left: $price__special-margin-left;
      color: $price__color--special;
      text-decoration: none;
    }
  }
</style>
