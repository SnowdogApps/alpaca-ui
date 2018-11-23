<template>
  <component
    :is="tag !== 'label' && tag"
    :class="[customClass, {
      label: tag !== 'label',
      'label--inline': inline,
      'label--hidden': hidden
    }]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'label'
    },
    customClass: {
      type: String,
      default: null
    }
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
  color: $label-color;
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
