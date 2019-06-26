<template>
  <svg
    class="a-icon"
    role="img"
  >
    <title>{{ titleComputed }}</title>
    <use :xlink:href="url" />
  </svg>
</template>

<script>
import AIcon from './Icon.js'

export default {
  name: 'AlpacaIcon',

  mixins: [AIcon]
}
</script>

<style lang="scss" src="./Icon.scss" />
