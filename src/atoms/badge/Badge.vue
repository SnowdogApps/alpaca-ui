<template>
  <!-- eslint-disable -->
  <!-- https://github.com/vuejs/eslint-plugin-vue/issues/869 -->
  <component
    :is="tag"
    class="a-badge"
  >
    <!-- @slot Slot for badge content -->
    <slot />
  </component>
  <!-- eslint-enable -->
</template>

<script>
export default {
  name: 'AlpacaBadge',
  props: {
    /**
     * To use another tag instead of `div`
     */
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss" src="./Badge.scss" />
