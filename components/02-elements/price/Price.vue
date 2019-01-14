<template>
  <div
    :class="[
      'price',

    ]"
  >
    <span
      :class="[{
        'price--special': specialPrice,
        'price-old': oldPrice
      }]"
    >
      <ins
        v-if="oldPrice"
        :aria-label="ariaLabelSpecial"
      >
        <slot name="oldPrice" />
      </ins>

      <del
        v-if="specialPrice"
        :aria-label="ariaLabelOld"
      >
        <slot name="specialPrice" />
      </del>


      <slot v-else />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    // price: {
    //   type: String,
    //   required: true
    // },
    ariaLabelSpecial: {
      type: String,
      default: null
    },
    ariaLabelOld: {
      type: String,
      default: null
    },
    specialPrice: {
      type: Boolean,
      default: false
    },
    oldPrice: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
$price__color: inherit !default;
$price__color--special: $green !default;
$price__color--old: inherit !default;
$price__font-weight: $font-weight-bold !default;
$price__font-weight--old: $font-weight-normal !default;
$price__font-weight--old: $font-weight-normal !default;

.price {
  font-weight: $price__font-weight;
  &--old {
    text-decoration: line-through;
    font-weight: $price__font-weight--old;
  }
  &--special {
    color: $price__color--special;
    & > ins {
      text-decoration: none;
    }
  }
}
</style>
