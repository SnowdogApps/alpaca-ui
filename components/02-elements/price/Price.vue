<template>
  <span
    :class="[
      'price',
      {
        'price--special': special,
        'price-old': old
      }
    ]"
  >
    <ins
      v-if="special"
      :aria-label="ariaLabelSpecial"
    >
      {{ computedValue }}
    </ins>

    <del
      v-else-if="old"
      :aria-label="ariaLabelOld"
    >
      {{ computedValue }}
    </del>

    <span v-else>
      {{ computedValue }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    currency: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    ariaLabelSpecial: {
      type: String,
      default: null
    },
    ariaLabelOld: {
      type: String,
      default: null
    },
    special: {
      type: Boolean,
      default: false
    },
    old: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedValue() {
      if(this.prefix) {
        return this.prefix + this.value
      }
      if (this.currency) {
        return this.value + ' ' + this.currency
      }
      return this.value;
    }
  }
};
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
