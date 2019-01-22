<template>
  <div class="price">
    <ins
      v-if="hasSpecialPrice && !hasOldPrice"
      :aria-label="ariaLabelSpecial"
      class="price--special"
    >
      <slot name="special" />
    </ins>
    <del
      v-else-if="hasOldPrice && !hasSpecialPrice"
      :aria-label="ariaLabelOld"
      class="price--old"
    >
      <slot name="old" />
    </del>

    <template
      v-else-if="hasSpecialPrice && hasOldPrice"
    >
      <del
        :aria-label="ariaLabelOld"
        class="price-old"
      >
        <slot name="old" />
      </del> &nbsp;
      <ins
        :aria-label="ariaLabelSpecial"
        class="price--special"
      >
        <slot name="special" />
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
      default: 'Special price'
    },
    ariaLabelOld: {
      type: String,
      default: 'Old price'
    }
  },
  computed: {
    hasSpecialPrice() {
      return !!this.$slots.special
    },
    hasOldPrice() {
      return !!this.$slots.old
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
