<template>
  <div 
    class="page-wrapper"
  >
    <slot/>
  </div>
</template>

<script>
import 'normalize.css'

export default {}
</script>

<style lang="scss">
/* Not the prettiest way, but I need it to work now */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&subset=latin-ext');

*:focus {
  outline: 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  min-width: 320px;
  font-family: $font-family-base;
  font-weight: $font-weight-base;
  font-size: $font-size-base;
  color: $font-color-base;
}

body {
  display: flex;
  flex-direction: column;
}

.page-wrapper {
  flex: 1 0 auto;
}

p {
  margin: 0;
  padding: 0;
}

dl,
dt,
dd {
  margin: 0;
}
</style>
