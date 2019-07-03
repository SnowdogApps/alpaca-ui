<template>
  <button
    class="a-button"
    type="button"
  >
    <!-- @slot Slot for button content -->
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AlpacaButton'
}
</script>

<style lang="scss" src="./Button.scss" />
