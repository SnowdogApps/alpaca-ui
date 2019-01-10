<template>
  <component
    :is="tag"
    :class="tag !== 'blockquote' && 'blockquote'"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'blockquote'
    }
  }
}
</script>

<style lang="scss">
$blockquote__margin: 10px 0 !default;
$blockquote__padding: 10px 10px 10px 20px !default;
$blockquote__border-left: 5px solid $gray-light !default;

.blockquote {
  display: block;
  margin: $blockquote__margin;
  padding: $blockquote__padding;
  border-left: $blockquote__border-left;
}

blockquote {
  @extend .blockquote;
}
</style>
