<template>
  <main class="container">
    <slot />
  </main>
</template>

<script>
  export default {}
</script>

<style lang="scss">
$container__max-width: $max-content-width !default;
  $container__margin: 8px !default;

  .container {
    max-width: $container__max-width;
  margin: 0 $container__margin;
    @include mq($container__max-width + 2 * $container__margin) {
    margin: 0 auto;
  }
}
</style>
