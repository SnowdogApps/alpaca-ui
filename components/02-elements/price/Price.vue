<template>
  <div class="price">
    <ins
      v-if="specialPrice && !oldPrice"
      :aria-label="ariaLabelSpecial"
      class="price--special"
    >
      <slot />
    </ins>
    <del
      v-else-if="oldPrice && !specialPrice"
      :aria-label="ariaLabelOld"
      class="price--old"
    >
      <slot />
    </del>

    <template
      v-else-if="specialPrice && oldPrice"
    >
      <del
        :aria-label="ariaLabelOld"
        class="price-old"
      >
        <slot name="oldPrice" />
      </del>
      <ins
        :aria-label="ariaLabelSpecial"
        class="price--special"
      >
        <slot name="specialPrice" />
      </ins>
    </template>
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
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
    text-decoration: none;
  }
}
</style>
