<template>
  <div class="page-wrapper">
    <slot />
  </div>
</template>

<script>
  import 'normalize.css'

  export default {}
</script>

<style lang="scss">
  /* Not the prettiest way, but I need it to work now */
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&subset=latin-ext');
  @import './assets/styles/_reset.scss';
  @import './assets/styles/_grid.scss';
  @import './assets/styles/transitions/_fade.scss';
  @import './assets/styles/transitions/_side-down.scss';
</style>
