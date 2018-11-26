<template>
  <fieldset
    :class="[
      'fieldset',
      fieldsetClass
    ]"
  >
    <legend
      :class="[
        'fieldset__legend',
        legendClass
      ]"
    >
      {{ legendText }}
    </legend>
    <slot />
  </fieldset>
</template>

<script>
export default {
  props: {
    fieldsetClass: {
      type: String,
      default: ''
    },
    legendClass: {
      type: String,
      default: ''
    },
    legendText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$fieldset__border            : none !default;
$fieldset__margin            : 0 !default;
$fieldset__padding           : 0 !default;
$fieldset__legend-margin     : 0 0 25px !default;
$fieldset__legend-font-size  : $font-size-large !default;
$fieldset__legend-line-height: 1.2 !default;

.fieldset {
  border: $fieldset__border;
  padding: $fieldset__padding;
  margin: $fieldset__margin;

  &__legend {
    padding: 0;
    margin: $fieldset__legend-margin;
    font-size: $fieldset__legend-font-size;
    line-height: $fieldset__legend-line-height;
  }
}
</style>
