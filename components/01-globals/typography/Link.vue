<template>
  <a
    :class="[
      'link', {
        'link--invert': invert,
        'link--secondary': secondary
      },
      customClass
    ]"
    :href="href"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    invert: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
$link__color: $blue !default;
$link__decoration: underline !default;
$link__font-family: $font-family-base !default;
$link__font-weight: $font-weight-normal !default;
$link__color-hover: $color-secondary !default;
$link__line-height: $font-line-height !default;
$link__transition: $transition-base !default;
$link__color--invert: $gray-darker !default;
$link__color-hover--invert: $blue !default;

.link {
  color: $link__color;
  text-decoration: $link__decoration;
  transition: $link__transition;
  font-family: $link__font-family;
  font-weight: $link__font-weight;
  line-height: $link__line-height;
  text-decoration: none;

  &:hover,
  &:focus {
    color: $link__color-hover;
  }

  &--invert {
    color: $link__color--invert;

    &:hover,
    &:focus {
      color: $link__color-hover--invert;
    }
  }

  &--secondary {
    color: $gray-lighter;

    &:hover,
    &:focus {
      color: $color-primary;
    }
  }

  &--visually-hidden {
    @include visually-hidden($usePseudo: true);
  }
}

a {
  @extend .link;
}
</style>
