<template>
  <component
    :is="tag"
    :class="tag !== 'pre' && 'preformatted'">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'pre'
    }
  }
}
</script>

<style lang="scss">
$preformatted__padding: 20px !default;
$preformatted__background: $gray-lightest !default;
$preformatted__overflow: scroll !default;
$preformatted__font-family: $font-family-monospace !default;

.preformatted {
  padding: $preformatted__padding;
  background: $preformatted__background;
  overflow: $preformatted__overflow;
  font-family: $preformatted__font-family;
}

pre {
  @extend .preformatted;
}
</style>
