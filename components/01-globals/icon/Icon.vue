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
.icon {
  display: block;
  width: var(--icon__size);
  height: var(--icon__size);
  padding: var(--icon__padding);
}
</style>
