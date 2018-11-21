<template>
  <component
    :is="tag ? tag : 'h' + level"
    :class="{
      [`heading heading--${levelClassName}-level`]: tag,
      'heading--page': page
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
      validator: level => level >= 1 && level <= 6
    },
    tag: {
      type: String,
      default: null
    },
    page: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    levelClassName() {
      switch (this.level) {
        case '1':
          return 'first'
        case '2':
          return 'second'
        case '3':
          return 'third'
        case '4':
          return 'fourth'
        case '5':
          return 'fifth'
        case '6':
          return 'sixth'
      }
    }
  }
}
</script>

<style lang="scss">
$headings-margin: 0 0 0.5em 0 !default;
$headings-margin--page: $spacer--medium 0 !default;
$headings-font-family: $font-family-base !default;
$headings-font-weight: 700 !default;
$headings-line-height: $font-line-height !default;
$headings-color: $color-secondary !default;
$headings-text-transform: none !default;
$headings-text-transform--page: uppercase !default;
$heading-font-size--page: 24px !default;
$heading-font-size--first-level: 18px !default;
$heading-font-size--second-level: 18px !default;
$heading-font-size--third-level: 14px !default;
$heading-font-size--fourth-level: 14px !default;
$heading-font-size--fifth-level: 12px !default;
$heading-font-size--sixth-level: 12px !default;

.heading {
  margin: $headings-margin;
  font-family: $headings-font-family;
  font-weight: $headings-font-weight;
  line-height: $headings-line-height;
  color: $headings-color;
  text-transform: $headings-text-transform;

  &--first-level {
    font-size: $heading-font-size--first-level;
  }

  &--second-level {
    font-size: $heading-font-size--second-level;
  }

  &--third-level {
    font-size: $heading-font-size--third-level;
  }

  &--fourth-level {
    font-size: $heading-font-size--fourth-level;
  }

  &--fifth-level {
    font-size: $heading-font-size--fifth-level;
  }

  &--sixth-level {
    font-size: $heading-font-size--sixth-level;
  }

  &--page {
    margin: $headings-margin--page;
    font-size: $heading-font-size--page;
    text-transform: $headings-text-transform--page;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @extend .heading;
}

h1 {
  @extend .heading--first-level;
}

h2 {
  @extend .heading--second-level;
}

h3 {
  @extend .heading--third-level;
}

h4 {
  @extend .heading--fourth-level;
}

h5 {
  @extend .heading--fifth-level;
}

h6 {
  @extend .heading--sixth-level;
}
</style>
