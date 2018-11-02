<template>
  <svg
    :class="[
      'icon',
      customClass
    ]"
  >
    <use :xlink:href="url"/>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    customClass: {
      type: String | Boolean,
      default: false
    }
  },
  computed: {
    url() {
      return `/icons/sprite.svg#${this.icon}`
    }
  }
}
</script>

<style lang="scss">
$icon__size: 24px !default;
$icon__padding: 2px !default;

.icon {
  display: block;
  width: $icon__size;
  height: $icon__size;
  padding: $icon__padding;
}
</style>
