<template>
  <svg
    :class="[
      'icon',
      customClass
    ]"
  >
    <use :xlink:href="url"></use>
  </svg>
</template>

<script>
  export default {
    props: ['icon', 'customClass'],
    computed: {
      url() {
        return `/icons/sprite.svg#${this.icon}`
      }
    }
  }
</script>

<style>
  .icon {
    display: block;
    width: var(--icon__size);
    height: var(--icon__size);
    padding: var(--icon__padding);
  }
</style>
