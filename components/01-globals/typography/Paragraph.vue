<script>
  export default {
    props: ['tag'],
    render: function (createElement) {
      return createElement(
        this.tag || 'p', {
          class: {
            'paragraph': this.tag
          }
        }, this.$slots.default
      )
    }
  }
</script>

<style>
  :root {
    --paragraph-color       : var(--color-secondary);
    --paragraph-font-family : var(--font-family-base);
    --paragraph-font-weight : var(--font-weight-normal);
    --paragraph-line-height : var(--font-line-height);
    --paragraph-font-size   : var(--font-size-base);
    --paragraph-margin      : 0 0 var(--spacer--medium) 0;
    --paragraph-transition  : none;
  }

  p,
  .paragraph {
    color: var(--paragraph-color);
    font-family: var(--paragraph-font-family);
    font-weight: var(--paragraph-font-weight);
    line-height: var(--paragraph-line-height);
    font-size: var(--paragraph-font-size);
    margin: var(--paragraph-margin);
    transition: var(--paragraph-transition);
  }
</style>
