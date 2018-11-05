<template>
  <blockquote>
    {{ blockquote }}
    <cite
      v-if="cite">
      <a
        :href="citeHref"
      >
        {{ cite }}
      </a>
    </cite>
  </blockquote>
</template>

<script>
export default {
  props: {
    citeHref: {
      type: String,
      default: null
    },
    cite: {
      type: String,
      default: null
    },
    blockquote: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss">
$blockquote__margin: 10px 0 !default;
$blockquote__padding: 10px 10px 10px 20px !default;
$blockquote__border-left: 5px solid $gray-light !default;

.blockquote {
  margin: $blockquote__margin;
  padding: $blockquote__padding;
  border-left: $blockquote__border-left;
}

blockquote {
  @extend .blockquote;
}
</style>
