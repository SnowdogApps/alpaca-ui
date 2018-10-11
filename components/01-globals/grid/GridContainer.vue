<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
}
</style>
