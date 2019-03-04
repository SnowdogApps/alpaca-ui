<template>
  <component
    :is="elementTag"
    :class="{ 'list__item': defaultClass }"
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
      },
      defaultClass: {
        type: Boolean,
        required: false,
        default: true
      }
    }
  }
</script>
