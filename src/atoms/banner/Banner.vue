<template src="./Banner.html" />

<script>
import ASource from '../source/Source.vue'
import AImage from '../image/Image.vue'

import ABanner from './Banner.js'

export default {
  name: 'AlpacaBanner',
  components: {
    ASource,
    AImage
  },
  mixins: [ABanner]
}
</script>

<style lang="scss" src="./Banner.scss" />
