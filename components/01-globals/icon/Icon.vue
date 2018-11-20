<template>
  <svg
    :class="[
      'icon',
      customClass
    ]"
  >
    <title>{{ title }} </title>
    <use
      :xlink:href="url"
    />
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
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
