<script>
export default {
  props: ['inline', 'hidden', 'tag'],
  render: function(createElement) {
    return createElement(
      this.tag || 'label',
      {
        class: {
          label: this.tag,
          'label--inline': this.inline,
          'label--hidden': this.hidden
        }
      },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss">
:root {
  --label-margin: 0 0 var(--spacer);
  --label-margin--inline: 0 var(--spacer) 0 0;
  --label-font-size: var(--font-size-base);
  --label-color: var(--color-secondary);
  --label-font-family: var(--font-family-base);
  --label-font-weight: var(--font-weight-normal);
  --label-line-height: var(--font-line-height);
  --label-transition: none;
}

label,
.label {
  display: block;
  margin: var(--label-margin);
  font-size: var(--label-font-size);
  color: var(--label-color);
  font-family: var(--label-font-family);
  font-weight: var(--label-font-weight);
  line-height: var(--label-line-height);
  transition: var(--label-transition);
}

.label--inline {
  margin: var(--label-margin--inline);
}

.label--hidden {
  display: none;
}
</style>
