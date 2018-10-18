<script>
  export default {
    props: ['inline', 'hidden', 'tag'],
    render: function (createElement) {
      return createElement(
        this.tag || 'label', {
          class: {
            'label': this.tag,
            'label--inline': this.inline,
            'label--hidden': this.hidden
          }
        }, this.$slots.default
      )
    }
  }
</script>

<style lang="scss">
  $label-margin: 0 0 $spacer !default;
  $label-margin--inline: 0 $spacer 0 0 !default;
  $label-font-size: $font-size-base !default;
  $label-color: $color-secondary !default;
  $label-font-family: $font-family-base !default;
  $label-font-weight: $font-weight-normal !default;
  $label-line-height: $font-line-height !default;
  $label-transition: none !default;

  .label {
    display: block;
    margin: $label-margin;
    font-size: $label-font-size;
    color : $label-color;
    font-family: $label-font-family;
    font-weight: $label-font-weight;
    line-height: $label-line-height;
    transition: $label-transition;
    &--inline {
      margin: $label-margin--inline;
    }

    &--hidden {
      @include visually-hidden();
    }
  }

  label {
    @extend .label;
  }

</style>
