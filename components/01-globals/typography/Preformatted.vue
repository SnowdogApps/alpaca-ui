<script>
  export default {
    props: ['tag'],
    render: function (createElement) {
      return createElement(
        this.tag || 'pre', {
          class: {
            'preformatted': this.tag
          }
        }, this.$slots.default
      )
    }
  }
</script>

<style lang="scss">
  //TODO: To remove after merging Feature/46521
  $gray-lightest              : #f7f7f9 !default;
  $font-family-monospace      : Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;

  $preformatted__padding    : 20px !default;
  $preformatted__background : $gray-lightest !default;
  $preformatted__overflow   : scroll !default;
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
