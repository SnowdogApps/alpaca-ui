<template>
  <component
    :is="elementTag"
    class="list__item"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
      elementTag: {
        type: String,
        default: 'li'
      }
    }
  }
</script>
