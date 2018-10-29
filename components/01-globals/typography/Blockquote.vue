<template>
  <blockquote>
    <slot/>
    <cite>
      <a
        :href="href"
      >
        {{name}}
      </a>
    </cite>
  </blockquote>
</template>

<script>
  export default {
    props: {
      href: {
        type: String
      },
      name: {
        type: String
      }
    }
  }
</script>

<style lang="scss">
  //TODO: To remove after merging Feature/46521
  $gray-light: #c2c1df !default;

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
