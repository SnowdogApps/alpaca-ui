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
    legendText: {
      type: String,
      required: true
    },
    fieldsetClass: {
      type: String,
      default: null
    },
    legendClass: {
      type: String,
      default: null
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
